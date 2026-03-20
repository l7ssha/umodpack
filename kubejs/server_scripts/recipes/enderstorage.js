ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
            "ABA",
            "BCB",
            "ADA"
        ],
        "key": {
            "A": {
                "tag": "c:ingots/blazegold"
            },
            "B": {
                "item": "replication:memory_chip"
            },
            "C": {
                "item": "minecraft:ender_chest"
            },
            "D": {
                "tag": "c:obsidians"
            }
        },
        "result": {
            "id": "enderstorage:ender_chest"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
            "AAA",
            "BCB",
            "BDB"
        ],
        "key": {
            "A": {
                "item": "replication:memory_chip"
            },
            "B": {
                "tag": "c:ingots/blazegold"
            },
            "C": {
                "item": "mob_grinding_utils:tank"
            },
            "D": {
                "tag": "c:obsidians"
            }
        },
        "result": {
            "id": "enderstorage:ender_tank"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
            "AAA",
            "BCB",
            "BDB"
        ],
        "key": {
            "A": {
                "item": "replication:memory_chip"
            },
            "B": {
                "tag": "c:leathers"
            },
            "C": {
                "item": "occultism:stable_wormhole"
            },
            "D": {
                "item": "sophisticatedbackpacks:backpack"
            }
        },
        "result": {
            "id": "enderstorage:ender_pouch"
        }
    });
});