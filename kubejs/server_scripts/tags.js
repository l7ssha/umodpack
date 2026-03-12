ServerEvents.tags('block', tags => {
    tags.add('c:storage_blocks/yellorium', 'alltheores:uranium_block');

    tags.add('entangled:invalid_targets',
        ['@ae2', '@advancedae', '@extendedae', '@megacells', '@appflux', '@appmek']
    );

    tags.add('justdirethings:lawnmowerable', '#c:grass');
});

ServerEvents.tags('fluid', tags => {
    tags.add('c:ethanol', 'pneumaticcraft:ethanol');
    tags.add("c:experience", "create_enchantment_industry:experience");
});

ServerEvents.tags('item', tags => {
    tags.add('c:storage_blocks/raw_yellorium', 'bigreactors:raw_yellorium_block');

    tags.add('minecraft:bookshelf_books', 'patchouli:guide_book');
    tags.add('minecraft:bookshelf_books', 'evilcraft:origins_of_darkness');
    tags.add('minecraft:bookshelf_books', 'ae2:guide');
    tags.add('minecraft:bookshelf_books', 'powah:book');
    tags.add('minecraft:bookshelf_books', 'actuallyadditions:booklet');

    tags.add('minecraft:logs', [
        '#deeperdarker:bloom_stems',
        "#deeperdarker:echo_logs",
        "allthemodium:stripped_ancient_log"
    ]);

    tags.add('c:plastics', [
        "pneumaticcraft:plastic",
    ]);

    tags.add('expandedae:expanded_pattern_provider', [
        'expandedae:exp_pattern_provider',
        'expandedae:exp_pattern_provider_part',
    ]);

    tags.add('c:ingots', [
        'igleelib:modium_ingot',
        'igleelib:derium_ingot',
        'igleelib:blazum_ingot',
        'igleelib:lavium_ingot',
    ]);

    tags.add('c:ingots/modium', ['igleelib:modium_ingot']);
    tags.add('c:ingots/derium', ['igleelib:derium_ingot']);
    tags.add('c:ingots/blazum', ['igleelib:blazum_ingot']);
    tags.add('c:ingots/lavium', ['igleelib:lavium_ingot']);

    tags.add('c:ingots/the_ultimate_ingots', [
        'minecraft:copper_ingot',
        'minecraft:gold_ingot',
        'minecraft:iron_ingot',
        'alltheores:aluminum_ingot',
        'alltheores:lead_ingot',
        'alltheores:nickel_ingot',
        'alltheores:osmium_ingot',
        'alltheores:platinum_ingot',
        'alltheores:silver_ingot',
        'alltheores:tin_ingot',
        'alltheores:uranium_ingot',
        'alltheores:zinc_ingot',
        'alltheores:iridium_ingot',
        'alltheores:steel_ingot',
        'alltheores:invar_ingot',
        'alltheores:electrum_ingot',
        'alltheores:bronze_ingot',
        'alltheores:brass_ingot',
        'alltheores:enderium_ingot',
        'alltheores:lumium_ingot',
        'alltheores:signalum_ingot',
        'alltheores:constantan_ingot',
        'mekanism:ingot_refined_glowstone',
        'mekanism:ingot_refined_obsidian',
        'pneumaticcraft:ingot_iron_compressed',
        'iceandfire:dragonsteel_fire_ingot',
        'iceandfire:dragonsteel_ice_ingot',
        'iceandfire:dragonsteel_lightning_ingot',
        'allthemodium:unobtainium_allthemodium_alloy_ingot',
        'allthemodium:unobtainium_vibranium_alloy_ingot',
        'allthemodium:vibranium_allthemodium_alloy_ingot',
        'occultism:iesnium_ingot',
        'justdirethings:eclipsealloy_ingot',
        'mekanism_extras:ingot_naquadah',
        'draconicevolution:awakened_draconium_ingot',
        'draconicevolution:draconium_ingot',
        'mysticalagradditions:insanium_ingot',
        'megacells:sky_steel_ingot',
        'megacells:sky_bronze_ingot',
        'megacells:sky_osmium_ingot',
        'apprep:sky_replica_ingot',
        'extendedae:entro_ingot',
        'advanced_ae:quantum_alloy',
        'enderio:soularium_ingot',
        'irons_spellbooks:mithril_ingot',
        'irons_spellbooks:pyrium_ingot',
        'irons_spellbooks:arcane_ingot',
        'enderio:redstone_alloy_ingot',
        'bigreactors:insanite_ingot',
        'bigreactors:cyanite_ingot',
        'bigreactors:magentite_ingot',
        'bigreactors:blutonium_ingot',
        'bigreactors:ludicrite_ingot',
        'bigreactors:ridiculite_ingot',
        'bigreactors:inanite_ingot',
        'extendedcrafting:black_iron_ingot',
        'extendedcrafting:crystaltine_ingot',
        'extendedcrafting:enhanced_ender_ingot',
        'extendedcrafting:enhanced_redstone_ingot',
        'avaritia:crystal_matrix_ingot',
        'advancednetherite:netherite_diamond_ingot',
        'immersiveengineering:ingot_hop_graphite',
        'industrialforegoing:pink_slime_ingot',
        'mysticalagriculture:prosperity_ingot',
        'mysticalagriculture:inferium_ingot',
        'mysticalagriculture:prudentium_ingot',
        'mysticalagriculture:tertium_ingot',
        'mysticalagriculture:imperium_ingot',
        'mysticalagriculture:awakened_supremium_ingot',
        'mysticalagriculture:soulium_ingot',
        'mysticalagriculture:supremium_ingot',
        'appflux:harden_insulating_resin',
        'enderio:conductive_alloy_ingot',
        'enderio:dark_steel_ingot',
        'enderio:end_steel_ingot',
        'enderio:energetic_alloy_ingot',
        'enderio:pulsating_alloy_ingot',
        'enderio:vibrant_alloy_ingot',
        'cataclysm:cursium_ingot',
        'cataclysm:witherite_ingot',
    ]);
});

ServerEvents.tags('entity_type', tags => {
    tags.add('c:bosses', [
        "allthemodium:piglich",
        "cataclysm:amethyst_crab",
        "cataclysm:ancient_remnant",
        "cataclysm:coralssus",
        "cataclysm:ender_golem",
        "cataclysm:ender_guardian",
        "cataclysm:ignis",
        "cataclysm:ignited_revenant",
        "cataclysm:kobolediator",
        "cataclysm:maledictus",
        "cataclysm:modern_remnant",
        "cataclysm:netherite_monstrosity",
        "cataclysm:the_baby_leviathan",
        "cataclysm:the_harbinger",
        "cataclysm:the_leviathan",
        "cataclysm:the_prowler",
        "cataclysm:wadjet",
        "#neoforge:bosses"
    ]);
});

ServerEvents.tags('worldgen/structure', tags => {
    tags.add('cataclysm:berserker_spawn', "betterfortresses:fortress");
});

ServerEvents.tags('block_entity_type', tags => {
    tags.remove(
        'packingtape:blacklist/problematic',
        [
            "extrastorage:block_16384k_fluid",
            "extrastorage:block_65536k_fluid",
            "extrastorage:block_262144k_fluid",
            "extrastorage:block_1048576k_fluid"
        ]
    );
});

ServerEvents.tags('mob_effect', tags => {
    tags.add('irons_spellbooks:cleanse_immune', [
        "cataclysm:ghost_sickness"
    ]);
});