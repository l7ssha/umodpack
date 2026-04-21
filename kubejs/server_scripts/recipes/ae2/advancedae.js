ServerEvents.recipes(event => {
    event.custom({
        "type": "advanced_ae:reaction",
        "input_energy": 100000000,
        "input_fluid": {
            "amount": 3000,
            "ingredient": {
                "fluid": "advanced_ae:quantum_infusion_source"
            }
        },
        "input_items": [
            {
                "amount": 11,
                "ingredient": {
                    "item": "advanced_ae:quantum_alloy"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "tag": "c:ingots/eclipsealloy"
                }
            },
            {
                "ingredient": {
                    "item": "extendedcrafting:ender_star"
                }
            }
        ],
        "output": {
            "#": 1,
            "#t": "ae2:i",
            "id": "advanced_ae:quantum_alloy_plate"
        }
    });

    event.custom({
        "type": "advanced_ae:reaction",
        "input_energy": 20000000,
        "input_fluid": {
            "amount": 4000,
            "ingredient": {
                "fluid": "minecraft:lava"
            }
        },
        "input_items": [
            {
                "amount": 3,
                "ingredient": {
                    "item": "ae2:singularity"
                }
            },
            {
                "amount": 6,
                "ingredient": {
                    "tag": "c:ingots/enderium"
                }
            },
            {
                "amount": 32,
                "ingredient": {
                    "item": "ae2:sky_dust"
                }
            }
        ],
        "output": {
            "#": 2,
            "#t": "ae2:i",
            "id": "advanced_ae:shattered_singularity"
        }
    });

    event.custom({
        "type": "advanced_ae:reaction",
        "input_energy": 1000000,
        "input_fluid": {
            "amount": 2500,
            "ingredient": {
                "fluid": "advanced_ae:quantum_infusion_source"
            }
        },
        "input_items": [
            {
                "amount": 16,
                "ingredient": {
                    "tag": "c:ingots/sky_osmium"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "item": "kubejs:abbysal_alloy"
                }
            },
            {
                "amount": 9,
                "ingredient": {
                    "item": "advanced_ae:shattered_singularity"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "item": "ae2omnicells:charged_ender_ingot"
                }
            }
        ],
        "output": {
            "#": 3,
            "#t": "ae2:i",
            "id": "advanced_ae:quantum_alloy"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABCBA",
            "ADECA",
            "FGHDF",
            "AGGIA",
            "AAFAA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:plates/invar"
            },
            "B": {
                "item": "immersiveengineering:chute_steel"
            },
            "C": {
                "item": "minecraft:sticky_piston"
            },
            "D": {
                "tag": "c:circuits/absolute_overclocked"
            },
            "E": {
                "item": "ae2:molecular_assembler"
            },
            "F": {
                "item": "mekanism:steel_casing"
            },
            "G": {
                "item": "extendedae:machine_frame"
            },
            "H": {
                "item": "appflux:energy_processor"
            },
            "I": {
                "item": "ae2:sky_stone_tank"
            }
        },
        "result": {
            "id": "extendedae:crystal_assembler"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AABAA",
            "CDEBC",
            "CFGEC",
            "HFFDH",
            "AACAA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:plates/allthemodium"
            },
            "B": {
                "item": "ae2:sky_stone_tank"
            },
            "C": {
                "tag": "c:plates/nickel"
            },
            "D": {
                "item": "ae2:condenser"
            },
            "E": {
                "tag": "c:circuits/supreme_quantum"
            },
            "F": {
                "item": "mekanism:steel_casing"
            },
            "G": {
                "item": "extendedae:crystal_assembler"
            },
            "H": {
                "tag": "c:plates/invar"
            }
        },
        "result": {
            "id": "advanced_ae:reaction_chamber"
        }
    });

    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
                "ingredient": {
                    "item": "ae2:wireless_receiver"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "tag": "c:ingots/iron"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "ae2:calculation_processor"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "ae2:quantum_entangled_singularity"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "twilightforest:carminite"
                }
            }
        ],
        "output": {
            "count": 1,
            "id": "extendedae_plus:mirror_pattern_binding_tool"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "  A  ",
            " BCB ",
            "ACDCA",
            " BCB ",
            "  A  "
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "advanced_ae:quantum_unit"
            },
            "B": {
                "item": "extendedae:concurrent_processor"
            },
            "C": {
                "item": "advanced_ae:shattered_singularity"
            },
            "D": {
                "item": "megacells:mega_crafting_accelerator"
            }
        },
        "result": {
            "id": "advanced_ae:quantum_accelerator"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "A BCC",
            " CACC",
            "BDEDB",
            "CCAC ",
            "CCB A"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "advanced_ae:shattered_singularity"
            },
            "B": {
                "item": "megacells:cell_component_4m"
            },
            "C": {
                "item": "advanced_ae:quantum_unit"
            },
            "D": {
                "item": "advanced_ae:quantum_storage_component"
            },
            "E": {
                "item": "megacells:1m_crafting_storage"
            }
        },
        "result": {
            "id": "advanced_ae:quantum_storage_128"
        }
    });
});