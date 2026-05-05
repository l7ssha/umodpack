ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 40000,
        "input": {
            "item": "enderio:dark_steel_bars"
        },
        "ingredients": [
            {
                "item": "pneumaticcraft:pressure_tube"
            },
            {
                "item": "pneumaticcraft:pressure_tube"
            },
            {
                "item": "pneumaticcraft:pressure_tube"
            },
            {
                "item": "pneumaticcraft:pressure_tube"
            },
            {
                "item": "pneumaticcraft:pressure_tube"
            }
        ],
        "result": {
            "id": "pneumaticcraft:drill_pipe"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AB BA",
            " CCC ",
            "CDEDC",
            "CFFFC",
            " CCC "
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "pneumaticcraft:gps_tool"
            },
            "B": {
                "tag": "pneumaticcraft:basic_drones"
            },
            "C": {
                "tag": "c:plastics"
            },
            "D": {
                "tag": "c:circuits/absolute"
            },
            "E": {
                "item": "ae2:cell_component_4k"
            },
            "F": {
                "item": "pneumaticcraft:air_canister"
            }
        },
        "result": {
            "id": "pneumaticcraft:amadron_tablet"
        }
    });

    event.custom({
        "type": "extendedae:crystal_assembler",
        "input_items": [
            {
                "amount": 7,
                "ingredient": {
                    "tag": "chipped:redstone_torch"
                }
            },
            {
                "amount": 7,
                "ingredient": {
                    "tag": "c:wires/electrum"
                }
            },
            {
                "amount": 5,
                "ingredient": {
                    "tag": "c:plastics"
                }
            }
        ],
        "output": {
            "count": 2,
            "id": "pneumaticcraft:empty_pcb"
        }
    });

    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "count": 3,
                "tag": "chipped:redstone_torch"
            },
            {
                "count": 6,
                "tag": "c:wires/electrum"
            },
            {
                "count": 2,
                "tag": "c:plastics"
            }
        ],
        "pressure": 1.5,
        "results": [
            {
                "count": 2,
                "id": "pneumaticcraft:empty_pcb"
            }
        ]
    });
});