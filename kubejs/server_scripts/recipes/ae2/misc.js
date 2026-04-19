ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
                "amount": 4,
                "ingredient": {
                    "tag": "c:plates/iron"
                }
            },
            {
                "amount": 3,
                "ingredient": {
                    "tag": "ae2:interface"
                }
            },
            {
                "amount": 3,
                "ingredient": {
                    "item": "ae2:crafting_accelerator"
                }

            },
            {
                "amount": 4,
                "ingredient": {
                    "tag": "c:plates/copper"
                }
            },
            {
                "amount": 6,
                "ingredient": {
                    "item": "ae2:engineering_processor"
                }
            },
            {
                "amount": 12,
                "ingredient": {
                    "item": "c:gems/amethyst"
                }
            }
        ],
        "output": {
            "count": 1,
            "id": "merequester:requester"
        }
    });
    
    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
                "amount": 2,
                "ingredient": {
                    "item": "merequester:requester"
                }
            },
            {
                "ingredient": {
                    "item": "extendedae:ex_pattern_provider"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "item": "ae2:engineering_processor"
                }
            },
            {
                "amount": 16,
                "ingredient": {
                    "item": "ae2:logic_processor"
                }

            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "extendedae:machine_frame"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "deepresonance:machine_frame"
                }
            }
        ],
        "output": {
            "count": 1,
            "id": "ae2_autorequester:autorequester"
        }
    });

    event.custom({
        "type": "malum:spirit_infusion",
        "extraInputs": [
            {
                "count": 2,
                "item": "stevescarts:component_graphical_interface"
            },
            {
                "count": 1,
                "item": "extendedae:oversize_interface"
            },
            {
                "count": 3,
                "item": "minecraft:writable_book"
            }
        ],
        "input": {
            "count": 1,
            "item": "ae2:advanced_card"
        },
        "result": {
            "count": 1,
            "id": "ae2tb:terminal_bookmark_interact_card"
        },
        "spirits": [
            {
                "type": "malum:eldritch",
                "count": 12
            }
        ]
    });

    event.custom({
        "type": "malum:spirit_infusion",
        "extraInputs": [
            {
                "count": 2,
                "item": "ae2:logic_processor_press"
            },
            {
                "count": 2,
                "item": "ae2:calculation_processor_press"
            },
            {
                "count": 2,
                "item": "ae2:engineering_processor_press"
            },
            {
                "count": 2,
                "item": "ae2:silicon_press"
            },
            {
                "count": 8,
                "tag": "c:sky_stones"
            },
        ],
        "input": {
            "count": 1,
            "item": "ae2:controller"
        },
        "result": {
            "count": 1,
            "id": "ae2:not_so_mysterious_cube"
        },
        "spirits": [
            {
                "type": "malum:eldritch",
                "count": 32
            }
        ]
    });
});