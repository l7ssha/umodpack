const resources = [
    { resource: 'aluminum', essence: 'prudentium', tag: 'c:storage_blocks/', mode: "tag" },
    { resource: 'copper', essence: 'tertium', tag: 'c:storage_blocks/', mode: "tag" },
    { resource: 'iron', essence: 'tertium', tag: 'c:storage_blocks/', mode: "tag" },
    { resource: 'zinc', essence: 'tertium', tag: 'c:storage_blocks/', mode: "tag" },
    { resource: 'silver', essence: 'tertium', tag: 'c:storage_blocks/', mode: "tag" },
    { resource: 'tin', essence: 'tertium', tag: 'c:storage_blocks/', mode: "tag" },
    { resource: 'gold', essence: 'imperium', tag: 'c:storage_blocks/', mode: "tag" },
    
//     { resource: 'lead', essence: 'tertium', tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: 'nickel', essence: 'imperium', tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: 'uranium', essence: 'imperium', tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: 'uraninite', essence: 'imperium', tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: 'redstone', essence: 'imperium', tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: 'glowstone', essence: 'imperium', tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: 'lapis_lazuli', essence: 'imperium', tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: 'osmium', essence: 'imperium', tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: 'invar', essence: 'imperium', tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: 'iridium', essence: 'supremium', tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: 'platinum', essence: 'supremium', tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "steel", essence: "imperium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "diamond", essence: "supremium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "emerald", essence: "supremium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "netherite", essence: "insanium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "bronze", essence: "tertium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "brass", essence: "tertium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "draconium", essence: "supremium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "nitro_crystal", essence: "insanium", item: "powah:nitro_crystal_block", mode: "item" },
//     { resource: "spirited_crystal", essence: "supremium", item: "powah:spirited_crystal_block", mode: "item" },
//     { resource: "niotic_crystal", essence: "supremium", item: "powah:niotic_crystal_block", mode: "item" },
//     { resource: "blazing_crystal", essence: "imperium", item: "powah:blazing_crystal_block", mode: "item" },
//     { resource: "energized_steel", essence: "imperium", item: "powah:energized_steel_block", mode: "item" },
//     { resource: "certus_quartz", essence: "tertium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "fluix", essence: "imperium", item: 'ae2:fluix_block', mode: "item" },
//     { resource: "soularium", essence: "imperium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "conductive_alloy", essence: "tertium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "copper_alloy", essence: "tertium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "end_steel", essence: "supremium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "redstone_alloy", essence: "tertium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "vibrant_alloy", essence: "supremium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "dark_steel", essence: "imperium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "pulsating_alloy", essence: "imperium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "energetic_alloy", essence: "imperium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "refined_glowstone", essence: "imperium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "refined_obsidian", essence: "imperium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "constantan", essence: "imperium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "cyanite", essence: "supremium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "graphite", essence: "tertium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "compressed_iron", essence: "imperium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "electrum", essence: "imperium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: "invar", essence: "imperium", tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: 'nether_quartz', essence: 'tertium', tag: 'c:storage_blocks/quartz', mode: "customtag" },
//     { resource: 'fluorite', essence: 'imperium', tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: 'peridot', essence: 'imperium', tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: 'ruby', essence: 'imperium', tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: 'sapphire', essence: 'imperium', tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: 'sulfur', essence: 'prudentium', tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: 'neutronium', essence: 'creative', item: "avaritia:neutron", mode: "item" },
//     { resource: 'nether_star', essence: 'insanium', tag: 'c:storage_blocks/', mode: "tag" },
//     { resource: 'awakened_draconium', essence: 'insanium', tag: 'c:storage_blocks/draconium_awakened', mode: "customtag" },
];

ServerEvents.recipes(event => {
    const mysticalRecipe = (input) => {
        const { resource, essence, mode, tag, item } = input;

        const recipeSeed = `mysticalagriculture:${resource}_seeds`;
        let recipeInput;

        switch (mode) {
            case "tag":
                recipeInput = { tag: `${tag}${resource}` };
                break;
            case "customtag":
                recipeInput = { tag: tag };
                break;
            case "item":
                recipeInput = { item: item };
                break;
            default:
                break;
        }

        const recipeEssenceMod = ['creative', 'insanium'].includes(essence)
            ? 'mysticalagradditions'
            : 'mysticalagriculture';
        const recipeEssence = `${recipeEssenceMod}:${essence}_essence`;

        event.custom({
            type: "mysticalagriculture:infusion",
            input: { item: "mysticalagriculture:prosperity_seed_base" },
            ingredients: [
                recipeInput,
                { item: recipeEssence },
                recipeInput,
                { item: recipeEssence },
                recipeInput,
                { item: recipeEssence },
                recipeInput,
                { item: recipeEssence },
            ],
            result: {
                id: recipeSeed
            }
        });
    };

    resources.forEach(element => {
        mysticalRecipe(element);
    });
});