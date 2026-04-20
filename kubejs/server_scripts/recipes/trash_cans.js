 n ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "BC CB",
            "BCDCB",
            "BCCCB",
            "BBBBB"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:plates/steel"
            },
            "B": {
                "tag": "pneumaticcraft:reinforced_stone"
            },
            "C": {
                "item": "extendedae:ingredient_buffer"
            },
            "D": {
                "item": "ae2:singularity"
            }
        },
        "result": {
            "id": "trashcans:item_trash_can"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "B   B",
            "BCDCB",
            "BCCCB",
            "BBBBB"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:plates/steel"
            },
            "B": {
                "tag": "pneumaticcraft:reinforced_stone"
            },
            "C": {
                "item": "mob_grinding_utils:jumbo_tank"
            },
            "D": {
                "item": "ae2:singularity"
            }
        },
        "result": {
            "id": "trashcans:liquid_trash_can"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "B   B",
            "BCDCB",
            "BCCCB",
            "BBBBB"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:plates/steel"
            },
            "B": {
                "tag": "pneumaticcraft:reinforced_stone"
            },
            "C": {
                "item": "mekanism:basic_energy_cube"
            },
            "D": {
                "item": "ae2:singularity"
            }
        },
        "result": {
            "id": "trashcans:energy_trash_can"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "     ",
            "     ",
            "ABCBD",
            "     ",
            "     "
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "trashcans:liquid_trash_can"
            },
            "B": {
                "item": "ae2:quantum_entangled_singularity"
            },
            "C": {
                "item": "trashcans:item_trash_can"
            },
            "D": {
                "item": "trashcans:energy_trash_can"
            }
        },
        "result": {
            "id": "trashcans:ultimate_trash_can"
        }
    });
});