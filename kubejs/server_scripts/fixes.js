KubeJSTweaks.beforeRecipes(event => {
    event.fixCondition([
        "irons_spellbooks:patchouli_book",
        "apotheosis:book",
    ]);

    event.getEntry(/^farmingforblockheads:market\//)
        .forEach(entry => {
            entry.addConditionsFromKey("result");
        });

    event.getEntry([
        "mekanism:compat/biomeswevegone/enriching/dacite/conversion_dacite_tile",
        "mekanism:compat/biomeswevegone/crushing/dacite/conversion_dacite_cobblestone",
        "mekanism:compat/biomeswevegone/enriching/dacite/conversion_dacite_bricks",
        "mekanism:compat/biomeswevegone/crushing/dacite/conversion_dacite_tile"
    ]).forEach(entry => {
        entry.replaceValueAtKey("input", "item", "biomeswevegone:dacite_tile", "biomeswevegone:dacite_tiles");
        entry.replaceValueAtKey("output", "id", "biomeswevegone:dacite_tile", "biomeswevegone:dacite_tiles");
    });

    event.getEntry("productivetrees:crates/coffee_bean_crate").forEach(entry => {
        entry.replaceValueAtKey("key", "tag", "c:coffee_bean", "c:coffee_beans");
    });

    event.getEntry("productivetrees:time_traveller_display").forEach(entry => {
        entry.replaceValueAtKey("key", "tag", "c:glass/colorless", "c:glass_blocks/colorless");
    });

    event.getEntry(/^deeperdarker:.*_smithing$/)
        .forEach(entry => {
            entry.fromPath("template", "[]").ifPresent(result => entry.ignoreWarning());
        });

    event.getEntry("mekmm:compat/mysticalagradditions/planting/awakened_draconium")
        .forEach(entry => {
            entry.fixItemAtKey("main_output");

            const chemicalInput = entry.json().get("chemical_input");
            if (chemicalInput.has("gas")) {
                chemicalInput.add("chemical", chemicalInput.remove("gas"));
            }
        });

    event.getEntry("botanypots:allthemodium/crop/ancient_soulberries")
        .forEach(entry => {
            entry.addConditionsFromKey("input");
        });

    event.getEntry("regions_unexplored:prismaglass").forEach(entry => {
        entry.replaceValueAtKey("key", "tag", "c:glass", "c:glass_blocks/colorless");
    });

    event.getEntry(/^regions_unexplored:.*_snowbelle$/)
        .forEach(entry => {
            let ings = entry.json().get("ingredients");

            if (ings == null) {
                return;
            }

            for (let ing of ings) {
                let tag = ing.get("tag");

                if (tag == null) {
                    continue;
                }

                if (tag.getAsString().endsWith("_dyes")) {
                    let color = tag.getAsString().replace("c:", "").replace("_dyes", "");
                    ing["addProperty(java.lang.String,java.lang.String)"]("tag", "c:dyes/" + color);
                }
            }
        });

    event.getEntry(/^regions_unexplored:.*_painted_planks$/)
        .forEach(entry => {
            let keys = entry.json().get("key");

            if (keys == null) {
                return;
            }

            for (let key of keys.asMap().values()) {
                let tag = key.get("tag");

                if (tag == null) {
                    continue;
                }

                if (tag.getAsString().endsWith("_dyes")) {
                    let color = tag.getAsString().replace("c:", "").replace("_dyes", "");
                    key["addProperty(java.lang.String,java.lang.String)"]("tag", "c:dyes/" + color);
                }
            }
        })

    event.getEntry(["pneumaticcraft:block_heat_properties/createlowheated/basic_burner_empowered", "pneumaticcraft:block_heat_properties/createlowheated/basic_burner_lit"])
        .forEach(entry => {
            entry.json().add("neoforge:conditions", [{ "type": "neoforge:mod_loaded", "modid": "createlowheated" }]);
        });
});

const clearingRecipes = [
    "draconicevolution:awakened_crafting_injector",
    "draconicevolution:basic_crafting_injector",
    "draconicevolution:basic_io_crystal",
    "draconicevolution:basic_wireless_crystal",
    "draconicevolution:celestial_manipulator",
    "draconicevolution:chaotic_crafting_injector",
    "draconicevolution:crafting_core",
    "draconicevolution:disenchanter",
    "draconicevolution:dislocator_pedestal",
    "draconicevolution:dislocator_receptacle",
    "draconicevolution:draconic_io_crystal",
    "draconicevolution:draconic_wireless_crystal",
    "draconicevolution:draconium_chest",
    "draconicevolution:energy_transfuser",
    "draconicevolution:entity_detector",
    "draconicevolution:entity_detector_advanced",
    "draconicevolution:fluid_gate",
    "draconicevolution:flux_gate",
    "draconicevolution:generator",
    "draconicevolution:grinder",
    "draconicevolution:reactor_core",
    "draconicevolution:wyvern_crafting_injector",
    "draconicevolution:wyvern_io_crystal",
    "draconicevolution:wyvern_wireless_crystal",
    "powah:energizing_rod_starter",
    "powah:energizing_rod_basic",
    "powah:energizing_rod_hardened",
    "powah:energizing_rod_blazing",
    "powah:energizing_rod_niotic",
    "powah:energizing_rod_spirited",
    "powah:energizing_rod_nitro",
];

ServerEvents.recipes(event => {
    clearingRecipes.forEach(id => {
        const item = Item.of(id);
        const recipeId = `kubejs:clearing/${id.replace(':', "/")}`;

        event.shapeless(item, [item]).id(recipeId);
    });
})