ServerEvents.recipes(event => {
    event.shaped({
        "pattern": [
            "ABA",
            "CCC",
            "AAA"
        ],
        "key": {
            "A": {
                "item": "modularbees:honey_jelly"
            },
            "B": {
                "tag": "c:waxes"
            },
            "C": {
                "tag": "immersiveengineering:treated_wood"
            }
        },
        "result": {
            "count": 2,
            "id": "modularbees:scented_plank"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AABAA",
            "AB BA",
            "CDEDC",
            "ACDCA",
            "AABAA"
        ],
        "key": {
            "A": {
                "tag": "c:iron_bars"
            },
            "B": {
                "tag": "c:fragments/wither_skull"
            },
            "C": {
                "item": "productivebees:obsidian_shard"
            },
            "D": {
                "item": "modular_machinery_reborn:casing_plain"
            },
            "E": {
                "tag": "minecraft:cauldrons"
            }
        },
        "result": {
            "id": "modularbees:modular_centrifuge_part"
        }
    });

    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
                "ingredient": {
                    "item": "immersiveengineering:graphite_electrode"
                }
            },
            {
                "amount": 12,
                "ingredient": {
                    "tag": "c:plates/copper"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "tag": "c:ingots/vivid_alloy"
                }
            },
            {
                "amount": 8,
                "ingredient": {
                    "tag": "c:plastics"
                }
            }
        ],
        "output": {
            "count": 1,
            "id": "modularbees:electrode_copper"
        }
    });

    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
                "amount": 2,
                "ingredient": {
                    "item": "modularbees:electrode_copper"
                }
            },
            {
                "amount": 12,
                "ingredient": {
                    "tag": "c:plates/iron"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "tag": "c:ingots/crystalline_alloy"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "tag": "c:plastics"
                }
            }
        ],
        "output": {
            "count": 1,
            "id": "modularbees:electrode_iron"
        }
    });

    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
                "amount": 2,
                "ingredient": {
                    "item": "modularbees:electrode_copper"
                }
            },
            {
                "amount": 12,
                "ingredient": {
                    "tag": "c:plates/gold"
                }
            },
            {
                "amount": 6,
                "ingredient": {
                    "tag": "c:ingots/crystalline_alloy"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "tag": "c:plastics"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "tag": "c:gems/emerald"
                }
            }
        ],
        "output": {
            "count": 1,
            "id": "modularbees:electrode_gold"
        }
    });
});