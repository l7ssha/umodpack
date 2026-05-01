ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'alexscaves:uranium' },
        'alexscaves:uranium',
        '#c:ingots/uranium',
    );

    event.replaceInput(
        { input: 'alexscaves:sulfur_dust' },
        'alexscaves:sulfur_dust',
        '#c:dusts/sulfur',
    );

    event.shapeless(
        Item.of('alltheores:sulfur', 1),
        [
            'alexscaves:sulfur_dust',
            'alexscaves:sulfur_dust',
            'alexscaves:sulfur_dust',
            'alexscaves:sulfur_dust',
            'alexscaves:sulfur_dust',
        ],
    );

    event.shapeless(
        Item.of('alltheores:sulfur', 1),
        [
            'alexscaves:sulfur',
        ],
    );

    event.custom({
        "type": "enderio:alloy_smelting",
        "energy": 6400,
        "experience": 0.1,
        "inputs": [
            {
                "count": 2,
                "item": "alexscaves:uranium"
            },
            {
                "count": 1,
                "tag": "c:dusts/uranium"
            }
        ],
        "output": {
            "count": 2,
            "id": "alltheores:uranium_ingot"
        }
    });

    event.custom({
        "type": "enderio:alloy_smelting",
        "energy": 6400,
        "experience": 0.1,
        "inputs": [
            {
                "count": 23,
                "item": "alexscaves:uranium_shard"
            },
            {
                "count": 1,
                "tag": "c:dusts/uranium"
            }
        ],
        "output": {
            "count": 2,
            "id": "alltheores:uranium_ingot"
        }
    });
});