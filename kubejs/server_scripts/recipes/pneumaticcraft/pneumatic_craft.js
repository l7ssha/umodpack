ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAB",
            "BCDEE",
            "BCEEC",
            "BEEDC",
            "BAAAB"
        ],
        "key": {
            "A": {
                "item": "pneumaticcraft:reinforced_stone_slab"
            },
            "B": {
                "item": "pneumaticcraft:reinforced_stone"
            },
            "C": {
                "item": "pneumaticcraft:small_tank"
            },
            "D": {
                "item": "pneumaticcraft:reinforced_chest"
            },
            "E": {
                "item": "pneumaticcraft:pressure_tube"
            }
        },
        "result": {
            "id": "pneumaticcraft:thermopneumatic_processing_plant"
        }
    });
});