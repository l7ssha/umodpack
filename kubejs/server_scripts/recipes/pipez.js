const pipezUpgrades = [
    'basic',
    'improved',
    'advanced',
    'ultimate',
    'infinity',
];

ServerEvents.recipes(event => {
    event.shaped({
        "pattern": [
            " AA",
            "ABA",
            "AA "
        ],
        "key": {
            "A": {
                "tag": "c:plates/invar"
            },
            "B": {
                "tag": "c:circuits/elite"
            }
        },
        "result": {
            "id": "pipez:basic_upgrade"
        }
    });

    event.shaped({
        "pattern": [
            "ABB",
            "BCB",
            "DBA"
        ],
        "key": {
            "A": {
                "item": "malum:hallowed_gold_ingot"
            },
            "B": {
                "tag": "c:plates/gold"
            },
            "C": {
                "item": "pipez:basic_upgrade"
            },
            "D": {
                "tag": "c:circuits/ultimate"
            }
        },
        "result": {
            "id": "pipez:improved_upgrade"
        }
    });

    event.shaped({
        "pattern": [
            "ABB",
            "BCB",
            "DBA"
        ],
        "key": {
            "A": {
                "tag": "c:ingots/ludicrite"
            },
            "B": {
                "tag": "c:plates/diamond"
            },
            "C": {
                "item": "pipez:improved_upgrade"
            },
            "D": {
                "tag": "c:circuits/ultimate"
            }
        },
        "result": {
            "id": "pipez:advanced_upgrade"
        }
    });

    event.custom({
        "type": "ifeu:shaped",
        "inputFluid": {
            "amount": 500,
            "id": "ifeu:liquid_sculk_matter"
        },
        "inputs": [
            {
                "tag": "c:plates/netherite"
            },
            {
                "tag": "c:plates/netherite"
            },
            {
                "tag": "advancednetherite:ingot/netherites_diamond"
            },
            {
                "tag": "c:plates/netherite"
            },
            {
                "item": "pipez:advanced_upgrade"
            },
            {
                "tag": "c:plates/netherite"
            },
            {
                "tag": "advancednetherite:ingot/netherites_diamond"
            },
            {
                "tag": "c:plates/netherite"
            },
            {
                "tag": "c:plates/netherite"
            },
        ],
        "output": {
            "count": 1,
            "id": "pipez:ultimate_upgrade"
        }
    });

    pipezUpgrades.forEach(type => {
        const item = `pipez:${type}_upgrade`;

        event.shapeless(
            Item.of(item, 1),
            [
                item,
            ],
        );
    });
});