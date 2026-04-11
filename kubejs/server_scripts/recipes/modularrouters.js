ServerEvents.recipes(event => {
    event.shaped({
        "pattern": [
            "ABA",
            "BCB",
            "DDD"
        ],
        "key": {
            "A": {
                "tag": "c:paper"
            },
            "B": {
                "tag": "c:plastics"
            },
            "C": {
                "tag": "c:gems/redstone"
            },
            "D": {
                "tag": "c:nuggets/energetic_alloy"
            }
        },
        "result": {
            "count": 5,
            "id": "modularrouters:blank_module"
        }
    });

    event.shaped({
        "pattern": [
            "ABA",
            "CDC",
            "AEA"
        ],
        "key": {
            "A": {
                "tag": "c:plates/steel"
            },
            "B": {
                "item": "minecraft:ender_eye"
            },
            "C": {
                "item": "enderio:dark_steel_bars"
            },
            "D": {
                "tag": "c:circuits/ultimate"
            },
            "E": {
                "item": "stevescarts:component_advanced_pcb"
            }
        },
        "result": {
            "id": "modularrouters:modular_router"
        }
    });
});