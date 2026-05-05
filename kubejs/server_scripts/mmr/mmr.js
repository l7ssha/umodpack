ServerEvents.recipes(event => {
    event.shaped({
        "pattern": [
            "ABA",
            "CDC",
            "ABA"
        ],
        "key": {
            "A": {
                "tag": "c:ingots/end_steel"
            },
            "B": {
                "item": "twilightforest:naga_scale"
            },
            "C": {
                "tag": "c:ingots/derium"
            },
            "D": {
                "tag": "c:ingots/refined_glowstone"
            }
        },
        "result": {
            "count": 5,
            "id": "modular_machinery_reborn:modularium"
        }
    });

    event.replaceInput(
        { id: 'modular_machinery_reborn:casing_plain' },
        'minecraft:redstone_block',
        'mekanism:steel_casing',
    );

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 1000000,
        "power_rate": 2000,
        "pattern": [
            "ABA",
            "BCB",
            "ABA"
        ],
        "key": {
            "A": {
                "tag": "c:ingots/blazum"
            },
            "B": {
                "item": "modular_machinery_reborn:casing_plain"
            },
            "C": {
                "item": "draconicevolution:infused_obsidian"
            }
        },
        "result": {
            "count": 2,
            "id": "modular_machinery_reborn:casing_reinforced"
        }
    });

    event.replaceInput(
        { id: 'modular_machinery_reborn:energy_input_tiny' },
        'minecraft:redstone_block',
        'mekanism:energy_tablet',
    );

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "  AAAAA  ",
            " ABBB BA ",
            "AB C   A ",
            "ADCECCCCA",
            "A EFFFFFA",
            "ADFGGGGGA",
            "AHIFFFFA ",
            " AHHH HA ",
            "  AAAAA  "
        ],
        "key": {
            "A": {
                "item": "modular_machinery_reborn:casing_reinforced"
            },
            "B": {
                "tag": "c:circuits/absolute"
            },
            "C": {
                "tag": "c:ingots/stellar_alloy"
            },
            "D": {
                "item": "mekanism:ultimate_bin"
            },
            "E": {
                "item": "ae2:controller"
            },
            "F": {
                "item": "immersiveengineering:conveyor_basic"
            },
            "G": {
                "tag": "c:plates/unobtainium"
            },
            "H": {
                "tag": "c:circuits/overclocked"
            },
            "I": {
                "item": "functionalstorage:storage_controller"
            }
        },
        "result": {
            "id": "modular_machinery_reborn:controller",
            "components": {
                "modular_machinery_reborn:machine": "mmr:assembly_line"
            },
            "type": "neoforge:components"
        }
    });
});