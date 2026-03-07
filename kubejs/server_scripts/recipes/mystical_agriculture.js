ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 2,
        "pattern": [
            "     ",
            " AAA ",
            "BACAD",
            " AAA ",
            "     "
        ],
        "key": {
            "A": {
                "item": "mysticalagradditions:insanium_block"
            },
            "B": {
                "item": "mysticalagriculture:master_infusion_crystal"
            },
            "C": {
                "item": "mysticalagradditions:insanium_ingot_block"
            },
            "D": {
                "item": "avaritia:infinity_catalyst"
            }
        },
        "result": {
            "id": "mysticalagradditions:creative_essence"
        }
    });

    event.replaceInput(
        { id: 'mysticalagriculture:prosperity_seed_base' },
        'mysticalagriculture:prosperity_shard',
        'mysticalagriculture:prosperity_block'
    );

    event.replaceInput(
        { id: 'mysticalagriculture:soulium_seed_base' },
        'mysticalagriculture:soulium_dust',
        'mysticalagriculture:soulium_block'
    );
});