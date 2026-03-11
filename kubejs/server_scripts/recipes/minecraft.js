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

    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
            "ABA",
            "BCB",
            "ADA"
        ],
        "key": {
            "A": {
                "tag": "c:ingots/blazegold"
            },
            "B": {
                "item": "replication:memory_chip"
            },
            "C": {
                "item": "minecraft:ender_chest"
            },
            "D": {
                "tag": "c:obsidians"
            }
        },
        "result": {
            "id": "enderstorage:ender_chest"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
            "AAA",
            "BCB",
            "BDB"
        ],
        "key": {
            "A": {
                "item": "replication:memory_chip"
            },
            "B": {
                "tag": "c:ingots/blazegold"
            },
            "C": {
                "item": "mob_grinding_utils:tank"
            },
            "D": {
                "tag": "c:obsidians"
            }
        },
        "result": {
            "id": "enderstorage:ender_tank"
        }
    });
});