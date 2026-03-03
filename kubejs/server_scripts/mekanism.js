ServerEvents.recipes(event => {
    event.shaped({
        "pattern": [
            "ABA",
            "BAB",
            "ABA"
        ],
        "key": {
            "A": {
            "tag": "c:slimeballs"
            },
            "B": {
            "tag": "c:dusts/wood"
            }
        },
        "result": {
            "id": "mekanism:cardboard_box"
        }
    });

    // event.custom({
    //     "type": "mekanism:compressing",
    //     "chemical_input": null,
    //     "item_input": {
    //         "count": 1,
    //         "tag": "c:ingots/iron"
    //     },
    //     "output": {
    //         "count": 1,
    //         "tag": "c:plates/iron"
    //     }
    // });
});