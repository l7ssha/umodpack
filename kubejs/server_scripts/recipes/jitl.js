ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:combining",
        "extra_input": {
            "count": 1,
            "item": "jitl:terrania_portal_gem"
        },
        "main_input": {
            "count": 1,
            "tag": "c:obsidians"
        },
        "output": {
            "count": 1,
            "id": "jitl:terranian_portal_frame"
        }
    });
});