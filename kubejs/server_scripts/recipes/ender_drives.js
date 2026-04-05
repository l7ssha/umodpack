ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
            "ABA",
            "CDC",
            "AEA"
        ],
        "key": {
            "A": {
                "item": "advanced_ae:shattered_singularity"
            },
            "B": {
                "item": "advanced_ae:quantum_storage_component"
            },
            "C": {
                "item": "extendedcrafting:ender_star"
            },
            "D": {
                "item": "enderstorage:ender_chest"
            },
            "E": {
                "tag": "c:ender_pearls"
            }
        },
        "result": {
            "id": "enderdrives:ender_storage_component_1k"
        }
    });
});
