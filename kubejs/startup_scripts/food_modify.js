let $FoodBuilder = Java.loadClass('dev.latvian.mods.kubejs.item.FoodBuilder')


let NORMAL = 1.6, FAST = 0.8;


// String id, int duration, int level, float probability
// duration is in ticks
// level starts at 0; Regen 1 uses lvl 0, Regen II uses lvl 1 etc
// probability represents percent chance to apply; 0.01 = 1% chance, 1.0 = 100% chance
let cached_effects = {
	REGEN_WEAK : { id: 'minecraft:regeneration', duration: 100, amplifier: 0, probability: 1.0},
	WEAKNESS_STRONG : { id: 'minecraft:weakness', duration: 100, amplifier: 3, probability: 1.0}
};


// String id, int nutrition, float saturation, bool alwaysEdible, float time, String leftOverItem, bool keepOldEffects, String[] effectsToAdd
// Missing values will cause old values to remain
// NOTE: FoodBuilder.saturation sets saturation as shanks * sat, so {shanks: 5, sat: 5} will give saturation 5x5 or 25
let foods_to_edit = [
  {id: 'minecraft:pumpkin_pie', shanks: 9, sat: 0.6},
  {id: 'mynethersdelight:plate_of_stuffed_hoglin_snout', shanks: 16}
];

ItemEvents.modification((event) => {
    
    foods_to_edit.forEach((food) => {
        event.modify(food.id, (item) => {
            let originalFood = item.get("food")
            if (originalFood) {
                
				// if keepOldEffects is true, initialize new FoodBuilder(properties) which keeps the FoodProperties.PossibleEffects which are hidden in lambda functions
				let builder = food.keepOldEffects ? new $FoodBuilder(originalFood) : new $FoodBuilder()

                builder
                    .nutrition(food.shanks ? food.shanks : originalFood.nutrition)
                    .saturation(food.sat ? food.sat : originalFood.saturation)
                    .alwaysEdible(food.alwaysEdible ? food.alwaysEdible : originalFood.canAlwaysEat())
                    .eatSeconds(food.time ? food.time : originalFood.eatSeconds())
                    .usingConvertsTo(food.leftOverItem ? food.leftOverItem : originalFood.usingConvertsTo())
                
                if(food.effectsToAdd)
                    food.effectsToAdd.forEach((cached_effect) => {
                        builder.effect(cached_effect.id, cached_effect.duration, cached_effect.amplifier, cached_effect.probability)
                    });
				
                item.setFood(builder.build())
            }
        });
    });
});