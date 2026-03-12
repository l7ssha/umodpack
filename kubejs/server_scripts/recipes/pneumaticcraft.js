ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 40000,
        "input": {
            "item": "enderio:dark_steel_bars"
        },
        "ingredients": [
            {
                "item": "pneumaticcraft:pressure_tube"
            },
            {
                "item": "pneumaticcraft:pressure_tube"
            },
            {
                "item": "pneumaticcraft:pressure_tube"
            },
            {
                "item": "pneumaticcraft:pressure_tube"
            },
            {
                "item": "pneumaticcraft:pressure_tube"
            }
        ],
        "result": {
            "id": "pneumaticcraft:drill_pipe"
        }
    });
});