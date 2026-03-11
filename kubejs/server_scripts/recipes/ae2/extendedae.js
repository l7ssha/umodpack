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
                "tag": "c:ingots/iron"
            },
            "B": {
                "tag": "c:ingots/copper"
            },
            "C": {
                "tag": "c:ingots/infused_entro"
            },
            "D": {
                "tag": "c:circuits/advanced"
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
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AB  B",
            "BACC ",
            " CDC ",
            " CCAB",
            "B  BA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "ae2:capacity_card"
            },
            "B": {
                "tag": "ae2:smart_cable"
            },
            "C": {
                "tag": "c:plastics"
            },
            "D": {
                "item": "extendedae:ex_pattern_provider"
            }
        },
        "result": {
            "id": "expandedae:exp_pattern_provider"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AB  B",
            "BACC ",
            " C C ",
            " CCAB",
            "B  BA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "ae2:capacity_card"
            },
            "B": {
                "tag": "ae2:smart_cable"
            },
            "C": {
                "tag": "c:plastics"
            }
        },
        "result": {
            "id": "expandedae:exp_pattern_provider_upgrade"
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 160000,
        "input": {
            "item": "ae2:advanced_card"
        },
        "ingredients": [
            {
                "item": "ae2:speed_card"
            },
            {
                "item": "ae2:calculation_processor"
            },
            {
                "item": "ae2:calculation_processor"
            },
            {
                "item": "ae2:speed_card"
            },
            {
                "item": "ae2:speed_card"
            },
            {
                "item": "ae2:speed_card"
            },
            {
                "item": "ae2:speed_card"
            },
            {
                "item": "ae2:speed_card"
            },
            {
                "item": "ae2:speed_card"
            },
            {
                "item": "ae2:speed_card"
            },
            {
                "item": "ae2:speed_card"
            },
            {
                "item": "ae2:speed_card"
            },
            {
                "item": "ae2:speed_card"
            },
            {
                "item": "ae2:speed_card"
            }
        ],
        "result": {
            "id": "expandedae:greater_accel_card"
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 150000,
        "input": {
            "item": "ae2:advanced_card"
        },
        "ingredients": [
            {
                "item": "ae2:logic_processor"
            },
            {
                "item": "ae2:logic_processor"
            },
            {
                "item": "ae2:engineering_processor"
            },
            {
                "item": "ae2:engineering_processor"
            },
            {
                "item": "ae2:crafting_card"
            },
            {
                "item": "ae2:crafting_card"
            },
            {
                "item": "ae2:crafting_card"
            }
        ],
        "result": {
            "id": "expandedae:auto_complete_card"
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
                "amount": 4,
                "ingredient": {
                    "item": "extendedae:ex_molecular_assembler"
                }
            },
            {
                "amount": 2,
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
                    "tag": "expandedae:expanded_pattern_provider"
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
                    "item": "expandedae:greater_accel_card"
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
                "tag": "extendedae:extended_pattern_provider"
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
                "tag": "c:slimeballs"
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
});