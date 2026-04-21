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

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "    A    ",
            "   ABA   ",
            "  ABBBA  ",
            " ACDEDCA ",
            " ACEDECA ",
            " ACDEDCA ",
            "  ABBBA  ",
            "   ABA   ",
            "    A    "
        ],
        "key": {
            "A": {
                "tag": "c:rods/treated_wood"
            },
            "B": {
                "tag": "c:gems/emerald"
            },
            "C": {
                "tag": "c:plates/diamond"
            },
            "D": {
                "tag": "c:paper"
            },
            "E": {
                "tag": "c:honeycombs"
            }
        },
        "result": {
            "count": 2,
            "id": "productivelib:upgrade_base"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAA  AA",
            "ABBCBBA",
            "ABDCDBA",
            "EEFGFEE",
            "EBHFHBE",
            "ABBEBBA",
            "AAAAAAA"
        ],
        "key": {
            "A": {
                "item": "modularbees:modular_centrifuge_part"
            },
            "B": {
                "tag": "c:plates/allthemodium"
            },
            "C": {
                "item": "pneumaticcraft:printed_circuit_board"
            },
            "D": {
                "tag": "c:circuits/supreme"
            },
            "E": {
                "tag": "advancednetherite:ingot/netherites_diamond"
            },
            "F": {
                "item": "productivebees:powered_centrifuge"
            },
            "G": {
                "item": "immersiveengineering:logic_unit"
            },
            "H": {
                "item": "productivelib:upgrade_entity_filter"
            }
        },
        "result": {
            "id": "modularbees:modular_centrifuge_core"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAAAA",
            "ABBBBBA",
            "ACDDDCA",
            "ACEEECA",
            "ACF FCA",
            "ABBGBBA",
            "AAAAAAA"
        ],
        "key": {
            "A": {
                "item": "modularbees:scented_plank"
            },
            "B": {
                "tag": "c:plates/allthemodium"
            },
            "C": {
                "tag": "c:iron_bars"
            },
            "D": {
                "item": "productivelib:upgrade_simulator"
            },
            "E": {
                "item": "productivetrees:advanced_alder_beehive"
            },
            "F": {
                "tag": "c:circuits/supreme"
            },
            "G": {
                "item": "productivelib:upgrade_adult"
            }
        },
        "result": {
            "id": "modularbees:modular_beehive_core"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AABAA",
            "ACDCA",
            "BD DB",
            "ACDCA",
            "AABAA"
        ],
        "key": {
            "A": {
                "item": "modularbees:scented_plank"
            },
            "B": {
                "item": "productivebees:wax_block"
            },
            "C": {
                "tag": "advancednetherite:ingot/netherites_diamond"
            },
            "D": {
                "tag": "c:iron_bars"
            }
        },
        "result": {
            "id": "modularbees:modular_beehive_part"
        }
    });
});