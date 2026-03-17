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
});