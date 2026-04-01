ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 100000,
        "input": {
            "item": "minecraft:ender_eye"
        },
        "ingredients": [
            {
                "tag": "c:plates/gold"
            },
            {
                "tag": "c:plates/gold"
            },
            {
                "tag": "c:plates/gold"
            },
            {
                "tag": "c:plates/gold"
            },
            {
                "tag": "c:plates/allthemodium"
            },
            {
                "tag": "c:plates/allthemodium"
            },
            {
                "tag": "c:plates/allthemodium"
            },
            {
                "tag": "c:plates/allthemodium"
            }
        ],
        "result": {
            "id": "allthemodium:teleport_pad"
        }
    });

    event.findRecipes({ id: /allthemodium:smithing\/allthemodium_.*_smithing/, type: 'minecraft:smithing_transform' }).forEach(recipe => {
        const baseItem = recipe.originalJson.get('base').get('item').toString()
            .replace('minecraft:netherite_', 'advancednetherite:netherite_diamond_').replace("\"", '');

        event.custom({
            "result": recipe.originalJson.get('result'),
            "template": recipe.originalJson.get('template'),
            "type": "minecraft:smithing_transform",
            "addition": recipe.originalJson.get('addition'),
            "base": {
                "item": baseItem,
            },
        });
    });

    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "type": "draconicevolution:stack",
            "count": 1,
            "items": "igleelib:modium_block"
        },
        "ingredients": [
            {
                "consume": true,
                "ingredient": {
                    "tag": "c:storage_blocks/allthemodium"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "tag": "c:storage_blocks/unobtainium"
                }
            },
        ],
        "result": {
            "count": 1,
            "id": "allthemodium:unobtainium_allthemodium_alloy_block"
        },
        "techLevel": "wyvern",
        "totalEnergy": 10000000
    });

    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "type": "draconicevolution:stack",
            "count": 1,
            "items": "igleelib:modium_block"
        },
        "ingredients": [
            {
                "consume": true,
                "ingredient": {
                    "tag": "c:storage_blocks/allthemodium"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "tag": "c:storage_blocks/vibranium"
                }
            },
        ],
        "result": {
            "count": 1,
            "id": "allthemodium:vibranium_allthemodium_alloy_block"
        },
        "techLevel": "wyvern",
        "totalEnergy": 10000000
    });

    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "type": "draconicevolution:stack",
            "count": 1,
            "items": "igleelib:derium_block"
        },
        "ingredients": [
            {
                "consume": true,
                "ingredient": {
                    "tag": "c:storage_blocks/unobtainium"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "tag": "c:storage_blocks/vibranium"
                }
            },
        ],
        "result": {
            "count": 1,
            "id": "allthemodium:unobtainium_vibranium_alloy_block"
        },
        "techLevel": "wyvern",
        "totalEnergy": 50000000
    });
});