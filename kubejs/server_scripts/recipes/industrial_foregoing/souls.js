ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "   ABB ",
            "  ACCBB",
            " ACDECB",
            "ACDEDCA",
            "AFEDCA ",
            "BGFCA  ",
            " BAA   "
        ],
        "tag": 3,
        "key": {
            "A": {
                "tag": "chipped:smooth_stone"
            },
            "B": {
                "item": "minecraft:smooth_stone_slab"
            },
            "C": {
                "item": "deeperdarker:reinforced_echo_shard"
            },
            "D": {
                "tag": "c:pistons"
            },
            "E": {
                "tag": "c:gears/sculk"
            },
            "F": {
                "item": "industrialforegoing:ether_gas_bucket"
            },
            "G": {
                "item": "minecraft:sculk_shrieker"
            }
        },
        "result": {
            "id": "industrialforegoingsouls:soul_surge"
        }
    });

    event.custom({
        "type": "appgen:synthesizing",
        "input_energy": 50000,
        "input_fluid": {
            "amount": 288,
            "ingredient": {
                "fluid": "pneumaticcraft:plastic"
            }
        },
        "input_items": [
            {
                "amount": 1,
                "ingredient": {
                    "item": "deeperdarker:reinforced_echo_shard"
                }
            },
            {
                "amount": 6,
                "ingredient": {
                    "item": "minecraft:smooth_stone_slab"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "tag": "c:gears/sculk"
                }
            },
        ],
        "output": {
            "#": 6,
            "#t": "ae2:i",
            "id": "industrialforegoingsouls:soul_network_pipe"
        }
    });
});