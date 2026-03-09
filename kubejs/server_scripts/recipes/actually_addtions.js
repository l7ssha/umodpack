ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'actuallyadditions:ender_star' },
        'actuallyadditions:ender_star',
        'appliedsoul:ender_star',
    );

    event.replaceInput(
        { id: 'actuallyadditions:greenhouse_glass' },
        '#minecraft:saplings',
        { tag: 'c:rods/steel' },
    );

    event.replaceInput(
        { id: 'actuallyadditions:iron_casing' },
        '#c:gems/black_quartz',
        'powah:battery_starter',
    );

    event.replaceInput(
        { id: 'actuallyadditions:iron_casing' },
        '#c:rods/wooden',
        { tag: 'c:gems/black_quartz' },
    );

    event.replaceInput(
        { id: 'actuallyadditions:ender_casing' },
        'actuallyadditions:black_quartz_block',
        'mekanism:energy_tablet',
    )
});