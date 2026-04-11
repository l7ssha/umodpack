ServerEvents.recipes(event => {
    event.custom({
        "type": "malum:spirit_infusion",
        "extraInputs": [
            {
                "count": 1,
                "items": "minecraft:enchanted_book",
                "components": {
                    "minecraft:stored_enchantments": {
                        "levels": {
                            "minecraft:swift_sneak": 1
                        }
                    }
                },
                "type": "neoforge:components"
            },
            {
                "count": 1,
                "items": "reliquary:potion",
                "components": {
                    "minecraft:potion_contents": {
                        "custom_effects": [
                            {
                                "id": "minecraft:speed",
                                "show_icon": true,
                                "neoforge:cures": [
                                    "milk",
                                    "protected_by_totem"
                                ],
                                "amplifier": 2,
                                "duration": 3000
                            }
                        ]
                    }
                },
                "type": "neoforge:components"
            },
            {
                "count": 6,
                "item": "minecraft:red_carpet"
            },
            {
                "count": 1,
                "item": "reliquary:nebulous_heart"
            },
            {
                "count": 1,
                "item": "reliquary:bat_wing"
            }
        ],
        "input": {
            "count": 1,
            "item": "minecraft:leather_boots"
        },
        "result": {
            "count": 1,
            "id": "artifacts:running_shoes"
        },
        "spirits": [
            {
                "type": "malum:aerial",
                "count": 24
            },
            {
                "type": "malum:earthen",
                "count": 4
            }
        ]
    });

    event.custom({
        "type": "malum:spirit_infusion",
        "extraInputs": [
            {
                "items": "minecraft:potion",
                "components": {
                    "minecraft:potion_contents": {
                        "potion": "minecraft:leaping"
                    }
                },
                "type": "neoforge:components"
            },
            {
                "count": 6,
                "item": "minecraft:rabbit_foot"
            },
            {
                "count": 3,
                "item": "minecraft:rabbit_hide"
            },
            {
                "count": 1,
                "item": "reliquary:nebulous_heart"
            }
        ],
        "input": {
            "count": 1,
            "item": "minecraft:leather_boots"
        },
        "result": {
            "count": 1,
            "id": "artifacts:bunny_hoppers"
        },
        "spirits": [
            {
                "type": "malum:aerial",
                "count": 24
            },
            {
                "type": "malum:earthen",
                "count": 4
            }
        ]
    });
});