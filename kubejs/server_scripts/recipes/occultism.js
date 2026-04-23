ServerEvents.recipes(event => {
    event.custom({
        "type": "occultism:ritual",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_foliot"
        },
        "duration": 60,
        "ingredients": [
            {
                "item": "occultism:otherstone_pedestal"
            },
            {
                "tag": "c:ingots/copper"
            },
            {
                "item": "occultism:stable_wormhole"
            },
            {
                "tag": "c:ingots/gold"
            }
        ],
        "pentacle_id": "occultism:craft_foliot",
        "result": {
            "count": 1,
            "id": "occultism:storage_controller_base"
        },
        "ritual_dummy": {
            "count": 1,
            "id": "occultism:ritual_dummy/craft_storage_controller_base"
        },
        "ritual_type": "occultism:craft"
    });

    event.custom({
        "type": "occultism:ritual",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_foliot"
        },
        "duration": 150,
        "ingredients": [
            {
                "tag": "c:storage_blocks/quartz"
            },
            {
                "tag": "c:storage_blocks/quartz"
            },
            {
                "tag": "c:storage_blocks/quartz"
            },
            {
                "tag": "c:storage_blocks/quartz"
            },
            {
                "tag": "c:ender_pearls"
            }
        ],
        "pentacle_id": "occultism:craft_foliot",
        "result": {
            "id": "occultism:dimensional_matrix"
        },
        "ritual_dummy": {
            "id": "occultism:ritual_dummy/craft_dimensional_matrix"
        },
        "ritual_type": "occultism:craft_with_spirit_name"
    });

    event.shapeless({
        "ingredients": [
            {
                "item": "occultism:chalk_white_impure"
            },
            {
                "tag": "c:dusts/obsidian"
            },
            {
                "tag": "c:dyes/purple"
            },
            {
                "tag": "c:dusts/obsidian"
            },
            {
                "tag": "c:dyes/purple"
            },
            {
                "tag": "c:berries"
            }
        ],
        "result": {
            "id": "occultism:chalk_purple_impure"
        }
    });
});