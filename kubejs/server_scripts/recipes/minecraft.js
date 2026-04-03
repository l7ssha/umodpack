const replaceIronWithPlates = [
    'minecraft:hopper',
    'minecraft:minecart',
    'minecraft:cauldron',
    'minecraft:crafter',
    'minecraft:compass'
];

ServerEvents.recipes(event => {
    replaceIronWithPlates.forEach(element => {
        event.replaceInput(
            { output: element },
            'minecraft:iron_ingot',
            { tag: 'c:plates/iron' }
        );
    });

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
                "count": 2,
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

    event.shaped({
        "pattern": [
            "AAA",
            "ABA",
            "AAA"
        ],
        "key": {
            "A": {
                "tag": "c:dusts/wood"
            },
            "B": {
                "item": "minecraft:water_bucket"
            }
        },
        "result": {
            "id": "minecraft:paper"
        }
    });

    event.custom({
        "type": "mekmm:stamper",
        "input": {
            "count": 11,
            "tag": "c:dusts/wood"
        },
        "mold": {
            "count": 1,
            "item": "immersiveengineering:mold_plate"
        },
        "output": {
            "count": 2,
            "id": `minecraft:paper`
        }
    });

    event.shaped({
        "pattern": [
            "AAA",
            "BCB",
            "BDB"
        ],
        "key": {
            "A": {
                "tag": "immersiveengineering:treated_wood_slab"
            },
            "B": {
                "item": "allthecompressed:cobblestone_1x"
            },
            "C": {
                "tag": "c:rods/iron"
            },
            "D": {
                "tag": "c:storage_blocks/redstone"
            }
        },
        "result": {
            "id": "minecraft:piston"
        }
    });

    event.shaped({
        "pattern": [
            " A ",
            "ABC",
            " CB"
        ],
        "key": {
            "A": {
                "tag": "c:plates/iron"
            },
            "B": {
                "tag": "c:leathers"
            },
            "C": {
                "tag": "c:rods/treated_wood"
            }
        },
        "result": {
            "id": "minecraft:shears"
        }
    });

    event.shaped({
        "pattern": [
            "AAA",
            "AAA",
            "AAA"
        ],
        "key": {
            "A": {
                "tag": "c:rods/iron"
            }
        },
        "result": {
            "count": 8,
            "id": "minecraft:iron_bars"
        }
    });

    event.shaped({
        "pattern": [
            "ABA",
            "B B",
            "ABA"
        ],
        "key": {
            "A": {
                "item": "allthecompressed:cobblestone_1x"
            },
            "B": {
                "tag": "c:cobblestones/deepslate"
            }
        },
        "result": {
            "id": "minecraft:furnace"
        }
    });

    event.shaped({
        "pattern": [
            "AAA",
            "ABC",
            "AC "
        ],
        "key": {
            "A": {
                "tag": "c:paper"
            },
            "B": {
                "tag": "c:strings"
            },
            "C": {
                "tag": "c:leathers"
            }
        },
        "result": {
            "id": "minecraft:book"
        }
    });

    event.shaped({
        "pattern": [
            "AAA",
            "ABA",
            "C C"
        ],
        "key": {
            "A": {
                "tag": "c:leathers"
            },
            "B": {
                "tag": "c:strings"
            },
            "C": {
                "tag": "c:plates/iron"
            }
        },
        "result": {
            "id": "minecraft:saddle"
        }
    });

    event.shaped({
        "pattern": [
            "AB ",
            "BC ",
            "C  "
        ],
        "key": {
            "A": {
                "tag": "c:ingots/iron"
            },
            "B": {
                "tag": "c:wires/aluminum"
            },
            "C": {
                "item": "minecraft:flint"
            }
        },
        "result": {
            "id": "minecraft:flint_and_steel"
        }
    });
});