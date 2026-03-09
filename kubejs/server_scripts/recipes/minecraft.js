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
                "item": "pneumaticcraft:reinforced_chest"
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

    event.replaceInput(
        { id: 'minecraft:anvil' },
        'minecraft:iron_block',
        { tag: 'c:storage_blocks/steel' }
    );

    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "item": "minecraft:netherite_scrap",
                "count": 5
            },
            {
                "item": "alltheores:gold_plate",
                "count": 5
            },
        ],
        "pressure": 4,
        "results": [
            {
                "id": "minecraft:netherite_ingot"
            }
        ]
    }).id('kubejs:pressure_chamber/netherite_ingot');
});