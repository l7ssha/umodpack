ServerEvents.recipes(event => {
    event.custom({
        "type": "enderio:alloy_smelting",
        "energy": 6400,
        "experience": 0.3,
        "inputs": [
            {
                "count": 3,
                "tag": "c:ingots/copper"
            },
            {
                "count": 1,
                "tag": "c:ingots/zinc"
            }
        ],
        "output": {
            "count": 4,
            "id": "alltheores:brass_ingot"
        }
    });

    event.custom({
        "type": "enderio:alloy_smelting",
        "energy": 6400,
        "experience": 0.3,
        "inputs": [
            {
                "count": 1,
                "tag": "c:ingots/silver"
            },
            {
                "count": 1,
                "tag": "c:ingots/gold"
            }
        ],
        "output": {
            "count": 2,
            "id": "alltheores:electrum_ingot"
        }
    });

    event.custom({
        "type": "enderio:alloy_smelting",
        "energy": 6400,
        "experience": 0.3,
        "inputs": [
            {
                "count": 3,
                "tag": "c:ingots/copper"
            },
            {
                "count": 1,
                "tag": "c:ingots/tin"
            }
        ],
        "output": {
            "count": 4,
            "id": "alltheores:bronze_ingot"
        }
    });

    event.custom({
        "type": "enderio:alloy_smelting",
        "energy": 6400,
        "experience": 0.3,
        "inputs": [
            {
                "count": 3,
                "tag": "c:ingots/lead"
            },
            {
                "count": 1,
                "tag": "c:ingots/platinum"
            },
            {
                "count": 2,
                "tag": "c:ingots/ender_ingot"
            }
        ],
        "output": {
            "count": 4,
            "id": "alltheores:enderium_ingot"
        }
    });

    event.custom({
        "type": "enderio:alloy_smelting",
        "energy": 6400,
        "experience": 0.3,
        "inputs": [
            {
                "count": 4,
                "tag": "c:dusts/glowstone"
            },
            {
                "count": 1,
                "tag": "c:ingots/silver"
            },
            {
                "count": 3,
                "tag": "c:ingots/tin"
            }
        ],
        "output": {
            "count": 4,
            "id": "alltheores:lumium_ingot"
        }
    });

    event.custom({
        "type": "enderio:alloy_smelting",
        "energy": 6400,
        "experience": 0.3,
        "inputs": [
            {
                "count": 3,
                "tag": "c:ingots/copper"
            },
            {
                "count": 1,
                "tag": "c:ingots/silver"
            },
            {
                "count": 4,
                "tag": "c:dusts/redstone"
            }
        ],
        "output": {
            "count": 4,
            "id": "alltheores:signalum_ingot"
        }
    });

    event.custom({
        "type": "enderio:alloy_smelting",
        "energy": 6400,
        "experience": 0.3,
        "inputs": [
            {
                "count": 1,
                "tag": "c:ingots/copper"
            },
            {
                "count": 1,
                "tag": "c:ingots/nickel"
            }
        ],
        "output": {
            "count": 2,
            "id": "alltheores:constantan_ingot"
        }
    });

    event.custom({
        "type": "enderio:alloy_smelting",
        "energy": 12800,
        "experience": 0.5,
        "inputs": [
            {
                "count": 3,
                "tag": "irons_spellbooks:arcane_ingot_base"
            },
            {
                "count": 24,
                "item": "irons_spellbooks:arcane_essence"
            }
        ],
        "output": {
            "count": 2,
            "id": "irons_spellbooks:arcane_ingot"
        }
    });
});