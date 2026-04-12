ServerEvents.recipes(event => {
    event.shaped({
        "pattern": [
            "ABA",
            "CDC",
            "ACA"
        ],
        "key": {
            "A": {
                "tag": "c:ingots/end_steel"
            },
            "B": {
                "item": "cataclysm:cursium_ingot"
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
});