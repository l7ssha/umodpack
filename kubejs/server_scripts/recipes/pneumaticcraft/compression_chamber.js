ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'pneumaticcraft:plastic' },
        'pneumaticcraft:plastic',
        { tag: 'c:plastics' },
    );

    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "item": "mysticalagriculture:neutronium_essence",
                "count": 25
            }
        ],
        "pressure": 6,
        "results": [
            {
                "id": "avaritia:neutron_pile"
            }
        ]
    }).id('kubejs:pressure_chamber/neutron_pile');

    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "item": "avaritia:neutron_nugget",
                "count": 25
            }
        ],
        "pressure": 7.8,
        "results": [
            {
                "id": "avaritia:neutron_ingot"
            }
        ]
    }).id('kubejs:pressure_chamber/neutron_ingot');

    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "item": "avaritia:neutron_ingot",
                "count": 25
            }
        ],
        "pressure": 7.8,
        "results": [
            {
                "id": "avaritia:neutron"
            }
        ]
    }).id('kubejs:pressure_chamber/neutron');

    event.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: [
            {
                count: 25,
                item: 'avaritia:neutron_pile',
            },
        ],
        pressure: 7.8,
        results: [
            {
                id: 'avaritia:neutron_nugget',
            },
        ],
    })
        .id('kubejs:pressure_chamber/neutron_nugget');

    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "tag": "pneumaticcraft:wiring",
                "count": 4
            },
            {
                "tag": "c:slimeballs",
                "count": 2
            },
            {
                "tag": "c:plastics",
                "count": 1
            }
        ],
        "pressure": 1,
        "results": [
            {
                "id": "pneumaticcraft:capacitor"
            }
        ]
    }).id('kubejs:pressure_chamber/capacitor_basic');

    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "tag": "c:nuggets/vibrant_alloy",
                "count": 4
            },
            {
                "tag": "c:dusts/coal_coke",
                "count": 1
            },
            {
                "tag": "c:plastics",
                "count": 1
            }
        ],
        "pressure": 2,
        "results": [
            {
                "id": "pneumaticcraft:capacitor",
                "count": 4
            }
        ]
    }).id('kubejs:pressure_chamber/capacitor_advanced');

    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "tag": "pneumaticcraft:wiring",
                "count": 6
            },
            {
                "tag": "c:dusts/redstone",
                "count": 3
            },
            {
                "tag": "c:plastics",
                "count": 1
            }
        ],
        "pressure": 1,
        "results": [
            {
                "id": "pneumaticcraft:transistor"
            }
        ]
    }).id('kubejs:pressure_chamber/transistor_basic');

    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "tag": "pneumaticcraft:wiring",
                "count": 3
            },
            {
                "tag": "c:nuggets/redstone_alloy",
                "count": 3
            },
            {
                "tag": "c:plastics",
                "count": 1
            }
        ],
        "pressure": 1,
        "results": [
            {
                "id": "pneumaticcraft:transistor",
                "count": 5
            }
        ]
    }).id('kubejs:pressure_chamber/transistor_advanced');
});