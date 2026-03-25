const rodsRecipes = [
    'electrum',
    'lead',
    'nickel',
    'osmium',
    'platinum',
    'silver',
    'tin',
    'uranium',
    'zinc',
    'iridium',
    'invar',
    'bronze',
    'brass',
    'enderium',
    'lumium',
    'signalum',
    'constantan',
    'copper',
    'gold',
    'diamond',
    'iron',
    'netherite'
];

const rodsRecipesSkipStamper = ['iron', 'netherite'];

const plateRecipes = [
    'osmium',
    'platinum',
    'tin',
    'zinc',
    'iridium',
    'invar',
    'bronze',
    'brass',
    'enderium',
    'lumium',
    'signalum',
    'diamond',
    'netherite',
];

const allTheModiumMaterials = [
    'allthemodium',
    'vibranium',
    'unobtainium',
];

const getTag = (material) => {
    const type = material === 'diamond' ? 'gems' : 'ingots';
    return `c:${type}/${material}`;
};

ServerEvents.recipes(event => {
    rodsRecipes.forEach(material => {
        event.custom({
            "type": "mekmm:lathe",
            "input": {
                "count": 1,
                "tag": getTag(material)
            },
            "output": {
                "count": 2,
                "id": `alltheores:${material}_rod`
            }
        });

        if (rodsRecipesSkipStamper.includes(material)) {
            return;
        }

        event.custom({
            "type": "mekmm:stamper",
            "input": {
                "count": 1,
                "tag": getTag(material)
            },
            "mold": {
                "count": 1,
                "item": "immersiveengineering:mold_rod"
            },
            "output": {
                "count": 2,
                "id": `alltheores:${material}_rod`
            }
        });
    });

    allTheModiumMaterials.forEach(material => {
        event.custom({
            "type": "mekmm:lathe",
            "input": {
                "count": 3,
                "tag": `c:ingots/${material}`
            },
            "output": {
                "count": 2,
                "id": `allthemodium:${material}_rod`
            }
        });
    });

    plateRecipes.forEach(material => {
        event.custom({
            "type": "mekmm:stamper",
            "input": {
                "count": 1,
                "tag": getTag(material)
            },
            "mold": {
                "count": 1,
                "item": "immersiveengineering:mold_plate"
            },
            "output": {
                "count": 1,
                "id": `alltheores:${material}_plate`
            }
        });
    });

    allTheModiumMaterials.forEach(material => {
        event.custom({
            "type": "mekmm:stamper",
            "input": {
                "count": 3,
                "tag": `c:ingots/${material}`
            },
            "mold": {
                "count": 1,
                "item": "immersiveengineering:mold_plate"
            },
            "output": {
                "count": 1,
                "id": `allthemodium:${material}_plate`
            }
        });
    });
});