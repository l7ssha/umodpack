ServerEvents.recipes(event => {
    event.shaped({
        "pattern": [
            "ABA",
            "ACB",
            "C  "
        ],
        "key": {
            "A": {
                "tag": "c:leathers"
            },
            "B": {
                "tag": "minecraft:wooden_slabs"
            },
            "C": {
                "tag": "c:plates/iron"
            }
        },
        "result": {
            "id": "chipped:saw"
        }
    });

    event.shapeless({
        "ingredients": [
            {
                "item": "chipped:saw"
            },
            {
                "tag": "minecraft:axes"
            },
            {
                "tag": "minecraft:logs"
            }
        ],
        "result": {
            "count": 6,
            "id": "productivetrees:sawdust"
        }
    }).keepIngredient('chipped:saw')
        .keepIngredient('#minecraft:axes')
        .damageIngredient('#minecraft:axes', 4);
});