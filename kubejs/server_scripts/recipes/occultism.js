const crushingRecipes = {
    "#c:end_stones": "occultism:crushed_end_stone",
    "#c:gems/amethyst": "occultism:amethyst_dust",
    "minecraft:netherite_scrap": "occultism:netherite_scrap_dust",
    "#c:ingots/iesnium": "occultism:iesnium_dust",
    "minecraft:echo_shard": "occultism:echo_dust",
    "#c:ices/ice": "occultism:crushed_ice",
    "#c:ices/packed": "occultism:crushed_packed_ice",
    "#c:ices/blue": "occultism:crushed_blue_ice",
    "#chipped:calcite": "occultism:crushed_calcite",
    "#c:ingots/unobtainium_allthemodium_alloy": "allthemodium:unobtainium_allthemodium_alloy_dust",
    "#c:ingots/unobtainium_vibranium_alloy": "allthemodium:unobtainium_vibranium_alloy_dust",
    "#c:ingots/vibranium_allthemodium_alloy": "allthemodium:vibranium_allthemodium_alloy_dust",
};

ServerEvents.recipes(event => {
    event.custom({
        "type": "occultism:ritual",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_foliot"
        },
        "duration": 60,
        "ingredients": [
            {
                "item": "occultism:otherstone_pedestal"
            },
            {
                "tag": "c:ingots/copper"
            },
            {
                "item": "occultism:stable_wormhole"
            },
            {
                "tag": "c:ingots/gold"
            }
        ],
        "pentacle_id": "occultism:craft_foliot",
        "result": {
            "count": 1,
            "id": "occultism:storage_controller_base"
        },
        "ritual_dummy": {
            "count": 1,
            "id": "occultism:ritual_dummy/craft_storage_controller_base"
        },
        "ritual_type": "occultism:craft"
    });

    Object.entries(crushingRecipes).forEach(([input, output]) => {
        const inputObject = input.startsWith("#") ? { "tag": input.substring(1) } : { "item": input };

        event.custom({
            "type": "mekanism:crushing",
            "input": inputObject,
            "output": {
                "count": 1,
                "id": output
            }
        });
    });
});