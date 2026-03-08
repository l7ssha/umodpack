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
});