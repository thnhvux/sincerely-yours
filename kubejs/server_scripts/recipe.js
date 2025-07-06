ServerEvents.recipes(event => {
  //Helper function
  function removeCrafting(in_item, out_item){
      event.remove({type: 'minecraft:crafting_shaped', input: in_item, output: out_item})
  }

  //Remove recipe
  //Food
  event.remove({input: 'minecraft:wheat', output: 'hearthandharvest:batter'})
  removeCrafting('#c:eggs', 'minecraft:cake')
  removeCrafting('minecraft:egg', 'nomansland:fruit_cake')
  removeCrafting('minecraft:sugar', 'enderscape:chorus_cake_roll')
  removeCrafting('minecraft:egg', 'nomansland:pancake')
  removeCrafting('minecraft:egg', 'hearthandharvest:carrot_cake')
  removeCrafting('minecraft:gunpowder', 'mynethersdelight:magma_cake_block')

  removeCrafting('minecraft:egg', 'nomansland:sweet_tart')
  removeCrafting('minecraft:egg', 'nomansland:maple_tart')

  removeCrafting('minecraft:egg', 'nomansland:pear_cobbler')
  removeCrafting('minecraft:wheat', 'brewinandchewin:pizza')

  removeCrafting('minecraft:sugar', 'minecraft:pumpkin_pie')
  
  event.remove({type: 'cookscollection:baking', input: 'farmersdelight:tomato_sauce', output: 'farmersdelight:apple_pie'})
  event.remove({input: 'minecraft:bowl', output: 'farmersdelight:shepherds_pie_block'})
  event.remove({type: 'cookscollection:baking', input: 'farmersdelight:onion', output: 'farmersdelight:shepherds_pie'})
  removeCrafting('minecraft:sugar', 'hearthandharvest:blueberry_pie')
  removeCrafting('minecraft:sugar', 'hearthandharvest:raspberry_pie')
  removeCrafting('minecraft:sugar', 'hearthandharvest:grape_pie')
  removeCrafting('minecraft:sugar', 'hearthandharvest:chicken_pot_pie')

  event.remove({input: 'minecraft:wheat', output: 'minecraft:cookie'})
  event.remove({input: 'minecraft:wheat', output: 'farmersdelight:sweet_berry_cookie'})
  event.remove({type: 'cookscollection:baking', input: 'minecraft:wheat', output: 'farmersdelight:sweet_berry_cookie'})
  event.remove({input: 'minecraft:wheat', output: 'farmersdelight:honey_cookie'})
  removeCrafting('minecraft:wheat', 'hearthandharvest:peanut_butter_cookie')
  event.remove({input: 'minecraft:wheat', output: 'no_mans_delight:walnut_cookie'})

  //Readd recipe
  //Food
  event.shapeless(
    Item.of('hearthandharvest:batter', 1),
    [
      '#c:foods/milk',
      'minecraft:wheat',
      'minecraft:wheat',
      'minecraft:bowl',
      'minecraft:water_bucket',
      'cookscollection:salt'
    ]
  )
  event.custom({
    "type": "cookscollection:baking",
    "ingredients": [
      {"item": "minecraft:sweet_berries"},
      {"item": "hearthandharvest:batter"},
      {"item": "minecraft:sugar"},
      {"tag": "c:eggs"}
    ],
    "result": {
        "id": "minecraft:cake",
        "count": 1
    },
    "cookingtime": 200
  })
  event.custom({
    "type": "cookscollection:baking",
    "ingredients": [
      {"item": "nomansland:pear"},
      {"item": "minecraft:sweet_berries"},
      {"item": "minecraft:apple"},
      {"item": "hearthandharvest:batter"}
    ],
    "result": {
        "id": "nomansland:fruit_cake",
        "count": 1
    },
    "cookingtime": 200
  })
  event.custom({
    "type": "cookscollection:baking",
    "ingredients": [
      {"item": "minecraft:chorus_fruit"},
      {"item": "minecraft:chorus_fruit"},
      {"item": "minecraft:chorus_fruit"},
      {"item": "hearthandharvest:batter"},
      {"item": "enderscape:drift_jelly_bottle"},
    ],
    "result": {
        "id": "enderscape:chorus_cake_roll",
        "count": 1
    },
    "cookingtime": 200
  })
  event.custom({
    "type": "cookscollection:baking",
    "ingredients": [
      {"item": "hearthandharvest:batter"},
      {"item": "nomansland:maple_syrup_bottle"},
    ],
    "result": {
        "id": "nomansland:pancake",
        "count": 2
    },
    "cookingtime": 200
  })
  event.custom({
    "type": "cookscollection:baking",
    "ingredients": [
      {"item": "minecraft:carrot"},
      {"item": "minecraft:carrot"},
      {"item": "hearthandharvest:batter"},
      {"tag": "c:eggs"},
      {"item": "minecraft:sugar"}
    ],
    "result": {
        "id": "hearthandharvest:carrot_cake",
        "count": 1
    },
    "cookingtime": 200
  })
  event.custom({
    "type": "cookscollection:baking",
    "ingredients": [
      {"item": "minecraft:magma_cream"},
      {"item": "minecraft:magma_cream"},
      {"item": "minecraft:magma_cream"},
      {"item": "minecraft:gunpower"},
      {"item": "mynethersdelight:hot_cream"},
      {"item": "minecraft:gunpowder"},
      {"item": "minecraft:straw"},
      {"item": "minecraft:straw"},
      {"item": "minecraft:straw"}
    ],
    "result": {
        "id": "'mynethersdelight:magma_cake_block",
        "count": 1
    },
    "cookingtime": 200
  })
  event.custom({
    "type": "cookscollection:baking",
    "ingredients": [
      {"item": "nomansland:pine_nuts"},
      {"item": "minecraft:sweet_berries"},
      {"item": "hearthandharvest:batter"},
      {"item": "farmersdelight:pie_crust"}
    ],
    "result": {
        "id": "nomansland:sweet_tart",
        "count": 2
    },
    "cookingtime": 200
  })
  event.custom({
    "type": "cookscollection:baking",
    "ingredients": [
      {"item": "nomansland:maple_syrup_bottle"},
      {"item": "hearthandharvest:batter"},
      {"item": "farmersdelight:pie_crust"}
    ],
    "result": {
        "id": "nomansland:maple_tart",
        "count": 2
    },
    "cookingtime": 200
  })
  event.custom({
    "type": "cookscollection:baking",
    "ingredients": [
      {"item": "nomansland:pear"},
      {"item": "nomansland:walnuts"},
      {"item": "hearthandharvest:batter"},
    ],
    "result": {
        "id": "nomansland:pear_cobbler",
        "count": 1
    },
    "cookingtime": 200
  })
  event.custom({
    "type": "cookscollection:baking",
    "ingredients": [
      {"item": "farmersdelight:wheat_dough"},
      {"item": "farmersdelight:tomato_sauce"},
      {"tag": "brewinandchewin:foods/cheese_wedge"},
      {"tag": "brewinandchewin:foods/pizza_topping"},
      {"tag": "brewinandchewin:foods/pizza_topping"},
    ],
    "result": {
        "id": "brewinandchewin:pizza",
        "count": 1
    },
    "cookingtime": 200
  })
  event.custom({
    "type": "cookscollection:baking",
    "ingredients": [
      {"item": "minecraft:baked_potato"},
      {"item": "hearthandharvest:batter"},
      {"item": "minecraft:baked_potato"},
      {"tag": "c:foods/cooked_mutton"},
      {"tag": "c:foods/cooked_mutton"},
      {"tag": "c:foods/cooked_mutton"},
      {"item": "farmersdelight:onion"},
      {"item": "farmersdelight:pie_crust"},
      {"item": "farmersdelight:onion"}
    ],
    "result": {
        "id": "farmersdelight:shepherds_pie_block",
        "count": 1
    },
    "cookingtime": 200
  })
  event.custom({
    "type": "cookscollection:baking",
    "ingredients": [
      {"item": "minecraft:potato"},
      {"item": "hearthandharvest:batter"},
      {"item": "minecraft:potato"},
      {"tag": "c:foods/raw_mutton"},
      {"tag": "c:foods/raw_mutton"},
      {"tag": "c:foods/raw_mutton"},
      {"item": "farmersdelight:onion"},
      {"item": "farmersdelight:onion"}
    ],
    "result": {
        "id": "farmersdelight:shepherds_pie_block",
        "count": 1
    },
    "cookingtime": 200
  })
  event.custom({
    "type": "cookscollection:baking",
    "ingredients": [
      {"item": "minecraft:baked_potato"},
      {"item": "hearthandharvest:batter"},
      {"item": "minecraft:baked_potato"},
      {"tag": "c:foods/raw_mutton"},
      {"tag": "c:foods/raw_mutton"},
      {"tag": "c:foods/raw_mutton"},
      {"item": "farmersdelight:onion"},
      {"item": "farmersdelight:onion"}
    ],
    "result": {
        "id": "farmersdelight:shepherds_pie_block",
        "count": 1
    },
    "cookingtime": 200
  })
  event.custom({
    "type": "cookscollection:baking",
    "ingredients": [
      {"item": "hearthandharvest:blueberries"},
      {"item": "hearthandharvest:blueberries"},
      {"item": "hearthandharvest:blueberries"},
      {"item": "hearthandharvest:batter"},
      {"item": "farmersdelight:pie_crust"},
    ],
    "result": {
        "id": "hearthandharvest:blueberry_pie",
        "count": 1
    },
    "cookingtime": 200
  })
  event.custom({
    "type": "cookscollection:baking",
    "ingredients": [
      {"item": "hearthandharvest:raspberry"},
      {"item": "hearthandharvest:raspberry"},
      {"item": "hearthandharvest:raspberry"},
      {"item": "hearthandharvest:batter"},
      {"item": "farmersdelight:pie_crust"},
    ],
    "result": {
        "id": "hearthandharvest:raspberry_pie",
        "count": 1
    },
    "cookingtime": 200
  })
  event.custom({
    "type": "cookscollection:baking",
    "ingredients": [
      {"item": "hearthandharvest:batter"},
      {"item": "farmersdelight:pie_crust"},
      {"item": "cookscollection:salt"},
      {"item": "minecraft:potato"},
      {"item": "minecraft:carrot"},
      {"item": "farmersdelight:onion"},
      {"item": "farmersdelight:cooked_chicken_cuts"}
    ],
    "result": {
        "id": "farmersdelight:chicken_pot_pie",
        "count": 1
    },
    "cookingtime": 200
  })
  event.custom({
    "type": "cookscollection:baking",
    "ingredients": [
      {"item": "hearthandharvest:batter"},
      {"item": "farmersdelight:pie_crust"},
      {"item": "cookscollection:salt"},
      {"item": "minecraft:baked_potato"},
      {"item": "minecraft:carrot"},
      {"item": "farmersdelight:onion"},
      {"item": "farmersdelight:cooked_chicken_cuts"}
    ],
    "result": {
        "id": "farmersdelight:chicken_pot_pie",
        "count": 1
    },
    "cookingtime": 200
  })
  event.custom({
    "type": "cookscollection:baking",
    "ingredients": [
      {"item": "farmersdelight:wheat_dough"},
      {"item": "hearthandharvest:peanut_butter"},
      {"item": "minecraft:sugar"}
    ],
    "result": {
        "id": "hearthandharvest:peanut_butter_cookie",
        "count": 8
    },
    "cookingtime": 200
  })
  event.custom({
    "type": "cookscollection:baking",
    "ingredients": [
      {"item": "farmersdelight:wheat_dough"},
      {"item": "nomansland:walnuts"},
      {"item": "minecraft:sugar"}
    ],
    "result": {
        "id": "no_mans_delight:walnut_cookie",
        "count": 8
    },
    "cookingtime": 200
  })

  //Modify recipe

})