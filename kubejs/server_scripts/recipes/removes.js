const recipesById = [
    // Minecraft
    'minecraft:shulker_box',
    'minecraft:ender_eye',

    // Mekanism and addons
    /evolvedmekanism.*creative.*/,
    "emextras:alloying/circuit/creative",
    /evolvedmekanism:solidifying.*/,
    /evolvedmekanism:melting.*/,
    /evolvedmekanism:molds.*/,
    'mekanism:cardboard_box',
    'mekanism:steel_casing',
    'mekanism:steel_casing',
    'mekanism:energized_smelter',
    'mekanism:crusher',
    'mekanism:enrichment_chamber',
    'mekanism:metallurgic_infuser',
    'mekanism:purification_chamber',
    'mekanism:electrolytic_separator',
    'mekanism:electrolytic_core',
    'mekanism:chemical_injection_chamber',
    'mekanism_extras:upgrade/stack',
    'evolvedmekanism:upgrade/solar',
    'mekanism:upgrade/anchor',
    'mekanism_extras:upgrade/ionic_membrane',
    'mekanism:basic_bin',
    'evolvedmekanism:alloying/compat/enderio/conductive_alloy_ingot',

    // Xycraft
    /xycraft_machines:compat\/mek\/.*/,

    // Occultism
    /occultism:crushing\/.*/,
    /occultism:smelting\/.*/,
    /occultism:crafting\/.*/,

    // Avaritia related
    /avaritia:.*/,
    /avaritia_expand:.*/,
    "minecraft:neutron",
    "minecraft:neutron_nugget",
    "minecraft:neutron_nugget_from_ingot",
    'minecraft:neutron_pile_from_ingots',

    // Extended Crafting
    "extendedcrafting:compressor",

    // Mystical Agriculture
    "mysticalagradditions:essence/neutron_nugget",
    /mysticalagradditions:.*_crux/,

    // AE2
    "aeinfinitybooster:dimension_card",
    "ae2:network/blocks/controller",
    "ae2:network/cables/covered_fluix",
    "ae2:network/cables/smart_fluix",
    /megacells:cells\/cell_component_.*/,
    /ae2:network\/cells\/item_storage_components_cell_.*/,
    /extendedae:.*_cell/,
    'advanced_ae:quantum_storage_component',
    'megacells:cells/mega_item_cell_housing',
    'ae2:network/cells/item_cell_housing',
    'ae2:misc/fluixpearl',
    'ae2:network/wireless_access_point',
    'ae2:materials/formationcore',
    'ae2:materials/annihilationcore',
    'ae2:network/parts/terminals',
    'ae2:network/blocks/storage_drive',
    'ae2:network/parts/panels_semi_dark_monitor',
    'ae2:network/crafting/molecular_assembler',
    'appliedsoul:ender_star',

    // Actually Additions
    'actuallyadditions:ender_star',

    // Other
    "igleelib:modium_ingot",
    "igleelib:modium_block",
    'endermanoverhaul:ender_eye',

    'deeperdarker:coal_from_smelting_gloomslate_coal_ore',
    'deeperdarker:coal_from_blasting_gloomslate_coal_ore',
    'deeperdarker:iron_ingot_from_smelting_gloomslate_iron_ore',
    'deeperdarker:iron_ingot_from_blasting_gloomslate_iron_ore',
    'deeperdarker:copper_ingot_from_smelting_gloomslate_copper_ore',
    'deeperdarker:copper_ingot_from_blasting_gloomslate_copper_ore',
    'deeperdarker:gold_ingot_from_smelting_gloomslate_gold_ore',
    'deeperdarker:gold_ingot_from_blasting_gloomslate_gold_ore',
    'deeperdarker:redstone_from_smelting_gloomslate_redstone_ore',
    'deeperdarker:redstone_from_blasting_gloomslate_redstone_ore',
    'deeperdarker:emerald_from_smelting_gloomslate_emerald_ore',
    'deeperdarker:emerald_from_blasting_gloomslate_emerald_ore',
    'deeperdarker:lapis_lazuli_from_smelting_gloomslate_lapis_ore',
    'deeperdarker:lapis_lazuli_from_blasting_gloomslate_lapis_ore',
    'deeperdarker:diamond_from_smelting_gloomslate_diamond_ore',
    'deeperdarker:diamond_from_blasting_gloomslate_diamond_ore',
    'immersiveengineering:smelting/ingot_uranium',
    'bigreactors:blasting/yellorium_from_ore',

    // Extended crafting
    'extendedcrafting:ender_star',
    'extendedcrafting:enhanced_ender_ingot',

    // Cataclysm
    'cataclysm:void_eye',

    // Productive Bees
    'modularbees:fill_dragon_breath',

    // Allthemodium
    'allthemodium:teleport_pad',

    //Avaritia
    'minecraft:neutron_ingot_from_nuggets',

    // Powah
    /powah:crafting\/capacitor_.*/,

    // Flux networks
    'fluxnetworks:flux_plug',
    'fluxnetworks:flux_point',
];

const recipesByType = [
    // Avaritia related
    "avaritia:shaped_table",
    "avaritia:shapeless_table",
];

const recipesByInput = [
    // Draconic Evolution
    "draconicevolution:awakened_draconium_dust",
];

ServerEvents.recipes(event => {
    recipesById.forEach(recipeId => {
        event.remove({ id: recipeId });
    });

    recipesByType.forEach(recipeType => {
        event.remove({ type: recipeType });
    });

    recipesByInput.forEach(recipeInput => {
        event.remove({ input: recipeInput });
    });
});

// Remove all Avaritia singularities since we are using Extended Crafting ones
AvaritiaEvents.singularity(event => {
    event.removeAll();
});
