const recipesById = [
    // Mekanism and addons
    /evolvedmekanism.*creative.*/,
    "emextras:alloying/circuit/creative",
    /evolvedmekanism:solidifying.*/,
    /evolvedmekanism:melting.*/,
    /evolvedmekanism:molds.*/,
    'mekanism:cardboard_box',

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

    // Extended Crafting
    "extendedcrafting:compressor",

    // Mystical Agriculture
    "mysticalagradditions:essence/neutron_nugget",

    // AE2
  "aeinfinitybooster:dimension_card",
    "ae2:network/blocks/controller",
    "ae2:network/cables/covered_fluix",
    "ae2:network/cables/smart_fluix",
    /megacells:cell_component_.*/,
    /ae2:cell_component_.*/,
    /extendedae:water_.*/,
    'advanced_ae:quantum_storage_component',

    // Other
  "igleelib:modium_ingot",
  "igleelib:modium_block",
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
