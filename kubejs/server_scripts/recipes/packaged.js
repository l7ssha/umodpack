ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "ABCBA",
            "CDCEC",
            "ABABA",
            "AAFAA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:plates/steel"
            },
            "B": {
                "item": "packagedauto:package_component"
            },
            "C": {
                "item": "avaritia:double_compressed_crafting_table"
            },
            "D": {
                "item": "advanced_ae:adv_pattern_encoder"
            },
            "E": {
                "item": "ae2:pattern_encoding_terminal"
            },
            "F": {
                "item": "mekanism:steel_casing"
            }
        },
        "result": {
            "id": "packagedauto:encoder"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABCBA",
            "BDEDB",
            "CEFEC",
            "BDEDB",
            "ABCBA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "mekanism:hdpe_stick"
            },
            "B": {
                "tag": "immersiveengineering:treated_wood_slab"
            },
            "C": {
                "tag": "c:plates/gold"
            },
            "D": {
                "tag": "c:plates/steel"
            },
            "E": {
                "tag": "c:ingots/refined_redstone"
            },
            "F": {
                "item": "cataclysm:void_core"
            }
        },
        "result": {
            "id": "packagedauto:package_component"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " AAAAA ",
            "ABCBCBA",
            "ACDEDCA",
            "FGHIHGF",
            "FHJEJHF",
            "FKIBIKF",
            " FFFFF "
        ],
        "tier": 3,
        "key": {
            "A": {
                "tag": "c:plates/osmium"
            },
            "B": {
                "item": "packagedauto:me_package_component"
            },
            "C": {
                "item": "packagedauto:packager"
            },
            "D": {
                "item": "ae2:calculation_processor"
            },
            "E": {
                "item": "extendedae:ex_molecular_assembler"
            },
            "F": {
                "tag": "c:plates/netherite"
            },
            "G": {
                "item": "appflux:energy_processor"
            },
            "H": {
                "item": "packagedauto:unpackager"
            },
            "I": {
                "item": "advanced_ae:adv_pattern_provider"
            },
            "J": {
                "item": "ae2:logic_processor"
            },
            "K": {
                "item": "ae2:engineering_processor"
            }
        },
        "result": {
            "id": "packagedauto:packaging_provider"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "       ",
            " AA AA ",
            "A BBB A",
            "ABCDCBA",
            "AEDCDEA",
            "A EDE A",
            " A A A "
        ],
        "tier": 3,
        "key": {
            "A": {
                "tag": "c:plates/steel"
            },
            "B": {
                "item": "packagedauto:package_component"
            },
            "C": {
                "item": "packagedauto:distributor_marker"
            },
            "D": {
                "tag": "c:gears/steel"
            },
            "E": {
                "tag": "c:shulker_boxes"
            }
        },
        "result": {
            "id": "packagedauto:distributor"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "       ",
            " AABAA ",
            "ACDDDCA",
            "ADEFEDA",
            "ACFEFCA",
            "A CFC A",
            " A A A "
        ],
        "tier": 3,
        "key": {
            "A": {
                "tag": "c:plates/steel"
            },
            "B": {
                "tag": "c:shulker_boxes"
            },
            "C": {
                "tag": "c:obsidians/crying"
            },
            "D": {
                "item": "packagedauto:package_component"
            },
            "E": {
                "item": "packagedauto:proxy_marker"
            },
            "F": {
                "tag": "c:gears/steel"
            }
        },
        "result": {
            "id": "packagedauto:crafting_proxy"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "       ",
            " AABAA ",
            "ACBDBCA",
            "ACEDECA",
            "ACCECCA",
            " AAAAA ",
            "       "
        ],
        "tier": 3,
        "key": {
            "A": {
                "tag": "c:plates/steel"
            },
            "B": {
                "item": "packagedauto:me_package_component"
            },
            "C": {
                "item": "actuallyadditions:empowered_restonia_crystal"
            },
            "D": {
                "tag": "c:gears/steel"
            },
            "E": {
                "item": "extendedae:ex_molecular_assembler"
            }
        },
        "result": {
            "id": "packagedauto:crafter"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "       ",
            "AAABAAA",
            "ACBDBCA",
            "ACEDECA",
            "ACCFCCA",
            " AAAAA ",
            "       "
        ],
        "tier": 3,
        "key": {
            "A": {
                "tag": "c:plates/bronze"
            },
            "B": {
                "item": "packagedauto:package_component"
            },
            "C": {
                "item": "actuallyadditions:empowered_restonia_crystal"
            },
            "D": {
                "tag": "c:gears/steel"
            },
            "E": {
                "item": "ae2:sky_stone_tank"
            },
            "F": {
                "item": "evolvedmekanism:overclocked_fluid_tank"
            }
        },
        "result": {
            "id": "packagedauto:fluid_package_filler"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "       ",
            "AA B AA",
            "ACBDBCA",
            "ACEDECA",
            "ACCECCA",
            " AAAAA ",
            "       "
        ],
        "tier": 3,
        "key": {
            "A": {
                "item": "mekanism:hdpe_sheet"
            },
            "B": {
                "item": "packagedauto:package_component"
            },
            "C": {
                "item": "actuallyadditions:empowered_restonia_crystal"
            },
            "D": {
                "tag": "c:gears/steel"
            },
            "E": {
                "item": "evolvedmekanism:overclocked_chemical_tank"
            }
        },
        "result": {
            "id": "packagedmekemicals:chemical_package_filler"
        }
    });

    event.custom({
        "type": "appgen:synthesizing",
        "input_energy": 100000,
        "input_fluid": {
            "amount": 1000,
            "ingredient": {
                "fluid": "ifeu:liquid_malic_acid"
            }
        },
        "input_items": [
            {
                "amount": 16,
                "ingredient": {
                    "tag": "immersiveengineering:treated_wood_slab"
                }
            },
            {
                "amount": 16,
                "ingredient": {
                    "tag": "c:plates/steel"
                }
            },
            {
                "amount": 3,
                "ingredient": {
                    "item": "ae2:formation_core"
                }
            },
            {
                "amount": 3,
                "ingredient": {
                    "item": "ae2:annihilation_core"
                }
            },
            {
                "amount": 3,
                "ingredient": {
                    "item": "extendedae:concurrent_processor"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "tag": "c:circuits/absolute"
                }
            }
        ],
        "output": {
            "#": 1,
            "#t": "ae2:i",
            "id": "packagedauto:me_package_component"
        }
    });

    event.custom({
        "type": "appgen:synthesizing",
        "input_energy": 100000,
        "input_fluid": {
            "amount": 200,
            "ingredient": {
                "fluid": "pneumaticcraft:plastic"
            }
        },
        "input_items": [
            {
                "amount": 3,
                "ingredient": {
                    "tag": "c:ingots/refined_redstone"
                }
            },
            {
                "amount": 6,
                "ingredient": {
                    "tag": "c:ingots/constantan"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "packagedauto:package_component"
                }
            },
            {
                "amount": 5,
                "ingredient": {
                    "tag": "c:glass_blocks/cheap"
                }
            }
        ],
        "output": {
            "#": 3,
            "#t": "ae2:i",
            "id": "packagedauto:recipe_holder"
        }
    });
});