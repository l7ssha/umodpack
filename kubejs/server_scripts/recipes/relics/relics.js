ServerEvents.recipes(event => {
        event.custom({
        "type": "malum:spirit_infusion",
        "extraInputs": [
            {
                "count": 2,
                "item": "advancednetherite:netherite_iron_ingot"
            },
            {
                "count": 4,
                "item": "minecraft:gold_ingot"
            },
            {
                "count": 6,
                "item": "minecraft:brown_carpet"
            },
            {
                "count": 24,
                "item": "minecraft:string"
            },
        ],
        "input": {
            "count": 10,
            "item": "minecraft:leather"
        },
        "result": {
            "count": 1,
            "id": "relics:leather_belt"
        },
        "spirits": [
            {
                "type": "malum:earthen",
                "count": 30
            },
            {
                "type": "malum:wicked",
                "count": 4
            },{
                "type": "malum:arcane",
                "count": 2
            }
        ]
    });

            event.custom({
        "type": "malum:spirit_infusion",
        "extraInputs": [
            {
                "count": 2,
                "item": "advancednetherite:netherite_iron_ingot"
            },
            {
                "count": 6,
                "item": "minecraft:copper_ingot"
            },
            {
                "count": 6,
                "item": "minecraft:green_carpet"
            },
            {
                "count": 24,
                "item": "minecraft:string"
            },
        ],
        "input": {
            "count": 10,
            "item": "minecraft:leather"
        },
        "result": {
            "count": 1,
            "id": "relics:hunter_belt"
        },
        "spirits": [
            {
                "type": "malum:infernal",
                "count": 30
            },
            {
                "type": "malum:earthen",
                "count": 4
            },{
                "type": "malum:sacred",
                "count": 2
            }
        ]
    });

            event.custom({
        "type": "malum:spirit_infusion",
        "extraInputs": [
            {
                "count": 2,
                "item": "advancednetherite:netherite_iron_ingot"
            },
            {
                "count": 5,
                "item": "alltheores:lead_ingot"
            },
            {
                "count": 6,
                "item": "minecraft:blue_carpet"
            },
            {
                "count": 24,
                "item": "minecraft:string"
            },
        ],
        "input": {
            "count": 10,
            "item": "minecraft:leather"
        },
        "result": {
            "count": 1,
            "id": "relics:drowned_belt"
        },
        "spirits": [
            {
                "type": "malum:aqueous",
                "count": 30
            },
            {
                "type": "malum:eldritch",
                "count": 4
            },{
                "type": "malum:wicked",
                "count": 2
            }
        ]
    });

});