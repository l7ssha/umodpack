ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 1000000000,
        "power_rate": 150000,
        "pattern": [
            "ABC",
            "DEB",
            "CDA"
        ],
        "key": {
            "A": {
                "item": "mysticalagradditions:insanium_ingot_block"
            },
            "B": {
                "item": "mysticalagradditions:insanium_coal_block"
            },
            "C": {
                "item": "mysticalagradditions:insanium_gemstone_block"
            },
            "D": {
                "item": "mysticalagradditions:insanium_block"
            },
            "E": {
                "tag": "mysticalagriculture:infusion_crystals"
            }
        },
        "result": {
            "id": "kubejs:divinium_essence"
        }
    }).keepIngredient('#mysticalagriculture:infusion_crystals')
        .damageIngredient('#mysticalagriculture:infusion_crystals', 1);
});