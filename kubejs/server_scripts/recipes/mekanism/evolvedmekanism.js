ServerEvents.recipes(event => {
    event.custom({
        "type": "evolvedmekanism:chemixing",
        "extra_input": {
            "count": 2,
            "item": "mekanism:hdpe_sheet"
        },
        "chemical_input": {
            "amount": 300,
            "chemical": "kubejs:unobtainium"
        },
        "main_input": {
            "item": "kubejs:confusion_alloy"
        },
        "output": {
            "id": "evolvedmekanism:ingot_plaslitherite"
        }
    });

    event.custom({
        "type": "mekanism:compressing",
        "chemical_input": {
            "amount": 2,
            "chemical": "mekanism:osmium"
        },
        "item_input": {
            "count": 4,
            "tag": "c:ingots/redstone_ingot"
        },
        "output": {
            "count": 1,
            "id": "evolvedmekanism:ingot_refined_redstone"
        },
        "per_tick_usage": true
    });
});