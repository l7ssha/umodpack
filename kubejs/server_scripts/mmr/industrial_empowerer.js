MMREvents.machines(event => {
    event
        .create("mmr:industrial_empowerer")
        .name("Industrial Empowerer")
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["  dmd  ", " ddddd ", "dddedd ", "fdededf", "dddedd ", " bdddb ", "  bbb  "],
                    ["   f   ", " g g g ", "       ", "fg h gf", "       ", " g g g ", "   f   "],
                    ["   f   ", "   p   ", "       ", "fo   nf", "       ", "   l   ", "   f   "],
                    ["       ", "   f   ", "       ", " f q f ", "       ", "   f   ", "       "],
                    ["       ", "       ", "   f   ", "  fff  ", "   f   ", "       ", "       "]
                ])
                .keys({
                    "b": [
                        "#modular_machinery_reborn:itembus",
                        "#modular_machinery_reborn:fluidhatch",
                        "#modular_machinery_reborn:energyinputhatch",
                        "actuallyadditions:empowered_enori_crystal_block",
                    ],
                    "d": "actuallyadditions:empowered_enori_crystal_block",
                    "e": "actuallyadditions:empowered_void_crystal_block",
                    "f": "actuallyadditions:ender_casing",
                    "g": "actuallyadditions:display_stand",
                    "h": "actuallyadditions:empowerer",
                    "l": "actuallyadditions:atomic_reconstructor",
                    "n": "actuallyadditions:atomic_reconstructor",
                    "o": "actuallyadditions:atomic_reconstructor",
                    "p": "actuallyadditions:atomic_reconstructor",
                    "q": "actuallyadditions:atomic_reconstructor[facing=down]"
                })
        );
});

