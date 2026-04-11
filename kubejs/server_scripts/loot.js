LootJS.modifiers(event => {
    event.addTableModifier(/.*/)
        .removeLoot('artifacts:running_shoes')
        .removeLoot('artifacts:bunny_hoppers');
});