ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABCBA",
            "BDEDB",
            "CEFEC",
            "BDEDB",
            "ABCBA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:plastics"
            },
            "B": {
                "item": "ae2:cell_component_1k"
            },
            "C": {
                "item": "advanced_ae:quantum_processor"
            },
            "D": {
                "item": "ae2omnicells:omni_link_processor"
            },
            "E": {
                "item": "ae2omnicells:ender_ingot"
            },
            "F": {
                "item": "advanced_ae:quantum_storage_component"
            }
        },
        "result": {
            "id": "ae2omnicells:omni_cell_component_1k"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABCBA",
            "BDEDB",
            "CEFEC",
            "BDEDB",
            "ABCBA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:plastics"
            },
            "B": {
                "item": "ae2:cell_component_1k"
            },
            "C": {
                "item": "advanced_ae:quantum_processor"
            },
            "D": {
                "item": "ae2omnicells:complex_link_processor"
            },
            "E": {
                "item": "ae2omnicells:charged_ender_ingot"
            },
            "F": {
                "item": "advanced_ae:quantum_storage_component"
            }
        },
        "result": {
            "id": "ae2omnicells:complex_omni_cell_component_1k"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAB   BAA",
            "ACCBBBCCA",
            " CDEBEDC ",
            "  EFGFE  ",
            " BBGHGBB ",
            "  EFGFE  ",
            " CDEBEDC ",
            "ACCBBBCCA",
            "AAB   BAA"
        ],
        "tier": 4,
        "key": {
            "A": {
                "item": "ae2:quartz_glass"
            },
            "B": {
                "tag": "ae2:smart_dense_cable"
            },
            "C": {
                "item": "ae2omnicells:charged_ender_ingot"
            },
            "D": {
                "item": "ae2omnicells:omni_cell_component_1k"
            },
            "E": {
                "item": "ae2omnicells:multidimensional_expansion_processor"
            },
            "F": {
                "item": "ae2omnicells:complex_omni_cell_component_1k"
            },
            "G": {
                "item": "advanced_ae:quantum_storage_component"
            },
            "H": {
                "tag": "c:circuits/infinite_multiversal"
            }
        },
        "result": {
            "id": "ae2omnicells:quantum_omni_cell_component_1k"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AABAA",
            "ABCBA",
            "BCDCB",
            "ABCBA",
            "AABAA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:pellets/antimatter"
            },
            "B": {
                "item": "ae2omnicells:spent_nuclear_waste_singularity"
            },
            "C": {
                "item": "mekanism:radioactive_waste_barrel"
            },
            "D": {
                "item": "ae2omnicells:quantum_omni_cell_component_256m"
            }
        },
        "result": {
            "id": "ae2omnicells:spent_nuclear_waste_component"
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
                "item": "ae2omnicells:ender_ingot"
            },
            {
                "item": "ae2omnicells:ender_ingot"
            },
            {
                "item": "ae2omnicells:ender_ingot"
            },
            {
                "item": "ae2omnicells:ender_ingot"
            }
        ],
        "result": {
            "id": "ae2omnicells:type_fuzzy_card"
        }
    });
});