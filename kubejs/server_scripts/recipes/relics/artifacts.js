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

    event.custom({
        "type": "malum:spirit_infusion",
        "extraInputs": [
            {
                "count": 12,
                "tag": "c:ingots/allthemodium"
            },
            {
                "count": 12,
                "item": "reliquary:fertile_essence"
            },
            {
                "count": 4,
                "item": "ae2:singularity"
            }
        ],
        "input": {
            "count": 1,
            "item": "minecraft:beef"
        },
        "result": {
            "count": 1,
            "id": "artifacts:everlasting_beef"
        },
        "spirits": [
            {
                "type": "malum:sacred",
                "count": 6
            },
            {
                "type": "malum:earthen",
                "count": 24
            }
        ]
    });

    event.custom({
        "type": "aether:enchanting",
        "category": "enchanting_misc",
        "cookingtime": 4800,
        "experience": 1.0,
        "ingredient": {
            "item": "artifacts:everlasting_beef"
        },
        "result": {
            "count": 1,
            "id": "artifacts:eternal_steak"
        }
    });

    event.custom({
        "type": "malum:spirit_infusion",
        "extraInputs": [
            {
                "items": "minecraft:potion",
                "components": {
                    "minecraft:potion_contents": {
                        "potion": "minecraft:night_vision"
                    }
                },
                "type": "neoforge:components"
            },
            {
                "count": 4,
                "tag": "c:ingots/refined_glowstone"
            },
            {
                "count": 1,
                "item": "reliquary:nebulous_heart"
            }
        ],
        "input": {
            "count": 1,
            "item": "mekanismtools:steel_helmet"
        },
        "result": {
            "count": 1,
            "id": "artifacts:night_vision_goggles"
        },
        "spirits": [
            {
                "type": "malum:arcane",
                "count": 12
            },
            {
                "type": "malum:aerial",
                "count": 8
            }
        ]
    });

    event.custom({
        "type": "malum:spirit_infusion",
        "extraInputs": [
            {
                "count": 1,
                "item": "irons_spellbooks:lightning_bottle"
            },
            {
                "count": 8,
                "item": "extendedcrafting:redstone_ingot"
            },
            {
                "count": 1,
                "item": "draconicevolution:dragon_heart"
            },
            {
                "count": 12,
                "item": "occultism:amethyst_dust"
            },
            {
                "count": 2,
                "item": "minecraft:red_dye"
            },
        ],
        "input": {
            "count": 1,
            "item": "alltheores:silver_ingot"
        },
        "result": {
            "count": 1,
            "id": "artifacts:crystal_heart"
        },
        "spirits": [
            {
                "type": "malum:infernal",
                "count": 24
            },
            {
                "type": "malum:arcane",
                "count": 8
            }, {
                "type": "malum:sacred",
                "count": 2
            }
        ]
    });

});
