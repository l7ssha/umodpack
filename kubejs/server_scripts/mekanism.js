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
});