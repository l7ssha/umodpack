const itemsToHide = [
    'mysticalagriculture:apatite_seeds',
    'mysticalagriculture:apatite_essence',
    'mysticalagriculture:marble_seeds',
    'mysticalagriculture:marble_essence',
    'mysticalagriculture:yellorium_seeds',
    'mysticalagriculture:yellorium_essence',
];

RecipeViewerEvents.removeEntries('item', event => {
    itemsToHide.forEach(id => {
        event.remove(id);
    });
});