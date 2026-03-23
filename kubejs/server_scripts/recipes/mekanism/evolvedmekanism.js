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
});