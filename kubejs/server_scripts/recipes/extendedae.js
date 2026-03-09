ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 100000,
        "power_rate": 1600,
        "pattern": [
            "ABC",
            "CDB",
            "ACA"
        ],
        "key": {
            "A": {
                "tag": "c:ingots/iron"
            },
            "B": {
                "tag": "c:ingots/copper"
            },
            "C": {
                "tag": "c:ingots/infused_entro"
            },
            "D": {
                "tag": "c:circuits/advanced"
            }
        },
        "result": {
            "id": "extendedae:machine_frame"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 100000,
        "power_rate": 1600,
        "pattern": [
            "ABC",
            "ADE",
            "FFF"
        ],
        "key": {
            "A": {
                "tag": "c:dusts/ender_pearl"
            },
            "B": {
                "item": "actuallyadditions:phantom_booster"
            },
            "C": {
                "tag": "c:dusts/fluix"
            },
            "D": {
                "item": "appliedsoul:range_card"
            },
            "E": {
                "tag": "c:gems/certus_quartz"
            },
            "F": {
                "tag": "c:ingots/iron"
            }
        },
        "result": {
            "id": "ae2:wireless_booster"
        }
    });
});