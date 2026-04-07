const recipesById = [
    // Minecraft
    'minecraft:shulker_box',
    'minecraft:ender_eye',
    'minecraft:netherite_ingot',
    'minecraft:shears',
    'minecraft:iron_bars',
    'minecraft:furnace',
    'minecraft:book',
    'minecraft:flint_and_steel',

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
    'mekanism:pressurized_reaction_chamber',
    'mekanism:dynamic_tank',
    'mekanism:antiprotonic_nucleosynthesizer',
    'mekanismelements:crafting/seawater_pump',
    'mekanismelements:crafting/air_compressor',
    'mekmm:ambient_gas_collector',
    'mekanismelements:crafting/adsorption_separator',
    'mekanism:quantum_entangloporter',
    'mekanism_extras:processing/dust_radiance/from_glowstone',
    'mekanism:sps_casing',
    'mekanism:sps_port',
    'mekanism:structural_glass',
    'mekanismelements:crafting/structural_glass',
    'evolvedmekanism:chemixing/dust_plaslitherite',
    'evolvedmekanism:chemixing/ingot_plaslitherite',
    'evolvedmekanism:chemixing/block_plaslitherite',
    'evolvedmekanism:processing/refined_redstone/ingot/from_dust',
    /^emextras:alloying\/circuit\/(infinite_multiversal|cosmic_dense|supreme_quantum|absolute_overclocked)$/,
    'mekanismgenerators:generator/gas_burning',
    'mekanismgenerators:generator/bio',
    'mekanism:chemical_crystallizer',
    'mekanism_extras:nucleosynthesizing/enriched_shining',
    'mekmm:cnc_stamper',
    'mekmm:cnc_lathe',
    'mekanismelements:crafting/radiation_irradiator',
    'mekanism:radioactive_waste_barrel',
    'mekanism:chemical_conversion/sulfur_to_sulfuric_acid',
    'alltheores:chemical_conversion/sulfur_block_to_sulfuric_acid',
    'bfr:reactor/frame',
    'mekanismgenerators:fission_reactor/casing',

    // Ender IO
    'enderio:void_chassis',
    'enderio:alloy_smelter',

    // Xycraft
    /xycraft_machines:compat\/mek\/.*/,

    // Occultism
    'occultism:crafting/netherite_dust',
    /occultism:crushing\/.*_from_ore/,
    'occultism:ritual/craft_storage_controller_base',

    // Avaritia related
    /^avaritia:.*/,
    /avaritia_expand:.*/,
    "minecraft:neutron",
    "minecraft:neutron_nugget",
    "minecraft:neutron_nugget_from_ingot",
    'minecraft:neutron_pile_from_ingots',

    // Mystical Agriculture
    "mysticalagradditions:essence/neutron_nugget",
    /mysticalagradditions:.*_crux/,
    'mysticalagriculture:nature_agglomeratio',
    'mysticalagriculture:nether_agglomeratio',

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
    /ae2:network\/cells\/item_storage_cell_\d+k$/,
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
    'advanced_ae:quantum_helmet',
    'advanced_ae:quantum_chest',
    'advanced_ae:quantum_leggings',
    'advanced_ae:quantum_boots',
    'extendedae:threshold_export_bus',
    /appgen:inscriber\/.*_dust/,
    'extendedae:assembler/wireless_connector',
    'extendedae:assembler/wireless_hub',
    'extendedae_plus:wireless_transceiver',
    'ae2:network/wireless_part',
    'extendedae_plus:mirror_pattern_provider',
    'ae2:fluix_smart_cable',
    'ae2:network/cables/glass_fluix',
    'ae2:network/cables/dense_smart_fluix',
    'extendedae:crystal_assembler',
    'ae2:network/crafting/cpu_crafting_accelerator',
    'megacells:crafting/mega_crafting_unit',
    'ae2:network/crafting/cpu_crafting_accelerator',
    'megacells:crafting/mega_crafting_accelerator',
    'megacells:cells/mega_fluid_cell_housing',
    'extendedae:assembler_matrix_wall',
    'extendedae:assembler_matrix_frame',
    'extendedae:assembler_matrix_glass',
    'ae2omnicells:cells/housing/complex_omni_cell_housing',
    'ae2omnicells:cells/housing/omni_cell_housing',
    'ae2omnicells:cells/housing/quantum_omni_cell_housing',
    'appliedsoul:soul_cell_housing',
    'extendedae_plus:labeled_wireless_transceiver',
    'extendedae_plus:assembler_matrix_upload_core',
    'extendedae_plus:assembler_matrix_pattern_plus',
    'extendedae_plus:assembler_matrix_crafter_plus',
    'extendedae_plus:assembler_matrix_speed_plus',
    'apprep:cells/mega_matter_cell_housing',
    'apprep:cells/matter_cell_housing',
    'megacells:cells/mega_chemical_cell_housing',
    'appmek:chemical_cell_housing',
    'ae2omnicells:cells/shaped/spent_nuclear_waste_cell',
    'appliedsoul:range_card',

    // Ender Drives
    'enderdrives:ender_storage_component_1k_advanced',

    // Actually Additions
    'actuallyadditions:ender_star',
    'actuallyadditions:drill_core',
    'actuallyadditions:phantom_booster',

    // Other
    "igleelib:modium_ingot",
    'endermanoverhaul:ender_eye',
    'bigreactors:blasting/yellorium_from_ore',
    'chipped:saw',

    // Iglee Lib
    /igleelib:.*_ingot/,
    'igleelib:iglium_upgrade_smithing_template',

    // Extended crafting
    "extendedcrafting:compressor",
    'extendedcrafting:ender_star',
    'extendedcrafting:enhanced_ender_ingot',
    'extendedcrafting:enhanced_redstone_ingot',
    'extendedcrafting:ender_star_block',
    'extendedcrafting:black_iron_ingot',

    // Packaged Auto
    'packagedauto:encoder',
    'packagedauto:package_component',
    'packagedauto:me_package_component',
    'packagedauto:packaging_provider',
    'packagedauto:distributor',
    'packagedauto:crafting_proxy',
    'packagedauto:crafter_ae',
    'packagedauto:fluid_package_filler',
    /^packagedavaritia:(?!nether_crafter_ae$).*/,

    // Cataclysm
    'cataclysm:void_eye',
    'cataclysm:flame_eye',
    'cataclysm:ignitium_upgrade_smithing_template',

    // Productive Bees
    'modularbees:fill_dragon_breath',

    // Allthemodium
    'allthemodium:teleport_pad',
    /allthemodium:smithing\/allthemodium_.*_smithing/,
    'alltheores:crafting/steel/alloy_blending_from_dust',
    /alltheores:alloysmelter\/.*\/ingot/,
    'alltheores:alloy_smelting/enderium_ingot',
    'alltheores:crafting/lumium/alloy_blending_from_dust',

    // Avaritia
    'minecraft:neutron_ingot_from_nuggets',

    // Powah
    /powah:crafting\/capacitor_.*/,

    // Flux networks
    'fluxnetworks:flux_plug',
    'fluxnetworks:flux_point',

    // Industrial Foregoing
    'industrialforegoing:machine_frame_pity',
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
    'justdirethings:gooblock_tier2',
    'justdirethings:gooblock_tier3',
    'justdirethings:gooblock_tier4',

    // PneumaticCraft
    'pneumaticcraft:drill_pipe',
    'pneumaticcraft:thermopneumatic_processing_plant',

    // EnderStorage
    'enderstorage:ender_chest',
    'enderstorage:ender_tank',
    'enderstorage:ender_pouch',

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
    /^immersiveengineering:crafting\/stick_(?!treated$).*/,
    'immersiveengineering:crafting/drill',
    /immersiveengineering:crafting\/raw_hammer.*/,
    /immersiveengineering:crafting\/hammer.*/,
    /immersiveengineering:crafting\/plate_.*_hammering$/,
    'immersiveengineering:smelting/ingot_uranium',
    /immersiveengineering:crafting\/(pickaxe|sword|axe|shovel|hoe)_steel/,

    // Sophisticated Storage 
    'sophisticatedbackpacks:backpack',
    'sophisticatedstorage:basic_tier_upgrade',
    'sophisticatedstorage:basic_to_iron_tier_upgrade',
    'sophisticatedstorage:basic_to_netherite_tier_upgrade',
    'sophisticatedstorage:copper_to_netherite_tier_upgrade',
    'sophisticatedstorage:iron_to_netherite_tier_upgrade',
    'sophisticatedstorage:gold_to_netherite_tier_upgrade',
    'sophisticatedstorage:diamond_to_netherite_tier_upgrade',
    /sophisticatedstorage:tier_upgrade_.*_to_.*/,

    // StevesCarts2
    'stevescarts:component/component_lump_of_galgador',
    'stevescarts:component/component_eye_of_galgador',
    'stevescarts:component/component_raw_hardener',
    'stevescarts:component/component_stabilized_metal',
    'stevescarts:component/component_large_lump_of_galgador',

    // Draconic Evolution
    'draconicevolution:tools/dislocator',
    'draconicevolution:awakened_draconium_block',
    'draconicevolution:components/awakened_core',
    'draconicevolution:components/wyvern_energy_core',
    'draconicevolution:components/draconium_core',
    'draconicevolution:infused_obsidian',
    'draconicevolution:components/wyvern_core',

    // RFTools
    'rftoolsbase:infused_enderpearl',
    'rftoolsbase:machine_frame',
    'rftoolsbuilder:builder',

    // DimStorage
    'dimstorage:dim_core',
    'dimstorage:dim_wall',
    'dimstorage:solid_dim_core',
    'dimstorage:dimensional_chest',
    'dimstorage:dimensional_tank',
    'dimstorage:dimensional_tablet',

    // Entangled
    'entangled:block',

    // Hostile Neural Networks
    'hostilenetworks:sim_chamber',
    'hostilenetworks:loot_fabricator',

    // Iron's Spells
    'irons_spellbooks:arcane_ingot',

    // Ender IO
    're_endergy:alloy_smelter/stellar_alloy_ingot',
    're_endergy:alloy_smelter/melodic_alloy_ingot',

    // Aether
    'aether:aether_saddle',
];

