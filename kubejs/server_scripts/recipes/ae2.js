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
            "AOCDA",
            "AEBCA",
            "ADEOA",
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

    event.replaceInput(
        { id: replaceWithIronPlatesRecipes },
        'minecraft:iron_ingot',
        { tag: 'c:plates/iron' }
    );

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
            "ABA",
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
            "ABA",
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
            "ABA",
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
            "AAAAA",
            "BCDEF",
            "GDHDG",
            "BIDJF",
            "KKLKK"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "ae2:quartz_vibrant_glass"
            },
            "B": {
                "items": "mifa:efficiency_addon_3",
                "components": {
                    "titanium:augments": {
                        "Efficiency": 0.7
                    }
                },
                "type": "neoforge:components"
            },
            "C": {
                "item": "ae2:logic_processor"
            },
            "D": {
                "item": "ae2:cell_component_64k"
            },
            "E": {
                "item": "ae2:calculation_processor"
            },
            "F": {
                "items": "mifa:processing_addon_3",
                "components": {
                    "titanium:augments": {
                        "Processing": 4.0
                    }
                },
                "type": "neoforge:components"
            },
            "G": {
                "item": "actuallyadditions:empowered_restonia_crystal"
            },
            "H": {
                "item": "extendedae:concurrent_processor"
            },
            "I": {
                "item": "ae2:engineering_processor"
            },
            "J": {
                "item": "appflux:energy_processor"
            },
            "K": {
                "item": "actuallyadditions:empowered_enori_crystal"
            },
            "L": {
                "tag": "advancednetherite:ingot/netherites_diamond"
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
        "tier": 2,
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

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 2,
        "pattern": [
            "     ",
            " AAA ",
            " BCB ",
            " BHB ",
            " DDD "
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "ae2:quartz_vibrant_glass"
            },
            "B": {
                "tag": "c:alloys/absolute"
            },
            "C": {
                "tag": "c:dusts/sky_stone"
            },
            "D": {
                "tag": "c:ingots/sky_steel"
            },
            "H": {
                "item": "ae2:item_cell_housing"
            }
        },
        "result": {
            "id": "megacells:mega_item_cell_housing"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AABAA",
            "BBBBB",
            "BCDEB",
            "BCDEB",
            "AAAAA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:storage_blocks/empowered_enori_crystal"
            },
            "B": {
                "tag": "c:ingots/iron"
            },
            "C": {
                "item": "ae2:logic_processor"
            },
            "D": {
                "item": "ae2:engineering_processor"
            },
            "E": {
                "item": "ae2:calculation_processor"
            }
        },
        "result": {
            "id": "ae2:item_cell_housing"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAB",
            "ACCCB",
            "ADEFB",
            "ACCCB",
            "AAAAB"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "actuallyadditions:crystals"
            },
            "B": {
                "tag": "c:glass_blocks"
            },
            "C": {
                "item": "actuallyadditions:empowered_restonia_crystal"
            },
            "D": {
                "item": "ae2:engineering_processor"
            },
            "E": {
                "item": "ae2:calculation_processor"
            },
            "F": {
                "item": "ae2:logic_processor"
            }
        },
        "result": {
            "id": "ae2:semi_dark_monitor"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AABAA",
            "BBBBB",
            "BCDEB",
            "BCDEB",
            "AAAAA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:storage_blocks/empowered_enori_crystal"
            },
            "B": {
                "tag": "c:ingots/bronze"
            },
            "C": {
                "item": "ae2:logic_processor"
            },
            "D": {
                "item": "ae2:engineering_processor"
            },
            "E": {
                "item": "ae2:calculation_processor"
            }
        },
        "result": {
            "id": "ae2:item_cell_housing"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABCBA",
            "DEFGD",
            "DHIHD",
            "DEFGD",
            "ABCBA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:storage_blocks/empowered_enori_crystal"
            },
            "B": {
                "tag": "c:storage_blocks/compressed_iron"
            },
            "C": {
                "tag": "c:ingots/iron"
            },
            "D": {
                "item": "ae2:item_cell_housing"
            },
            "E": {
                "item": "ae2:engineering_processor"
            },
            "F": {
                "item": "ae2:calculation_processor"
            },
            "G": {
                "item": "ae2:logic_processor"
            },
            "H": {
                "item": "appflux:energy_processor"
            },
            "I": {
                "tag": "ae2:smart_dense_cable"
            }
        },
        "result": {
            "id": "ae2:drive"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABCDA",
            "ABEDA",
            "ABFDA",
            "GBHDG",
            "GIIIG"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:storage_blocks/compressed_iron"
            },
            "B": {
                "item": "ae2:formation_core"
            },
            "C": {
                "items": "industrialforegoing:efficiency_addon_tier_2",
                "components": {
                    "titanium:augments": {
                        "Efficiency": 0.8
                    }
                },
                "type": "neoforge:components"
            },
            "D": {
                "item": "ae2:annihilation_core"
            },
            "E": {
                "item": "ae2:engineering_processor"
            },
            "F": {
                "item": "ae2:calculation_processor"
            },
            "G": {
                "item": "ae2:quartz_vibrant_glass"
            },
            "H": {
                "item": "ae2:logic_processor"
            },
            "I": {
                "tag": "ae2:illuminated_panel"
            }
        },
        "result": {
            "id": "ae2:terminal"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "     ",
            "ABCDE",
            "ABCDE",
            "ABCDE",
            "     "
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "ae2:charged_certus_quartz_crystal"
            },
            "B": {
                "tag": "c:circuits/ultimate"
            },
            "C": {
                "tag": "c:alloys/ultimate"
            },
            "D": {
                "item": "ae2:fluix_dust"
            },
            "E": {
                "item": "ae2:logic_processor"
            }
        },
        "result": {
            "id": "ae2:annihilation_core"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "     ",
            "ABCDE",
            "ABCDE",
            "ABCDE",
            "     "
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "actuallyadditions:black_quartz"
            },
            "B": {
                "tag": "c:circuits/ultimate"
            },
            "C": {
                "tag": "c:alloys/ultimate"
            },
            "D": {
                "item": "ae2:fluix_dust"
            },
            "E": {
                "item": "ae2:logic_processor"
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
});
