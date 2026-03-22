ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " AAAAAAA ",
            "A BBBBB A",
            "ABCD DCBA",
            "ABECDCEBA",
            "ABFGHGFBA",
            "ABG I GBA",
            "JJG H GJJ",
            "A JKHKJ A",
            "AAAJJJAAA"
        ],
        "key": {
            "A": {
                "tag": "c:ingots/refined_redstone"
            },
            "B": {
                "tag": "c:ingots/iridium"
            },
            "C": {
                "item": "advanced_ae:quantum_processor"
            },
            "D": {
                "item": "stevescarts:component_advanced_pcb"
            },
            "E": {
                "item": "industrialforegoing:hydroponic_simulation_processor",
            },
            "F": {
                "tag": "c:circuits/cosmic"
            },
            "G": {
                "item": "iceandfire:ghost_ingot"
            },
            "H": {
                "item": "stevescarts:component_eye_of_galgador"
            },
            "I": {
                "item": "cataclysm:void_core"
            },
            "J": {
                "item": "deeperdarker:grime_brick"
            },
            "K": {
                "item": "cataclysm:flame_eye"
            }
        },
        "result": {
            "id": "hostilenetworks:sim_chamber"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " AAAAAAA ",
            "A BBBBB A",
            "ABCD DCBA",
            "ABECDCEBA",
            "ABFC CFBA",
            "ABFGHGFBA",
            "IIFHHHFII",
            "A IG GI A",
            "AAAIIIAAA"
        ],
        "key": {
            "A": {
                "tag": "c:ingots/refined_redstone"
            },
            "B": {
                "tag": "c:ingots/iridium"
            },
            "C": {
                "item": "advanced_ae:quantum_processor"
            },
            "D": {
                "item": "stevescarts:component_advanced_pcb"
            },
            "E": {
                "item": "industrialforegoing:hydroponic_simulation_processor"
            },
            "F": {
                "tag": "c:circuits/cosmic"
            },
            "G": {
                "item": "ae2omnicells:quantum_crafting_unit_block"
            },
            "H": {
                "item": "draconicevolution:crafting_core"
            },
            "I": {
                "item": "deeperdarker:grime_brick"
            }
        },
        "result": {
            "id": "hostilenetworks:loot_fabricator"
        }
    });
});