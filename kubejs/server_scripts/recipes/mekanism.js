const compressorPlateRecipes = [
    'iron',
    'copper',
    'gold',
];

ServerEvents.recipes(event => {
    event.shaped({
        "pattern": [
            "ABA",
            "BAB",
            "ABA"
        ],
        "key": {
            "A": {
            "tag": "c:slimeballs"
            },
            "B": {
            "tag": "c:dusts/wood"
            }
        },
        "result": {
            "id": "mekanism:cardboard_box"
        }
    });

    compressorPlateRecipes.forEach(item => {
        event.custom({
            "type": "mekanism:compressing",
            "chemical_input": {
                "amount": 1,
                "chemical": "mekanism:osmium"
            },
            "item_input": {
                "count": 1,
                "tag": `c:ingots/${item}`
            },
            "output": {
                "count": 1,
                "id": `alltheores:${item}_plate`
            }
        });
    });
});