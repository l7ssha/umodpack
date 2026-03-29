ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 1000,
        "power_rate": 100,
        "pattern": [
            "ABA",
            "BCB",
            "ABA"
        ],
        "key": {
            "A": {
                "tag": "minecraft:logs"
            },
            "B": {
                "tag": "c:plates/steel"
            },
            "C": {
                "tag": "c:storage_blocks/redstone"
            }
        },
        "result": {
            "id": "industrialforegoing:machine_frame_pity"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABCBA",
            "ADEDA",
            "AFDFA",
            "AGHGA",
            "AAAAA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:ingots/iron"
            },
            "B": {
                "tag": "c:chests"
            },
            "C": {
                "item": "pneumaticcraft:reinforced_chest"
            },
            "D": {
                "tag": "c:buckets/empty"
            },
            "E": {
                "tag": "c:ingots/gold"
            },
            "F": {
                "tag": "c:gears/diamond"
            },
            "G": {
                "tag": "c:circuits/supreme_quantum"
            },
            "H": {
                "tag": "c:storage_blocks/redstone"
            }
        },
        "result": {
            "id": "industrialforegoing:dissolution_chamber"
        }
    });

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "tag": "c:plastics"
            },
            {
                "tag": "industrialforegoing:machine_frame/simple"
            },
            {
                "tag": "c:plastics"
            },
            {
                "tag": "c:gears/netherite"
            },
            {
                "tag": "c:gears/netherite"
            },
            {
                "tag": "c:plastics"
            },
            {
                "tag": "c:gears/diamond"
            },
            {
                "tag": "c:plates/platinum"
            }
        ],
        "inputFluid": {
            "amount": 1000,
            "fluid": "industrialforegoing:pink_slime"
        },
        "output": {
            "count": 1,
            "id": "industrialforegoing:machine_frame_advanced"
        },
        "processingTime": 300
    });

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "tag": "c:plastics"
            },
            {
                "tag": "industrialforegoing:machine_frame/advanced"
            },
            {
                "tag": "c:plastics"
            },
            {
                "tag": "c:gears/allthemodium"
            },
            {
                "tag": "c:gears/allthemodium"
            },
            {
                "tag": "c:plates/platinum"
            },
            {
                "tag": "c:gears/netherite"
            },
            {
                "tag": "c:plates/platinum"
            }
        ],
        "inputFluid": {
            "amount": 500,
            "fluid": "industrialforegoing:ether_gas"
        },
        "output": {
            "count": 1,
            "id": "industrialforegoing:machine_frame_supreme"
        },
        "processingTime": 300
    });

    event.shaped({
        "pattern": [
            "AAA",
            "BCB",
            "DED"
        ],
        "key": {
            "A": {
                "tag": "c:iron_bars"
            },
            "B": {
                "tag": "c:gears/iron"
            },
            "C": {
                "tag": "c:furnaces"
            },
            "D": {
                "item": "minecraft:smooth_stone"
            },
            "E": {
                "item": "minecraft:smooth_stone_slab"
            }
        },
        "result": {
            "id": "industrialforegoing:pitiful_generator"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAA ",
            "ABCBA",
            "DEEE ",
            "ABCBA",
            "AAAA "
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "mysticalagriculture:machine_frame"
            },
            "B": {
                "item": "minecraft:piston"
            },
            "C": {
                "tag": "c:gears/diamond"
            },
            "D": {
                "item": "industrialforegoing:machine_frame_advanced"
            },
            "E": {
                "item": "mekanism:laser_amplifier"
            }
        },
        "result": {
            "id": "industrialforegoing:laser_drill"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " ABBBA ",
            "CDEEEDC",
            "AFGHHFA",
            "ACIJICA",
            "ACCCCCA",
            "GAAAAAG",
            "GGGGGGG"
        ],
        "tier": 3,
        "key": {
            "A": {
                "tag": "c:plastics"
            },
            "B": {
                "item": "pneumaticcraft:crop_support"
            },
            "C": {
                "tag": "c:plates/steel"
            },
            "D": {
                "item": "minecraft:netherite_hoe"
            },
            "E": {
                "item": "mysticalagriculture:supremium_farmland"
            },
            "F": {
                "tag": "c:gears/netherite"
            },
            "G": {
                "tag": "c:buckets/water"
            },
            "H": {
                "item": "industrialforegoing:fertilizer"
            },
            "I": {
                "item": "industrialforegoing:machine_frame_supreme"
            },
            "J": {
                "item": "mekanism:ultimate_energy_cube"
            },
            "G": {
                "tag": "c:ingots/blazum"
            }
        },
        "result": {
            "id": "industrialforegoing:hydroponic_bed"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "A A",
            "BCB",
            "DED"
        ],
        "tier": 1,
        "key": {
            "A": {
                "item": "evolvedmekanism:overclocked_tier_installer"
            },
            "B": {
                "item": "hostilenetworks:sim_chamber"
            },
            "C": {
                "item": "industrialforegoing:hydroponic_bed"
            },
            "D": {
                "tag": "c:circuits/multiversal"
            },
            "E": {
                "item": "evolvedmekanism:overclocked_fluid_tank"
            }
        },
        "result": {
            "id": "industrialforegoing:simulated_hydroponic_bed"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " AAA ",
            "ABCBA",
            "ADEDA",
            "ADFDA",
            " AAA "
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:plastics"
            },
            "B": {
                "item": "immersiveengineering:component_electronic"
            },
            "C": {
                "item": "advanced_ae:quantum_processor"
            },
            "D": {
                "item": "ae2:advanced_card"
            },
            "E": {
                "item": "ae2:cell_component_256k"
            },
            "F": {
                "item": "megacells:accumulation_processor"
            }
        },
        "result": {
            "id": "industrialforegoing:hydroponic_simulation_processor"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "       ",
            " ABCBA ",
            "ABDEDBA",
            "ACEFECA",
            "ABDEDBA",
            " GAHAG ",
            "       "
        ],
        "tier": 3,
        "key": {
            "A": {
                "item": "industrialforegoingsouls:soul_network_pipe"
            },
            "B": {
                "tag": "c:plastics"
            },
            "C": {
                "tag": "c:iron_bars"
            },
            "D": {
                "item": "minecraft:sculk_catalyst"
            },
            "E": {
                "item": "minecraft:sculk_shrieker"
            },
            "F": {
                "item": "industrialforegoing:machine_frame_supreme"
            },
            "G": {
                "item": "appliedsoul:soul_collector"
            },
            "H": {
                "item": "industrialforegoingsouls:soul_surge"
            }
        },
        "result": {
            "id": "industrialforegoingsouls:soul_laser_base"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "       ",
            "       ",
            " ABCBA ",
            " BCDCB ",
            " BCECB ",
            " FAAAF ",
            "       "
        ],
        "tier": 3,
        "key": {
            "A": {
                "tag": "c:iron_bars"
            },
            "B": {
                "tag": "c:plastics"
            },
            "C": {
                "tag": "c:gears/netherite"
            },
            "D": {
                "tag": "actuallyaddtions:drills"
            },
            "E": {
                "item": "industrialforegoing:machine_frame_advanced"
            },
            "F": {
                "tag": "c:storage_blocks/steel"
            }
        },
        "result": {
            "id": "industrialforegoing:ore_laser_base"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "       ",
            "       ",
            " ABCBA ",
            " BCDCB ",
            " BADAB ",
            " ECFCE ",
            "       "
        ],
        "tier": 3,
        "key": {
            "A": {
                "tag": "c:iron_bars"
            },
            "B": {
                "tag": "c:plastics"
            },
            "C": {
                "tag": "c:gears/netherite"
            },
            "D": {
                "item": "mekanism:ultimate_fluid_tank"
            },
            "E": {
                "tag": "c:storage_blocks/steel"
            },
            "F": {
                "item": "industrialforegoing:machine_frame_advanced"
            }
        },
        "result": {
            "id": "industrialforegoing:fluid_laser_base"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "     ",
            " A A ",
            "BCDCB",
            "EFGFE",
            "HHHHH"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "actuallyadditions:quintuple_battery"
            },
            "B": {
                "item": "appflux:induction_card"
            },
            "C": {
                "item": "immersiveengineering:tesla_coil"
            },
            "D": {
                "item": "powah:battery_nitro"
            },
            "E": {
                "tag": "c:plastics"
            },
            "F": {
                "item": "industrialforegoing:machine_frame_supreme"
            },
            "G": {
                "item": "evolvedmekanism:quantum_induction_cell"
            },
            "H": {
                "tag": "c:ingots/draconium_awakened"
            }
        },
        "result": {
            "id": "industrialforegoing:infinity_charger"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "       ",
            " AAAAA ",
            " BCCCB ",
            " BDEDB ",
            " BEFEB ",
            "  BFB  ",
            "       "
        ],
        "tier": 3,
        "key": {
            "A": {
                "item": "minecraft:soul_sand"
            },
            "B": {
                "tag": "c:plastics"
            },
            "C": {
                "item": "rftoolsutility:regenerationplus_module"
            },
            "D": {
                "item": "ae2:speed_card"
            },
            "E": {
                "items": "minecraft:splash_potion",
                "components": {
                    "minecraft:potion_contents": {
                        "potion": "minecraft:strong_regeneration"
                    }
                },
                "type": "neoforge:components"
            },
            "F": {
                "item": "industrialforegoing:machine_frame_supreme"
            }
        },
        "result": {
            "id": "industrialforegoing:stasis_chamber"
        }
    });
});