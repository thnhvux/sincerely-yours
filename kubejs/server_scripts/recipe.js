ServerEvents.recipes(event => {
  //Helper function
  function removeCrafting(in_item, out_item){
      event.remove({type: 'minecraft:crafting_shaped', input: in_item, output: out_item})
  }

  //Remove recipe
  //Food
  event.remove({id: 'minecraft:cake'})
  event.remove({id: 'farmersdelight:cake_from_milk_bottle'})
  event.remove({id: 'create:crafting/curiosities/cake'})
  event.remove({id: 'nomansland:food/fruit_cake'})
  event.remove({id: 'enderscape:chorus_cake_roll'})
  event.remove({id: 'nomansland:integration/farmersdelight/pancake'})
  event.remove({id: 'hearthandharvest:carrot_cake'})
  event.remove({id: 'mynethersdelight:crafting/magma_cake'})
  event.remove({id: 'nomansland:food/sweet_tart'})
  event.remove({id: 'nomansland:food/maple_tart'})
  event.remove({id: 'nomansland:food/pear_cobbler'})
  event.remove({id: 'brewinandchewin:pizza'})
  event.remove({id: 'minecraft:pumpkin_pie'})
  event.remove({type: 'cookscollection:baking', output: 'minecraft:pumpkin_pie'})
  event.remove({type: 'cookscollection:baking', input: 'farmersdelight:tomato_sauce', output: 'farmersdelight:apple_pie'})
  event.remove({id: 'farmersdelight:shepherds_pie_block'})
  event.remove({id: 'hearthandharvest:blueberry_pie'})
  event.remove({id: 'hearthandharvest:raspberry_pie'})
  event.remove({id: 'hearthandharvest:grape_pie'})
  event.remove({id: 'hearthandharvest:chicken_pot_pie'})
  event.remove({type: 'cookscollection:baking', output: 'farmersdelight:chocolate_pie'})
  event.remove({id: 'minecraft:cookie'})
  event.remove({id: 'farmersdelight:sweet_berry_cookie'})
  event.remove({type: 'cookscollection:baking', input: 'minecraft:wheat', output: 'farmersdelight:sweet_berry_cookie'})
  event.remove({id: 'farmersdelight:honey_cookie'})
  event.remove({id: 'hearthandharvest:peanut_butter_cookie'})
  event.remove({id: 'no_mans_delight:crafting/walnut_cookie'})
  event.remove({id: 'minecraft:bread'})
  event.remove({type: 'farmersdelight:cooking', output: 'brewinandchewin:vegetable_omelet'})
  event.remove({type: 'farmersdelight:cooking', output: 'mynethersdelight:burnt_roll'})
  event.remove({id: 'mynethersdelight:crafting/burnt_roll'})
  event.remove({id: 'mynethersdelight:crafting/striderloaf'})
  event.remove({type: 'farmersdelight:cooking', output: 'mynethersdelight:egg_soup'})
  event.remove({type: 'farmersdelight:cutting', input: 'mynethersdelight:bread_loaf', output: 'mynethersdelight:slices_of_bread'})

  //Readd recipe
  //Food
  //Shapeless
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
  event.shapeless(
    Item.of('farmersdelight:wheat_dough', 1),
    [
      'create:wheat_flour',
      'minecraft:water_bucket'
    ]
  )
  event.shapeless(
    Item.of('mynethersdelight:burnt_roll', 1),
    [
      'minecraft:magma_cream',
      '#c:foods/raw_meat',
      ['minecraft:twisting_vines', 'minecraft:crimson_roots', 'minecraft:nether_wart']
    ]
  )

  //Shaped
  event.shaped(
    Item.of('farmersdelight:wheat_dough', 3),
    [
      'AAA',
      'B  '
    ],
    {
      A: 'create:wheat_flour',
      B: '#c:eggs'
    }
  )
  

  //Baking
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
      {"item": "farmersdelight:pumpkin_slice"},
      {"tag": "c:eggs"},
      {"item": "farmersdelight:pumpkin_slice"},
      {"item": "minecraft:sugar"},
      {"item": "farmersdelight:pie_crust"},
      {"item": "minecraft:sugar"}
    ],
    "result": {
        "id": "minecraft:pumpkin_pie",
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
      {"item": "minecraft:gunpowder"},
      {"item": "mynethersdelight:hot_cream"},
      {"item": "minecraft:gunpowder"},
      {"item": "farmersdelight:straw"},
      {"item": "farmersdelight:straw"},
      {"item": "farmersdelight:straw"},
    ],
    "result": {
        "id": "mynethersdelight:magma_cake_block",
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
      {"item": "minecraft:baked_potato"},
      {"item": "hearthandharvest:batter"},
      {"item": "minecraft:baked_potato"},
      {"tag": "c:foods/raw_mutton"},
      {"tag": "c:foods/raw_mutton"},
      {"tag": "c:foods/raw_mutton"},
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
      {"item": "hearthandharvest:red_grapes"},
      {"item": "hearthandharvest:red_grapes"},
      {"item": "hearthandharvest:red_grapes"},
      {"item": "hearthandharvest:batter"},
      {"item": "farmersdelight:pie_crust"},
    ],
    "result": {
        "id": "hearthandharvest:grape_pie",
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
      {"item": "minecraft:cocoa_beans"},
      {"item": "minecraft:cocoa_beans"},
      {"item": "minecraft:cocoa_beans"},
      {"tag": "c:foods/milk"},
      {"tag": "c:eggs"},
      {"tag": "c:foods/milk"},
      {"item": "minecraft:sugar"},
      {"item": "farmersdelight:pie_crust"},
      {"item": "minecraft:sugar"}
    ],
    "result": {
        "id": "farmersdelight:chocolate_pie",
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
  event.custom({
    "type": "cookscollection:baking",
    "ingredients": [
      {"item": "mynethersdelight:minced_strider"},
      {"item": "mynethersdelight:minced_strider"},
      {"item": "mynethersdelight:minced_strider"},
      {"item": "mynethersdelight:minced_strider"},
      {"item": "farmersdelight:wheat_dough"},
      {"item": "minecraft:bowl"}
    ],
    "result": {
        "id": "mynethersdelight:striderloaf",
        "count": 1
    },
    "cookingtime": 200
  })

  //Cooking
  event.custom({
    "type": "farmersdelight:cooking",
    "container": {"count": 1, "id": "minecraft:bowl"},
    "experience": 1.0,
    "ingredients": [
      {"item": "hearthandharvest:cooking_oil"},
      {"tag": "c:eggs"},
      {"tag": "c:eggs"},
      {"tag": "c:foods/onion"},
      {"tag": "c:crops/carrot"}
    ],
    "recipe_book_tab": "meals",
    "result": {"count": 1, "id": "brewinandchewin:vegetable_omelet"}
  })
  event.custom({
    "type": "farmersdelight:cooking",
    "container": {"count": 2, "id": "minecraft:bowl"},
    "experience": 1.0,
    "ingredients": [
      {"tag": "c:foods/cooked_egg"},
      {"tag": "c:foods/cooked_egg"},
      {"tag": "c:foods/cooked_egg"},
      {"tag": "c:foods/cooked_egg"},
      {"item": "farmersdelight:cabbage_leaf"},
      {"tag": "c:foods/vegetable"}
    ],
    "recipe_book_tab": "meals",
    "result": {"count": 2, "id": "mynethersdelight:egg_soup"}
  })

  //Fermenting
  event.custom({
    "type": "brewinandchewin:fermenting",
    "base_fluid": {
      "amount": 1000,
      "ingredient": {"tag": "#c:milk"},
      "unit": "millibuckets"
    },
    "experience": 0,
    "ingredients": [
      {"item": "create:wheat_flour"},
      {"item": "cookscollection:salt"},
      []
    ],
    "result": {"count": 2, "id": "farmersdelight:wheat_dough"},
    "temperature": 2
  })

  //Slicing
  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [{"item": "minecraft:bread"}],
    "result": [
      {"item": {"count": 2, "id": "mynethersdelight:slices_of_bread"}},
    ],
    "tool": {"tag": "c:tools/knife"}
  })
  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [{"item": "mynethersdelight:bread_loaf"}],
    "result": [
      {"item": {"count": 10, "id": "mynethersdelight:slices_of_bread"}},
    ],
    "tool": {"tag": "c:tools/knife"}
  })
  //Modify recipe

})