ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 30000,
        "power_rate": 200,
        "pattern": [
            "  A",
            "BCA",
            "BD "
        ],
        "key": {
            "A": {
                "item": "immersiveengineering:wooden_grip"
            },
            "B": {
                "item": "immersiveengineering:component_iron"
            },
            "C": {
                "item": "actuallyadditions:drill_core"
            },
            "D": {
                "item": "immersiveengineering:heavy_engineering"
            }
        },
        "result": {
            "id": "immersiveengineering:drill"
        }
    });

    event.custom({
        "type": "immersiveengineering:crusher",
        "energy": 1600,
        "input": {
            "item": "jitl:sulphur_rock"
        },
        "result": {
            "id": "alltheores:sulfur"
        },
        "secondaries": [
            {
                "chance": 0.2,
                "output": {
                    "item": "minecraft:gravel"
                }
            }
        ]
    });

    event.custom({
        "type": "immersiveengineering:crusher",
        "energy": 1600,
        "input": {
            "item": "jitl:volcanic_soil"
        },
        "result": {
            "id": "minecraft:soul_sand"
        },
        "secondaries": [
            {
                "chance": 0.1,
                "output": {
                    "item": "minecraft:blaze_powder"
                }
            },
            {
                "chance": 0.1,
                "output": {
                    "item": "cataclysm:burning_ashes"
                }
            }
        ]
    });
});