const recipesByType = [
    // Avaritia related
    "avaritia:shaped_table",
    "avaritia:shapeless_table",
];

const recipesByInput = [];

const keptSeeds = [
    'pig', 'chicken', 'cow', 'sheep', 'squid', 'fish', 'slime',
    'turtle', 'armadillo', 'zombie', 'skeleton', 'creeper', 'spider',
    'phantom', 'rabbit', 'experience', 'breeze', 'blaze', 'ghast',
    'enderman', 'soulium', 'hop_graphite', 'wither_skeleton'
];
const keptSeedsRegex = new RegExp(`^mysticalagriculture:(?!(${keptSeeds.join('|')})_seeds$).*_seeds$`);

const recipesByOutput = [
    // Minecraft
    'minecraft:paper',
    'minecraft:piston',

    // Industrial foregoing
    'extendedae:machine_frame',
    'ifeu:precision_crafting_table',
    'ifeu:fluid_crafting_table',

    // PneumaticCraft
    'pneumaticcraft:transistor',
    'pneumaticcraft:capacitor',

    // Mystical Agriculture
    keptSeedsRegex,

    // Advanced AE
    'advanced_ae:quantum_alloy_plate',
    'advanced_ae:quantum_alloy',
    'advanced_ae:shattered_singularity',
    'ae2:singularity',

    // Alex's Caves
    'alexscaves:uranium',
    'alexscaves:uranium_shard',
    'alexscaves:block_of_uranium',
    'alexscaves:sulfur',
    'alexscaves:sulfur_dust',
];

ServerEvents.recipes(event => {
    event.remove({ output: 'ifeu:laser_lens_sculk', type: 'minecraft:crafting_shapeless' });

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
