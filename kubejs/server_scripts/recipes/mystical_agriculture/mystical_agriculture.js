const noBlockInName = ['stone', 'dirt', 'oak_log', 'deepslate', 'blue_ice', 'obsidian', 'glowstone'];

const infusionRecipes = [
    // { ingredient: '', essence: '', result: '', base: '', resource: '', level: 2 }
    { resource: 'stone', essence: 'inferium', level: 1 },
    { resource: 'dirt', essence: 'inferium', level: 1 },
    { resource: 'oak_log', essence: 'inferium', result: 'mysticalagriculture:wood_seeds' },
    { resource: 'blue_ice', essence: 'inferium', result: 'mysticalagriculture:ice_seeds' },
    { resource: 'deepslate', essence: 'inferium', level: 1 },

    { ingredient: { item: 'mysticalagriculture:nature_agglomeratio' }, essence: 'prudentium', result: 'mysticalagriculture:nature_seeds' },
    { ingredient: { item: 'mysticalagriculture:dye_agglomeratio' }, essence: 'prudentium', result: 'mysticalagriculture:dye_seeds' },
    { ingredient: { item: 'mysticalagriculture:nether_agglomeratio' }, essence: 'prudentium', result: 'mysticalagriculture:nether_seeds' },
    { ingredient: { item: 'mysticalagriculture:coral_agglomeratio' }, essence: 'prudentium', result: 'mysticalagriculture:coral_seeds' },
    { resource: 'coal', essence: 'prudentium', level: 0 },
    { ingredient: { item: 'minecraft:amethyst_cluster' }, essence: 'prudentium', result: 'mysticalagriculture:amethyst_seeds' },
    { ingredient: { item: 'industrialforegoing:dryrubber' }, essence: 'prudentium', result: 'mysticalagriculture:rubber_seeds' },
    { resource: 'sulfur', essence: 'prudentium', level: 1},
    { resource: 'aluminum', essence: 'prudentium', level: 0 },
    { ingredient: { item: 'enderio:void_chassis' }, essence: 'prudentium', result: 'mysticalagriculture:grains_of_infinity_seeds' },
    { resource: 'iron', essence: 'tertium', level: 0 },
    { resource: 'copper', essence: 'tertium', level: 0 },
    { resource: 'quartz', essence: 'tertium', result: 'mysticalagriculture:nether_quartz_seeds', level: 0 },
    { resource: 'glowstone', essence: 'tertium', level: 0 },
    { resource: 'redstone', essence: 'tertium', level: 0 },
    { resource: 'obsidian', essence: 'tertium', level: 0 },
    { ingredient: { item: 'minecraft:prismarine_bricks' }, essence: 'tertium', result: 'mysticalagriculture:prismarine_seeds' },
    { resource: 'tin', essence: 'tertium', level: 0 },
    { resource: 'bronze', essence: 'tertium', level: 0 },
    { resource: 'zinc', essence: 'tertium', level: 0 },
    { resource: 'brass', essence: 'tertium', level: 0 },
    { resource: 'silver', essence: 'tertium', level: 0 },
    { resource: 'lead', essence: 'tertium', level: 0 },

    { resource: 'gold', essence: 'imperium', level: 1 },
    { resource: 'lapis', essence: 'imperium', result: 'mysticalagriculture:lapis_lazuli_seeds', level: 1 },
    { resource: 'nickel', essence: 'imperium', level: 1 },
    { resource: 'uranium', essence: 'imperium', level: 1 },
    { resource: 'ruby', essence: 'imperium', level: 1 },
    { resource: 'sapphire', essence: 'imperium', level: 1 },
    { resource: 'peridot', essence: 'imperium', level: 1 },
    { resource: 'osmium', essence: 'imperium', level: 1 },
    { resource: 'fluorite', essence: 'imperium', level: 1 },
    { resource: 'fluix', essence: 'imperium', level: 1 },

    { resource: 'diamond', essence: 'supremium' },
    { resource: 'emerald', essence: 'supremium' },
    { resource: 'netherite', essence: 'supremium', base: 'mysticalagriculture:nether_seeds' },
    { resource: 'iridium', essence: 'supremium' },
    { resource: 'platinum', essence: 'supremium' },
];
const elementalSeeds = [
    'air', 'earth', 'fire', 'water'
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
        let level = item.level == undefined ? 2 : item.level;

        let resource = item.resource;
        if (resource !== undefined) {
            if (level == 0) {
                ingredient = { tag: `c:storage_blocks/${resource}` };
            } else {
                const ingredientResource = noBlockInName.includes(resource) ? resource : `${resource}_block`;

                ingredient = { item: `allthecompressed:${ingredientResource}_${level}x` };
            }

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

    event.custom({
        "type": "avaritia:shaped_table",
        "pattern": [
            "AABAA",
            "ACACA",
            "BADAB",
            "ACACA",
            "AABAA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "twilightforest:armor_shard"
            },
            "B": {
                "item": "mysticalagriculture:imperium_block"
            },
            "C": {
                "item": "twilightforest:knightmetal_block"
            },
            "D": {
                "item": "mysticalagriculture:iron_seeds"
            }
        },
        "result": {
            "id": "mysticalagriculture:knightmetal_seeds"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AABBBAA",
            "ABCDCBA",
            "BEBABFB",
            "BDABADB",
            "BEBABFB",
            "ABGDGBA",
            "AABBBAA"
        ],
        "tier": 3,
        "key": {
            "A": {
                "item": "mysticalagriculture:imperium_block"
            },
            "B": {
                "item": "twilightforest:fiery_tears"
            },
            "C": {
                "item": "mysticalagriculture:netherite_seeds"
            },
            "D": {
                "item": "mysticalagriculture:gold_seeds"
            },
            "E": {
                "item": "mysticalagriculture:emerald_seeds"
            },
            "F": {
                "item": "mysticalagriculture:diamond_seeds"
            },
            "G": {
                "item": "mysticalagriculture:iron_seeds"
            }
        },
        "result": {
            "id": "mysticalagriculture:fiery_ingot_seeds"
        }
    });

    event.custom({
        "type": "powah:energizing",
        "energy": 540000,
        "ingredients": [
            { item: 'allthecompressed:energized_steel_block_1x' },
            { item: 'allthecompressed:energized_steel_block_1x' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:gold_seeds' },
            { item: 'mysticalagriculture:iron_seeds' }
        ],
        "result": {
            "id": 'mysticalagriculture:energized_steel_seeds'
        }
    });

    event.custom({
        "type": "powah:energizing",
        "energy": 540000,
        "ingredients": [
            { item: 'allthecompressed:energized_steel_block_1x' },
            { item: 'allthecompressed:energized_steel_block_1x' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:gold_seeds' },
            { item: 'mysticalagriculture:iron_seeds' }
        ],
        "result": {
            "id": 'mysticalagriculture:energized_steel_seeds'
        }
    });

    event.custom({
        "type": "powah:energizing",
        "energy": 2160000,
        "ingredients": [
            { item: 'allthecompressed:blaze_rod_block_1x' },
            { item: 'allthecompressed:blaze_rod_block_1x' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:imperium_block' },
            { item: 'mysticalagriculture:prosperity_seed_base' },
        ],
        "result": {
            "id": 'mysticalagriculture:blazing_crystal_seeds'
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 100000,
        "input": {
            "item": "mysticalagriculture:prosperity_seed_base"
        },
        "ingredients": [
            {
                "item": "mysticalagriculture:supremium_block"
            },
            {
                "item": "allthecompressed:vibrant_alloy_block_2x"
            },
            {
                "item": "allthecompressed:vibrant_alloy_block_2x"
            },
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "item": "mysticalagriculture:supremium_block"
            },
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "item": "mysticalagriculture:glowstone_seeds"
            },
            {
                "item": "mysticalagriculture:supremium_block"
            },
            {
                "item": "mysticalagriculture:energetic_alloy_seeds"
            },
            {
                "item": "mysticalagriculture:energetic_alloy_seeds"
            },
            {
                "item": "mysticalagriculture:glowstone_seeds"
            },
            {
                "item": "allthecompressed:vibrant_alloy_block_2x"
            },
            {
                "item": "allthecompressed:vibrant_alloy_block_2x"
            },
            {
                "item": "mysticalagriculture:supremium_block"
            }
        ],
        "result": {
            "id": "mysticalagriculture:energetic_alloy_seeds"
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 100000,
        "input": {
            "item": "mysticalagriculture:prosperity_seed_base"
        },
        "ingredients": [
            {
                "item": "mysticalagriculture:supremium_block"
            },
            {
                "item": "allthecompressed:end_steel_block_2x"
            },
            {
                "item": "allthecompressed:end_steel_block_2x"
            },
            {
                "item": "mysticalagriculture:dark_steel_seeds"
            },
            {
                "item": "mysticalagriculture:dark_steel_seeds"
            },
            {
                "item": "mysticalagriculture:end_seeds"
            },
            {
                "item": "mysticalagriculture:supremium_block"
            },
            {
                "item": "allthecompressed:end_steel_block_2x"
            },
            {
                "item": "mysticalagriculture:end_seeds"
            },
            {
                "item": "mysticalagriculture:supremium_block"
            },
            {
                "item": "allthecompressed:end_steel_block_2x"
            },
            {
                "item": "mysticalagriculture:obsidian_seeds"
            },
            {
                "item": "mysticalagriculture:obsidian_seeds"
            },
            {
                "item": "mysticalagriculture:supremium_block"
            }
        ],
        "result": {
            "id": "mysticalagriculture:end_steel_seeds"
        }
    });

    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "item": "mysticalagriculture:end_seeds",
            "count": 3,
        },
        "ingredients": [
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
                    "item": "mysticalagriculture:supremium_block"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "mysticalagriculture:supremium_block"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "mysticalagriculture:supremium_block"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "mysticalagriculture:supremium_block"
                }
            },
        ],
        "result": {
            "count": 1,
            "id": "mysticalagriculture:draconium_seeds"
        },
        "techLevel": "draconic",
        "totalEnergy": 1024000
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 100000,
        "input": {
            "item": "mysticalagriculture:prosperity_seed_base"
        },
        "ingredients": [
            {
                "item": "bigreactors:cyanite_block"
            },
            {
                "item": "bigreactors:cyanite_block"
            },
            {
                "item": "mysticalagriculture:supremium_block"
            },
            {
                "item": "bigreactors:cyanite_block"
            },
            {
                "item": "bigreactors:cyanite_block"
            },
            {
                "item": "bigreactors:cyanite_block"
            },
            {
                "item": "bigreactors:cyanite_block"
            },
            {
                "item": "bigreactors:cyanite_block"
            },
            {
                "item": "bigreactors:cyanite_block"
            },
            {
                "item": "bigreactors:cyanite_block"
            },
            {
                "item": "mysticalagriculture:supremium_block"
            },
            {
                "item": "bigreactors:cyanite_block"
            },
            {
                "item": "bigreactors:cyanite_block"
            },
            {
                "item": "mysticalagriculture:supremium_block"
            },
            {
                "item": "bigreactors:cyanite_block"
            },
            {
                "item": "bigreactors:cyanite_block"
            },
            {
                "item": "bigreactors:cyanite_block"
            },
            {
                "item": "bigreactors:cyanite_block"
            },
            {
                "item": "bigreactors:cyanite_block"
            },
            {
                "item": "bigreactors:cyanite_block"
            },
            {
                "item": "bigreactors:cyanite_block"
            },
            {
                "item": "mysticalagriculture:supremium_block"
            },
            {
                "item": "bigreactors:cyanite_block"
            },
            {
                "item": "bigreactors:cyanite_block"
            }
        ],
        "result": {
            "id": "mysticalagriculture:cyanite_seeds"
        }
    });

    event.custom({
        "type": "powah:energizing",
        "energy": 54600000,
        "ingredients": [
            { item: 'allthecompressed:emerald_block_2x' },
            { item: 'allthecompressed:emerald_block_2x' },
            { item: 'mysticalagriculture:supremium_block' },
            { item: 'mysticalagriculture:supremium_block' },
            { item: 'mysticalagriculture:prosperity_seed_base' },
        ],
        "result": {
            "id": 'mysticalagriculture:spirited_crystal_seeds'
        }
    });

    event.custom({
        "type": "powah:energizing",
        "energy": 500000,
        "ingredients": [
            { item: 'allthecompressed:emerald_block_1x' },
            { item: 'allthecompressed:emerald_block_1x' },
            { item: 'mysticalagriculture:supremium_block' },
            { item: 'mysticalagriculture:supremium_block' },
            { item: 'mysticalagriculture:prosperity_seed_base' },
        ],
        "result": {
            "id": 'mysticalagriculture:uraninite_seeds'
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "  ABA  ",
            " ACDCA ",
            "ACDEDCA",
            "BDE EDB",
            "ACDEDCA",
            " ACDCA ",
            "  ABA  "
        ],
        "tier": 3,
        "key": {
            "A": {
                "item": "mysticalagradditions:insanium_block"
            },
            "B": {
                "item": "mysticalagradditions:nether_star_crux"
            },
            "C": {
                "item": "mysticalagriculture:nether_seeds"
            },
            "D": {
                "item": "extendedcrafting:nether_star_block"
            },
            "E": {
                "item": "mysticalagriculture:soulium_seed_base"
            }
        },
        "result": {
            "id": "mysticalagriculture:nether_star_seeds"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " ABCAA ",
            "ABDEDBA",
            "BDEFEDA",
            "CEF FEC",
            "ADEFEDB",
            "ABDEDBA",
            " AACBA "
        ],
        "tier": 3,
        "key": {
            "A": {
                "item": "mysticalagradditions:insanium_block"
            },
            "B": {
                "item": "mysticalagriculture:end_seeds"
            },
            "C": {
                "item": "mysticalagradditions:dragon_egg_crux"
            },
            "D": {
                "item": "minecraft:dragon_egg"
            },
            "E": {
                "item": "productivebees:draconic_chunk"
            },
            "F": {
                "item": "mysticalagriculture:soulium_seed_base"
            }
        },
        "result": {
            "id": "mysticalagriculture:dragon_egg_seeds"
        }
    });

    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "item": "mysticalagriculture:draconium_seeds",
            "count": 3,
        },
        "ingredients": [
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:awakened_draconium_block"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:awakened_draconium_block"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:awakened_draconium_block"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "draconicevolution:awakened_draconium_block"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "kubejs:divinium_essence"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "kubejs:divinium_essence"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "kubejs:divinium_essence"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "kubejs:divinium_essence"
                }
            }
        ],
        "result": {
            "count": 1,
            "id": "mysticalagriculture:awakened_draconium_seeds"
        },
        "techLevel": "chaotic",
        "totalEnergy": 1024000000000
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 20000,
        "power_rate": 100,
        "pattern": [
            "AAB",
            "CDC",
            "BAA"
        ],
        "key": {
            "A": {
                "item": "minecraft:honey_block"
            },
            "B": {
                "item": "minecraft:honeycomb_block"
            },
            "C": {
                "item": "mysticalagriculture:prudentium_block"
            },
            "D": {
                "item": "mysticalagriculture:prosperity_seed_base"
            }
        },
        "result": {
            "id": "mysticalagriculture:honey_seeds"
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
                "item": "minecraft:sculk_sensor"
            },
            {
                "item": "mysticalagriculture:tertium_block"
            },
            {
                "item": "mysticalagriculture:tertium_block"
            },
            {
                "item": "minecraft:sculk"
            },
            {
                "item": "minecraft:sculk"
            },
            {
                "item": "minecraft:sculk"
            },
            {
                "item": "minecraft:sculk_shrieker"
            },
            {
                "item": "minecraft:sculk"
            },
            {
                "item": "minecraft:sculk"
            },
            {
                "item": "minecraft:sculk_shrieker"
            },
            {
                "item": "minecraft:sculk"
            },
            {
                "item": "minecraft:sculk"
            },
            {
                "item": "minecraft:sculk"
            },
            {
                "item": "mysticalagriculture:tertium_block"
            },
            {
                "item": "mysticalagriculture:tertium_block"
            },
            {
                "item": "minecraft:sculk_sensor"
            }
        ],
        "result": {
            "id": "mysticalagriculture:sculk_seeds"
        }
    });

    event.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "item": "mysticalagriculture:awakened_draconium_seeds",
            "count": 2,
        },
        "ingredients": [
            {
                "consume": true,
                "ingredient": {
                    "item": "avaritia:neutron"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "avaritia:neutron"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "avaritia:neutron"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "avaritia:neutron"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "kubejs:divinium_essence"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "kubejs:divinium_essence"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "kubejs:divinium_essence"
                }
            },
            {
                "consume": true,
                "ingredient": {
                    "item": "kubejs:divinium_essence"
                }
            }
        ],
        "result": {
            "count": 1,
            "id": "mysticalagriculture:neutronium_seeds"
        },
        "techLevel": "chaotic",
        "totalEnergy": 1024000000000000
    });

    elementalSeeds.forEach(name => {
        const ingredients = [];

        for (let i = 0; i < 20; i++) {
            ingredients.push({ "item": `mysticalagriculture:${name}_agglomeratio` });

            if (i < 4) {
                ingredients.push({ "item": "mysticalagriculture:imperium_gemstone_block" });
            }
        }

        event.custom({
            "type": "extendedcrafting:combination",
            "power_cost": 30000,
            "input": {
                "item": `mysticalagriculture:prosperity_seed_base`
            },
            "ingredients": ingredients,
            "result": {
                "id": `mysticalagriculture:${name}_seeds`
            }
        });
    });
});