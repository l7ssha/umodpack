ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AA   AA",
            "AB   BA",
            "  CBC  ",
            "  B B  ",
            "  CBC  ",
            "AB   BA",
            "AA   AA"
        ],
        "tier": 3,
        "key": {
            "A": {
                "tag": "c:plastics"
            },
            "B": {
                "item": "avaritia:compressed_crafting_table"
            },
            "C": {
                "item": "industrialforegoing:machine_frame_pity"
            }
        },
        "result": {
            "id": "ifeu:precision_crafting_table"
        }
    });

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "tag": "c:plastics"
            },
            {
                "tag": "c:plastics"
            },
            {
                "tag": "industrialforegoing:machine_frame/supreme"
            },
            {
                "tag": "c:gears/unobtainium"
            },
            {
                "tag": "c:gears/unobtainium"
            },
            {
                "item": "ae2:sky_stone_tank"
            },
            {
                "item": "enderio:pressurized_fluid_tank"
            },
            {
                "tag": "c:plates/platinum"
            }
        ],
        "inputFluid": {
            "amount": 3000,
            "fluid": "industrialforegoing:pink_slime"
        },
        "output": {
            "count": 1,
            "id": "ifeu:fluid_crafting_table"
        },
        "processingTime": 600
    });

    event.custom({
        "neoforge:conditions": [
            {
                "type": "neoforge:item_exists",
                "item": "ifeu:ultimate_machine_frame"
            }
        ],
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "tag": "c:circuits/infinite"
            },
            {
                "tag": "industrialforegoing:machine_frame/supreme"
            },
            {
                "tag": "c:circuits/infinite"
            },
            {
                "item": "ifeu:dragon_star_block"
            },
            {
                "item": "ifeu:dragon_star_block"
            },
            {
                "item": "draconicevolution:celestial_manipulator"
            },
            {
                "tag": "c:gears/sculk"
            },
            {
                "item": "draconicevolution:celestial_manipulator"
            }
        ],
        "inputFluid": {
            "amount": 8000,
            "fluid": "ifeu:liquid_sculk_matter"
        },
        "output": {
            "count": 1,
            "id": "ifeu:ultimate_machine_frame"
        },
        "outputFluid": {
            "amount": 8000,
            "id": "minecraft:water"
        },
        "processingTime": 1200
    });
});
