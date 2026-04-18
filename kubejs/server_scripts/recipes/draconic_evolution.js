ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 250000,
        "input": {
            "item": "minecraft:ender_eye"
        },
        "ingredients": [
            {
                "tag": "c:dusts/blaze"
            },
            {
                "tag": "c:dusts/draconium"
            },
            {
                "tag": "c:dusts/draconium"
            },
            {
                "tag": "c:dusts/draconium"
            },
            {
                "tag": "c:dusts/draconium"
            },
            {
                "tag": "c:dusts/blaze"
            },
            {
                "tag": "c:dusts/draconium"
            },
            {
                "tag": "c:dusts/blaze"
            },
            {
                "tag": "c:dusts/draconium"
            },
            {
                "tag": "c:dusts/blaze"
            },
            {
                "tag": "c:dusts/draconium"
            },
            {
                "tag": "c:dusts/blaze"
            },
            {
                "tag": "c:dusts/blaze"
            },
            {
                "tag": "c:dusts/blaze"
            },
            {
                "tag": "c:dusts/blaze"
            },
            {
                "tag": "c:dusts/draconium"
            }
        ],
        "result": {
            "id": "draconicevolution:dislocator"
        }
    });

    event.custom({
        "type": "mekanism:crushing",
        "input": {
            "count": 1,
            "tag": "c:ingots/draconium_awakened"
        },
        "output": {
            "count": 1,
            "id": "draconicevolution:awakened_draconium_dust"
        }
    });

    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "type": "draconicevolution:stack",
            "count": 6,
            "items": "draconicevolution:draconium_block"
        },
        "ingredients": [
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:wyvern_core"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:wyvern_core"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:wyvern_core"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:dragon_heart"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:dragon_heart"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:wyvern_core"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:wyvern_core"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:wyvern_core"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "igleelib:lavium_block"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "allthemodium:piglich_heart_block"
                }
            }
        ],
        "result": {
            "count": 4,
            "id": "draconicevolution:awakened_draconium_block"
        },
        "techLevel": "wyvern",
        "totalEnergy": 50000000
    });

    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "type": "draconicevolution:stack",
            "count": 2,
            "items": "extendedcrafting:ender_star"
        },
        "ingredients": [
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:wyvern_core"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:wyvern_core"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "tag": "c:ingots/draconium_awakened"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "tag": "c:ingots/draconium_awakened"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "tag": "c:ingots/draconium_awakened"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "tag": "c:ingots/draconium_awakened"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:wyvern_core"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:wyvern_core"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "tag": "c:ingots/inanite"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "tag": "c:ingots/inanite"
                }
            },
        ],
        "result": {
            "count": 1,
            "id": "draconicevolution:awakened_core"
        },
        "techLevel": "wyvern",
        "totalEnergy": 3000000
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 10000000,
        "input": {
            "item": "draconicevolution:draconium_core"
        },
        "ingredients": [
            {
                "item": "evolvedmekanism:quantum_energy_cube"
            },
            {
                "item": "evolvedmekanism:quantum_energy_cube"
            },
            {
                "item": "igleelib:modium_block"
            },
            {
                "item": "igleelib:modium_block"
            },
            {
                "item": "igleelib:modium_block"
            },
            {
                "item": "igleelib:modium_block"
            },
            {
                "item": "draconicevolution:draconium_block"
            },
            {
                "item": "minecraft:redstone_block"
            },
            {
                "item": "minecraft:redstone_block"
            },
            {
                "item": "draconicevolution:draconium_block"
            },
            {
                "item": "draconicevolution:draconium_block"
            },
            {
                "item": "draconicevolution:draconium_block"
            }
        ],
        "result": {
            "id": "draconicevolution:wyvern_energy_core"
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 50000,
        "input": {
            "item": "minecraft:diamond"
        },
        "ingredients": [
            {
                "tag": "c:ingots/gold"
            },
            {
                "tag": "c:ingots/gold"
            },
            {
                "tag": "c:ingots/gold"
            },
            {
                "tag": "c:ingots/gold"
            },
            {
                "tag": "c:ingots/draconium"
            },
            {
                "tag": "c:ingots/draconium"
            },
            {
                "tag": "c:ingots/draconium"
            },
            {
                "tag": "c:ingots/draconium"
            },
            {
                "tag": "c:ingots/draconium"
            },
            {
                "tag": "c:ingots/draconium"
            },
            {
                "tag": "c:ingots/draconium"
            },
            {
                "tag": "c:ingots/draconium"
            }
        ],
        "result": {
            "id": "draconicevolution:draconium_core"
        }
    });

    event.custom({
        "type": "avaritia:shaped_table",
        "pattern": [
            "ABABA",
            "BACAB",
            "ACCCA",
            "BACAB",
            "ABABA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:dusts/draconium"
            },
            "B": {
                "tag": "c:dusts/blaze"
            },
            "C": {
                "tag": "c:obsidians"
            }
        },
        "result": {
            "id": "draconicevolution:infused_obsidian"
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 500000,
        "input": {
            "item": "draconicevolution:infused_obsidian"
        },
        "ingredients": [
            {
                "tag": "c:ingots/stellar_alloy"
            },
            {
                "tag": "c:ingots/stellar_alloy"
            },
            {
                "item": "draconicevolution:draconium_core"
            },
            {
                "item": "draconicevolution:draconium_core"
            },
            {
                "tag": "c:ingots/stellar_alloy"
            },
            {
                "item": "draconicevolution:draconium_core"
            },
            {
                "tag": "c:ingots/stellar_alloy"
            },
            {
                "item": "draconicevolution:draconium_core"
            }
        ],
        "result": {
            "id": "draconicevolution:wyvern_core"
        }
    });

    event.custom({
        "type": "skyfalltesla:quasar_calling",
        "pattern": [
            "          ",
            "          ",
            "  AA  AA  ",
            "  ABAABA  ",
            "   ACCA   ",
            "   ACCA   ",
            "  ABAABA  ",
            "  AA  AA  ",
            "          ",
            "          ",
        ],
        "key": {
            "A": { "tag": "c:ingots/draconium_awakened" },
            "B": { "item": "draconicevolution:large_chaos_frag" },
            "C": { "item": "draconicevolution:awakened_core" },
        },
        "result": { "id": "draconicevolution:chaotic_core", "count": 1 }
    });
});