const replaceWithIronPlatesRecipes = [
    'ae2:network/blocks/pattern_providers_interface',
    'ae2:materials/basiccard',
    'ae2:materials/advancedcard',
    'ae2:network/blocks/interfaces_interface',
    'ae2:network/crafting/cpu_crafting_unit',
    'ae2:network/blocks/cell_workbench'
];

ServerEvents.recipes(event => {
    replaceWithIronPlatesRecipes.forEach(recipeId => {
        event.replaceInput(
            { id: recipeId },
            'minecraft:iron_ingot',
            { tag: 'c:plates/steel' }
        );
    });

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
                "item": "aeinfinitybooster:infinity_card"
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
            "AOCDA",
            "AEBCA",
            "ADEOA",
            "FGFGF"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:ingots/sky_steel"
            },
            "B": {
                "item": "ae2:logic_processor"
            },
            "C": {
                "item": "ae2:calculation_processor"
            },
            "D": {
                "tag": "c:gems/fluix"
            },
            "E": {
                "item": "ae2:engineering_processor"
            },
            "F": {
                "item": "ae2:dense_energy_cell"
            },
            "G": {
                "item": "ae2:fluix_block"
            },
            "O": {
                "tag": "c:circuits/overclocked"
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

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AA AA",
            "ABCBA",
            " DAD ",
            "ABEBA",
            "AA AA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:ingots/steel"
            },
            "B": {
                "tag": "c:rods/steel"
            },
            "C": {
                "item": "ae2:formation_core"
            },
            "D": {
                "item": "minecraft:crafter"
            },
            "E": {
                "item": "ae2:annihilation_core"
            }
        },
        "result": {
            "id": "ae2:molecular_assembler"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABA",
            "CDC",
            "ABA"
        ],
        "tier": 1,
        "key": {
            "A": {
                "tag": "ae2:all_certus_quartz"
            },
            "B": {
                "item": "enderio:conduit_binder"
            },
            "C": {
                "tag": "c:circuits/ultimate"
            },
            "D": {
                "item": "ae2:logic_processor"
            }
        },
        "result": {
            "id": "ae2:cell_component_1k"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "A A",
            "BCB",
            "ABA"
        ],
        "tier": 1,
        "key": {
            "A": {
                "tag": "c:circuits/advanced"
            },
            "B": {
                "item": "ae2:cell_component_1k"
            },
            "C": {
                "item": "ae2:logic_processor"
            }
        },
        "result": {
            "id": "ae2:cell_component_4k"
        }
    });


    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "A A",
            "BCB",
            "ABA"
        ],
        "tier": 1,
        "key": {
            "A": {
                "tag": "c:circuits/elite"
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

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "A A",
            "BCB",
            "ABA"
        ],
        "tier": 1,
        "key": {
            "A": {
                "tag": "c:circuits/ultimate"
            },
            "B": {
                "item": "ae2:cell_component_16k"
            },
            "C": {
                "item": "ae2:calculation_processor"
            }
        },
        "result": {
            "id": "ae2:cell_component_64k"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "A   A",
            " B B ",
            " CDC ",
            " ECF ",
            "A   A"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "actuallyadditions:empowered_enori_crystal"
            },
            "B": {
                "item": "actuallyadditions:empowered_restonia_crystal"
            },
            "C": {
                "item": "ae2:cell_component_64k"
            },
            "D": {
                "item": "appflux:energy_processor"
            },
            "E": {
                "item": "ae2:logic_processor"
            },
            "F": {
                "item": "ae2:engineering_processor"
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
        "tier": 4,
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
                "item": "advanced_ae:shattered_singularity"
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

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " AB",
            "CAB",
            " AB"
        ],
        "tier": 1,
        "key": {
            "A": {
                "item": "actuallyadditions:palis_crystal"
            },
            "B": {
                "item": "ae2:quartz_glass"
            },
            "C": {
                "item": "ae2:charged_certus_quartz_crystal"
            }
        },
        "result": {
            "id": "ae2:semi_dark_monitor"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AB BA",
            "BCDCB",
            "DC CD",
            "BCDCB",
            "AB BA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:plates/steel"
            },
            "B": {
                "tag": "c:ingots/steel"
            },
            "C": {
                "tag": "ae2:glass_cable"
            },
            "D": {
                "item": "ae2:engineering_processor"
            }
        },
        "result": {
            "id": "ae2:drive"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " A A ",
            "ABCDA",
            "ADEBA",
            "ABCDA",
            " A A "
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "ae2:quartz_glass"
            },
            "B": {
                "item": "ae2:annihilation_core"
            },
            "C": {
                "tag": "ae2:illuminated_panel"
            },
            "D": {
                "item": "ae2:formation_core"
            },
            "E": {
                "item": "mekanism:ultimate_control_circuit"
            }
        },
        "result": {
            "id": "ae2:terminal"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABB  ",
            "AA B ",
            "B C B",
            " B DD",
            "  BBD"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "ae2:charged_certus_quartz_crystal"
            },
            "B": {
                "tag": "c:plastics"
            },
            "C": {
                "tag": "c:circuits/ultimate"
            },
            "D": {
                "tag": "c:dusts/fluix"
            }
        },
        "result": {
            "id": "ae2:annihilation_core"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "  AAB",
            " A BB",
            "A C A",
            "DD A ",
            "DAA  "
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:plastics"
            },
            "B": {
                "tag": "c:gemcs/black_quartz"
            },
            "C": {
                "tag": "c:circuits/ultimate"
            },
            "D": {
                "tag": "c:dusts/fluix"
            }
        },
        "result": {
            "id": "ae2:formation_core"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "  A  ",
            " BCB ",
            "DCECD",
            "DFGFD",
            " DDD "
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "ae2:fluix_pearl"
            },
            "B": {
                "tag": "ae2:smart_dense_cable"
            },
            "C": {
                "item": "ae2:charged_certus_quartz_crystal"
            },
            "D": {
                "item": "actuallyadditions:empowered_enori_crystal"
            },
            "E": {
                "item": "ae2:logic_processor"
            },
            "F": {
                "item": "ae2:engineering_processor"
            },
            "G": {
                "item": "ae2:calculation_processor"
            }
        },
        "result": {
            "id": "ae2:wireless_access_point"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " ABA ",
            "ACDCA",
            "BDDDB",
            "ACDCA",
            " ABA "
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "ae2:fluix_dust"
            },
            "B": {
                "item": "ae2:fluix_crystal"
            },
            "C": {
                "item": "ae2:fluix_block"
            },
            "D": {
                "item": "minecraft:ender_pearl"
            }
        },
        "result": {
            "id": "ae2:fluix_pearl"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 2000,
        "power_rate": 20,
        "pattern": [
            " AA",
            "BCA",
            " AA"
        ],
        "key": {
            "A": {
                "item": "modularrouters:augment_core"
            },
            "B": {
                "item": "ae2:basic_card"
            },
            "C": {
                "item": "pneumaticcraft:empty_pcb"
            }
        },
        "result": {
            "id": "ae2:blank_pattern"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 50000,
        "power_rate": 2000,
        "pattern": [
            "ABA",
            "C C",
            "ADA"
        ],
        "key": {
            "A": {
                "tag": "c:plates/steel"
            },
            "B": {
                "item": "ae2:formation_core"
            },
            "C": {
                "item": "avaritia:compressed_crafting_table"
            },
            "D": {
                "item": "ae2:annihilation_core"
            }
        },
        "result": {
            "id": "ae2:pattern_provider"
        }
    });
});
