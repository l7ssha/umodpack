ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AA   AA",
            "A BBB A",
            " BCCCB ",
            " BCDCB ",
            " BCCCB ",
            "A BBB A",
            "AA   AA"
        ],
        "tier": 3,
        "key": {
            "A": {
                "item": "advanced_ae:quantum_structure"
            },
            "B": {
                "item": "neoecoae:computation_casing"
            },
            "C": {
                "item": "neoecoae:superconducting_processor"
            },
            "D": {
                "item": "advanced_ae:quantum_accelerator"
            }
        },
        "result": {
            "id": "neoecoae:computation_parallel_core_l4"
        }
    });

    event.custom({
        "type": "neoecoae:integrated_working_station",
        "energy": 160000,
        "inputItems": [
            {
                "count": 5,
                "item": "megacells:cell_component_4m"
            },
            {
                "count": 32,
                "item": "neoecoae:energized_superconductive_ingot"
            },
            {
                "count": 4,
                "item": "neoecoae:superconducting_processor"
            },
            {
                "count": 1,
                "item": "neoecoae:crystal_ingot"
            },
            {
                "count": 2,
                "tag": "c:circuits/absolute"
            }
        ],
        "itemOutput": {
            "count": 1,
            "id": "neoecoae:eco_cell_component_16m"
        }
    });

    event.custom({
        "type": "neoecoae:integrated_working_station",
        "energy": 640000,
        "inputItems": [
            {
                "count": 4,
                "item": "neoecoae:eco_cell_component_16m"
            },
            {
                "count": 64,
                "item": "neoecoae:energized_superconductive_ingot"
            },
            {
                "count": 4,
                "item": "neoecoae:superconducting_processor"
            },
            {
                "count": 1,
                "item": "neoecoae:crystal_matrix"
            },
            {
                "count": 8,
                "tag": "c:circuits/absolute"
            }
        ],
        "itemOutput": {
            "count": 1,
            "id": "neoecoae:eco_computation_cell_l4"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AA   AA",
            "A BBB A",
            " BCCCB ",
            " BCDCB ",
            " BCCCB ",
            "A BBB A",
            "AA   AA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "advanced_ae:quantum_structure"
            },
            "B": {
                "item": "neoecoae:computation_casing"
            },
            "C": {
                "item": "neoecoae:superconducting_processor"
            },
            "D": {
                "item": "advanced_ae:quantum_storage_128"
            }
        },
        "result": {
            "id": "neoecoae:computation_threading_core_l4"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAA AAA",
            "ABCCDDA",
            "ACEFBDA",
            " CF FC ",
            "ADBFECA",
            "ADDCCBA",
            "AAA AAA"
        ],
        "tier": 3,
        "key": {
            "A": {
                "item": "neoecoae:computation_casing"
            },
            "B": {
                "item": "extendedae:ex_drive"
            },
            "C": {
                "tag": "ae2:smart_dense_cable"
            },
            "D": {
                "item": "neoecoae:superconducting_processor"
            },
            "E": {
                "item": "ae2:crafting_monitor"
            },
            "F": {
                "item": "megacells:mega_crafting_unit"
            }
        },
        "result": {
            "id": "neoecoae:computation_drive"
        }
    });

    event.replaceInput(
        { id: /neoecoae:(computation_interface|input_hatch|output_hatch)/ },
        'ae2:interface',
        'extendedae:oversize_interface'
    );

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AABBBAA",
            "ACCCCCA",
            "BCDDDCB",
            "BCDEDCB",
            "BFDDDFB",
            "AFGGGFA",
            "AABBBAA"
        ],
        "tier": 3,
        "key": {
            "A": {
                "item": "neoecoae:computation_casing"
            },
            "B": {
                "item": "advanced_ae:quantum_structure"
            },
            "C": {
                "item": "pneumaticcraft:heat_sink"
            },
            "D": {
                "item": "immersiveengineering:thermoelectric_generator"
            },
            "E": {
                "item": "pneumaticcraft:thermostat_module"
            },
            "F": {
                "item": "evolvedmekanism:overclocked_mechanical_pipe"
            },
            "G": {
                "item": "neoecoae:superconducting_processor"
            }
        },
        "result": {
            "id": "neoecoae:computation_cooling_controller_l4"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AABAA",
            "ACDCA",
            "EFEFE",
            "ACDCA",
            "AABAA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "extendedae:assembler_matrix_frame"
            },
            "B": {
                "tag": "c:sky_stones"
            },
            "C": {
                "item": "neoecoae:black_tungsten_alloy_casing"
            },
            "D": {
                "item": "ae2:engineering_processor"
            },
            "E": {
                "item": "extendedae:concurrent_processor"
            },
            "F": {
                "item": "neoecoae:energized_fluix_crystal_block"
            }
        },
        "result": {
            "count": 2,
            "id": "neoecoae:crafting_casing"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "  A A  ",
            " A B A ",
            "ACDEDCA",
            " BE EB ",
            "ACDEDCA",
            " A B A ",
            "  A A  "
        ],
        "tier": 3,
        "key": {
            "A": {
                "item": "neoecoae:crafting_casing"
            },
            "B": {
                "item": "neoecoae:superconducting_processor"
            },
            "C": {
                "item": "advanced_ae:shattered_singularity"
            },
            "D": {
                "item": "extendedae:oversize_interface"
            },
            "E": {
                "item": "extendedae_plus:assembler_matrix_pattern_plus"
            }
        },
        "result": {
            "id": "neoecoae:crafting_pattern_bus"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "  A A  ",
            " AB BA ",
            "ACDEFCA",
            " GEDEG ",
            "ACFEDCA",
            " AB BA ",
            "  A A  "
        ],
        "tier": 3,
        "key": {
            "A": {
                "item": "neoecoae:crafting_casing"
            },
            "B": {
                "item": "advanced_ae:shattered_singularity"
            },
            "C": {
                "item": "neoecoae:superconducting_processor"
            },
            "D": {
                "item": "ae2:controller"
            },
            "E": {
                "item": "extendedae_plus:assembler_matrix_crafter_plus"
            },
            "F": {
                "item": "neoecoae:crafting_vent"
            },
            "G": {
                "item": "megacells:1m_crafting_storage"
            }
        },
        "result": {
            "id": "neoecoae:crafting_worker"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "  A A  ",
            " AB BA ",
            "ACDEDCA",
            "  E E  ",
            "ACDEDCA",
            " AB BA ",
            "  A A  "
        ],
        "tier": 3,
        "key": {
            "A": {
                "item": "neoecoae:crafting_casing"
            },
            "B": {
                "item": "advanced_ae:shattered_singularity"
            },
            "C": {
                "item": "neoecoae:superconducting_processor"
            },
            "D": {
                "item": "megacells:mega_crafting_accelerator"
            },
            "E": {
                "item": "extendedae_plus:assembler_matrix_speed_plus"
            }
        },
        "result": {
            "id": "neoecoae:crafting_parallel_core_l4"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " ABABA ",
            "ABCCCBA",
            "BCDDDCB",
            "ACDEDCA",
            "BCDDDCB",
            "ABCCCBA",
            " ABABA "
        ],
        "tier": 3,
        "key": {
            "A": {
                "item": "immersiveengineering:radiator"
            },
            "B": {
                "item": "neoecoae:crafting_casing"
            },
            "C": {
                "tag": "c:ices/blue"
            },
            "D": {
                "tag": "c:iron_bars"
            },
            "E": {
                "tag": "c:storage_blocks/certus_quartz"
            }
        },
        "result": {
            "id": "neoecoae:crafting_vent"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AABAA",
            "ABCBA",
            "CCDCC",
            "ABCBA",
            "AABAA"
        ],
        "key": {
            "A": {
                "item": "neoecoae:computation_casing"
            },
            "B": {
                "item": "neoecoae:energized_superconductive_ingot"
            },
            "C": {
                "tag": "ae2:smart_dense_cable"
            },
            "D": {
                "item": "extendedae:oversize_interface"
            }
        },
        "result": {
            "id": "neoecoae:computation_transmitter"
        }
    });
});