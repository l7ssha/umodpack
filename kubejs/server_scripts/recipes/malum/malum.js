ServerEvents.recipes(event => {
    event.shaped({
        "pattern": [
            "AAB",
            " CA",
            "C  "
        ],
        "key": {
            "A": {
                "tag": "c:ingots/steel"
            },
            "B": {
                "item": "malum:refined_soulstone"
            },
            "C": {
                "tag": "c:rods/treated_wood"
            }
        },
        "result": {
            "id": "malum:crude_scythe"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "   A   ",
            "  ABA  ",
            " ABCBA ",
            " DCCCD ",
            "DBCCCBD",
            "CCCBCCC",
            "DCC CCD"
        ],
        "tier": 3,
        "key": {
            "A": {
                "tag": "advancednetherite:ingot/netherites_gold"
            },
            "B": {
                "item": "malum:refined_soulstone"
            },
            "C": {
                "tag": "malum:runewood_planks"
            },
            "D": {
                "tag": "c:ingots/gold"
            }
        },
        "result": {
            "id": "malum:spirit_altar"
        }
    });
});