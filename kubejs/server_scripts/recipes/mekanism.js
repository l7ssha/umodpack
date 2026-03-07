const compressorPlateRecipes = [
    'iron',
    'copper',
    'gold',
];

ServerEvents.recipes(event => {
    compressorPlateRecipes.forEach(item => {
        event.custom({
            "type": "mekanism:compressing",
            "chemical_input": {
                "amount": 1,
                "chemical": "mekanism:osmium"
            },
            "item_input": {
                "count": 1,
                "tag": `c:ingots/${item}`
            },
            "output": {
                "count": 1,
                "id": `alltheores:${item}_plate`
            }
        });
    });

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

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABBBA",
            "BACAB",
            "BCDCB",
            "BACAB",
            "ABBBA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "immersiveengineering:component_steel"
            },
            "B": {
                "tag": "c:glass_blocks"
            },
            "C": {
                "item": "rftoolsbase:infused_diamond"
            },
            "D": {
                "tag": "c:storage_blocks/empowered_restonia_crystal"
            }
        },
        "result": {
            "id": "mekanism:steel_casing"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABCBA",
            "BDEDB",
            "FGHGF",
            "BDEDB",
            "ABCBA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "immersiveengineering:component_steel"
            },
            "B": {
                "tag": "c:rods/steel"
            },
            "C": {
                "tag": "c:storage_blocks/diamond"
            },
            "D": {
                "tag": "c:storage_blocks/empowered_restonia_crystal"
            },
            "E": {
                "item": "powah:energy_cell_hardened"
            },
            "F": {
                "tag": "mekanism:alloys/ultimate"
            },
            "G": {
                "item": "mekanism:energy_tablet"
            },
            "H": {
                "item": "mekanism:steel_casing"
            }
        },
        "result": {
            "id": "mekanism:energized_smelter"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABCBA",
            "BDEDB",
            "FGHGF",
            "BDEDB",
            "ABCBA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "immersiveengineering:component_steel"
            },
            "B": {
                "tag": "c:rods/steel"
            },
            "C": {
                "tag": "c:alloys/ultimate"
            },
            "D": {
                "tag": "c:storage_blocks/empowered_restonia_crystal"
            },
            "E": {
                "item": "powah:energy_cell_hardened"
            },
            "F": {
                "item": "mekanism:ultimate_logistical_transporter"
            },
            "G": {
                "tag": "c:buckets/lava"
            },
            "H": {
                "item": "mekanism:steel_casing"
            }
        },
        "result": {
            "id": "mekanism:crusher"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABCBA",
            "BDEDB",
            "FGHGF",
            "BDEDB",
            "ABCBA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "immersiveengineering:component_steel"
            },
            "B": {
                "tag": "c:rods/steel"
            },
            "C": {
                "tag": "c:storage_blocks/osmium"
            },
            "D": {
                "tag": "c:storage_blocks/empowered_restonia_crystal"
            },
            "E": {
                "tag": "c:circuits/ultimate"
            },
            "F": {
                "item": "mekanism:ultimate_universal_cable"
            },
            "G": {
                "tag": "c:alloys/ultimate"
            },
            "H": {
                "item": "mekanism:steel_casing"
            }
        },
        "result": {
            "id": "mekanism:enrichment_chamber"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABCBA",
            "BDEDB",
            "FGHGF",
            "BDEDB",
            "ABCBA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "immersiveengineering:component_steel"
            },
            "B": {
                "tag": "c:rods/steel"
            },
            "C": {
                "tag": "c:storage_blocks/empowered_palis_crystal"
            },
            "D": {
                "tag": "c:storage_blocks/empowered_restonia_crystal"
            },
            "E": {
                "tag": "c:storage_blocks/empowered_enori_crystal"
            },
            "F": {
                "tag": "c:storage_blocks/empowered_diamatine_crystal"
            },
            "G": {
                "tag": "c:storage_blocks/empowered_emeradic_crystal"
            },
            "H": {
                "item": "mekanism:steel_casing"
            }
        },
        "result": {
            "id": "mekanism:metallurgic_infuser"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABCBA",
            "BDEDB",
            "FEGEF",
            "BDEDB",
            "ABCBA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "immersiveengineering:component_steel"
            },
            "B": {
                "tag": "c:rods/steel"
            },
            "C": {
                "tag": "c:alloys/ultimate"
            },
            "D": {
                "tag": "c:storage_blocks/empowered_restonia_crystal"
            },
            "E": {
                "item": "mekanism:steel_casing"
            },
            "F": {
                "tag": "c:circuits/ultimate"
            },
            "G": {
                "item": "mekanism:enrichment_chamber"
            }
        },
        "result": {
            "id": "mekanism:purification_chamber"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABCBA",
            "BDEDB",
            "FEGEF",
            "BDEDB",
            "ABCBA"
        ],
        "key": {
            "A": {
                "item": "immersiveengineering:component_steel"
            },
            "B": {
                "tag": "c:rods/steel"
            },
            "C": {
                "tag": "c:circuits/supreme"
            },
            "D": {
                "tag": "c:storage_blocks/empowered_restonia_crystal"
            },
            "E": {
                "item": "mekanism:electrolytic_core"
            },
            "F": {
                "tag": "mekanism:alloys/supreme"
            },
            "G": {
                "item": "mekanism:steel_casing"
            }
        },
        "result": {
            "id": "mekanism:electrolytic_separator"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABCBA",
            "DAEAD",
            "CFAGC",
            "HAEAH",
            "AHCHA"
        ],
        "key": {
            "A": {
                "tag": "mekanism:alloys/supreme"
            },
            "B": {
                "tag": "c:wires/supreme"
            },
            "C": {
                "item": "immersiveengineering:component_steel"
            },
            "D": {
                "tag": "c:glass_blocks"
            },
            "E": {
                "tag": "c:dusts/osmium"
            },
            "F": {
                "tag": "enderio:insulation_metals"
            },
            "G": {
                "tag": "c:dusts/gold"
            },
            "H": {
                "tag": "c:rods/steel"
            }
        },
        "result": {
            "id": "mekanism:electrolytic_core"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABCDA",
            "EFGFE",
            "HIJIH",
            "KLAMN",
            "AOOOA"
        ],
        "key": {
            "A": {
                "item": "immersiveengineering:component_steel"
            },
            "B": {
                "items": "mifa:processing_addon_4",
                "components": {
                    "titanium:augments": {
                        "Processing": 5.0
                    }
                },
                "type": "neoforge:components"
            },
            "C": {
                "items": "mifa:speed_addon_4",
                "components": {
                    "titanium:augments": {
                        "Speed": 5.0
                    }
                },
                "type": "neoforge:components"
            },
            "D": {
                "items": "mifa:efficiency_addon_4",
                "components": {
                    "titanium:augments": {
                        "Efficiency": 0.6
                    }
                },
                "type": "neoforge:components"
            },
            "E": {
                "tag": "c:circuits/supreme"
            },
            "F": {
                "tag": "c:alloys/supreme"
            },
            "G": {
                "tag": "c:rods/steel"
            },
            "H": {
                "item": "mekanism_extras:supreme_universal_cable"
            },
            "I": {
                "item": "mekanism:steel_casing"
            },
            "J": {
                "item": "mekanism:purification_chamber"
            },
            "K": {
                "item": "immersiveengineering:sorter"
            },
            "L": {
                "tag": "c:storage_blocks/allthemodium"
            },
            "M": {
                "item": "powah:energy_cell_spirited"
            },
            "N": {
                "item": "immersiveengineering:fluid_sorter"
            },
            "O": {
                "tag": "c:storage_blocks/netherite"
            }
        },
        "result": {
            "id": "mekanism:chemical_injection_chamber"
        }
    });
});