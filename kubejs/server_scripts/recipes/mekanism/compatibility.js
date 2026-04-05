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

const crushingRecipes = {
    "#c:end_stones": "occultism:crushed_end_stone",
    "#c:gems/amethyst": "occultism:amethyst_dust",
    "minecraft:netherite_scrap": "occultism:netherite_scrap_dust",
    "#c:ingots/iesnium": "occultism:iesnium_dust",
    "minecraft:echo_shard": "occultism:echo_dust",
    "#c:ices/ice": "occultism:crushed_ice",
    "#c:ices/packed": "occultism:crushed_packed_ice",
    "#c:ices/blue": "occultism:crushed_blue_ice",
    "#chipped:calcite": "occultism:crushed_calcite",
    "#c:ingots/unobtainium_allthemodium_alloy": "allthemodium:unobtainium_allthemodium_alloy_dust",
    "#c:ingots/unobtainium_vibranium_alloy": "allthemodium:unobtainium_vibranium_alloy_dust",
    "#c:ingots/vibranium_allthemodium_alloy": "allthemodium:vibranium_allthemodium_alloy_dust",
};

ServerEvents.recipes(event => {
    Object.entries(crushingRecipes).forEach(([input, output]) => {
        const inputObject = input.startsWith("#") ? { "tag": input.substring(1) } : { "item": input };

        event.custom({
            "type": "mekanism:crushing",
            "input": inputObject,
            "output": {
                "count": 1,
                "id": output
            }
        });
    });

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