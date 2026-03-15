const recipesById = [
    // Minecraft
    'minecraft:shulker_box',
    'minecraft:ender_eye',
    'minecraft:netherite_ingot',

    // Mekanism and addons
    /evolvedmekanism.*creative.*/,
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
    'mekanism:bin/basic',
    /evolvedmekanism:control_circuit\/.*/,
    /mekanism_extras:control_circuit\/.*/,
    /mekanism:control_circuit\/(advanced|elite|ultimate)/,
    /emextras:alloying\/circuit\/(absolute|supreme|cosmic|infinity|overclocked|quantum|dense|multiversal|creative|advanced|elite|ultimate)$/,
    'mekanism:control_circuit/infused_ultimate',
    'mekanism:nucleosynthesizing/ender_chest',
    'minecraft:ender_chest',
    /mekmm:compat\/ae2omnicells\/.*_print/,
    'mekanism:hdpe_elytra',
    'mekanism:atomic_disassembler',
    'mekanism:chemical_dissolution_chamber',
    'mekanism:osmium_compressor',
    'mekanism:chemical_washer',
    "mekmm:cnc_rolling_mill",
    "evolvedmekanism:alloyer",
    "mekanism:combiner",
    "mekanism:electric_pump",
    'mekanism_extras:advanced_electric_pump',
    'mekanism:isotopic_centrifuge',
    'mekanism:digital_miner',
    "mekanism:robit",
    "mekanism:logistical_sorter",
    'mekanism:resistive_heater',
    'evolvedmekanism:thermalizer',
    'mekanism:resistive_heater',
    'mekanism:precision_sawmill',
    'evolvedmekanism:solidification_chamber',
    'mekanism:fluid_tank/basic',
    'mekanism:processing/netherite/scrap_to_dust',
    'mekanism:teleportation_core',

    // Xycraft
    /xycraft_machines:compat\/mek\/.*/,

    // Occultism
    // /occultism:crushing\/.*/,
    /occultism:smelting\/.*/,
    /^occultism:crafting\/chalk_(?!white).*_impure/,
    'occultism:crafting/netherite_dust',
    /occultism:crushing\/.*_from_ore/,

    // Avaritia related
    /avaritia:.*/,
    /avaritia_expand:.*/,
    "minecraft:neutron",
    "minecraft:neutron_nugget",
    "minecraft:neutron_nugget_from_ingot",
    'minecraft:neutron_pile_from_ingots',

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
    'ae2:network/cells/fluid_cell_housing',
    'ae2:misc/fluixpearl',
    'ae2:network/wireless_access_point',
    'ae2:materials/formationcore',
    'ae2:materials/annihilationcore',
    'ae2:network/parts/terminals',
    'ae2:network/blocks/storage_drive',
    'ae2:network/parts/panels_semi_dark_monitor',
    'ae2:network/crafting/molecular_assembler',
    'appliedsoul:ender_star',
    'ae2:network/wireless_booster',
    'megacells:crafting/bulk_cell_component',
    'ae2:network/crafting/patterns_blank',
    'ae2:network/blocks/pattern_providers_interface',
    'extendedae:assembler/ex_pattern_provider',
    'expandedae:crafting/exp_pattern_provider_ext',
    'expandedae:crafting/exp_pattern_provider_upgrade_ext',
    'expandedae:crafting/greater_accel_card',
    'expandedae:crafting/auto_complete_card',
    'extendedae:assembler/assembler_matrix_crafter',
    'extendedae:assembler/assembler_matrix_pattern',
    'extendedae:assembler/assembler_matrix_speed',
    'megacells:network/mega_pattern_provider',
    'megacells:network/mega_interface',
    'extendedae:assembler/ex_interface',
    'extendedae:assembler/oversize_interface',
    /ae2omnicells:[^\/]*_circuit_print/,
    /ae2omnicells:[^\/]*_processor/,
    'ae2omnicells:singularity_block_from_ingots',
    'ae2omnicells:singularity_from_blocks',
    'ae2omnicells:assembler/ender_ingot',
    'ae2omnicells:ender_ingot',
    'ae2omnicells:charged_ender_ingot',
    'ae2omnicells:components/shaped/omni_cell_component_1k',
    'ae2omnicells:components/shaped/complex_omni_cell_component_1k',
    'ae2omnicells:components/shaped/quantum_omni_cell_component_1k',
    'ae2omnicells:components/shaped/spent_nuclear_waste_component',
    'ae2omnicells:type_fuzzy_card',
    'extendedae:tape',
    'megacells:crafting/radioactive_cell_component',
    /ae2:network\/cell\/.*_storage_cell_.*k$/,
    /apprep:cells\/matter_cell_.*[km]$/,
    /appflux:.*_fe_cell$/,
    /appliedsoul:soul_storage_cell_.*k$/,
    /megacells:cells\/standard\/.*_storage_cell_.*m$/,
    /ae2omnicells:cells\/shaped\/.*_cell_.*/,
    'megacells:cells/standard/bulk_item_cell',
    'extendedae:assembler/ex_molecular_assembler',
    'advanced_ae:smalladvpatpro',
    'advanced_ae:eaeadvpatpro',
    'advanced_ae:advpartenc',
    'ae2:network/blocks/io_condenser',
    'ae2:network/blocks/energy_vibration_chamber',
    'advanced_ae:reactionchamber',
    'advanced_ae:smallappupgrade',
    'advanced_ae:eaelargeappupgrade',

    // Ender Drives
    'enderdrives:ender_storage_component_1k_advanced',

    // Actually Additions
    'actuallyadditions:ender_star',
    'actuallyadditions:drill_core',
    'actuallyadditions:phantom_booster',

    // Other
    "igleelib:modium_ingot",
    'endermanoverhaul:ender_eye',
    'immersiveengineering:smelting/ingot_uranium',
    'bigreactors:blasting/yellorium_from_ore',

    // Iglee Lib
    /igleelib:.*_ingot/,
    'igleelib:iglium_upgrade_smithing_template',

    // Extended crafting
    "extendedcrafting:compressor",
    'extendedcrafting:ender_star',
    'extendedcrafting:enhanced_ender_ingot',
    'extendedcrafting:enhanced_redstone_ingot',
    'packagedauto:me_package_component',

    // Cataclysm
    'cataclysm:void_eye',

    // Productive Bees
    'modularbees:fill_dragon_breath',

    // Allthemodium
    'allthemodium:teleport_pad',
    /allthemodium:smithing\/allthemodium_.*_smithing/,

    // Avaritia
    'minecraft:neutron_ingot_from_nuggets',

    // Powah
    /powah:crafting\/capacitor_.*/,

    // Flux networks
    'fluxnetworks:flux_plug',
    'fluxnetworks:flux_point',

    // Industrial Foregoing
    'industrialforegoing:dissolution_chamber',
    'industrialforegoing:pitiful_generator',
    'industrialforegoing:laser_drill',
    'industrialforegoing:simulated_hydroponic_bed',
    'industrialforegoing:hydroponic_bed',
    'industrialforegoing:hydroponic_simulation_processor',
    'industrialforegoingsouls:soul_laser_base',
    'industrialforegoing:ore_laser_base',
    'industrialforegoing:fluid_laser_base',
    'industrialforegoing:infinity_charger',
    'industrialforegoing:stasis_chamber',
    'industrialforegoing:diamond_gear',

    // Just Dire Things
    'justdirethings:time_wand',
    'justdirethings:paradoxmachine',

    // PneumaticCraft
    'pneumaticcraft:drill_pipe',
    'pneumaticcraft:thermopneumatic_processing_plant',

    // EnderStorage
    'enderstorage:ender_chest',
    'enderstorage:ender_tank',

    // Deeper Darker
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
    'deeperdarker:soul_elytra',

    // Immersive Engineering
    /immersiveengineering:crafting\/stick_.*/,
    'immersiveengineering:crafting/drill',
    /immersiveengineering:crafting\/raw_hammer.*/,
    /immersiveengineering:crafting\/hammer.*/,

    // Sophisticated Storage 
    'sophisticatedbackpacks:backpack',
    'sophisticatedstorage:basic_tier_upgrade',
    'sophisticatedstorage:basic_to_iron_tier_upgrade',
    'sophisticatedstorage:basic_to_netherite_tier_upgrade',
    'sophisticatedstorage:copper_to_netherite_tier_upgrade',
    'sophisticatedstorage:iron_to_netherite_tier_upgrade',
    'sophisticatedstorage:gold_to_netherite_tier_upgrade',
    'sophisticatedstorage:diamond_to_netherite_tier_upgrade',

    // StevesCarts2
    'stevescarts:component/component_lump_of_galgador',
    'stevescarts:component/component_eye_of_galgador',
    'stevescarts:component/component_raw_hardener',
    'stevescarts:component/component_stabilized_metal',
    'stevescarts:component/component_large_lump_of_galgador',

    // Draconic Evolution
    'draconicevolution:tools/dislocator',
];

const recipesByType = [
    // Avaritia related
    "avaritia:shaped_table",
    "avaritia:shapeless_table",
];

const recipesByInput = [];

const recipesByOutput = [
    // Industrial foregoing
    'industrialforegoing:machine_frame_supreme',
    'industrialforegoing:machine_frame_advanced',
    'extendedae:machine_frame',

    // PneumaticCraft
    'pneumaticcraft:transistor',
    'pneumaticcraft:capacitor',

    // Mystical Agriculture
    /mysticalagriculture:.*_seeds/,
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

    recipesByOutput.forEach(recipeOutput => {
        event.remove({ output: recipeOutput });
    });
});

// Remove all Avaritia singularities since we are using Extended Crafting ones
AvaritiaEvents.singularity(event => {
    event.removeAll();
});