ServerEvents.recipes(event => {
    const mmrRecipe = (name, recipeLength, energyPerTick, inputItems, inputFluids, outputItems, outputFluids) => {
        outputFluids = outputFluids || [];

        const SLOT_SIZE = 18;
        const SLOT_MARGIN = 0;
        const SLOT_STEP = SLOT_SIZE + SLOT_MARGIN;

        const ITEM_GRID_WIDTH = 3;
        const ITEM_GRID_HEIGHT = 3;
        const FLUID_GRID_WIDTH = 1;
        const FLUID_GRID_HEIGHT = 3;

        const OUTPUT_ITEM_GRID_WIDTH = 1;
        const OUTPUT_ITEM_GRID_HEIGHT = 3;
        const OUTPUT_FLUID_GRID_WIDTH = 1;
        const OUTPUT_FLUID_GRID_HEIGHT = 3;

        const PROGRESS_WIDTH = 22;
        const PROGRESS_HEIGHT = 16;

        const GAP_AFTER_ITEMS = 5;
        const GAP_AFTER_FLUIDS = 5;
        const GAP_AFTER_PROGRESS = 10;
        const GAP_BETWEEN_OUTPUT_ITEMS_AND_FLUIDS = 5;

        const ITEM_START_X = 25;
        const ITEM_START_Y = 0;

        const FLUID_START_X = ITEM_START_X + (ITEM_GRID_WIDTH * SLOT_STEP) + GAP_AFTER_ITEMS;
        const FLUID_START_Y = ITEM_START_Y;

        const GRID_TOTAL_HEIGHT = SLOT_STEP * 3 - SLOT_MARGIN;
        const PROGRESS_X = FLUID_START_X + SLOT_SIZE + GAP_AFTER_FLUIDS;
        const PROGRESS_Y = ITEM_START_Y + (GRID_TOTAL_HEIGHT - PROGRESS_HEIGHT) / 2;

        const OUTPUT_ITEM_START_X = PROGRESS_X + PROGRESS_WIDTH + GAP_AFTER_PROGRESS;
        const OUTPUT_ITEM_START_Y = ITEM_START_Y;

        const OUTPUT_FLUID_START_X = OUTPUT_ITEM_START_X + (OUTPUT_ITEM_GRID_WIDTH * SLOT_STEP) + GAP_BETWEEN_OUTPUT_ITEMS_AND_FLUIDS;
        const OUTPUT_FLUID_START_Y = ITEM_START_Y;

        let recipe = event.recipes.modular_machinery_reborn
            .machine_recipe(name, recipeLength)
            .requireEnergyPerTick(energyPerTick);

        for (let i = 0; i < inputItems.length; i++) {
            recipe.requireItem(inputItems[i]);
        }
        for (let j = 0; j < inputFluids.length; j++) {
            recipe.requireFluid(inputFluids[j]);
        }
        for (let k = 0; k < outputItems.length; k++) {
            recipe.produceItem(outputItems[k]);
        }
        for (let m = 0; m < outputFluids.length; m++) {
            recipe.produceFluid(outputFluids[m]);
        }

        recipe.jei();

        let posX, posY;
        for (let i = 0; i < ITEM_GRID_WIDTH * ITEM_GRID_HEIGHT; i++) {
            posX = ITEM_START_X + (i % ITEM_GRID_WIDTH) * SLOT_STEP;
            posY = ITEM_START_Y + Math.floor(i / ITEM_GRID_WIDTH) * SLOT_STEP;

            if (i < inputItems.length) {
                recipe.requireItem(inputItems[i], posX, posY);
            } else {
                recipe.emptyItem(posX, posY);
            }
        }

        for (let j = 0; j < FLUID_GRID_WIDTH * FLUID_GRID_HEIGHT; j++) {
            posX = FLUID_START_X + (j % FLUID_GRID_WIDTH) * SLOT_STEP;
            posY = FLUID_START_Y + Math.floor(j / FLUID_GRID_WIDTH) * SLOT_STEP;

            if (j < inputFluids.length) {
                recipe.requireFluid(inputFluids[j], posX, posY);
            } else {
                recipe.emptyFluid(posX, posY);
            }
        }

        for (let k = 0; k < OUTPUT_ITEM_GRID_WIDTH * OUTPUT_ITEM_GRID_HEIGHT; k++) {
            posX = OUTPUT_ITEM_START_X + (k % OUTPUT_ITEM_GRID_WIDTH) * SLOT_STEP;
            posY = OUTPUT_ITEM_START_Y + Math.floor(k / OUTPUT_ITEM_GRID_WIDTH) * SLOT_STEP;

            if (k < outputItems.length) {
                recipe.produceItem(outputItems[k], posX, posY);
            } else {
                recipe.emptyItem(posX, posY);
            }
        }

        for (let m = 0; m < OUTPUT_FLUID_GRID_WIDTH * OUTPUT_FLUID_GRID_HEIGHT; m++) {
            posX = OUTPUT_FLUID_START_X + (m % OUTPUT_FLUID_GRID_WIDTH) * SLOT_STEP;
            posY = OUTPUT_FLUID_START_Y + Math.floor(m / OUTPUT_FLUID_GRID_WIDTH) * SLOT_STEP;

            if (m < outputFluids.length) {
                recipe.produceFluid(outputFluids[m], posX, posY);
            } else {
                recipe.emptyFluid(posX, posY);
            }
        }

        recipe
            .requireEnergyPerTick(energyPerTick)
            .progressData(ProgressData.create().x(PROGRESS_X).y(PROGRESS_Y))
            .width(178)
            .height(52);
    };

    const atomicReconstructorRecipes = new Map([
        ["iron", "enori"],
        ["redstone", "restonia"],
        ["lapis", "palis"],
        ["diamond", "diamatine"],
        ["coal", "void"],
        ["emerald", "emeradic"],
    ]);

    for (let [key, value] of atomicReconstructorRecipes) {
        mmrRecipe(
            "mmr:industrial_empowerer",
            20,
            15000,
            [
                `1x #c:storage_blocks/${key}`,
            ],
            [],
            [
                `1x actuallyadditions:${value}_crystal_block`
            ]
        );
    }

    // Empowerer
    const empowererRecipes = new Map([
        [
            "enori",
            [
                "1x actuallyadditions:enori_crystal_block",
                "1x minecraft:snowball",
                "1x #c:dyes/gray",
                "1x #c:cobblestones",
                "1x #minecraft:stone_buttons"
            ]
        ],
        [
            "restonia",
            [
                "1x #c:storage_blocks/restonia_crystal",
                "1x #c:dyes/red",
                "1x #c:dusts/redstone",
                "1x #c:bricks/nether",
                "1x #c:bricks/normal",
            ]
        ],
        [
            "palis",
            [
                "1x actuallyadditions:palis_crystal_block",
                "1x #c:dyes/cyan",
                "3x #c:dusts/prismarine",
            ]
        ],
        [
            "diamatine",
            [
                "1x actuallyadditions:diamatine_crystal_block",
                "2x #c:clay",
                "2x minecraft:clay",
                "1x #c:dyes/light_blue",
            ]
        ],
        [
            "void",
            [
                "1x actuallyadditions:void_crystal_block",
                "1x #c:gems/coal",
                "1x minecraft:flint",
                "1x #c:stones",
                "1x #c:dyes/black",
            ]
        ],
        [
            "emeradic",
            [
                "1x actuallyadditions:emeradic_crystal_block",
                "1x minecraft:short_grass",
                "1x #minecraft:saplings",
                "1x #c:slime_balls",
                "1x #c:dyes/lime",
            ]
        ]
    ]);

    for (let [key, value] of empowererRecipes) {
        mmrRecipe(
            "mmr:industrial_empowerer",
            20,
            15000,
            value,
            [
                "250x actuallyadditions:refined_canola_oil"
            ],
            [
                `1x actuallyadditions:empowered_${key}_crystal_block`
            ]
        );
    }

    mmrRecipe(
        "mmr:industrial_empowerer",
        20,
        15000,
        [],
        [
            "1000x actuallyadditions:refined_canola_oil",
        ],
        [],
        [
            "750x actuallyadditions:empowered_oil",
        ]
    );

    mmrRecipe(
        "mmr:industrial_empowerer",
        3600,
        150000,
        [
            "8x kubejs:abbysal_alloy",
            "2x #evolvedmekanism:enriched/better_gold"
        ],
        [
            "16000x bigreactors:redfrigium",
        ],
        [
            "2x kubejs:confusion_alloy"
        ],
        []
    );
});