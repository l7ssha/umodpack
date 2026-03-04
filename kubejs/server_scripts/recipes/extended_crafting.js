ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " ABA ",
            "ACDCA",
            "BD DB",
            "ACDCA",
            " ABA "
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "minecraft:piston"
            },
            "B": {
                "item": "minecraft:netherite_block"
            },
            "C": {
                "item": "fluxnetworks:flux_block"
            },
            "D": {
                "item": "mekanism:ultimate_compressing_factory"
            }
        },
        "result": {
            "id": "extendedcrafting:compressor"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "AAAAA",
            "AAAAA",
            "AAAAA",
            "AAAAA"
        ],
        "tier": 2,
        "key": {
            "A": {
            "item": "avaritia:neutron_ingot"
            }
        },
        "result": {
            "id": "avaritia:neutron",
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "AAAAA",
            "AAAAA",
            "AAAAA",
            "AAAAA"
        ],
        "tier": 2,
        "key": {
            "A": {
            "item": "avaritia:neutron_nugget"
            }
        },
        "result": {
            "id": "avaritia:neutron_ingot"
        }
    });

    // Compressor
    event.custom({
        "type": "extendedcrafting:compressor",
        "power_cost": 50000000,
        "ingredient": {
            "tag": "c:cobblestones",
            "count": 1000000
        },
        "catalyst": {
            "item": "extendedcrafting:ender_catalyst"
        },
        "result": {
            "id": "minecraft:bedrock"
        }
    });

    event.custom({
        "type": "extendedcrafting:compressor",
        "power_cost": 50000000,
        "ingredient": {
            "tag": "enderio:grains_of_infinity",
            "count": 100000
        },
        "catalyst": {
            "item": "extendedcrafting:ender_catalyst"
        },
        "result": {
            "id": "minecraft:bedrock"
        }
    });
});