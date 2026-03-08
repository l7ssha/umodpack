ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shapeless_ender_crafter",
        "ingredients": [
            {
                "item": "modularbees:dragon_breath_bucket"
            },
            {
                "item": "minecraft:glass_bottle"
            },
            {
                "item": "minecraft:glass_bottle"
            },
            {
                "item": "minecraft:glass_bottle"
            },
            {
                "item": "minecraft:glass_bottle"
            }
        ],
        "result": {
            "id": "minecraft:dragon_breath"
        }
    });
});