ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:reaction",
        "duration": 90,
        "energyRequired": 10000,
        "fluidInput": {
            "amount": 300,
            "fluid": "mekanism_extras:fluorinated_naquadah_uranium_fuel"
        },
        "gasInput": {
            "amount": 400,
            "gas": "mekanism:osmium"
        },
        "itemInput": {
            "ingredient": {
                "tag": "c:dusts/vibranium_allthemodium"
            }
        },
        "itemOutput": {
            "item": "makmm:scrap_box"
        },
        "gasOutput": {
            "amount": 200,
            "gas": "mekanism_extras:naquadah_uranium_fuel"
        }
    });
});