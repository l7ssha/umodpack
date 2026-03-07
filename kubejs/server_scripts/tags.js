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