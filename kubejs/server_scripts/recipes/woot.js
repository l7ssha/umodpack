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

    event.replaceInput(
        { id: 'woot_revived:stygian_anvil' },
        'minecraft:crying_obsidian',
        '#c:obsidians',
    );

    event.shapeless({
        "ingredients": [
            {
                "tag": "ae2:metal_ingots"
            },
            {
                "tag": "botanypots:soil/soul_sand"
            },
            {
                "tag": "c:gems/amethyst"
            },
            {
                "item": "minecraft:tnt"
            }
        ],
        "result": {
            "count": 2,
            "id": "woot_revived:stygian_dust"
        }
    });
});