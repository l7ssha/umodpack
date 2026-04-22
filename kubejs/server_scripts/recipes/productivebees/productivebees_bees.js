ServerEvents.recipes(event => {
    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "type": "productivebees:component",
            "components": {
                "minecraft:entity_data": {
                    "type": "productivebees:draconic",
                    "id": "productivebees:configurable_bee"
                }
            },
            "items": "productivebees:spawn_egg_configurable_bee"
        },
        "ingredients": [
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:draconium_core"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:draconium_core"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:draconium_block"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:draconium_block"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "allthecompressed:honeycomb_block_2x"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "allthecompressed:honeycomb_block_2x"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:draconium_block"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:draconium_block"
                }
            }
        ],
        "result": {
            "components": {
                "minecraft:entity_data": {
                    "type": "productivebees:draconium",
                    "id": "productivebees:configurable_bee"
                }
            },
            "count": 1,
            "id": "productivebees:spawn_egg_configurable_bee"
        },
        "techLevel": "wyvern",
        "totalEnergy": 100000000
    });

    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "type": "productivebees:component",
            "components": {
                "minecraft:entity_data": {
                    "type": "productivebees:draconium",
                    "id": "productivebees:configurable_bee"
                }
            },
            "items": "productivebees:spawn_egg_configurable_bee"
        },
        "ingredients": [
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:awakened_core"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:awakened_core"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "allthecompressed:honeycomb_block_2x"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "allthecompressed:honeycomb_block_2x"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "tag": "c:storage_blocks/draconium_awakened"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "tag": "c:storage_blocks/draconium_awakened"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "tag": "c:storage_blocks/draconium_awakened"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "tag": "c:storage_blocks/draconium_awakened"
                }
            }
        ],
        "result": {
            "components": {
                "minecraft:entity_data": {
                    "type": "productivebees:awakened",
                    "id": "productivebees:configurable_bee"
                }
            },
            "count": 1,
            "id": "productivebees:spawn_egg_configurable_bee"
        },
        "techLevel": "draconic",
        "totalEnergy": 100000000
    });

    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "type": "productivebees:component",
            "components": {
                "minecraft:entity_data": {
                    "type": "productivebees:awakened",
                    "id": "productivebees:configurable_bee"
                }
            },
            "items": "productivebees:spawn_egg_configurable_bee"
        },
        "ingredients": [
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:chaos_shard"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:chaos_shard"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:chaotic_core"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "allthecompressed:honeycomb_block_4x"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "allthecompressed:honeycomb_block_4x"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "allthecompressed:honeycomb_block_4x"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "tag": "c:storage_blocks/draconium_awakened"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:chaos_shard"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:chaos_shard"
                }
            }
        ],
        "result": {
            "components": {
                "minecraft:entity_data": {
                    "type": "productivebees:chaos",
                    "id": "productivebees:configurable_bee"
                }
            },
            "count": 1,
            "id": "productivebees:spawn_egg_configurable_bee"
        },
        "techLevel": "chaotic",
        "totalEnergy": 1000000000000
    });
});