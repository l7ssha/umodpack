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
                    "item": "extendedae:assembler_matrix_wall"
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
                    "item": "extendedae:assembler_matrix_wall"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "tag": "extendedae:ext_pattern_provider"
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
                    "item": "extendedae:assembler_matrix_wall"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "extendedae:ex_pattern_provider"
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
                    "item": "ae2omnicells:multidimensional_expansion_processor"
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
});