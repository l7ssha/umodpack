const noBlockInName = ['stone', 'dirt', 'oak_log', 'deepslate', 'blue_ice', 'obsidian', 'glowstone'];

const infusionRecipes = [
    // { ingredient: '', essence: '', result: '', base: '', resource: '', level: 2 }
    { resource: 'stone', essence: 'inferium' },
    { resource: 'dirt', essence: 'inferium' },
    { resource: 'oak_log', essence: 'inferium', result: 'mysticalagriculture:wood_seeds' },
    { resource: 'blue_ice', essence: 'inferium', result: 'mysticalagriculture:ice_seeds' },
    { resource: 'deepslate', essence: 'inferium' },

    { ingredient: { item: 'mysticalagriculture:nature_agglomeratio' }, essence: 'prudentium', result: 'mysticalagriculture:nature_seeds' },
    { ingredient: { item: 'mysticalagriculture:dye_agglomeratio' }, essence: 'prudentium', result: 'mysticalagriculture:dye_seeds' },
    { ingredient: { item: 'mysticalagriculture:nether_agglomeratio' }, essence: 'prudentium', result: 'mysticalagriculture:nether_seeds' },
    { resource: 'coal', essence: 'prudentium' },
    { ingredient: { item: 'minecraft:amethyst_cluster' }, essence: 'prudentium', result: 'mysticalagriculture:amethyst_seeds' },
    { ingredient: { item: 'industrialforegoing:dryrubber' }, essence: 'prudentium', result: 'mysticalagriculture:rubber_seeds' },
    { resource: 'sulfur', essence: 'prudentium' },
    { resource: 'aluminum', essence: 'prudentium' },
    { ingredient: { item: 'enderio:void_chassis' }, essence: 'prudentium', result: 'mysticalagriculture:grains_of_infinity_seeds' },
    { resource: 'iron', essence: 'tertium' },
    { resource: 'copper', essence: 'tertium' },
    { resource: 'quartz', essence: 'tertium', result: 'mysticalagriculture:nether_quartz_seeds' },
    { resource: 'glowstone', essence: 'tertium' },
    { resource: 'redstone', essence: 'tertium' },
    { resource: 'obsidian', essence: 'tertium' },
    { ingredient: { item: 'minecraft:prismarine_bricks' }, essence: 'tertium', result: 'mysticalagriculture:prismarine_seeds' },
    { resource: 'tin', essence: 'tertium' },
    { resource: 'bronze', essence: 'tertium' },
    { resource: 'zinc', essence: 'tertium' },
    { resource: 'brass', essence: 'tertium' },
    { resource: 'silver', essence: 'tertium' },
    { resource: 'lead', essence: 'tertium' },

    { resource: 'gold', essence: 'imperium' },
    { resource: 'lapis', essence: 'imperium', result: 'mysticalagriculture:lapis_lazuli_seeds' },
    { resource: 'nickel', essence: 'imperium' },
    { resource: 'uranium', essence: 'imperium' },
    { resource: 'ruby', essence: 'imperium' },
    { resource: 'sapphire', essence: 'imperium' },
    { resource: 'peridot', essence: 'imperium' },
    { resource: 'osmium', essence: 'imperium' },
    { resource: 'fluorite', essence: 'imperium' },
];

