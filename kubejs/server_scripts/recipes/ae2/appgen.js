ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABCBA",
            "CDBDC",
            "BEDEB",
            "FBEBF",
            "AFFFA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:plates/vibranium"
            },
            "B": {
                "item": "appgen:origination_processor"
            },
            "C": {
                "item": "appgen:ember_crystal_charged"
            },
            "D": {
                "item": "ae2:not_so_mysterious_cube"
            },
            "E": {
                "item": "ae2:sky_stone_tank"
            },
            "F": {
                "tag": "c:plates/unobtainium"
            }
        },
        "result": {
            "id": "appgen:genesis_synthesizer"
        }
    });
});