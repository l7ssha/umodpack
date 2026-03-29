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
                "tag": "c:fabric_hemp"
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
            " DFD ",
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
            },
            "F": {
                "item": "stevescarts:module_advanced_crafter"
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
                "tag": "c:circuits/basic"
            },
            "B": {
                "item": "enderio:conduit_binder"
            },
            "C": {
                "tag": "ae2:all_certus_quartz"
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
            "  A  ",
            " BCB ",
            "DEFED",
            " DED ",
            "     "
        ],
        "key": {
            "A": {
                "item": "ae2:engineering_processor"
            },
            "B": {
                "tag": "c:circuits/ultimate"
            },
            "C": {
                "item": "ae2:logic_processor"
            },
            "D": {
                "item": "actuallyadditions:empowered_restonia_crystal"
            },
            "E": {
                "item": "ae2:cell_component_64k"
            },
            "F": {
                "tag": "c:circuits/absolute"
            }
        },
        "result": {
            "id": "ae2:cell_component_256k"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " A     A ",
            "A AAAAA A",
            " ABCCCBA ",
            " ACDEDCA ",
            " ACFGFCA ",
            " ACDEDCA ",
            " ABCCCBA ",
            "A AAAAA A",
            " A     A "
        ],
        "key": {
            "A": {
                "item": "ae2:quartz_vibrant_glass"
            },
            "B": {
                "item": "extendedae:smart_annihilation_plane"
            },
            "C": {
                "tag": "ae2:smart_cable"
            },
            "D": {
                "tag": "c:buckets/water"
            },
            "E": {
                "item": "advanced_ae:quantum_storage_component"
            },
            "F": {
                "item": "advanced_ae:shattered_singularity"
            },
            "G": {
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
            "AAAAAAAAA",
            "ABCD DCBA",
            "ACEFGFECA",
            "ADFHIJFDA",
            "AKGILIGKA",
            "ADFJIHFDA",
            "ACEFGFECA",
            "ABCD DCBA",
            "AAAAAAAAA"
        ],
        "key": {
            "A": {
                "item": "ae2:quartz_vibrant_glass"
            },
            "B": {
                "item": "igleelib:lavium_block"
            },
            "C": {
                "tag": "c:buckets/water"
            },
            "D": {
                "item": "pneumaticcraft:reinforced_brick_pillar"
            },
            "E": {
                "tag": "c:buckets/lava"
            },
            "F": {
                "item": "extendedae:smart_annihilation_plane"
            },
            "G": {
                "item": "powah:nitro_crystal_block"
            },
            "H": {
                "tag": "c:circuits/infinite_multiversal"
            },
            "I": {
                "tag": "ae2:smart_cable"
            },
            "J": {
                "item": "ae2omnicells:quantum_omni_cell_component_256m"
            },
            "K": {
                "item": "draconicevolution:reactor_stabilizer"
            },
            "L": {
                "item": "ae2omnicells:quantum_omni_cell_housing"
            }
        },
        "result": {
            "id": "extendedae:infinity_cobblestone_cell"
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

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "BCDCA",
            "EBFBG",
            "ACDCB",
            "AAAAA"
        ],
        "key": {
            "A": {
                "tag": "c:plates/nickel"
            },
            "B": {
                "tag": "c:dusts/fluix"
            },
            "C": {
                "item": "ae2:charged_certus_quartz_crystal"
            },
            "D": {
                "item": "ironfurnaces:crystal_furnace"
            },
            "E": {
                "tag": "c:buckets/empty"
            },
            "F": {
                "item": "mekanism:osmium_compressor"
            },
            "G": {
                "tag": "c:chests"
            }
        },
        "result": {
            "id": "ae2:condenser"
        }
    });

    event.replaceInput(
        [
            { id: 'extendedae:tag_storage_bus' },
            { id: 'extendedae:tag_export_bus' },
            { id: 'extendedae:mod_export_bus' },
            { id: 'extendedae:mod_storage_bus' },
        ],
        'minecraft:book',
        'mekanism:dictionary'
    );

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 30000,
        "power_rate": 200,
        "pattern": [
            "AB ",
            "CDC",
            " BA"
        ],
        "key": {
            "A": {
                "item": "ae2:logic_processor"
            },
            "B": {
                "tag": "c:circuits/supreme"
            },
            "C": {
                "item": "ae2:level_emitter"
            },
            "D": {
                "item": "ae2:export_bus"
            }
        },
        "result": {
            "id": "extendedae:threshold_export_bus"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 50000,
        "power_rate": 1000,
        "pattern": [
            "ABA",
            "CDC",
            "EEE"
        ],
        "key": {
            "A": {
                "tag": "c:rods/electrum"
            },
            "B": {
                "item": "ae2:fluix_pearl"
            },
            "C": {
                "item": "draconicevolution:basic_wireless_crystal"
            },
            "D": {
                "item": "draconicevolution:dislocator"
            },
            "E": {
                "tag": "c:plates/enderium"
            }
        },
        "result": {
            "id": "ae2:wireless_receiver"
        }
    });

    event.shaped({
        "pattern": [
            "AAA",
            "BBB",
            "AAA"
        ],
        "key": {
            "A": {
                "tag": "c:dusts/fluix"
            },
            "B": {
                "item": "ae2:quartz_fiber"
            }
        },
        "result": {
            "amount": 2,
            "id": "ae2:fluix_glass_cable"
        }
    });

    event.replaceInput(
        { id: 'ae2:network/parts/quartz_fiber_part' },
        '#c:glass_blocks/cheap',
        'ae2:quartz_glass'
    );

    event.replaceInput(
        { id: 'ae2:network/parts/quartz_fiber_part' },
        '#c:glass_blocks/cheap',
        'ae2:quartz_glass'
    );

    event.replaceInput(
        { id: 'ae2:network/parts/quartz_fiber_part' },
        'ae2:certus_quartz_dust',
        '#c:dusts/ruby'
    );
});
