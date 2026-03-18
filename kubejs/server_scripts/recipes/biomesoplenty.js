ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:crushing",
        "input": {
            "count": 1,
            "item": "biomesoplenty:flesh"
        },
        "output": {
            "count": 9,
            "id": "minecraft:rotten_flesh"
        }
    });
});