ServerEvents.recipes(event => {
    const maRecipe = (ingredient, essence, result, base) => {
        base = base || "mysticalagriculture:prosperity_seed_base";

        event.custom({
            type: "mysticalagriculture:infusion",
            input: { item: base },
            ingredients: [
                ingredient,
                { item: essence },
                ingredient,
                { item: essence },
                ingredient,
                { item: essence },
                ingredient,
                { item: essence },
            ],
            result: {
                id: result
            }
        });
    };

    event.shapeless(
        { id: "mysticalagriculture:nature_agglomeratio", count: 2 },
        [
            "minecraft:sugar_cane",
            "minecraft:cactus",
            "occultism:nature_paste",
            "allthecompressed:pumpkin_1x",
            "minecraft:poisonous_potato",
            "reliquary:apothecary_mortar",
        ]
    ).keepIngredient('reliquary:apothecary_mortar')
        .damageIngredient('occultism:nature_paste', 16);

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 30000,
        "input": {
            "tag": "c:dusts/netherite"
        },
        "ingredients": [
            {
                "item": "occultism:otherworld_essence"
            },
            {
                "tag": "chipped:nether_bricks"
            },
            {
                "tag": "chipped:nether_bricks"
            },
            {
                "item": "minecraft:nether_bricks"
            },
            {
                "item": "occultism:otherworld_essence"
            },
            {
                "tag": "chipped:nether_bricks"
            },
            {
                "item": "allthecompressed:nether_wart_block_1x"
            },
            {
                "item": "occultism:otherworld_essence"
            },
            {
                "item": "minecraft:nether_bricks"
            },
            {
                "item": "allthecompressed:soul_sand_1x"
            },
            {
                "item": "allthecompressed:netherrack_1x"
            }
        ],
        "result": {
            "id": "mysticalagriculture:nether_agglomeratio"
        }
    });

    event.shaped({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAA",
            "ABA",
            "AAA"
        ],
        "key": {
            "A": {
                "item": "mysticalagriculture:inferium_block"
            },
            "B": {
                "item": "mysticalagriculture:prosperity_seed_base"
            }
        },
        "result": {
            "id": "mysticalagriculture:inferium_seeds"
        }
    });

    infusionRecipes.forEach(item => {
        let ingredient = item.ingredient;
        let essence = item.essence;
        let result = item.result;
        let level = item.level || 2;

        let resource = item.resource;
        if (resource !== undefined) {
            const ingredientResource = noBlockInName.includes(resource) ? resource : `${resource}_block`;

            ingredient = { item: `allthecompressed:${ingredientResource}_${level}x` };

            if (result === undefined) {
                result = `mysticalagriculture:${resource}_seeds`;
            }
        }

        if (!essence.startsWith('mysticala')) {
            essence = `mysticalagriculture:${essence}_block`;
        }

        maRecipe(ingredient, essence, result, item.base);
    });

    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": "mysticalagriculture:prudentium_ingot_block"
            },
            "middle": {
                "item": "mysticalagriculture:prosperity_seed_base"
            },
            "top": {
                "item": "allthecompressed:silicon_block_2x"
            }
        },
        "mode": "press",
        "result": {
            "count": 1,
            "id": "mysticalagriculture:silicon_seeds"
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 50000,
        "input": {
            "item": "mysticalagriculture:prosperity_seed_base"
        },
        "ingredients": [
            {
                "item": "mysticalagriculture:tertium_block"
            },
            {
                "item": "mysticalagriculture:coal_seeds"
            },
            {
                "item": "bigreactors:graphite_block"
            },
            {
                "item": "mysticalagriculture:coal_seeds"
            },
            {
                "item": "mysticalagriculture:tertium_block"
            },
            {
                "item": "bigreactors:graphite_block"
            },
            {
                "item": "bigreactors:graphite_block"
            },
            {
                "item": "mysticalagriculture:tertium_block"
            },
            {
                "item": "mysticalagriculture:coal_seeds"
            },
            {
                "item": "bigreactors:graphite_block"
            },
            {
                "item": "mysticalagriculture:coal_seeds"
            },
            {
                "item": "mysticalagriculture:tertium_block"
            }
        ],
        "result": {
            "id": "mysticalagriculture:graphite_seeds"
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 50000,
        "input": {
            "item": "mysticalagriculture:prosperity_seed_base"
        },
        "ingredients": [
            {
                "item": "mysticalagriculture:tertium_block"
            },
            {
                "item": "mysticalagriculture:copper_seeds"
            },
            {
                "item": "mysticalagriculture:copper_seeds"
            },
            {
                "item": "mysticalagriculture:copper_seeds"
            },
            {
                "item": "mysticalagriculture:tertium_block"
            },
            {
                "item": "allthecompressed:redstone_alloy_block_2x"
            },
            {
                "item": "allthecompressed:redstone_alloy_block_2x"
            },
            {
                "item": "mysticalagriculture:tertium_block"
            },
            {
                "item": "mysticalagriculture:redstone_seeds"
            },
            {
                "item": "mysticalagriculture:redstone_seeds"
            },
            {
                "item": "mysticalagriculture:redstone_seeds"
            },
            {
                "item": "mysticalagriculture:tertium_block"
            }
        ],
        "result": {
            "id": "mysticalagriculture:redstone_alloy_seeds"
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 50000,
        "input": {
            "item": "mysticalagriculture:prosperity_seed_base"
        },
        "ingredients": [
            {
                "item": "mysticalagriculture:tertium_block"
            },
            {
                "item": "mysticalagriculture:copper_seeds"
            },
            {
                "item": "mysticalagriculture:copper_seeds"
            },
            {
                "item": "mysticalagriculture:copper_seeds"
            },
            {
                "item": "mysticalagriculture:tertium_block"
            },
            {
                "item": "allthecompressed:conductive_alloy_block_2x"
            },
            {
                "item": "allthecompressed:conductive_alloy_block_2x"
            },
            {
                "item": "mysticalagriculture:tertium_block"
            },
            {
                "item": "mysticalagriculture:iron_seeds"
            },
            {
                "item": "mysticalagriculture:iron_seeds"
            },
            {
                "item": "mysticalagriculture:iron_seeds"
            },
            {
                "item": "mysticalagriculture:tertium_block"
            }
        ],
        "result": {
            "id": "mysticalagriculture:conductive_alloy_seeds"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "A   A",
            " BCB ",
            " CDC ",
            " BCB ",
            "A   A"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "mysticalagriculture:tertium_block"
            },
            "B": {
                "item": "mysticalagriculture:steel_seeds"
            },
            "C": {
                "item": "twilightforest:steeleaf_block"
            },
            "D": {
                "item": "mysticalagriculture:prosperity_seed_base"
            }
        },
        "result": {
            "id": "mysticalagriculture:steeleaf_seeds"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "A   A",
            " BCB ",
            " CDC ",
            " BCB ",
            "A   A"
        ],
        "key": {
            "A": {
                "item": "mysticalagriculture:tertium_block"
            },
            "B": {
                "item": "mysticalagriculture:iron_seeds"
            },
            "C": {
                "item": "twilightforest:ironwood_block"
            },
            "D": {
                "item": "mysticalagriculture:prosperity_seed_base"
            }
        },
        "result": {
            "id": "mysticalagriculture:ironwood_seeds"
        }
    });

    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": "mysticalagriculture:tertium_ingot_block"
            },
            "middle": {
                "item": "mysticalagriculture:prosperity_seed_base"
            },
            "top": {
                "item": "allthecompressed:sky_stone_block_2x"
            }
        },
        "mode": "press",
        "result": {
            "count": 1,
            "id": "mysticalagriculture:sky_stone_seeds"
        }
    });

    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": "mysticalagriculture:tertium_ingot_block"
            },
            "middle": {
                "item": "mysticalagriculture:prosperity_seed_base"
            },
            "top": {
                "item": "allthecompressed:certus_quartz_block_2x"
            }
        },
        "mode": "press",
        "result": {
            "count": 1,
            "id": "mysticalagriculture:certus_quartz_seeds"
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 50000,
        "input": {
            "item": "mysticalagriculture:prosperity_seed_base"
        },
        "ingredients": [
            {
                "item": "allthecompressed:steel_block_2x"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "mysticalagriculture:iron_seeds"
            },
            {
                "item": "mysticalagriculture:coal_seeds"
            },
            {
                "item": "mysticalagriculture:iron_seeds"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "allthecompressed:steel_block_2x"
            },
            {
                "item": "mysticalagriculture:coal_seeds"
            },
            {
                "item": "mysticalagriculture:coal_seeds"
            },
            {
                "item": "allthecompressed:steel_block_2x"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "mysticalagriculture:iron_seeds"
            },
            {
                "item": "mysticalagriculture:coal_seeds"
            },
            {
                "item": "mysticalagriculture:iron_seeds"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "allthecompressed:steel_block_2x"
            }
        ],
        "result": {
            "id": "mysticalagriculture:steel_seeds"
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 50000,
        "input": {
            "item": "mysticalagriculture:prosperity_seed_base"
        },
        "ingredients": [
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "allthecompressed:constantan_block_2x"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "mysticalagriculture:copper_seeds"
            },
            {
                "item": "mysticalagriculture:nickel_seeds"
            },
            {
                "item": "mysticalagriculture:copper_seeds"
            },
            {
                "item": "allthecompressed:constantan_block_2x"
            },
            {
                "item": "mysticalagriculture:nickel_seeds"
            },
            {
                "item": "mysticalagriculture:nickel_seeds"
            },
            {
                "item": "allthecompressed:constantan_block_2x"
            },
            {
                "item": "mysticalagriculture:copper_seeds"
            },
            {
                "item": "mysticalagriculture:nickel_seeds"
            },
            {
                "item": "mysticalagriculture:copper_seeds"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "allthecompressed:constantan_block_2x"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            }
        ],
        "result": {
            "id": "mysticalagriculture:constantan_seeds"
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 50000,
        "input": {
            "item": "mysticalagriculture:prosperity_seed_base"
        },
        "ingredients": [
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "allthecompressed:electrum_block_2x"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "mysticalagriculture:silver_seeds"
            },
            {
                "item": "mysticalagriculture:gold_seeds"
            },
            {
                "item": "mysticalagriculture:silver_seeds"
            },
            {
                "item": "allthecompressed:electrum_block_2x"
            },
            {
                "item": "mysticalagriculture:gold_seeds"
            },
            {
                "item": "mysticalagriculture:gold_seeds"
            },
            {
                "item": "allthecompressed:electrum_block_2x"
            },
            {
                "item": "mysticalagriculture:silver_seeds"
            },
            {
                "item": "mysticalagriculture:gold_seeds"
            },
            {
                "item": "mysticalagriculture:silver_seeds"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "allthecompressed:electrum_block_2x"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            }
        ],
        "result": {
            "id": "mysticalagriculture:electrum_seeds"
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 50000,
        "input": {
            "item": "mysticalagriculture:prosperity_seed_base"
        },
        "ingredients": [
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "allthecompressed:invar_block_2x"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "mysticalagriculture:iron_seeds"
            },
            {
                "item": "mysticalagriculture:iron_seeds"
            },
            {
                "item": "mysticalagriculture:iron_seeds"
            },
            {
                "item": "allthecompressed:invar_block_2x"
            },
            {
                "item": "mysticalagriculture:nickel_seeds"
            },
            {
                "item": "mysticalagriculture:iron_seeds"
            },
            {
                "item": "allthecompressed:invar_block_2x"
            },
            {
                "item": "mysticalagriculture:nickel_seeds"
            },
            {
                "item": "mysticalagriculture:nickel_seeds"
            },
            {
                "item": "mysticalagriculture:iron_seeds"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "allthecompressed:invar_block_2x"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            }
        ],
        "result": {
            "id": "mysticalagriculture:invar_seeds"
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 50000,
        "input": {
            "item": "mysticalagriculture:prosperity_seed_base"
        },
        "ingredients": [
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "allthecompressed:soularium_block_2x"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "mysticalagriculture:gold_seeds"
            },
            {
                "item": "allthecompressed:soul_sand_2x"
            },
            {
                "item": "mysticalagriculture:gold_seeds"
            },
            {
                "item": "allthecompressed:soularium_block_2x"
            },
            {
                "item": "allthecompressed:soularium_block_2x"
            },
            {
                "item": "mysticalagriculture:gold_seeds"
            },
            {
                "item": "allthecompressed:soul_sand_2x"
            },
            {
                "item": "mysticalagriculture:gold_seeds"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "allthecompressed:soularium_block_2x"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            }
        ],
        "result": {
            "id": "mysticalagriculture:soularium_seeds"
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 50000,
        "input": {
            "item": "mysticalagriculture:prosperity_seed_base"
        },
        "ingredients": [
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "allthecompressed:soularium_block_2x"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "mysticalagriculture:coal_seeds"
            },
            {
                "item": "mysticalagriculture:obsidian_seeds"
            },
            {
                "item": "mysticalagriculture:obsidian_seeds"
            },
            {
                "item": "allthecompressed:soularium_block_2x"
            },
            {
                "item": "mysticalagriculture:coal_seeds"
            },
            {
                "item": "mysticalagriculture:iron_seeds"
            },
            {
                "item": "allthecompressed:soularium_block_2x"
            },
            {
                "item": "mysticalagriculture:coal_seeds"
            },
            {
                "item": "mysticalagriculture:coal_seeds"
            },
            {
                "item": "mysticalagriculture:iron_seeds"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "allthecompressed:soularium_block_2x"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            }
        ],
        "result": {
            "id": "mysticalagriculture:dark_steel_seeds"
        }
    });


    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 50000,
        "input": {
            "item": "mysticalagriculture:prosperity_seed_base"
        },
        "ingredients": [
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "item": "allthecompressed:pulsating_alloy_block_2x"
            },
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "item": "mysticalagriculture:iron_seeds"
            },
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "mysticalagriculture:iron_seeds"
            },
            {
                "item": "mysticalagriculture:iron_seeds"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "allthecompressed:pulsating_alloy_block_2x"
            },
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "item": "mysticalagriculture:iron_seeds"
            },
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "item": "allthecompressed:pulsating_alloy_block_2x"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "allthecompressed:pulsating_alloy_block_2x"
            }
        ],
        "result": {
            "id": "mysticalagriculture:pulsating_alloy_seeds"
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 50000,
        "input": {
            "item": "mysticalagriculture:prosperity_seed_base"
        },
        "ingredients": [
            {
                "item": "allthecompressed:energetic_alloy_block_2x"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "allthecompressed:energetic_alloy_block_2x"
            },
            {
                "item": "mysticalagriculture:conductive_alloy_seeds"
            },
            {
                "item": "mysticalagriculture:conductive_alloy_seeds"
            },
            {
                "item": "mysticalagriculture:conductive_alloy_seeds"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "mysticalagriculture:redstone_seeds"
            },
            {
                "item": "mysticalagriculture:gold_seeds"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "mysticalagriculture:redstone_seeds"
            },
            {
                "item": "mysticalagriculture:redstone_seeds"
            },
            {
                "item": "mysticalagriculture:gold_seeds"
            },
            {
                "item": "mysticalagriculture:gold_seeds"
            },
            {
                "item": "allthecompressed:energetic_alloy_block_2x"
            },
            {
                "item": "mysticalagriculture:imperium_block"
            },
            {
                "item": "allthecompressed:energetic_alloy_block_2x"
            }
        ],
        "result": {
            "id": "mysticalagriculture:energetic_alloy_seeds"
        }
    });

    event.custom({
        "type": "mekanism:compressing",
        "chemical_input": {
            "amount": 20,
            "chemical": "mekanism:osmium"
        },
        "item_input": {
            "count": 4,
            "item": "mysticalagriculture:glowstone_seeds"
        },
        "output": {
            "count": 1,
            "id": "mysticalagriculture:refined_glowstone_seeds"
        },
        "per_tick_usage": true
    });

    event.custom({
        "type": "mekanism:compressing",
        "chemical_input": {
            "amount": 20,
            "chemical": "mekanism:diamond"
        },
        "item_input": {
            "count": 4,
            "item": "mysticalagriculture:obsidian_seeds"
        },
        "output": {
            "count": 1,
            "id": "mysticalagriculture:refined_obsidian_seeds"
        },
        "per_tick_usage": true
    });

    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "item": "mysticalagriculture:iron_seeds",
                "count": 6
            },
            {
                "item": "mysticalagriculture:imperium_block",
                "count": 6
            },
            {
                "item": "pneumaticcraft:compressed_iron_block",
                "count": 32
            },
        ],
        "pressure": 6,
        "results": [
            {
                "count": 2,
                "id": "mysticalagriculture:compressed_iron_seeds"
            }
        ]
    }).id('kubejs:pressure_chamber/compressed_iron_seeds');
});