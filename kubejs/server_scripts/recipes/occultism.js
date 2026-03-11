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
});