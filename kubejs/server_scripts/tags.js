ServerEvents.tags('block', tags => {
    tags.add('c:storage_blocks/yellorium', 'alltheores:uranium_block');

    tags.add('entangled:invalid_targets',
        ['@ae2', '@advancedae', '@extendedae', '@megacells', '@appflux', '@appmek', '@ae_oddities']
    );

    tags.add('justdirethings:lawnmowerable', '#c:grass');
});

ServerEvents.tags('fluid', tags => {
    tags.add('c:ethanol', 'pneumaticcraft:ethanol');
    tags.add("c:experience", "create_enchantment_industry:experience");
    tags.add("allthemodium:soul_lava", "allthemodium:soul_lava");
});

ServerEvents.tags('item', tags => {
    tags.add('c:pistons', [
        'minecraft:piston',
        'minecraft:sticky_piston',
    ]);

    tags.add('c:hoppers', [
        'minecraft:hopper',
        'utilitarian:fluid_hopper',
    ]);

    tags.add('c:dusts/salt', ['pamhc2foodcore:saltitem']);

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
        'bigreactors:cyanite_ingot',
        'bigreactors:magentite_ingot',
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
        'igleelib:lavium_ingot',
        'kubejs:abbysal_alloy',
        'kubejs:confusion_alloy',
    ]);

    tags.add('regions_unexplored:magnolia_logs', [
        'regions_unexplored:magnolia_log',
        'regions_unexplored:stripped_magnolia_log',
        'regions_unexplored:magnolia_wood',
        'regions_unexplored:stripped_magnolia_wood',
    ]);

    tags.add('regions_unexplored:alpha_logs', [
        'regions_unexplored:alpha_log'
    ]);

    tags.add('regions_unexplored:silver_birch_logs', [
        'regions_unexplored:silver_birch_log',
        'regions_unexplored:silver_birch_wood',
    ])

    tags.add('allthemodium:ancient_logs', [
        'allthemodium:ancient_log_0',
        'allthemodium:ancient_log_1',
        'allthemodium:ancient_log_2',
        'allthemodium:stripped_ancient_log'
    ])
    tags.add('allthemodium:soul_logs', [
        'allthemodium:soul_log',
        'allthemodium:soul_log_0',
        'allthemodium:soul_log_1',
        'allthemodium:soul_log_2',
        'allthemodium:stripped_soul_log'
    ]);

    tags.add('allthemodium:demonic_logs', [
        'allthemodium:demonic_log',
        'allthemodium:stripped_demonic_log',
    ]);

    tags.add('regions_unexplored:alpha_logs', [
        'regions_unexplored:alpha_log'
    ]);

    tags.add('minecraft:logs', [
        '#deeperdarker:bloom_stems',
        "#deeperdarker:echo_logs",
        "allthemodium:stripped_ancient_log"
    ]);

    tags.add('c:pot', ['pamhc2foodcore:potitem']);
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

ServerEvents.tags('mob_effect', tags => {
    tags.add('irons_spellbooks:cleanse_immune', [
        "cataclysm:ghost_sickness"
    ]);
});
