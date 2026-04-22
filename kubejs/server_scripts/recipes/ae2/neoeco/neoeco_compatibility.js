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

    event.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "explosion"
        },
        "ingredients": [
            {
                "tag": "c:dusts/certus_quartz"
            },
            {
                "tag": "c:dusts/fluix"
            },
            {
                "tag": "c:dusts/energized_crystal"
            },
            {
                "tag": "advancednetherite:ingot/netherites_diamond"
            },
            {
                "tag": "c:dusts/unobtainium_vibranium_alloy"
            },
            {
                "tag": "c:dusts/beryllium"
            }
        ],
        "result": {
            "count": 1,
            "id": "neoecoae:crystal_ingot"
        }
    });

    event.custom({
        "type": "neoecoae:integrated_working_station",
        "energy": 600000,
        "inputFluid": {
            "amount": 4000,
            "tag": "allthemodium:soul_lava"
        },
        "inputItems": [
            {
                "count": 8,
                "tag": "c:dusts/certus_quartz"
            },
            {
                "count": 8,
                "tag": "c:dusts/fluix"
            },
            {
                "count": 8,
                "tag": "c:dusts/energized_crystal"
            },
            {
                "count": 8,
                "tag": "advancednetherite:ingot/netherites_diamond"
            },
            {
                "count": 8,
                "tag": "c:dusts/unobtainium_vibranium_alloy"
            },
            {
                "count": 8,
                "tag": "c:dusts/beryllium"
            }
        ],
        "itemOutput": {
            "count": 8,
            "id": "neoecoae:crystal_ingot"
        }
    });

    event.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "explosion"
        },
        "ingredients": [
            {
                "tag": "c:dusts/energized_fluix_crystal"
            },
            {
                "tag": "c:ingots/stellar_alloy"
            },
            {
                "tag": "c:ingots/insanite"
            },
            {
                "tag": "advancednetherite:ingot/netherites_diamond"
            }
        ],
        "result": {
            "count": 1,
            "id": "neoecoae:energized_superconductive_ingot"
        }
    });

    event.custom({
        "type": "neoecoae:integrated_working_station",
        "energy": 1000000,
        "inputFluid": {
            "amount": 4000,
            "tag": "allthemodium:soul_lava"
        },
        "inputItems": [
            {
                "count": 8,
                "tag": "c:dusts/energized_fluix_crystal"
            },
            {
                "count": 8,
                "tag": "c:ingots/stellar_alloy"
            },
            {
                "count": 8,
                "tag": "c:ingots/insanite"
            },
            {
                "count": 8,
                "tag": "advancednetherite:ingot/netherites_diamond"
            }
        ],
        "itemOutput": {
            "count": 8,
            "id": "neoecoae:energized_superconductive_ingot"
        }
    });
});