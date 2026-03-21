ServerEvents.recipes(event => {
    const chemicalConversionRecipe = (name) => {
        event.custom({
            "type": "mekanism:chemical_conversion",
            "input": {
                "count": 1,
                "tag": `c:ingots/${name}`
            },
            "output": {
                "amount": 40,
                "id": `kubejs:${name}`
            }
        });

        event.custom({
            "type": "mekanism:oxidizing",
            "input": {
                "count": 1,
                "tag": `c:ingots/${name}`
            },
            "output": {
                "amount": 40,
                "id": `kubejs:${name}`
            }
        });
    };

    ['allthemodium', 'vibranium', 'unobtainium'].forEach(name => {
        chemicalConversionRecipe(name);
    });

    event.custom({
        "type": "mekanism:compressing",
        "chemical_input": {
            "amount": 1,
            "chemical": "kubejs:allthemodium"
        },
        "item_input": {
            "count": 3,
            "item": "minecraft:glowstone_dust"
        },
        "output": {
            "count": 1,
            "id": "mekanism_extras:dust_radiance"
        },
        "per_tick_usage": true
    });
});