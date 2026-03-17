ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABBBA",
            "BCCCB",
            "ADDDA",
            "BEEEB",
            "BFFFB"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:storage_blocks/osmium"
            },
            "B": {
                "item": "mekanism:dynamic_tank"
            },
            "C": {
                "tag": "c:circuits/absolute"
            },
            "D": {
                "item": "mekanism:upgrade_filter"
            },
            "E": {
                "item": "enderio:basic_fluid_filter"
            },
            "F": {
                "item": "mekanism_extras:advanced_electric_pump"
            }
        },
        "result": {
            "id": "mekanismelements:seawater_pump"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AABAA",
            "CBBBC",
            "CDDDC",
            "EFBFE",
            "EEEEE"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "mekanism:hdpe_sheet"
            },
            "B": {
                "item": "enderio:end_steel_bars"
            },
            "C": {
                "tag": "c:circuits/supreme"
            },
            "D": {
                "item": "mekmm:ambient_gas_collector"
            },
            "E": {
                "item": "mekanism:dynamic_tank"
            },
            "F": {
                "item": "pneumaticcraft:flux_compressor"
            }
        },
        "result": {
            "id": "mekanismelements:air_compressor"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "BCDCB",
            "ECDCE",
            "EBBBE",
            "BEEEB"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "enderio:end_steel_bars"
            },
            "B": {
                "item": "mekanism:hdpe_sheet"
            },
            "C": {
                "item": "mekmm:ultimate_max_chemical_tank"
            },
            "D": {
                "item": "mekanism:steel_casing"
            },
            "E": {
                "item": "mekanism:dynamic_tank"
            }
        },
        "result": {
            "id": "mekmm:ambient_gas_collector"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " ABACA ",
            "ABDADCA",
            "ADBDCDA",
            "AEFDFEA",
            "AEFDFEA",
            "AEFDFEA",
            "AAEEEAA"
        ],
        "tier": 3,
        "key": {
            "A": {
                "item": "alltheores:lead_plate"
            },
            "B": {
                "item": "mekanism_extras:absolute_control_circuit"
            },
            "C": {
                "item": "mekanism_extras:supreme_control_circuit"
            },
            "D": {
                "item": "immersiveengineering:dust_coke"
            },
            "E": {
                "item": "mekanism:hdpe_sheet"
            },
            "F": {
                "item": "mekanism:isotopic_centrifuge"
            }
        },
        "result": {
            "id": "mekanismelements:adsorption_separator"
        }
    });

    event.custom({
        "type": "mekanism:crystallizing",
        "input": {
            "amount": 200,
            "chemical": "mekanismelements:yttrium"
        },
        "output": {
            "count": 1,
            "id": "mekanismelements:dust_yttrium"
        }
    });
});