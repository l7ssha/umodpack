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
            " AAA ",
            "AB BA",
            "BCDCB",
            "EBCBE",
            "AE EA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "immersiveengineering:treated_wood_slab"
            },
            "B": {
                "tag": "c:plates/gold"
            },
            "C": {
                "item": "cataclysm:void_eye"
            },
            "D": {
                "item": "cataclysm:mech_eye"
            },
            "E": {
                "tag": "c:plates/steel"
            }
        },
        "result": {
            "id": "packagedauto:package_component"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "ABCDD",
            "DBEFD",
            "DDCFA",
            "AAAAA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "immersiveengineering:treated_wood_slab"
            },
            "B": {
                "item": "ae2:formation_core"
            },
            "C": {
                "item": "extendedae:concurrent_processor"
            },
            "D": {
                "tag": "c:plates/steel"
            },
            "E": {
                "item": "packagedauto:package_component"
            },
            "F": {
                "item": "ae2:annihilation_core"
            }
        },
        "result": {
            "id": "packagedauto:me_package_component"
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
});