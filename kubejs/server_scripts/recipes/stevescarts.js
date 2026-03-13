ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
            "ABA",
            "BCB",
            "ADA"
        ],
        "key": {
            "A": {
                "item": "minecraft:ghast_tear"
            },
            "B": {
                "item": "minecraft:magma_block"
            },
            "C": {
                "item": "minecraft:ender_eye"
            },
            "D": {
                "item": "minecraft:fermented_spider_eye"
            }
        },
        "result": {
            "id": "stevescarts:component_eye_of_galgador"
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 100000,
        "input": {
            "item": "stevescarts:component_eye_of_galgador"
        },
        "ingredients": [
            {
                "item": "stevescarts:component_eye_of_galgador"
            },
            {
                "item": "stevescarts:component_eye_of_galgador"
            },
            {
                "item": "advancednetherite:netherite_gold_ingot"
            },
            {
                "item": "advancednetherite:netherite_gold_ingot"
            },
            {
                "item": "jitl:lunium_ingot"
            },
            {
                "item": "advancednetherite:netherite_gold_ingot"
            },
            {
                "item": "jitl:lunium_ingot"
            },
            {
                "item": "jitl:lunium_ingot"
            },
            {
                "item": "alltheores:lumium_ingot"
            },
            {
                "item": "alltheores:lumium_ingot"
            },
            {
                "item": "alltheores:lumium_ingot"
            }
        ],
        "result": {
            "id": "stevescarts:component_lump_of_galgador"
        }
    });

    event.replaceInput(
        { id: 'stevescarts:component/component_hardened_mesh' },
        'minecraft:iron_bars',
        'enderio:dark_steel_bars',
    );

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "tag": "c:obsidians"
            },
            {
                "tag": "c:obsidians"
            },
            {
                "tag": "c:obsidians"
            },
            {
                "tag": "c:obsidians"
            },
            {
                "tag": "c:obsidians"
            },
            {
                "item": "rftoolsbase:infused_diamond"
            },
            {
                "item": "rftoolsbase:infused_diamond"
            },
            {
                "item": "cataclysm:lacrima"
            }
        ],
        "inputFluid": {
            "amount": 2000,
            "fluid": "minecraft:lava"
        },
        "output": {
            "id": "stevescarts:component_raw_hardener"
        },
        "processingTime": 300
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 500000,
        "input": {
            "item": "alltheores:steel_ingot"
        },
        "ingredients": [
            {
                "tag": "c:ingots/steel"
            },
            {
                "tag": "c:ingots/steel"
            },
            {
                "tag": "c:ingots/steel"
            },
            {
                "item": "stevescarts:component_hardened_mesh"
            },
            {
                "item": "stevescarts:component_hardened_mesh"
            },
            {
                "item": "stevescarts:component_refined_hardener"
            },
            {
                "item": "stevescarts:component_refined_hardener"
            },
            {
                "item": "stevescarts:component_refined_hardener"
            }
        ],
        "result": {
            "id": "stevescarts:component_stabilized_metal"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABB A",
            " CCCB",
            "BCACB",
            "BCCC ",
            "A BBA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:ingots/enhanced_redstone_ingot"
            },
            "B": {
                "item": "stevescarts:component_raw_hardener"
            },
            "C": {
                "item": "stevescarts:component_lump_of_galgador"
            }
        },
        "result": {
            "id": "stevescarts:component_large_lump_of_galgador"
        }
    });
});