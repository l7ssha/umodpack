MMREvents.machines(event => {
    event
        .create("mmr:assembly_line")
        .name("Assembly Line")
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["rfr", "fpf", "rir"],
                    ["rmr", "i i", "rer"],
                    ["rfr", "fpf", "rir"],
                ])
                .keys(
                    {
                        "r": "modular_machinery_reborn:casing_reinforced",
                        "f": "modular_machinery_reborn:casing_firebox",
                        "p": "modular_machinery_reborn:casing_plain",
                        "e": "#modular_machinery_reborn:energyinputhatch",
                        "i": [
                            "#modular_machinery_reborn:inputbus",
                            "#modular_machinery_reborn:outputbus",
                        ]
                    }
                )
        );
});

ServerEvents.recipes(event => {
    /**
     * Creates a MMR recipe with items arranged in a 3x3 grid and fluids in a 1x3 column
     * @param {string} name - Machine ID (e.g., "mmr:assembly_line")
     * @param {string} recipeId - Unique recipe identifier
     * @param {integer} recipeLength - Length of recipe in ticks
     * @param {integer} energyPerTick - Energy usage per recipe tick
     * @param {string[]} inputItems - Input items (max 9, format: "4x minecraft:item")
     * @param {string[]} inputFluids - Input fluids (max 3, format: "1000x minecraft:water")
     * @param {string[]} outputItems - Output items
     * @param {string[]} outputFluids - Output fluids (optional)
     */
    const mmrRecipe = (name, recipeId, recipeLength, energyPerTick, inputItems, inputFluids, outputItems, outputFluids) => {
        outputFluids = outputFluids || [];

        // ===================
        // Configuration
        // ===================
        const SLOT_SIZE = 18;
        const SLOT_MARGIN = 2;
        const SLOT_STEP = SLOT_SIZE + SLOT_MARGIN;

        // Grid dimensions
        const ITEM_GRID_WIDTH = 3;
        const ITEM_GRID_HEIGHT = 3;
        const FLUID_GRID_WIDTH = 1;
        const FLUID_GRID_HEIGHT = 3;

        // Progress bar dimensions
        const PROGRESS_WIDTH = 22;
        const PROGRESS_HEIGHT = 16;

        // Gaps between sections
        const GAP_AFTER_ITEMS = 10;
        const GAP_AFTER_FLUIDS = 10;
        const GAP_AFTER_PROGRESS = 20;

        // Starting positions
        const ITEM_START_X = 20;
        const ITEM_START_Y = 10;

        const FLUID_START_X = ITEM_START_X + (ITEM_GRID_WIDTH * SLOT_STEP) + GAP_AFTER_ITEMS;
        const FLUID_START_Y = ITEM_START_Y;

        // Progress bar position (vertically centered)
        const GRID_TOTAL_HEIGHT = SLOT_STEP * 3 - SLOT_MARGIN;
        const PROGRESS_X = FLUID_START_X + SLOT_SIZE + GAP_AFTER_FLUIDS;
        const PROGRESS_Y = ITEM_START_Y + (GRID_TOTAL_HEIGHT - PROGRESS_HEIGHT) / 2;

        // Output position (after progress bar)
        const OUTPUT_START_X = PROGRESS_X + PROGRESS_WIDTH + GAP_AFTER_PROGRESS;
        const OUTPUT_START_Y = ITEM_START_Y;

        // ===================
        // Recipe building
        // ===================
        let recipe = event.recipes.modular_machinery_reborn
            .machine_recipe(name, recipeLength)
            .requireEnergyPerTick(energyPerTick);

        // Store empty slot positions
        const emptyItems = [];
        const emptyFluids = [];

        let posX, posY;

        // Place input items in 3x3 grid
        for (let i = 0; i < ITEM_GRID_WIDTH * ITEM_GRID_HEIGHT; i++) {
            posX = ITEM_START_X + (i % ITEM_GRID_WIDTH) * SLOT_STEP;
            posY = ITEM_START_Y + Math.floor(i / ITEM_GRID_WIDTH) * SLOT_STEP;

            if (i < inputItems.length) {
                recipe.requireItem(inputItems[i], posX, posY);
            } else {
                emptyItems.push({ x: posX, y: posY });
            }
        }

        // Place input fluids in 1x3 grid (1 column, 3 rows)
        for (let j = 0; j < FLUID_GRID_WIDTH * FLUID_GRID_HEIGHT; j++) {
            posX = FLUID_START_X + (j % FLUID_GRID_WIDTH) * SLOT_STEP;
            posY = FLUID_START_Y + Math.floor(j / FLUID_GRID_WIDTH) * SLOT_STEP;

            if (j < inputFluids.length) {
                recipe.requireFluid(inputFluids[j], posX, posY);
            } else {
                emptyFluids.push({ x: posX, y: posY });
            }
        }

        // Place output items
        for (let k = 0; k < outputItems.length; k++) {
            posX = OUTPUT_START_X + (k % 3) * SLOT_STEP;
            posY = OUTPUT_START_Y + Math.floor(k / 3) * SLOT_STEP;
            recipe.produceItem(outputItems[k], posX, posY);
        }

        // Place output fluids (if any)
        for (let m = 0; m < outputFluids.length; m++) {
            posX = OUTPUT_START_X + ((outputItems.length % 3) + m) * SLOT_STEP;
            posY = OUTPUT_START_Y + Math.floor((outputItems.length + m) / 3) * SLOT_STEP;
            recipe.produceFluid(outputFluids[m], posX, posY);
        }

        // // Call .jei() first, then add empty slots
        // if (emptyItems.length > 0 || emptyFluids.length > 0) {
        //     recipe.jei();
        //
        //     for (let e = 0; e < emptyItems.length; e++) {
        //         recipe.emptyItem(emptyItems[e].x, emptyItems[e].y);
        //     }
        //
        //     for (let f = 0; f < emptyFluids.length; f++) {
        //         recipe.emptyFluid(emptyFluids[f].x, emptyFluids[f].y);
        //     }
        // }

        // recipe.progressData({x: })
    };

    mmrRecipe(
        "mmr:assembly_line",
        "kubejs:assembly_line/quantum_storage",
        200,
        1000,
        [
            "4x megacells:cell_component_256m",
            "4x ae2:spatial_cell_component_128",
            "8x ae2:quartz_vibrant_glass",
            "8x advanced_ae:quantum_processor",
            "8x megacells:accumulation_processor"
        ],
        [],
        [
            "1x advanced_ae:quantum_storage_component"
        ]
    );
});