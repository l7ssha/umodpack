ServerEvents.recipes(event => {
    event.replaceInput(
        { id: 'minecraft:crafter' },
        'minecraft:iron_ingot',
        { tag: 'c:plates/iron' }
    );

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

    event.shaped({
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
                "tag": "c:plates/gold",
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

    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "item": "occultism:netherite_scrap_dust",
                "count": 5
            },
            {
                "tag": "c:dusts/gold",
                "count": 5
            },
        ],
        "pressure": 2,
        "results": [
            {
                "id": "minecraft:netherite_ingot"
            }
        ]
    }).id('kubejs:pressure_chamber/netherite_ingot_from_dust');

    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
            "AAA",
            "ABA",
            "AAA"
        ],
        "key": {
            "A": {
                "item": "minecraft:obsidian"
            },
            "B": {
                "item": "occultism:stable_wormhole"
            }
        },
        "result": {
            "id": "minecraft:ender_chest"
        }
    });
});