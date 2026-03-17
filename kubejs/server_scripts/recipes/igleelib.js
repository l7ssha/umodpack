ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AA A AA",
            "ABCBCBA",
            " CDEDC ",
            "ABEFEBA",
            " CGEGC ",
            "ABCBCBA",
            "AA A AA"
        ],
        "tier": 3,
        "key": {
            "A": {
                "tag": "c:ingots/draconium"
            },
            "B": {
                "item": "alltheores:platinum_ingot"
            },
            "C": {
                "item": "reliquary:catalyzing_gland"
            },
            "D": {
                "item": "ae2omnicells:charged_ender_ingot"
            },
            "E": {
                "item": "justdirethings:polymorphic_catalyst"
            },
            "F": {
                "item": "actuallyadditions:palis_crystal_block"
            },
            "G": {
                "item": "advancednetherite:netherite_diamond_ingot"
            }
        },
        "result": {
            "id": "igleelib:modium_ingot"
        }
    });

    event.custom({
        "type": "evolvedmekanism:alloying",
        "extra_input": {
            "tag": "c:obsidians/crying"
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
            }
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
        "type": "occultism:ritual",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_afrit"
        },
        "duration": 600,
        "ingredients": [
            {
                "item": "igleelib:blazum_ingot"
            },
            {
                "item": "igleelib:blazum_ingot"
            },
            {
                "item": "igleelib:blazum_ingot"
            },
            {
                "item": "cataclysm:burning_ashes"
            },
            {
                "item": "cataclysm:burning_ashes"
            },
            {
                "item": "irons_spellbooks:bloody_vellum"
            },
            {
                "item": "irons_spellbooks:bloody_vellum"
            }
        ],
        "pentacle_id": "occultism:craft_afrit",
        "result": {
            "count": 1,
            "id": "igleelib:lavium_ingot"
        },
        "ritual_type": "occultism:craft_with_spirit_name"
    });

    event.custom({
        "type": "ifeu:precision_shapeless",
        "chance": 0.2,
        "inputs": [
            {
                "item": "igleelib:blazum_ingot"
            },
            {
                "item": "igleelib:blazum_ingot"
            },
            {
                "item": "cataclysm:burning_ashes"
            },
            {
                "item": "cataclysm:burning_ashes"
            },
            {
                "tag": "iceandfire:dragon_bloods"
            },
            {
                "tag": "iceandfire:dragon_bloods"
            }
        ],
        "output": {
            "count": 1,
            "id": "igleelib:lavium_ingot"
        }
    });
});