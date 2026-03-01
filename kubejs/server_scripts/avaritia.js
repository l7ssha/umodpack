ServerEvents.recipes(event => {
    // Avaritia
    event.remove({ output: "minecraft:dragon_breath", type: "avaritia:shaped_table" });
    event.remove({ id: "mysticalagradditions:essence/neutron_nugget" });
    
    event.remove({ id: "avaritia:infinity_catalyst" });
    event.remove({ id: "avaritia:crystal_matrix_ingot_normal" });
    event.remove({ id: "avaritia:crystal_matrix_ingot" });

    const { avaritia } = event.recipes;
    avaritia.shaped_table(
        2,
         "avaritia:crystal_matrix_ingot",
         [
            "L N L",
            "LnNnL",
            "L N L",
            "LnNnL",
            "L N L",
        ],
        {
            L: "avaritia:diamond_lattice",
            N: "minecraft:nether_star",
            n: "minecraft:netherite_ingot",
        },
    );

    event.remove({ id: "avaritia:infinity_sword" });
    avaritia.shaped_table(
        4,
         "avaritia:infinity_sword",
         [
            "      cII",
            "     nIaI",
            "    sIuIc",
            "  CSIUIn ",
            "CCAIUIs  ",
            " CAXIS   ",
            "  NAAC   ",
            " N CC    ",
            "A   C    "
        ],
        {
            A: "avaritia:crystal_matrix",
            C: "avaritia:crystal_matrix_ingot",
            I: "avaritia:infinity_ingot",
            N: "avaritia:neutron_ingot",
            X: "avaritia:infinity_catalyst",
            S: "allthemodium:alloy_sword",
            U: "allthemodium:unobtainium_allthemodium_alloy_block",
            u: "allthemodium:unobtainium_vibranium_alloy_block",
            a: "allthemodium:vibranium_allthemodium_alloy_block",
            s: "mysticalagriculture:awakened_supremium_sword",
            n: "avaritia_expand:neutron_sword",
            c: "avaritia:crystal_sword",
        },
    );

    // AE2
    event.remove({ id: "aeinfinitybooster:dimension_card" });
    avaritia.shaped_table(
        2,
         "aeinfinitybooster:dimension_card",
         [
            "I N I",
            "I E I",
            "IEEEI",
            "I E I",
            "I N I",
        ],
        {
            I: "aeinfinitybooster:infinity_card",
            N: "minecraft:nether_star",
            E: "minecraft:ender_eye",
        },
    );

    // Allthemodium
    event.remove({ id: "allthemodium:teleport_pad" });
    avaritia.shaped_table(
        1,
         "allthemodium:teleport_pad",
         [
            "gAg",
            "AEA",
            "GAG",
        ],
        {
            A: "allthemodium:allthemodium_ingot",
            E: "minecraft:ender_eye",
            G: "minecraft:gold_block",
            g: "minecraft:gold_ingot",
        },
    );

    // Mystical Agriculture
    avaritia.shaped_table(
        1,
        Item.of("mysticalagradditions:creative_essence", 3),
        [
            'nEn',
            'EIE',
            'nEn',
        ],
        {
            E: 'mysticalagradditions:insanium_block',
            I: 'mysticalagriculture:master_infusion_crystal',
            n: 'avaritia:infinity_nugget',
        }
    );
});

AvaritiaEvents.singularity(event => {
    const singularityRecipe = (name, id, colors, count) => {
        const [firstColor, secondColor] = colors;

        event.register(`avaritia:${name}`, s => {
            s.setDisplayName(`singularity.avaritia.${name}`)
                .setColors(firstColor, secondColor)
                .setCount(count || 1000)
                .setTimeCost(240)
                .setIngredient(Ingredient.of(id))
                .setEnabled(true)
                .setRecipeEnabled(true);
        });
    };

    // AE2 Family
    singularityRecipe("sky_replica", "apprep:sky_replica_ingot", [0xFFFFFF, 0x112211]);
    singularityRecipe("entro", "extendedae:entro_ingot", [0x5fe189, 0x038181]);
    singularityRecipe("charged_redstone", "appflux:charged_redstone", [0xe96d5f, 0xa4202c]);
    singularityRecipe("quantum_alloy", "advanced_ae:quantum_alloy", [0x6f3f8f, 0x43286a]);

    // Allthemodium Family
    singularityRecipe("unobtanium_allthemodium", "allthemodium:unobtainium_allthemodium_alloy_ingot", [0xfcaf0f, 0xc347e0]);
    singularityRecipe("unobtanium_vibranium", "allthemodium:unobtainium_vibranium_alloy_ingot", [0x63f5ae, 0xc347e0]);
    singularityRecipe("vibranium_allthemodium", "allthemodium:vibranium_allthemodium_alloy_ingot", [0xfcdd5b, 0x2da38c]);

    // Advanced Netherite
    singularityRecipe("iron_netherite", "advancednetherite:netherite_iron_ingot", [0xa6a6a6, 0x112211]);
    singularityRecipe("gold_netherite", "advancednetherite:netherite_gold_ingot", [0xe6af15, 0x112211]);
    singularityRecipe("emerald_netherite", "advancednetherite:netherite_emerald_ingot", [0x17da61, 0x112211]);
    singularityRecipe("diamond_netherite", "advancednetherite:netherite_diamond_ingot", [0x49ead6, 0x112211]);

    // Mekanism
    singularityRecipe("exoversal", "evolvedmekanism:alloy_exoversal", [0xb0afa9, 0x525253]);
    singularityRecipe("spectral", "mekanism_extras:alloy_spectrum", [0xff0000, 0x0000ff]);

    // Just Dire Things
    singularityRecipe("eclipse_alloy", "justdirethings:eclipsealloy_ingot", [0x4c626b, 0x1f222d]);
    singularityRecipe("time_crystal", "justdirethings:time_crystal", [0xc7fc6e, 0x21e51b], 250);

    // Other
    singularityRecipe("brass", "alltheores:brass_ingot", [0xecb63d, 0xb98e2f]);
    singularityRecipe("log", "#logs", [0xac8b54, 0x453620], 50000);
});


