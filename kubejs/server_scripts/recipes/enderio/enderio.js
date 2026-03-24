ServerEvents.recipes(event => {
    event.custom({
        "type": "enderio:alloy_smelting",
        "energy": 400000,
        "experience": 0.1,
        "inputs": [
            {
                "count": 5,
                "tag": "c:nether_stars"
            },
            {
                "count": 1,
                "tag": "c:ingots/melodic_alloy"
            },
            {
                "count": 3,
                "tag": "c:ingots/fiery"
            }
        ],
        "output": {
            "count": 1,
            "id": "re_endergy:stellar_alloy_ingot"
        }
    });

    event.custom({
        "type": "evolvedmekanism:alloying",
        "extra_input": {
            "count": 6,
            "tag": "c:nether_stars"
        },
        "second_extra_input": {
            "count": 4,
            "tag": "c:ingots/fiery"
        },
        "main_input": {
            "tag": "c:ingots/melodic_alloy"
        },
        "output": {
            "id": "re_endergy:stellar_alloy_ingot"
        }
    });
});