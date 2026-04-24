ServerEvents.recipes(event => {
    event.shaped({
        "pattern": [
            "ABA",
            "BCB",
            "ADA"
        ],
        "key": {
            "A": {
                "tag": "immersiveengineering:treated_wood"
            },
            "B": {
                "item": "minecraft:ender_eye"
            },
            "C": {
                "item": "avaritia:compressed_crafting_table"
            },
            "D": {
                "item": "allthecompressed:glass_1x"
            }
        },
        "result": {
            "id": "toms_storage:storage_terminal"
        }
    });
});