ServerEvents.recipes(event => {
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "item": "mysticalagriculture:neutronium_essence",
                "count": 25
            }
        ],
        "pressure": 15.0,
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
        "pressure": 19.2,
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
        "pressure": 19.2,
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
      pressure: 19.2,
      results: [
        {
          id: 'avaritia:neutron_nugget',
        },
      ],
    })
    .id('kubejs:pressure_chamber/neutron_nugget');
});