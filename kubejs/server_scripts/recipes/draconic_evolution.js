ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 250000,
        "input": {
            "item": "minecraft:ender_eye"
        },
        "ingredients": [
            {
                "tag": "c:dusts/blaze"
            },
            {
                "tag": "c:dusts/draconium"
            },
            {
                "tag": "c:dusts/draconium"
            },
            {
                "tag": "c:dusts/draconium"
            },
            {
                "tag": "c:dusts/draconium"
            },
            {
                "tag": "c:dusts/blaze"
            },
            {
                "tag": "c:dusts/draconium"
            },
            {
                "tag": "c:dusts/blaze"
            },
            {
                "tag": "c:dusts/draconium"
            },
            {
                "tag": "c:dusts/blaze"
            },
            {
                "tag": "c:dusts/draconium"
            },
            {
                "tag": "c:dusts/blaze"
            },
            {
                "tag": "c:dusts/blaze"
            },
            {
                "tag": "c:dusts/blaze"
            },
            {
                "tag": "c:dusts/blaze"
            },
            {
                "tag": "c:dusts/draconium"
            }
        ],
        "result": {
            "id": "draconicevolution:dislocator"
        }
    });

    event.custom({
        "type": "mekanism:crushing",
        "input": {
            "count": 1,
            "tag": "c:ingots/draconium_awakened"
        },
        "output": {
            "count": 1,
            "id": "draconicevolution:awakened_draconium_dust"
        }
    });
});