ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 100000,
        "power_rate": 1600,
        "pattern": [
            "ABC",
            "CDB",
            "ACA"
        ],
        "key": {
            "A": {
                "tag": "c:ingots/iridium"
            },
            "B": {
                "tag": "c:ingots/copper"
            },
            "C": {
                "tag": "c:ingots/infused_entro"
            },
            "D": {
                "tag": "c:circuits/ultimate"
            }
        },
        "result": {
            "id": "extendedae:machine_frame"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 100000,
        "power_rate": 1600,
        "pattern": [
            "ABC",
            "ADE",
            "FFF"
        ],
        "key": {
            "A": {
                "tag": "c:dusts/ender_pearl"
            },
            "B": {
                "item": "actuallyadditions:phantom_booster"
            },
            "C": {
                "tag": "c:dusts/fluix"
            },
            "D": {
                "item": "appliedsoul:range_card"
            },
            "E": {
                "tag": "c:gems/certus_quartz"
            },
            "F": {
                "tag": "c:ingots/iron"
            }
        },
        "result": {
            "id": "ae2:wireless_booster"
        }
    });

    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
                "ingredient": {
                    "item": "megacells:mega_pattern_provider"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "pneumaticcraft:printed_circuit_board"
                }
            },
            {
                "amount": 3,
                "ingredient": {
                    "item": "avaritia:compressed_crafting_table"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "extendedae:concurrent_processor"
                }
            },
            {
                "amount": 12,
                "ingredient": {
                    "tag": "ae2:glass_cable"
                }
            }
        ],
        "output": {
            "count": 1,
            "id": "extendedae:ex_pattern_provider"
        }
    });

    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
                "amount": 6,
                "ingredient": {
                    "item": "ae2:molecular_assembler"
                }
            },
            {
                "amount": 6,
                "ingredient": {
                    "item": "extendedae:concurrent_processor"
                }
            },
            {
                "amount": 16,
                "ingredient": {
                    "tag": "c:dusts/fluix"
                }
            },
            {
                "amount": 3,
                "ingredient": {
                    "item": "ae2:engineering_processor"
                }
            },
            {
                "amount": 3,
                "ingredient": {
                    "item": "ae2:speed_card"
                }
            },
        ],
        "output": {
            "count": 1,
            "id": "extendedae:ex_molecular_assembler"
        }
    });

    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
                "ingredient": {
                    "item": "extendedae:machine_frame"
                }
            },
            {
                "amount": 6,
                "ingredient": {
                    "item": "extendedae:ex_molecular_assembler"
                }
            },
            {
                "amount": 16,
                "ingredient": {
                    "item": "ae2:logic_processor"
                }
            },
            {
                "amount": 48,
                "ingredient": {
                    "tag": "ae2:smart_cable"
                }
            }
        ],
        "output": {
            "count": 1,
            "id": "extendedae:assembler_matrix_crafter"
        }
    });

    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
                "ingredient": {
                    "item": "extendedae:machine_frame"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "extendedae:ex_pattern_provider"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "extendedae:concurrent_processor"
                }
            },
            {
                "amount": 48,
                "ingredient": {
                    "tag": "ae2:smart_cable"
                }
            }
        ],
        "output": {
            "count": 1,
            "id": "extendedae:assembler_matrix_pattern"
        }
    });

    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
                "ingredient": {
                    "item": "extendedae:machine_frame"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "mekanism:upgrade_speed"
                }
            },
            {
                "amount": 3,
                "ingredient": {
                    "item": "megacells:mega_crafting_accelerator"
                }

            },
            {
                "amount": 8,
                "ingredient": {
                    "item": "extendedae:concurrent_processor"
                }
            },
            {
                "amount": 48,
                "ingredient": {
                    "tag": "ae2:smart_cable"
                }
            }
        ],
        "output": {
            "count": 1,
            "id": "extendedae:assembler_matrix_speed"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 80000,
        "power_rate": 1000,
        "pattern": [
            "AB ",
            "CA ",
            "   "
        ],
        "key": {
            "A": {
                "tag": "ae2:pattern_provider"
            },
            "B": {
                "item": "extendedae:concurrent_processor"
            },
            "C": {
                "item": "megacells:accumulation_processor"
            }
        },
        "result": {
            "id": "megacells:mega_pattern_provider"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 100000,
        "power_rate": 1600,
        "pattern": [
            "AB ",
            "CA ",
            "   "
        ],
        "key": {
            "A": {
                "tag": "ae2:interface"
            },
            "B": {
                "item": "extendedae:concurrent_processor"
            },
            "C": {
                "item": "megacells:accumulation_processor"
            }
        },
        "result": {
            "id": "megacells:mega_interface"
        }
    });

    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
                "ingredient": {
                    "tag": "megacells:mega_interface"
                }
            },
            {
                "amount": 8,
                "ingredient": {
                    "item": "ae2:capacity_card"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "extendedae:concurrent_processor"
                }
            },
            {
                "amount": 12,
                "ingredient": {
                    "tag": "ae2:smart_cable"
                }
            }
        ],
        "output": {
            "count": 1,
            "id": "extendedae:ex_interface"
        }
    });

    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
                "ingredient": {
                    "tag": "extendedae:extended_interface"
                }
            },
            {
                "amount": 3,
                "ingredient": {
                    "item": "extendedae:ingredient_buffer"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "item": "extendedae:concurrent_processor"
                }
            },
            {
                "amount": 24,
                "ingredient": {
                    "tag": "ae2:smart_cable"
                }
            }
        ],
        "output": {
            "count": 1,
            "id": "extendedae:oversize_interface"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 100000,
        "power_rate": 1600,
        "pattern": [
            " AB",
            "CDA",
            "DC "
        ],
        "key": {
            "A": {
                "tag": "c:slime_balls"
            },
            "B": {
                "item": "sophisticatedstorage:super_packing_tape"
            },
            "C": {
                "tag": "c:paper"
            },
            "D": {
                "tag": "c:ingots/aluminum"
            }
        },
        "result": {
            "id": "extendedae:me_packing_tape"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AA AA",
            "ABABA",
            "CDEDC",
            "FEBEF",
            " FDF "
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "mekanism:hdpe_sheet"
            },
            "B": {
                "item": "mekanism:radioactive_waste_barrel"
            },
            "C": {
                "tag": "c:dusts/sky_dust"
            },
            "D": {
                "item": "ae2:cell_component_256k"
            },
            "E": {
                "item": "megacells:accumulation_processor"
            },
            "F": {
                "item": "ae2omnicells:charged_ender_ingot"
            }
        },
        "result": {
            "id": "megacells:radioactive_cell_component"
        }
    });

    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
                "ingredient": {
                    "item": "ae2:pattern_provider"
                }
            },
            {
                "amount": 8,
                "ingredient": {
                    "item": "ae2:logic_processor"
                }
            },
            {
                "amount": 16,
                "ingredient": {
                    "item": "stevescarts:component_advanced_pcb"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "tag": "c:circuits/absolute"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "advanced_ae:adv_pattern_encoder"
                }
            }
        ],
        "output": {
            "count": 1,
            "id": "advanced_ae:small_adv_pattern_provider"
        }
    });

    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
                "ingredient": {
                    "item": "extendedae:ex_pattern_provider"
                }
            },
            {
                "amount": 8,
                "ingredient": {
                    "item": "ae2:logic_processor"
                }
            },
            {
                "amount": 16,
                "ingredient": {
                    "item": "stevescarts:component_advanced_pcb"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "tag": "c:circuits/absolute"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "advanced_ae:adv_pattern_encoder"
                }
            }
        ],
        "output": {
            "count": 1,
            "id": "advanced_ae:adv_pattern_provider"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 100000,
        "power_rate": 1600,
        "pattern": [
            "ABA",
            "CDC",
            "ABA"
        ],
        "key": {
            "A": {
                "item": "ae2:charged_certus_quartz_crystal"
            },
            "B": {
                "tag": "c:dusts/redstone"
            },
            "C": {
                "item": "ae2:engineering_processor"
            },
            "D": {
                "tag": "c:circuits/absolute"
            }
        },
        "result": {
            "id": "advanced_ae:adv_pattern_encoder"
        }
    });

    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
                "amount": 4,
                "ingredient": {
                    "item": "extendedae:machine_frame"
                }
            },
            {
                "amount": 16,
                "ingredient": {
                    "tag": "ae2:smart_dense_cable"
                }
            },
            {
                "amount": 6,
                "ingredient": {
                    "item": "ae2:wireless_booster"
                }
            },
            {
                "amount": 12,
                "ingredient": {
                    "item": "ae2:quantum_ring"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "ae2:quantum_link"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "ae2:quantum_entangled_singularity"
                }
            }
        ],
        "output": {
            "count": 2,
            "id": "extendedae:wireless_connect"
        }
    });

    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
                "ingredient": {
                    "item": "extendedae:wireless_connect"
                }
            },
            {
                "amount": 32,
                "ingredient": {
                    "tag": "ae2:smart_cable"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "item": "ae2omnicells:complex_link_processor"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "item": "ae2omnicells:omni_link_processor"
                }
            },
            {
                "ingredient": {
                    "item": "ae2:wireless_access_point"
                }
            }
        ],
        "output": {
            "count": 1,
            "id": "extendedae:wireless_hub"
        }
    });

    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
                "amount": 4,
                "ingredient": {
                    "item": "ae2:crafting_accelerator"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "megacells:mega_crafting_unit"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "item": "ae2:logic_processor"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "item": "megacells:accumulation_processor"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "item": "megacells:accumulation_processor"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "tag": "c:circuits/absolute_overclocked"
                }
            },
            {
                "amount": 12,
                "ingredient": {
                    "tag": "ae2:glass_cable"
                }

            }
        ],
        "output": {
            "count": 1,
            "id": "megacells:mega_crafting_accelerator"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 80000,
        "power_rate": 2000,
        "pattern": [
            "ABA",
            "BCB",
            "ABA"
        ],
        "key": {
            "A": {
                "tag": "c:plates/signalum"
            },
            "B": {
                "item": "ae2:crafting_unit"
            },
            "C": {
                "item": "draconicevolution:draconium_core"
            }
        },
        "result": {
            "id": "megacells:mega_crafting_unit"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 5000000,
        "power_rate": 5000,
        "pattern": [
            "ABC",
            "DEB",
            "BDA"
        ],
        "key": {
            "A": {
                "tag": "c:plates/diamond"
            },
            "B": {
                "item": "re_endergy:capacitor_crystalline"
            },
            "C": {
                "item": "draconicevolution:draconium_core"
            },
            "D": {
                "tag": "c:circuits/elite"
            },
            "E": {
                "item": "extendedae:machine_frame"
            }
        },
        "result": {
            "count": 2,
            "id": "extendedae:assembler_matrix_frame"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABABA",
            "BCDCB",
            "ADEDA",
            "BCDCB",
            "ABABA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:ingots/entro"
            },
            "B": {
                "item": "enderio:end_steel_bars"
            },
            "C": {
                "tag": "c:gems/fluix"
            },
            "D": {
                "tag": "c:storage_blocks/quartz"
            },
            "E": {
                "tag": "c:plates/diamond"
            }
        },
        "result": {
            "count": 5,
            "id": "extendedae:assembler_matrix_wall"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABABA",
            "BCDCB",
            "ADEDA",
            "BCDCB",
            "ABABA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:ingots/entro"
            },
            "B": {
                "item": "enderio:end_steel_bars"
            },
            "C": {
                "tag": "c:gems/fluix"
            },
            "D": {
                "item": "ae2:quartz_vibrant_glass"
            },
            "E": {
                "item": "avaritia_integration:blaze_cube_double_plate"
            }
        },
        "result": {
            "count": 6,
            "id": "extendedae:assembler_matrix_glass"
        }
    });

    event.shaped({
        "pattern": [
            " A ",
            "ABC",
            " D "
        ],
        "key": {
            "A": {
                "item": "minecraft:name_tag"
            },
            "B": {
                "item": "extendedae_plus:wireless_transceiver"
            },
            "C": {
                "item": "mekanism:dictionary"
            },
            "D": {
                "item": "mekanism:network_reader"
            }
        },
        "result": {
            "id": "extendedae_plus:labeled_wireless_transceiver"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "  A  ",
            " ABA ",
            "ACDC ",
            " ACE ",
            "  A  "
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:plastics"
            },
            "B": {
                "item": "ae2:portable_item_cell_4k"
            },
            "C": {
                "item": "ae2:advanced_card"
            },
            "D": {
                "item": "ae2:condenser"
            },
            "E": {
                "item": "cataclysm:void_core"
            }
        },
        "result": {
            "id": "extendedae:void_cell"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AB ",
            "ACD",
            "AAE"
        ],
        "tier": 1,
        "key": {
            "A": {
                "tag": "ae2:smart_cable"
            },
            "B": {
                "item": "extendedae:tag_export_bus"
            },
            "C": {
                "item": "extendedae:assembler_matrix_wall"
            },
            "D": {
                "item": "mekanism:configuration_card"
            },
            "E": {
                "tag": "c:circuits/supreme_quantum"
            }
        },
        "result": {
            "id": "extendedae_plus:assembler_matrix_upload_core"
        }
    });

    event.custom({
        "type": "appgen:synthesizing",
        "input_energy": 1000000,
        "input_fluid": {
            "amount": 4000,
            "ingredient": {
                "fluid": "pneumaticcraft:plastic"
            }
        },
        "input_items": [
            {
                "amount": 4,
                "ingredient": {
                    "item": "extendedae_plus:256x_crafting_accelerator"
                }
            },
            {
                "amount": 8,
                "ingredient": {
                    "item": "ae2:speed_card"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "ae2:spatial_cell_component_16"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "item": "mekanism:upgrade_speed"
                }
            }
        ],
        "output": {
            "#": 1,
            "#t": "ae2:i",
            "id": "extendedae_plus:entity_speed_card",
            "components": {
                "minecraft:custom_data": {
                    "EAS:mult": 2
                }
            },
            "type": "neoforge:components"
        }
    });

    event.custom({
        "type": "advanced_ae:reaction",
        "input_energy": 4000000,
        "input_fluid": {
            "amount": 3000,
            "ingredient": {
                "fluid": "justdirethings:refined_t4_fluid_source"
            }
        },
        "input_items": [
            {
                "amount": 5,
                "ingredient": {
                    "items": "extendedae_plus:entity_speed_card",
                    "components": {
                        "minecraft:custom_data": {
                            "EAS:mult": 2
                        }
                    },
                    "type": "neoforge:components"
                }
            },
            {
                "amount": 3,
                "ingredient": {
                    "item": "ae2:spatial_cell_component_128"
                }
            },
            {
                "amount": 3,
                "ingredient": {
                    "item": "extendedae_plus:1024x_crafting_accelerator"
                }
            },
            {
                "amount": 3,
                "ingredient": {
                    "item": "ae2:dense_energy_cell"
                }
            }
        ],
        "output": {
            "#": 1,
            "#t": "ae2:i",
            "id": "extendedae_plus:entity_speed_card",
            "components": {
                "minecraft:custom_data": {
                    "EAS:mult": 4
                }
            },
            "type": "neoforge:components"
        }
    });

    event.custom({
        "type": "advanced_ae:reaction",
        "input_energy": 40000000,
        "input_fluid": {
            "amount": 4000,
            "ingredient": {
                "fluid": "avaritia_integration:void_matter_source"
            }
        },
        "input_items": [
            {
                "amount": 5,
                "ingredient": {
                    "items": "extendedae_plus:entity_speed_card",
                    "components": {
                        "minecraft:custom_data": {
                            "EAS:mult": 4
                        }
                    },
                    "type": "neoforge:components"
                }
            },
            {
                "amount": 8,
                "ingredient": {
                    "item": "ae2:spatial_cell_component_128"
                }
            },
            {
                "amount": 8,
                "ingredient": {
                    "item": "extendedae_plus:1024x_crafting_accelerator"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "megacells:mega_energy_cell"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "items": "ifeu:speed_addon_6",
                    "components": {
                        "titanium:augments": {
                            "Speed": 7.0
                        }
                    },
                    "type": "neoforge:components"
                }
            }
        ],
        "output": {
            "#": 1,
            "#t": "ae2:i",
            "id": "extendedae_plus:entity_speed_card",
            "components": {
                "minecraft:custom_data": {
                    "EAS:mult": 8
                }
            },
            "type": "neoforge:components"
        }
    });
});