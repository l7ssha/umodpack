ServerEvents.recipes(event => {
    event.shaped({
        "pattern": [
            "AAA",
            "A A",
            "AAA"
        ],
        "key": {
            "A": {
                "item": "mysticalagriculture:rubber_essence"
            }
        },
        "result": {
            "count": 4,
            "id": "industrialforegoing:dryrubber"
        }
    });
});