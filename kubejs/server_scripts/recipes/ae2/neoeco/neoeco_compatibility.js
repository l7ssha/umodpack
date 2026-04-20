const alloyingRecipes = [
    {
        ingredients: [
            {
                "count": 1,
                "tag": "c:ingots/iron"
            },
            {
                "count": 1,
                "tag": "c:ingots/aluminum"
            },
            {
                "count": 2,
                "tag": "c:dusts/certus_quartz"
            },
        ],
        result: {
            "count": 1,
            "id": "neoecoae:aluminum_alloy_ingot"
        }
    },
    {
        ingredients: [
            {
                "count": 1,
                "tag": "c:ingots/tungsten"
            },
            {
                "count": 1,
                "tag": "c:ingots/aluminum_alloy"
            },
            {
                "count": 2,
                "tag": "c:dusts/fluix"
            },
        ],
        result: {
            "count": 1,
            "id": "neoecoae:black_tungsten_alloy_ingot"
        }
    }
];

ServerEvents.recipes(event => {
    alloyingRecipes.forEach(element => {
        event.custom({
            "type": "enderio:alloy_smelting",
            "energy": 100000,
            "experience": 0.3,
            "inputs": element.ingredients,
            "output": element.result,
        });

        event.custom({
            "type": "evolvedmekanism:alloying",
            "extra_input": element.ingredients[0],
            "second_extra_input": element.ingredients[1],
            "main_input": element.ingredients[2],
            "output": element.result
        });
    });
});