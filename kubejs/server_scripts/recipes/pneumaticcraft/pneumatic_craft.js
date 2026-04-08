ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAB",
            "BCDEE",
            "BCEEC",
            "BEEDC",
            "BAAAB"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "pneumaticcraft:reinforced_stone_slab"
            },
            "B": {
                "item": "pneumaticcraft:reinforced_stone"
            },
            "C": {
                "item": "pneumaticcraft:small_tank"
            },
            "D": {
                "item": "pneumaticcraft:reinforced_chest"
            },
            "E": {
                "item": "pneumaticcraft:pressure_tube"
            }
        },
        "result": {
            "id": "pneumaticcraft:thermopneumatic_processing_plant"
        }
    });

    event.custom({
        "type": "advanced_ae:reaction",
        "input_energy": 2000000,
        "input_fluid": {
            "amount": 500,
            "ingredient": {
                "fluid": "pneumaticcraft:etching_acid"
            }
        },
        "input_items": [
            {
                "amount": 5,
                "ingredient": {
                    "item": "pneumaticcraft:printed_circuit_board"
                }
            },
            {
                "amount": 8,
                "ingredient": {
                    "tag": "c:plastics"
                }
            },
            {
                "amount": 8,
                "ingredient": {
                    "tag": "c:dusts/ruby"
                }
            },
            {
                "amount": 16,
                "ingredient": {
                    "tag": "c:dusts/lapis"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "tag": "c:dusts/ember"
                }
            }
        ],
        "output": {
            "#": 3,
            "#t": "ae2:i",
            "id": "pneumaticcraft:module_expansion_card"
        }
    });
});