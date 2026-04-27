ServerEvents.recipes(event => {
    event.custom({
        "type": "evolvedmekanism:alloying",
        "extra_input": {
            "tag": "c:ingots/blazum",
            "count": 2,
        },
        "second_extra_input": {
            "item": "minecraft:sculk",
            "count": 7,
        },
        "main_input": {
            "tag": "c:ingots/enhanced_ender_ingot",
            "count": 5
        },
        "output": {
            "id": "kubejs:abbysal_alloy",
            "count": 2,
        },
    });

    event.custom({
        "type": "industrialforegoing:fluid_extractor",
        "breakChance": 0.05,
        "defaultRecipe": false,
        "input": {
            "item": "productivetrees:time_traveller_log"
        },
        "output": {
            "amount": 1,
            "id": "kubejs:digital_time_infusion"
        },
        "result": {
            "Name": "productivetrees:time_traveller_stripped_log",
            "Properties": {
                "axis": "y"
            }
        }
    });

    event.shapeless({
        "ingredients": [
            {
                "item": "alltheores:copper_ore_hammer",
            },
            {
                "item": "minecraft:obsidian"
            }
        ],
        "result": {
            "id": "mekanism:dust_obsidian"
        }
    });
});