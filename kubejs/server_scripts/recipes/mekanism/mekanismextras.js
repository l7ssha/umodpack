ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:reaction",
        "duration": 90,
        "energyRequired": 10000,
        "fluid_input": {
            "amount": 300,
            "fluid": "mekanism_extras:fluorinated_naquadah_uranium_fuel"
        },
        "chemical_input": {
            "amount": 500,
            "chemical": "mekanism:osmium"
        },
        "item_input": {
            "count": 6,
            "tag": "c:dusts/vibranium_allthemodium_alloy"
        },
        "item_output": {
            "count": 1,
            "id": "mekmm:scrap_box"
        },
        "chemical_output": {
            "amount": 200,
            "id": "mekanism_extras:naquadah_uranium_fuel"
        }
    });
});