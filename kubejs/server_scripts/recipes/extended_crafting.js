ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " ABA ",
            "ACDCA",
            "BDEDB",
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
            },
            "E": {
                "item": "ae2:condenser"
            }
        },
        "result": {
            "id": "extendedcrafting:compressor"
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
            "tag": "c:dusts/grains_of_infinity",
            "count": 100000
        },
        "catalyst": {
            "item": "extendedcrafting:ender_catalyst"
        },
        "result": {
            "id": "minecraft:bedrock"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
            "SAS",
            "ABA",
            "SAS"
        ],
        "key": {
            "A": {
                "item": "extendedcrafting:ender_ingot"
            },
            "B": {
                "item": "appliedsoul:ender_star"
            },
            "S": {
                "tag": "c:ingots/steeleaf"
            }
        },
        "result": {
            "count": 2,
            "id": "extendedcrafting:enhanced_ender_ingot"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 50000,
        "power_rate": 1600,
        "pattern": [
            "ABA",
            "BCB",
            "ABA"
        ],
        "key": {
            "A": {
                "item": "jitl:blood"
            },
            "B": {
                "item": "extendedcrafting:redstone_ingot"
            },
            "C": {
                "item": "extendedcrafting:flux_star"
            }
        },
        "result": {
            "count": 2,
            "id": "extendedcrafting:enhanced_redstone_ingot"
        }
    });

    const allIngots = [];
    Ingredient.of('#c:ingots/the_ultimate_ingots').itemIds.forEach(ingot => {
        allIngots.push({ "item": ingot });
    });

    event.custom({
        "type": "extendedcrafting:shapeless_table",
        "ingredients": allIngots,
        "tier": 4,
        "result": {
            "id": "extendedcrafting:the_ultimate_ingot"
        }
    });
});