ServerEvents.recipes(event => {
    event.remove({ id: "extendedcrafting:compressor" });

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

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
            "         ",
            "         ",
            "  AAAAA  ",
            "  AAAAA  ",
            "  AABAA  ",
            "  AAAAA  ",
            "  AAAAA  ",
            "         ",
            "         "
        ],
        "key": {
            "A": {
             "item": "minecraft:bedrock"
            },
            "B": {
                "item": "extendedcrafting:ultimate_singularity"
            }
        },
        "result": {
            "id": "avaritia:infinity_catalyst"
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
});