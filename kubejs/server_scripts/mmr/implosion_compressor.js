MMREvents.machines(event => {
    event
        .create("mmr:electric_implosion_compressor")
        .name("Electric Implosion Processor")
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["  b  ", " bbb ", "bbbbb", " bbb ", "  b  "],
                    [" bmb ", "b   b", "d   d", "b   b", " bdb "],
                    [" bbb ", "b   b", "d   d", "b   b", " bdb "],
                    ["  b  ", " bbb ", "bbbbb", " bbb ", "  b  "]
                ])
                .keys({
                    "b": "minecraft:netherite_block",
                    "d": [
                        "#modular_machinery_reborn:itembus",
                        "#modular_machinery_reborn:energyinputhatch",
                        "minecraft:netherite_block",
                    ]
                })
        );
});

ServerEvents.recipes(event => {
    const mmrRecipe = (name, recipeLength, energyPerTick, inputItems, outputItems) => {
        const SLOT_SIZE = 18;
        const SLOT_MARGIN = 0;
        const SLOT_STEP = SLOT_SIZE + SLOT_MARGIN;

        const ITEM_GRID_WIDTH = 5;
        const ITEM_GRID_HEIGHT = 3;

        const OUTPUT_ITEM_GRID_WIDTH = 1;
        const OUTPUT_ITEM_GRID_HEIGHT = 3;

        const PROGRESS_WIDTH = 22;
        const PROGRESS_HEIGHT = 16;

        const GAP_AFTER_ITEMS = 5;
        const GAP_AFTER_PROGRESS = 10;

        const ITEM_START_X = 25;
        const ITEM_START_Y = 0;

        const GRID_TOTAL_HEIGHT = SLOT_STEP * 3 - SLOT_MARGIN;
        const PROGRESS_X = ITEM_START_X + (SLOT_SIZE * ITEM_GRID_WIDTH) + GAP_AFTER_ITEMS;
        const PROGRESS_Y = ITEM_START_Y + (GRID_TOTAL_HEIGHT - PROGRESS_HEIGHT) / 2;

        const OUTPUT_ITEM_START_X = PROGRESS_X + PROGRESS_WIDTH + GAP_AFTER_PROGRESS;
        const OUTPUT_ITEM_START_Y = ITEM_START_Y;

        let recipe = event.recipes.modular_machinery_reborn
            .machine_recipe(name, recipeLength)
            .requireEnergyPerTick(energyPerTick);

        for (let i = 0; i < inputItems.length; i++) {
            recipe.requireItem(inputItems[i]);
        }

        for (let k = 0; k < outputItems.length; k++) {
            recipe.produceItem(outputItems[k]);
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

        for (let k = 0; k < OUTPUT_ITEM_GRID_WIDTH * OUTPUT_ITEM_GRID_HEIGHT; k++) {
            posX = OUTPUT_ITEM_START_X + (k % OUTPUT_ITEM_GRID_WIDTH) * SLOT_STEP;
            posY = OUTPUT_ITEM_START_Y + Math.floor(k / OUTPUT_ITEM_GRID_WIDTH) * SLOT_STEP;

            if (k < outputItems.length) {
                recipe.produceItem(outputItems[k], posX, posY);
            } else {
                recipe.emptyItem(posX, posY);
            }
        }

        recipe
            .requireEnergyPerTick(energyPerTick)
            .progressData(ProgressData.create().x(PROGRESS_X).y(PROGRESS_Y))
            .width(178)
            .height(52);
    };

    mmrRecipe(
        "mmr:electric_implosion_compressor",
        40,
        2097152,
        [
            "64x kubejs:ultimate_explosive_primer",
            "1x kubejs:unrefined_infinity",
        ],
        [
            "1x avaritia:infinity_catalyst"
        ]
    );

    mmrRecipe(
        "mmr:electric_implosion_compressor",
        40,
        10000,
        [
            "2x ae2:singularity",
            "2x #c:nether_stars",
            "2x #c:ender_pearls"
        ],
        [
            "1x appliedsoul:ender_star"
        ]
    );
});