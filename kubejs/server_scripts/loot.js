LootJS.modifiers(event => {
    event.addTableModifier(/.*/)
        .removeLoot('artifacts:running_shoes')
        .removeLoot('artifacts:bunny_hoppers')
        .removeLoot('artifacts:night_vision_goggles')
        .removeLoot('artifacts:crystal_heart')
        .removeLoot('artifacts:everlasting_beef')
        .removeLoot('relics:leather_belt')
        .removeLoot('relics:hunter_belt')
        .removeLoot('relics:drowned_belt');

    event.addTableModifier(/.*:entities\/.*/)
        .removeLoot(ItemFilter.custom(item => item.id.match(/^evolvedmekanism:(plaslitherite|better_gold)_.*/)));
});
