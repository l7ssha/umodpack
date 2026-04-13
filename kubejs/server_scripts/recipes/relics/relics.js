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
                "tag": "c:ingots/gold"
            },
            {
                "count": 6,
                "tag": "chipped:brown_carpet"
            },
            {
                "count": 24,
                "tag": "c:strings"
            },
        ],
        "input": {
            "count": 10,
            "tag": "c:leathers"
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
            }, {
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
                "tag": "advancednetherite:ingot/netherites_iron"
            },
            {
                "count": 6,
                "tag": "c:ingots/copper"
            },
            {
                "count": 6,
                "tag": "chipped:green_carpet"
            },
            {
                "count": 24,
                "tag": "c:strings"
            },
        ],
        "input": {
            "count": 10,
            "tag": "c:leathers"
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
            }, {
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
                "tag": "advancednetherite:ingot/netherites_iron"
            },
            {
                "count": 5,
                "tag": "c:ingots/lead"
            },
            {
                "count": 6,
                "tag": "chipped:blue_carpet"
            },
            {
                "count": 24,
                "tag": "c:strings"
            },
        ],
        "input": {
            "count": 10,
            "tag": "c:leathers"
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
            }, {
                "type": "malum:wicked",
                "count": 2
            }
        ]
    });
});