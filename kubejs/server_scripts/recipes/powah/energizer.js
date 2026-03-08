/** @type {typeof import("net.minecraft.nbt.TagType").$TagType } */
let $TagType  = Java.loadClass("net.minecraft.nbt.TagType")
ServerEvents.recipes(event => {
    const energizerRecipe = (energy, ingredients, result) => {
        event.custom({
            "type": "powah:energizing",
            "energy": energy,
            "ingredients": ingredients,
            "result": result
        });
    };

    energizerRecipe(
        1000000,
        [
            { item: "fluxnetworks:flux_core" },
            { item: "fluxnetworks:flux_core" },
            { item: "fluxnetworks:flux_core" },
            { item: "fluxnetworks:flux_core" },
            { item: "fluxnetworks:flux_block" },
        ],
        {
            count: 1,
            id: 'fluxnetworks:flux_plug',
        }
    );

    energizerRecipe(
        1000000,
        [
            { item: "fluxnetworks:flux_core" },
            { item: "fluxnetworks:flux_core" },
            { item: "fluxnetworks:flux_core" },
            { item: "fluxnetworks:flux_core" },
            { tag: "c:storage_blocks/redstone" },
            { tag: "c:storage_blocks/redstone" },
        ],
        {
            count: 1,
            id: 'fluxnetworks:flux_point',
        }
    );
});