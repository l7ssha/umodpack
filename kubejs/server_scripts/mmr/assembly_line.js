MMREvents.machines(event => {
    event
        .create("mmr:assembly_line")
        .name("Assembly Line")
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["aaa", "aca", "aca", "aca", "fff"],
                    ["ama", "ded", "ded", "ded", "ded"],
                    ["aaa", "aba", "aba", "aba", "aba"]
                ])
                .keys({
                    "a": "immersiveengineering:sheetmetal_steel",
                    "b": [
                        "#modular_machinery_reborn:itembus",
                        "#modular_machinery_reborn:fluidhatch",
                        "immersiveengineering:steel_scaffolding_standard",
                    ],
                    "c": "immersiveengineering:steel_scaffolding_standard",
                    "d": "minecraft:glass",
                    "e": [
                        "immersiveengineering:logic_unit",
                    ],
                    "f": [
                        "#modular_machinery_reborn:energyinputhatch",
                        "#modular_machinery_reborn:parallelhatch",
                        "immersiveengineering:sheetmetal_steel",
                    ],
                }),
        );
});

ServerEvents.recipes(event => {
    const mmrRecipe = (name, recipeLength, energyPerTick, inputItems, inputFluids, outputItems, outputFluids, requiredTierBlock) => {
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
            "2x pneumaticcraft:module_expansion_card",
            "8x draconicevolution:draconium_core",
            "8x ae2:quartz_vibrant_glass",
            "8x advanced_ae:quantum_processor",
            "8x megacells:accumulation_processor",
            "2x #c:circuits/quantum",
            "12x #ae2:smart_cable"
        ],
        [
            "1000x justdirethings:polymorphic_fluid_source",
            "2000x advanced_ae:quantum_infusion_source",
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
            "3x ae2:cell_component_256k",
            "4x #c:circuits/overclocked",
            "2x mekanism:module_base",
            "12x #ae2:smart_cable",
            "8x megacells:accumulation_processor",
            "8x #c:dusts/draconium"
        ],
        [
            "1000x justdirethings:polymorphic_fluid_source",
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
            "3x megacells:cell_component_1m",
            "1x ae2:quartz_vibrant_glass",
            "2x mekanism:module_base",
            "12x #ae2:smart_cable",
            "8x megacells:accumulation_processor",
            "8x #c:dusts/draconium"
        ],
        [
            "1000x justdirethings:polymorphic_fluid_source",
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
            "3x megacells:cell_component_4m",
            "1x ae2:quartz_vibrant_glass",
            "2x mekanism:module_base",
            "12x #ae2:smart_cable",
            "8x megacells:accumulation_processor",
            "8x #c:dusts/draconium_awakened"
        ],
        [
            "1000x justdirethings:polymorphic_fluid_source",
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
            "3x megacells:cell_component_16m",
            "1x ae2:quartz_vibrant_glass",
            "2x mekanism:module_base",
            "12x #ae2:smart_cable",
            "8x megacells:accumulation_processor",
            "8x #c:dusts/draconium_awakened"
        ],
        [
            "1000x justdirethings:polymorphic_fluid_source",
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
            "3x megacells:cell_component_64m",
            "1x ae2:quartz_vibrant_glass",
            "2x mekanism:module_base",
            "12x #ae2:smart_cable",
            "8x megacells:accumulation_processor",
            "16x #c:dusts/draconium_awakened"
        ],
        [
            "1000x justdirethings:polymorphic_fluid_source",
        ],
        [
            "1x megacells:cell_component_256m"
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        600,
        20000,
        [
            '1x evolvedmekanism:ultimate_personal_chest',
            '2x mekanism:structural_glass',
            '4x #c:alloys/supreme',
            '1x sophisticatedstorage:stack_upgrade_tier_3',
        ],
        [
            '1000x justdirethings:polymorphic_fluid_source'
        ],
        [
            '1x mekanism_extras:upgrade_stack',
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        600,
        20000,
        [
            '1x mekanism:ingot_refined_glowstone',
            '2x mekanism:structural_glass',
            '4x #c:alloys/dense',
            '4x dysoncubeproject:solar_sail_package',
        ],
        [
            '1000x justdirethings:polymorphic_fluid_source'
        ],
        [
            '1x evolvedmekanism:upgrade_solar',
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        600,
        20000,
        [
            '4x mekanism:hdpe_sheet',
            '2x mekanism:structural_glass',
            '4x #c:alloys/cosmic',
        ],
        [
            '1000x justdirethings:polymorphic_fluid_source'
        ],
        [
            '1x mekanism_extras:upgrade_ionic_membrane',
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        9600,
        159744,
        [
            '8x minecraft:bedrock',
            '16x #c:circuits/infinite_multiversal',
            '32x mekmm:uu_matter',
            '4x draconicevolution:chaotic_core'
        ],
        [
            '16000x ifeu:dragon_star_essence'
        ],
        [
            '1x kubejs:tesseract',
        ],
        [
            '1000x mekanism_extras:polonium_containing_solution'
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        600,
        59744,
        [
            '2x extendedae:wireless_hub',
            '8x #c:circuits/cosmic',
            '1x immersiveengineering:tesla_coil',
            '1x mekmm:wireless_transmission_station',
        ],
        [
            '2000x advanced_ae:quantum_infusion_source'
        ],
        [
            '1x extendedae_plus:wireless_transceiver',
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        600,
        59744,
        [
            '1x extendedae:wireless_connect',
            '2x #c:circuits/cosmic',
            '1x extendedae:ex_pattern_provider',
            '32x #c:gems/carminite'
        ],
        [],
        [
            '1x extendedae_plus:mirror_pattern_provider',
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        200,
        1000,
        [
            '5x #ae2:covered_cable',
            '1x #c:circuits/absolute',
            '6x #c:dusts/vibranium',
            '5x sfm:tunnelled_fancy_cable',
            '2x #c:ingots/ironwood'
        ],
        [],
        [
            '4x ae2:fluix_smart_cable',
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        1200,
        10000,
        [
            '1x #c:circuits/absolute',
            '1x #c:circuits/overclocked',
            '2x emextras:base_control_circuit',
            '6x actuallyadditions:empowered_emeradic_crystal',
            '16x #c:dusts/vibranium_allthemodium_alloy'
        ],
        [
            '1000x justdirethings:unrefined_t2_fluid_source'
        ],
        [
            '1x emextras:absolute_overclocked_control_circuit',
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        1200,
        50000,
        [
            '1x #c:circuits/supreme',
            '1x #c:circuits/quantum',
            '3x emextras:base_control_circuit',
            '16x #c:dusts/vibranium_allthemodium_alloy',
            '4x #c:dusts/unobtainium_allthemodium_alloy',
            '8x kubejs:abbysal_alloy'
        ],
        [
            '1000x justdirethings:unrefined_t2_fluid_source'
        ],
        [
            '1x emextras:supreme_quantum_control_circuit',
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        1200,
        90000,
        [
            '1x #c:circuits/cosmic',
            '1x #c:circuits/dense',
            '3x emextras:base_control_circuit',
            '16x #c:dusts/vibranium_allthemodium_alloy',
            '4x #c:dusts/unobtainium_allthemodium_alloy',
            '6x #c:ingots/draconium_awakened'
        ],
        [
            '1000x justdirethings:unrefined_t2_fluid_source'
        ],
        [
            '1x emextras:cosmic_dense_control_circuit',
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        1200,
        200000,
        [
            '1x #c:circuits/infinite',
            '1x #c:circuits/multiversal',
            '3x emextras:base_control_circuit',
            '32x #c:dusts/unobtainium_vibranium_alloy',
            '4x draconicevolution:chaos_shard',
            '2x kubejs:divinium_essence',
            '2x avaritia_integration:blaze_cube_dense_plate',
        ],
        [
            '200x avaritia_integration:elderly_medulla_source',
            '4000x avaritia_integration:void_matter_source',
        ],
        [
            '1x emextras:infinite_multiversal_control_circuit',
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        200,
        100,
        [
            '4x #immersiveengineering:treated_wood',
            '1x #c:rods/treated_wood',
            '12x productivebees:wax',
        ],
        [
            '576x productivebees:honey'
        ],
        [
            '1x productivebees:sturdy_bee_cage',
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        600,
        59744,
        [
            '4x extendedae:assembler_matrix_pattern',
            "2x #c:circuits/supreme",
            "4x #c:nether_stars"
        ],
        [],
        [
            '1x extendedae_plus:assembler_matrix_pattern_plus',
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        600,
        59744,
        [
            '4x extendedae:assembler_matrix_crafter',
            "2x #c:circuits/supreme",
            "4x #c:nether_stars"
        ],
        [],
        [
            '1x extendedae_plus:assembler_matrix_crafter_plus',
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        600,
        59744,
        [
            '4x extendedae:assembler_matrix_speed',
            "2x #c:circuits/supreme",
            "4x #c:nether_stars"
        ],
        [],
        [
            '1x extendedae_plus:assembler_matrix_speed_plus',
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        600,
        81920,
        [
            '8x industrialforegoingsouls:soul_surge',
            "2x extendedae_plus:assembler_matrix_speed_plus",
            "48x appgen:origination_processor",
            "4x cataclysm:abyssal_sacrifice",
            "1x mekanism:module_locomotive_boosting_unit",
        ],
        [
            '1000x avaritia_integration:void_matter_source',
        ],
        [
            '1x extendedae_plus:entity_speed_ticker',
        ]
    );

    mmrRecipe(
        "mmr:assembly_line",
        5000,
        200000,
        [
            Item.of("extendedae_plus:entity_speed_card", { "minecraft:custom_data": { "EAS:mult": 8 } }).withCount(5),
            '1x #c:plates/blaze',
            '8x minecraft:sculk_shrieker',
            Item.of('ifeu:speed_addon_6', { 'titanium:augments': { Speed: 7.0 } }).withCount(2),
            '2x #c:circuits/multiversal',
            '5x draconicevolution:medium_chaos_frag'
        ],
        [
            '8000x avaritia_integration:molten_star',
        ],
        [
            Item.of("extendedae_plus:entity_speed_card", { "minecraft:custom_data": { "EAS:mult": 16 } })
        ]
    );
});