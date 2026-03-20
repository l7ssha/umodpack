ServerEvents.recipes(event => {
    event.findRecipes({ id: /^occultism:crafting\/chalk_(?!white).*_impure/ }).forEach(recipe => {
        const ingredients = recipe.originalJson
            .get('ingredients')
            .getAsJsonArray()
            .asList();

        const coreItem = ingredients.getFirst();
        const extraIngredients = ingredients.subList(1, ingredients.size());

        event.custom({
            "type": "extendedcrafting:combination",
            "power_cost": 30000,
            "input": coreItem,
            "ingredients": extraIngredients,
            "result": recipe.originalJson.get('result'),
        });
    });

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
});