ServerEvents.recipes(event => {
    event.custom({
        "type": "bigreactors:fluidizersolid",
        "ingredient": {
            "count": 1,
            "ingredient": {
                "item": "woot_revived:xp_shard"
            }
        },
        "result": {
            "amount": 144,
            "id": "justdirethings:xp_fluid_source"
        }
    });

    event.custom({
        "type": "bigreactors:fluidizersolid",
        "ingredient": {
            "count": 1,
            "ingredient": {
                "item": "woot_revived:xp_splinter"
            }
        },
        "result": {
            "amount": 16,
            "id": "justdirethings:xp_fluid_source"
        }
    });
});