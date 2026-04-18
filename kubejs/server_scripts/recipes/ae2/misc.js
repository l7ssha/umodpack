ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
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
});