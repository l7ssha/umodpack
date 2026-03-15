ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 30000,
        "power_rate": 200,
        "pattern": [
            "  A",
            "BCA",
            "BD "
        ],
        "key": {
            "A": {
                "item": "immersiveengineering:wooden_grip"
            },
            "B": {
                "item": "immersiveengineering:component_iron"
            },
            "C": {
                "item": "actuallyadditions:drill_core"
            },
            "D": {
                "item": "immersiveengineering:heavy_engineering"
            }
        },
        "result": {
            "id": "immersiveengineering:drill"
        }
    });
});