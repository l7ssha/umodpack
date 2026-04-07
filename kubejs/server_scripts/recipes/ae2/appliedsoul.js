ServerEvents.recipes(event => {
    event.replaceInput(
        { id: 'appliedsoul:soul_collector' },
        'minecraft:echo_shard',
        'appliedsoul:soul_cell_housing'
    );

    event.shaped({
        "pattern": [
            "AAA",
            "ABC",
            "AA "
        ],
        "key": {
            "A": {
                "tag": "c:dusts/ender_pearl"
            },
            "B": {
                "item": "ae2:advanced_card"
            },
            "C": {
                "item": "industrialforegoing:range_addon_tier_11",
            }
        },
        "result": {
            "id": "appliedsoul:range_card"
        }
    });
});