RecipeViewerEvents.removeEntries('item', event => {
    event.remove([
        'mysticalagriculture:apatite_seeds',
        'mysticalagriculture:apatite_essence',
        'mysticalagriculture:marble_seeds',
        'mysticalagriculture:marble_essence',
        'mysticalagriculture:yellorium_seeds',
        'mysticalagriculture:yellorium_essence',
        'alexscaves:block_of_uranium',
        /immersiveengineering:(pickaxe|sword|axe|shovel|hoe)_steel/,
        /immersiveengineering:armor_steel_(helmet|chestplate|leggings|boots)/
    ]);
});

RecipeViewerEvents.removeCategories(event => {
	event.remove('extendedae:assembler');
});