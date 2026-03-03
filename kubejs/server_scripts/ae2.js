const replaceWithIronPlatesRecipes = [
    'ae2:network/blocks/pattern_providers_interface',
    'ae2:materials/basiccard',
    'ae2:materials/advancedcard',
    'ae2:network/blocks/storage_drive',
    'ae2:network/blocks/interfaces_interface',
    'ae2:network/crafting/molecular_assembler',
    'ae2:network/crafting/cpu_crafting_unit',
    'ae2:network/blocks/cell_workbench'
];

ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "A   A",
            "A   A",
            "ABBBA",
            "BCCCB",
            "BCDCB"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "ae2:wireless_access_point"
            },
            "B": {
                "item": "ae2:wireless_booster"
            },
            "C": {
                "item": "ae2:dense_energy_cell"
            },
            "D": {
                "item": "ae2:controller"
            }
        },
        "result": {
            "id": "aeinfinitybooster:dimension_card"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "ABCDA",
            "AEBCA",
            "ADEBA",
            "FGFGF"
        ],
        "tier": 2,
        "key": {
            "A": {
            "item": "ae2:smooth_sky_stone_block"
            },
            "B": {
            "item": "ae2:logic_processor"
            },
            "C": {
            "item": "ae2:calculation_processor"
            },
            "D": {
            "item": "ae2:fluix_crystal"
            },
            "E": {
            "item": "ae2:engineering_processor"
            },
            "F": {
            "item": "ae2:dense_energy_cell"
            },
            "G": {
            "item": "ae2:fluix_block"
            }
        },
        "result": {
            "id": "ae2:controller"
        }
    });
    
    event.replaceInput(
        { id: 'ae2:network/cables/glass_fluix' },
        'ae2:fluix_crystal',
        'ae2:fluix_dust'
    );

    event.shapeless({
        "ingredients": [
            {
            "item": "ae2:fluix_covered_cable"
            },
            {
            "item": "minecraft:glowstone_dust"
            },
            {
            "item": "minecraft:redstone"
            },
            {
            "item": "ae2:engineering_processor"
            }
        ],
        "result": {
            "id": "ae2:fluix_smart_cable"
        }
    });

    event.shaped({
        "pattern": [
            " A ",
            "BCB",
            " A "
        ],
        "key": {
            "A": {
            "item": "minecraft:white_wool"
            },
            "B": {
            "item": "minecraft:string"
            },
            "C": {
            "item": "ae2:fluix_glass_cable"
            }
        },
        "result": {
            "id": "ae2:fluix_covered_cable",
        }
    });

    replaceWithIronPlatesRecipes.forEach(id => {
        event.replaceInput(
            { id: id },
            'minecraft:iron_ingot',
            {tag: 'c:plates/iron'}
        );
    });
});
