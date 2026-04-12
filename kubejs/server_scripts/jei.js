const itemsToHide = [
    'mysticalagriculture:apatite_seeds',
    'mysticalagriculture:apatite_essence',
    'mysticalagriculture:marble_seeds',
    'mysticalagriculture:marble_essence',
    'mysticalagriculture:yellorium_seeds',
    'mysticalagriculture:yellorium_essence',
    /immersiveengineering:crafting\/(pickaxe|sword|axe|shovel|hoe)_steel/,
    /immersiveengineering:crafting\/armor_steel_(helmet|chestplate|leggings|boots)/,
    'alexscaves:block_of_uranium',
];

RecipeViewerEvents.removeEntries('item', event => {
    itemsToHide.forEach(id => {
        event.remove(id);
    });
});