ServerEvents.recipes(event => {
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "type": "draconicevolution:stack",
            "count": 5,
            "items": "reliquary:molten_core"
        },
        "ingredients": [
            {
                "consume": true,
                "ingredient": {
                    "item": "justdirethings:blazegold_block"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "igleelib:blaze_shard"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "igleelib:blaze_shard"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "igleelib:blaze_shard"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "igleelib:blaze_shard"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "allthecompressed:blaze_rod_block"
                },
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "allthecompressed:blaze_rod_block"
                },
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "allthecompressed:blaze_rod_block"
                },
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "allthecompressed:blaze_rod_block"
                },
            },
            {
                "consume": true,
                "ingredient": {
                    "tag": "c:storage_blocks/allthemodium"
                },
            }
        ],
        "result": {
            "count": 1,
            "id": "avaritia:blaze_cube"
        },
        "techLevel": "wyvern",
        "totalEnergy": 5000000
    });

    event.custom({
        "type": "mekmm:stamper",
        "input": {
            "count": 1,
            "item": 'avaritia:blaze_cube'
        },
        "mold": {
            "count": 1,
            "item": "immersiveengineering:mold_plate"
        },
        "output": {
            "count": 1,
            "id": 'avaritia_integration:blaze_cube_plate'
        }
    });

    event.custom({
        "type": "mekanism:compressing",
        "chemical_input": {
            "amount": 1,
            "chemical": "kubejs:vibranium"
        },
        "item_input": {
            "count": 2,
            "item": "avaritia_integration:blaze_cube_plate"
        },
        "output": {
            "count": 1,
            "id": "avaritia_integration:blaze_cube_double_plate"
        },
        "per_tick_usage": true
    });

    event.custom({
        "type": "mekanism:compressing",
        "chemical_input": {
            "amount": 1,
            "chemical": "kubejs:vibranium"
        },
        "item_input": {
            "count": 2,
            "item": "avaritia_integration:blaze_cube_double_plate"
        },
        "output": {
            "count": 1,
            "id": "avaritia_integration:blaze_cube_dense_plate"
        },
        "per_tick_usage": true
    });
});