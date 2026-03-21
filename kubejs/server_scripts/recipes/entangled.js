ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 100000,
        "power_rate": 500,
        "pattern": [
            "AAA",
            "BCB",
            "ADA"
        ],
        "key": {
            "A": {
                "tag": "c:ingots/refined_redstone"
            },
            "B": {
                "item": "minecraft:ender_eye"
            },
            "C": {
                "item": "occultism:stable_wormhole_dark"
            },
            "D": {
                "item": "mekanism:steel_casing"
            }
        },
        "result": {
            "id": "entangled:block"
        }
    });
});