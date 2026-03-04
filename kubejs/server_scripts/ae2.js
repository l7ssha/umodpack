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

    event.replaceInput(
        { id: replaceWithIronPlatesRecipes },
        'minecraft:iron_ingot',
        { tag: 'c:plates/iron' }
    );

    event.shaped({
        "pattern": [
            "ABA",
            "BCB",
            "ABA"
        ],
        "key": {
            "B": {
                "tag": "minecraft:trim_materials"
            },
            "A": {
                "tag": "ae2:all_certus_quartz"
            },
            "C": {
                "tag": "c:chests"
            }
        },
        "result": {
            "id": "ae2:cell_component_1k"
        }
    });

    event.shaped({
        "pattern": [
            "DBD",
            "BAB",
            "DBD"
        ],
        "key": {
            "A": {
                "item": "ae2:logic_processor"
            },
            "B": {
                "item": "ae2:cell_component_1k"
            },
            "D": {
                "tag": "ae2:glass_cable"
            }
        },
        "result": {
            "id": "ae2:cell_component_4k"
        }
    });

    event.shaped({
        "pattern": [
            "ABA",
            "BCB",
            "ABA"
        ],
        "key": {
            "A": {
                "tag": "ae2:glass_cable"
            },
            "B": {
                "item": "ae2:cell_component_4k"
            },
            "C": {
                "item": "ae2:calculation_processor"
            }
        },
        "result": {
            "id": "ae2:cell_component_16k"
        }
    });

    event.shaped({
        "pattern": [
            "ABA",
            "BCB",
            "ABA"
        ],
        "key": {
            "A": {
                "tag": "ae2:glass_cable"
            },
            "B": {
                "item": "ae2:cell_component_16k"
            },
            "C": {
                "item": "ae2:engineering_processor"
            }
        },
        "result": {
            "id": "ae2:cell_component_64k"
        }
    });

    event.shaped({
        "pattern": [
            "ACA",
            "CDC",
            "ACA"
        ],
        "key": {
            "A": {
                "tag": "ae2:glass_cable"
            },
            "C": {
                "item": "ae2:cell_component_64k"
            },
            "D": {
                "item": "ae2:logic_processor"
            }
        },
        "result": {
            "id": "ae2:cell_component_256k"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "   AAA   ",
            " BBCDCBB ",
            " BEFGFEB ",
            "ACFHIHFCA",
            "ADGIJIGDA",
            "ACFHIHFCA",
            " BEFGFEB ",
            " BBCDCBB ",
            "   AAA   "
        ],
        "key": {
            "A": {
                "item": "ae2:quartz_vibrant_glass"
            },
            "B": {
                "item": "advanced_ae:quantum_processor"
            },
            "C": {
                "item": "mekanism:module_hydrostatic_repulsor_unit"
            },
            "D": {
                "tag": "ae2:smart_cable"
            },
            "E": {
                "item": "avaritia:infinity_catalyst"
            },
            "F": {
                "tag": "c:buckets/water"
            },
            "G": {
                "tag": "c:circuits/infinite_multiversal"
            },
            "H": {
                "item": "extendedae:smart_annihilation_plane"
            },
            "I": {
                "item": "advanced_ae:quantum_storage_component"
            },
            "J": {
                "item": "megacells:mega_fluid_cell_housing"
            }
        },
        "result": {
            "id": "extendedae:infinity_water_cell"
        }
    });
});
