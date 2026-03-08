ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
            " A ",
            "ABA",
            " A "
        ],
        "key": {
            "A": {
                "item": "minecraft:shulker_shell"
            },
            "B": {
                "item": "minecraft:chest"
            }
        },
        "result": {
            "id": "minecraft:shulker_box"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
            "ABA",
            "BAB",
            "ABA"
        ],
        "key": {
            "A": {
                "tag": "c:dusts/blaze"
            },
            "B": {
                "tag": "c:ender_pearls"
            }
        },
        "result": {
            "id": "minecraft:ender_eye"
        }
    });
});