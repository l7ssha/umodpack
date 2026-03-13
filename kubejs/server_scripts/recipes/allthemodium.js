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
});