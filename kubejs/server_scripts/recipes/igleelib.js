ServerEvents.recipes(event => {
    event.custom({
        "type": "avaritia:shaped_table",
        "pattern": [
            " AAA ",
            "ABBBC",
            "BDDDB",
            "CBBBA",
            " AAA "
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:ingots/draconium"
            },
            "B": {
                "tag": "c:ingots/platinum"
            },
            "C": {
                "item": "justdirethings:polymorphic_catalyst"
            },
            "D": {
                "tag": "advancednetherite:ingot/netherites_emerald"
            }
        },
        "result": {
            "count": 6,
            "id": "igleelib:modium_ingot"
        }
    });

    event.custom({
        "type": "evolvedmekanism:alloying",
        "extra_input": {
            "tag": "c:obsidians"
        },
        "second_extra_input": {
            "item": "iceandfire:ghost_ingot"
        },
        "main_input": {
            "tag": "c:ingots/modium"
        },
        "output": {
            "id": "igleelib:derium_ingot"
        }
    });

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "tag": "c:rods/blaze"
            },
            {
                "tag": "c:rods/blaze"
            },
            {
                "tag": "c:rods/blaze"
            },
            {
                "item": "minecraft:netherite_scrap"
            },
            {
                "tag": "c:dusts/blaze"
            },
            {
                "item": "minecraft:netherite_scrap"
            },
            {
                "item": "minecraft:netherite_scrap"
            }
        ],
        "inputFluid": {
            "amount": 1500,
            "fluid": "allthemodium:soul_lava"
        },
        "output": {
            "count": 1,
            "id": "igleelib:blaze_shard"
        },
        "processingTime": 600
    });

    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "tag": "c:ingots/derium",
                "count": 10
            },
            {
                "item": "igleelib:blaze_shard",
                "count": 6
            },
            {
                "item": "minecraft:quartz",
                "count": 24
            },
        ],
        "pressure": 4.2,
        "results": [
            {
                "id": "igleelib:blazum_ingot",
                "count": 2
            }
        ]
    }).id('kubejs:pressure_chamber/blazum_ingot');

    event.custom({
        "type": "enderio:alloy_smelting",
        "energy": 400000,
        "experience": 0.1,
        "inputs": [
            {
                "count": 5,
                "tag": "c:ingots/blazum"
            },
            {
                "count": 2,
                "tag": "iceandfire:dragon_steels"
            },
            {
                "count": 1,
                "tag": "c:ingots/crystalline_pink_slime"
            }
        ],
        "output": {
            "count": 3,
            "id": "igleelib:lavium_ingot"
        }
    });
});