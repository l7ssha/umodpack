MMREvents.machines(event => {
    event
        .create("mmr:assembly_line")
        .name("Assembly Line")
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["rrr", "rpr", "iii"],
                    ["rmr", "r r", "rrr"],
                    ["rrr", "rrr", "rer"],
                ])
                .keys(
                    {
                        "r": "modular_machinery_reborn:casing_reinforced",
                        "f": "modular_machinery_reborn:casing_firebox",
                        "p": "modular_machinery_reborn:casing_plain",
                        "e": "#modular_machinery_reborn:energyinputhatch",
                        "i": [
                            "#modular_machinery_reborn:itembus",
                            "#modular_machinery_reborn:fluidhatch"
                        ]
                    }
                )
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

    mmrRecipe(
        "mmr:assembly_line",
        3600,
        159744,
        [
            "4x megacells:cell_component_256m",
            "4x ae2:spatial_cell_component_128",
            "8x ae2:quartz_vibrant_glass",
            "8x advanced_ae:quantum_processor",
            "8x megacells:accumulation_processor",
            "4x emextras:cosmic_dense_control_circuit",
            "24x #ae2:smart_cable"
        ],
        [
            "1000x pneumaticcraft:plastic",
            "4000x advanced_ae:quantum_infusion_source",
        ],
        [
            "1x advanced_ae:quantum_storage_component"
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        1200,
        63000,
        [
            "4x ae2:cell_component_256k",
            "1x ae2:quartz_vibrant_glass",
            "2x mekanism:module_base",
            "12x #ae2:smart_cable",
            "8x megacells:accumulation_processor",
            "8x #c:dusts/sky_stone"
        ],
        [
            "1000x pneumaticcraft:plastic",
        ],
        [
            "1x megacells:cell_component_1m"
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        1200,
        63000,
        [
            "4x megacells:cell_component_1m",
            "1x ae2:quartz_vibrant_glass",
            "2x mekanism:module_base",
            "12x #ae2:smart_cable",
            "8x megacells:accumulation_processor",
            "8x #c:dusts/sky_stone"
        ],
        [
            "1000x pneumaticcraft:plastic",
        ],
        [
            "1x megacells:cell_component_4m"
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        1200,
        98304,
        [
            "4x megacells:cell_component_4m",
            "1x ae2:quartz_vibrant_glass",
            "2x mekanism:module_base",
            "12x #ae2:smart_cable",
            "8x megacells:accumulation_processor",
            "8x #c:dusts/sky_stone"
        ],
        [
            "1000x pneumaticcraft:plastic",
        ],
        [
            "1x megacells:cell_component_16m"
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        1200,
        98304,
        [
            "4x megacells:cell_component_16m",
            "1x ae2:quartz_vibrant_glass",
            "2x mekanism:module_base",
            "12x #ae2:smart_cable",
            "8x megacells:accumulation_processor",
            "8x #c:dusts/sky_stone"
        ],
        [
            "1000x pneumaticcraft:plastic",
        ],
        [
            "1x megacells:cell_component_64m"
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        1200,
        98304,
        [
            "4x megacells:cell_component_64m",
            "1x ae2:quartz_vibrant_glass",
            "2x mekanism:module_base",
            "12x #ae2:smart_cable",
            "8x megacells:accumulation_processor",
            "8x #c:dusts/sky_stone"
        ],
        [
            "1000x pneumaticcraft:plastic",
        ],
        [
            "1x megacells:cell_component_256m"
        ]
    );
});