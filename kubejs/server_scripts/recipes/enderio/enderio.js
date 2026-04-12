ServerEvents.recipes(event => {
    event.custom({
        "type": "enderio:alloy_smelting",
        "energy": 400000,
        "experience": 0.1,
        "inputs": [
            {
                "count": 5,
                "tag": "c:nether_stars"
            },
            {
                "count": 1,
                "tag": "c:ingots/melodic_alloy"
            },
            {
                "count": 3,
                "tag": "c:ingots/fiery"
            }
        ],
        "output": {
            "count": 1,
            "id": "re_endergy:stellar_alloy_ingot"
        }
    });

    event.custom({
        "type": "evolvedmekanism:alloying",
        "extra_input": {
            "count": 6,
            "tag": "c:nether_stars"
        },
        "second_extra_input": {
            "count": 4,
            "tag": "c:ingots/fiery"
        },
        "main_input": {
            "tag": "c:ingots/melodic_alloy"
        },
        "output": {
            "id": "re_endergy:stellar_alloy_ingot"
        }
    });

    event.shaped({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABA",
            "BBB",
            "ABA"
        ],
        "key": {
            "A": {
                "item": "immersiveengineering:component_steel"
            },
            "B": {
                "item": "enderio:grains_of_infinity"
            }
        },
        "result": {
            "id": "enderio:void_chassis"
        }
    });

    event.shaped({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABA",
            "BCB",
            "DED"
        ],
        "key": {
            "A": {
                "tag": "c:gears/steel"
            },
            "B": {
                "item": "ironfurnaces:iron_furnace"
            },
            "C": {
                "tag": "c:plates/constantan"
            },
            "D": {
                "item": "enderio:void_chassis"
            },
            "E": {
                "tag": "c:obsidians"
            }
        },
        "result": {
            "id": "enderio:alloy_smelter"
        }
    });

    event.custom({
        "type": "enderio:alloy_smelting",
        "energy": 300000,
        "experience": 0.1,
        "inputs": [
            {
                "count": 1,
                "tag": "c:ingots/vibranium"
            },
            {
                "count": 1,
                "tag": "c:ingots/crystalline_pink_slime"
            },
            {
                "count": 3,
                "tag": "c:ingots/end_steel"
            }
        ],
        "output": {
            "count": 1,
            "id": "re_endergy:melodic_alloy_ingot"
        }
    });

    event.custom({
        "type": "evolvedmekanism:alloying",
        "extra_input": {
            "count": 5,
            "tag": "c:ingots/end_steel"
        },
        "second_extra_input": {
            "count": 2,
            "tag": "c:ingots/crystalline_pink_slime"
        },
        "main_input": {
            "count": 2,
            "tag": "c:ingots/vibranium"
        },
        "output": {
            "count": 2,
            "id": "re_endergy:melodic_alloy_ingot"
        }
    });

    event.shaped({
        "pattern": [
            "AAA",
            "BCB",
            "ADA"
        ],
        "key": {
            "A": {
                "item": "enderio:conduit_binder"
            },
            "B": {
                "tag": "c:ingots/pulsating_alloy"
            },
            "C": {
                "item": "pneumaticcraft:omnidirectional_hopper"
            },
            "D": {
                "tag": "c:ingots/conductive_alloy"
            }
        },
        "result": {
            "components": {
                "enderio:conduit": "enderio:item"
            },
            "count": 6,
            "id": "enderio:conduit"
        }
    });
});