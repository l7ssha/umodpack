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
            "ABA",
            "BCB",
            "ABA"
        ],
        "tier": 1,
        "key": {
            "A": {
                "item": "immersiveengineering:component_steel"
            },
            "B": {
                "tag": "c:plates/steel"
            },
            "C": {
                "item": "rftoolsbase:infused_diamond"
            }
        },
        "result": {
            "id": "mekanism:steel_casing"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " A A ",
            "ABBBA",
            " CDC ",
            "ABBBA",
            " A A "
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:plates/osmium"
            },
            "B": {
                "item": "immersiveengineering:component_steel"
            },
            "C": {
                "item": "ironfurnaces:iron_furnace"
            },
            "D": {
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
            "ABBBA",
            "BCDCB",
            "CEFEC",
            "BCDCB",
            "ABBBA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:rods/steel"
            },
            "B": {
                "tag": "c:ingots/compressed_iron"
            },
            "C": {
                "tag": "c:plates/osmium"
            },
            "D": {
                "item": "actuallyadditions:basic_coil"
            },
            "E": {
                "tag": "c:buckets/lava"
            },
            "F": {
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
            "AABAA",
            "ACDCA",
            "BEFEB",
            "ACDCA",
            "AABAA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:plates/osmium"
            },
            "B": {
                "item": "actuallyadditions:restonia_crystal"
            },
            "C": {
                "item": "mekanismgenerators:turbine_blade"
            },
            "D": {
                "tag": "c:alloys/ultimate"
            },
            "E": {
                "tag": "c:circuits/ultimate"
            },
            "F": {
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
            "AAA",
            "BCD",
            "AAA"
        ],
        "tier": 1,
        "key": {
            "A": {
                "tag": "c:plates/osmium"
            },
            "B": {
                "item": "ironfurnaces:silver_furnace"
            },
            "C": {
                "item": "mekanism:steel_casing"
            },
            "D": {
                "item": "ironfurnaces:iron_furnace"
            }
        },
        "result": {
            "id": "mekanism:metallurgic_infuser"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " A A ",
            "ABCBA",
            " CDC ",
            "AEEEA",
            "AABAA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:plates/osmium"
            },
            "B": {
                "tag": "c:alloys/absolute"
            },
            "C": {
                "item": "mekanism:elite_chemical_tank"
            },
            "D": {
                "item": "mekanism:enrichment_chamber"
            },
            "E": {
                "tag": "c:ingots/draconium"
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
        "tier": 2,
        "key": {
            "A": {
                "item": "immersiveengineering:component_steel"
            },
            "B": {
                "tag": "c:rods/steel"
            },
            "C": {
                "tag": "c:circuits/overclocked"
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
        "tier": 2,
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
            " AAAAA ",
            "A  B  A",
            "A CDC A",
            "ABE EBA",
            "A CDC A",
            "AA B AA",
            "AAAAAAA"
        ],
        "tier": 3,
        "key": {
            "A": {
                "tag": "c:ingots/compressed_iron"
            },
            "B": {
                "item": "minecraft:sticky_piston"
            },
            "C": {
                "tag": "c:circuits/absolute"
            },
            "D": {
                "item": "evolvedmekanism:overclocked_chemical_tank"
            },
            "E": {
                "item": "mekanism:purification_chamber"
            }
        },
        "result": {
            "id": "mekanism:chemical_injection_chamber"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABBBA",
            "A   A",
            "ACDCA",
            "ACECA",
            "ABBBA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "minecraft:smooth_stone"
            },
            "B": {
                "item": "minecraft:smooth_stone_slab"
            },
            "C": {
                "tag": "c:circuits/basic"
            },
            "D": {
                "tag": "c:shulker_boxes"
            },
            "E": {
                "item": "ae2:cell_component_4k"
            }
        },
        "result": {
            "id": "mekanism:basic_bin"
        }
    });

    event.replaceInput(
        { id: 'mekanism:personal_chest' },
        '#c:ingots/steel',
        { tag: 'c:plates/steel' },
    );

    event.replaceInput(
        { id: 'mekanism:personal_chest' },
        '#c:chests',
        'pneumaticcraft:reinforced_chest',
    );

    event.findRecipes([{ id: /evolvedmekanism:control_circuit\/(?!multiversal).*/ }, { id: /mekanism_extras:control_circuit\/(?!cosmic|infinite).*/, type: 'minecraft:crafting_shaped' }]).forEach(recipe => {
        event.custom({
            "type": "extendedcrafting:shaped_flux_crafter",
            "power_required": 1000000,
            "power_rate": 10000,
            "pattern": recipe.originalJson.get('pattern'),
            "key": recipe.originalJson.get('key'),
            "result": recipe.originalJson.get('result'),
        });
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 1000000,
        "power_rate": 10000,
        "pattern": [
            "A A",
            "BCB",
            "A A"
        ],
        "key": {
            "A": {
                "item": "mekanismelements:ingot_beryllium"
            },
            "B": {
                "item": "mekanism_extras:alloy_shining"
            },
            "C": {
                "item": "mekanism_extras:supreme_control_circuit"
            }
        },
        "result": {
            "id": "mekanism_extras:cosmic_control_circuit"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 5000000,
        "power_rate": 10000,
        "pattern": [
            "ABA",
            "BCB",
            "ABA"
        ],
        "key": {
            "A": {
                "item": "mekanismelements:dust_yttrium"
            },
            "B": {
                "item": "mekanism_extras:alloy_spectrum"
            },
            "C": {
                "item": "mekanism_extras:cosmic_control_circuit"
            }
        },
        "result": {
            "id": "mekanism_extras:infinite_control_circuit"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 10000000,
        "power_rate": 10000,
        "pattern": [
            "ABA",
            "BCB",
            "ABA"
        ],
        "key": {
            "A": {
                "item": "mekanismelements:ingot_refined_californium"
            },
            "B": {
                "item": "evolvedmekanism:alloy_exoversal"
            },
            "C": {
                "item": "evolvedmekanism:dense_control_circuit"
            }
        },
        "result": {
            "id": "evolvedmekanism:multiversal_control_circuit"
        }
    });

    event.findRecipes({ id: /mekanism:control_circuit\/(advanced|elite)/ }).forEach(recipe => {
        let energyRequired = 10000;

        const recipeId = recipe.getId();
        if (recipeId.includes('advanced')) {
            energyRequired *= 2;
        } else if (recipeId.includes('elite')) {
            energyRequired *= 6;
        }

        event.custom({
            "type": "extendedcrafting:shaped_flux_crafter",
            "power_required": energyRequired,
            "power_rate": energyRequired / 1000,
            "pattern": recipe.originalJson.get('pattern'),
            "key": recipe.originalJson.get('key'),
            "result": recipe.originalJson.get('result'),
        });
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 100000,
        "power_rate": 10000,
        "pattern": [
            'PTP',
            'ACA',
            'PTP',
        ],
        "key": {
            "A": {
                "tag": "c:alloys/ultimate"
            },
            "C": {
                "tag": "c:circuits/elite"
            },
            "P": {
                "item": "pneumaticcraft:capacitor"
            },
            "T": {
                "item": "pneumaticcraft:transistor"
            }
        },
        "result": {
            "id": "mekanism:ultimate_control_circuit"
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 500000,
        "input": {
            "item": "minecraft:elytra"
        },
        "ingredients": [
            {
                "item": "mekanism:hdpe_sheet"
            },
            {
                "tag": "c:alloys/absolute"
            },
            {
                "item": "mekanism:hdpe_rod"
            },
            {
                "tag": "c:alloys/absolute"
            },
            {
                "item": "mekanism:hdpe_rod"
            },
            {
                "tag": "c:alloys/absolute"
            },
            {
                "item": "mekanism:hdpe_rod"
            },
            {
                "item": "mekanism:hdpe_sheet"
            },
            {
                "item": "mekanism:hdpe_sheet"
            },
            {
                "item": "mekanism:hdpe_sheet"
            },
            {
                "item": "mekanism:hdpe_sheet"
            }
        ],
        "result": {
            "id": "mekanism:hdpe_elytra"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "       ",
            " AABCB ",
            "AABDDC ",
            "  CEC  ",
            "   F   ",
            "   E   ",
            "   E   "
        ],
        "tier": 3,
        "key": {
            "A": {
                "tag": "c:ingots/refined_obsidian"
            },
            "B": {
                "tag": "mekanism:alloys/infused"
            },
            "C": {
                "tag": "c:ingots/redstone_alloy"
            },
            "D": {
                "item": "mekanism:energy_tablet"
            },
            "E": {
                "tag": "c:rods/diamond"
            },
            "F": {
                "tag": "c:rods/platinum"
            }
        },
        "result": {
            "id": "mekanism:atomic_disassembler"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "  AAA  ",
            " AB BA ",
            "CBDEDBC",
            "CBFEFBC",
            "CGHDHGC",
            "ACGEGCA",
            " AAAAA "
        ],
        "tier": 3,
        "key": {
            "A": {
                "tag": "c:plates/osmium"
            },
            "B": {
                "tag": "c:ingots/platinum"
            },
            "C": {
                "tag": "c:ingots/draconium"
            },
            "D": {
                "item": "mekanism:ultimate_chemical_tank"
            },
            "E": {
                "item": "mekanism:ultimate_fluid_tank"
            },
            "F": {
                "tag": "c:circuits/ultimate"
            },
            "G": {
                "tag": "c:ingots/refined_obsidian"
            },
            "H": {
                "item": "mekanism:steel_casing"
            }
        },
        "result": {
            "id": "mekanism:chemical_dissolution_chamber"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " AAA ",
            "A B A",
            "CB BC",
            "CADAC",
            " CEC "
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:plates/osmium"
            },
            "B": {
                "item": "minecraft:piston"
            },
            "C": {
                "tag": "c:ingots/platinum"
            },
            "D": {
                "item": "minecraft:anvil"
            },
            "E": {
                "item": "mekanism:steel_casing"
            }
        },
        "result": {
            "id": "mekanism:osmium_compressor"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "       ",
            " ABCBA ",
            "ADECEDA",
            "AFGCGFA",
            "DAEHEAD",
            "IJAAAJI",
            " I B I "
        ],
        "tier": 3,
        "key": {
            "A": {
                "tag": "c:ingots/platinum"
            },
            "B": {
                "item": "actuallyadditions:restonia_crystal"
            },
            "C": {
                "tag": "c:rods/steel"
            },
            "D": {
                "tag": "c:gears/diamond"
            },
            "E": {
                "item": "mekanism:ultimate_fluid_tank"
            },
            "F": {
                "tag": "c:circuits/ultimate"
            },
            "G": {
                "item": "mekanism:ultimate_chemical_tank"
            },
            "H": {
                "item": "mekanism:steel_casing"
            },
            "I": {
                "tag": "c:plates/osmium"
            },
            "J": {
                "tag": "c:alloys/ultimate"
            }
        },
        "result": {
            "id": "mekanism:chemical_washer"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " AAA ",
            "BCDCB",
            "BD DB",
            "BCECB",
            " B B "
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:ingots/compressed_iron"
            },
            "B": {
                "tag": "c:plates/osmium"
            },
            "C": {
                "tag": "c:circuits/elite"
            },
            "D": {
                "item": "minecraft:piston"
            },
            "E": {
                "item": "mekanism:steel_casing"
            }
        },
        "result": {
            "id": "mekmm:cnc_rolling_mill"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "       ",
            "AAB BAA",
            "CBDEDBC",
            "CFEGEFC",
            "CFGHGFC",
            "ACF FCA",
            "A CCC A"
        ],
        "tier": 3,
        "key": {
            "A": {
                "tag": "c:rods/steel"
            },
            "B": {
                "tag": "c:ingots/draconium"
            },
            "C": {
                "tag": "c:plates/osmium"
            },
            "D": {
                "tag": "c:gears/diamond"
            },
            "E": {
                "item": "mekanism:energized_smelter"
            },
            "F": {
                "tag": "c:ingots/refined_obsidian"
            },
            "G": {
                "item": "mekanism:steel_casing"
            },
            "H": {
                "item": "mekanism:combiner"
            }
        },
        "result": {
            "id": "evolvedmekanism:alloyer"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AABAA",
            "ACDCA",
            "EF FE",
            "ACDCA",
            "AABAA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:plates/osmium"
            },
            "B": {
                "tag": "c:ingots/compressed_iron"
            },
            "C": {
                "tag": "c:circuits/elite"
            },
            "D": {
                "item": "minecraft:anvil"
            },
            "E": {
                "tag": "c:allots/ultimate"
            },
            "F": {
                "item": "minecraft:piston"
            }
        },
        "result": {
            "id": "mekanism:combiner"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAA",
            "BCB",
            "D D"
        ],
        "tier": 1,
        "key": {
            "A": {
                "tag": "c:plates/osmium"
            },
            "B": {
                "item": "mekanism:basic_fluid_tank"
            },
            "C": {
                "item": "mekanism:steel_casing"
            },
            "D": {
                "item": "pipez:fluid_pipe"
            }
        },
        "result": {
            "id": "mekanism:electric_pump"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AABAA",
            "ACBCA",
            "DEFED",
            " DFD ",
            " DFD "
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "mekanism:ultimate_fluid_tank"
            },
            "B": {
                "item": "mekanismgenerators:turbine_blade"
            },
            "C": {
                "item": "xycraft_machines:hydro_pump"
            },
            "D": {
                "tag": "c:alloys/supreme"
            },
            "E": {
                "item": "immersiveengineering:fluid_pump"
            },
            "F": {
                "item": "mekanism:ultimate_mechanical_pipe"
            }
        },
        "result": {
            "id": "mekanism_extras:advanced_electric_pump"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "  A A  ",
            "  ABA  ",
            " CADAC ",
            " CADAC ",
            "CAEDEAC",
            "AEBCBEA",
            " AECEA "
        ],
        "tier": 3,
        "key": {
            "A": {
                "tag": "c:plates/lead"
            },
            "B": {
                "tag": "c:circuits/overclocked"
            },
            "C": {
                "item": "igleelib:blazum_ingot"
            },
            "D": {
                "item": "evolvedmekanism:overclocked_chemical_tank"
            },
            "E": {
                "tag": "c:ingots/draconium"
            }
        },
        "result": {
            "id": "mekanism:isotopic_centrifuge"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABBCDCBBA",
            "BEFGHGFEB",
            "BFIJKJIFB",
            "AFLJKJLFA",
            "AFMNONMFA",
            "EIPIPIPIE",
            "EQRQSQRQE",
            "TGPUPUPGT",
            "TVWVWVWVT"
        ],
        "key": {
            "A": {
                "item": "industrialforegoing:laser_drill"
            },
            "B": {
                "tag": "c:ingots/lavium"
            },
            "C": {
                "item": "immersiveengineering:sheetmetal_steel"
            },
            "D": {
                "item": "mekanism:ultimate_energy_cube"
            },
            "E": {
                "tag": "c:circuits/supreme"
            },
            "F": {
                "tag": "c:plates/allthemodium"
            },
            "G": {
                "item": "cataclysm:black_steel_ingot"
            },
            "H": {
                "item": "mekanism:steel_casing"
            },
            "I": {
                "item": "extendedcrafting:enhanced_ender_ingot"
            },
            "J": {
                "item": "industrialforegoing:ore_laser_base"
            },
            "K": {
                "item": "mekanism:logistical_sorter"
            },
            "L": {
                "item": "stevescarts:module_galgadorian_hull"
            },
            "M": {
                "item": "immersiveengineering:drill"
            },
            "N": {
                "item": "actuallyadditions:drill_core"
            },
            "O": {
                "item": "mekanism:ultimate_bin"
            },
            "P": {
                "item": "pneumaticcraft:drill_pipe"
            },
            "Q": {
                "item": "extendedcrafting:enhanced_redstone_ingot"
            },
            "R": {
                "item": "appliedsoul:ender_star"
            },
            "S": {
                "item": "actuallyadditions:vertical_digger"
            },
            "T": {
                "item": "draconicevolution:awakened_core"
            },
            "U": {
                "item": "mekanism:robit"
            },
            "V": {
                "item": "immersiveengineering:sample_drill"
            },
            "W": {
                "item": "stevescarts:module_galgadorian_drill"
            }
        },
        "result": {
            "id": "mekanism:digital_miner"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            " A A ",
            "ABCBA",
            "DEFED",
            "ADGDA",
            " A A "
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:plates/steel"
            },
            "B": {
                "item": "mekanism:basic_energy_cube"
            },
            "C": {
                "tag": "c:circuits/ultimate"
            },
            "D": {
                "item": "industrialforegoing:conveyor"
            },
            "E": {
                "tag": "c:circuits/overclocked"
            },
            "F": {
                "item": "mekanism:logistical_sorter"
            },
            "G": {
                "item": "evolvedmekanism:overclocked_personal_barrel"
            }
        },
        "result": {
            "id": "mekanism:robit"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 30000,
        "power_rate": 1000,
        "pattern": [
            "ABC",
            "DEB",
            "DDF"
        ],
        "key": {
            "A": {
                "item": "minecraft:piston"
            },
            "B": {
                "item": "ae2:logic_processor"
            },
            "C": {
                "item": "immersiveengineering:component_iron"
            },
            "D": {
                "tag": "c:plates/iron"
            },
            "E": {
                "tag": "c:circuits/advanced"
            },
            "F": {
                "item": "minecraft:sticky_piston"
            }
        },
        "result": {
            "id": "mekanism:logistical_sorter"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 50000,
        "power_rate": 200,
        "pattern": [
            "ABA",
            "BCB",
            "DED"
        ],
        "key": {
            "A": {
                "item": "pneumaticcraft:heat_sink"
            },
            "B": {
                "item": "mekanism:superheating_element"
            },
            "C": {
                "item": "immersiveengineering:furnace_heater"
            },
            "D": {
                "item": "pneumaticcraft:reinforced_stone"
            },
            "E": {
                "item": "mekanism:energy_tablet"
            }
        },
        "result": {
            "id": "mekanism:resistive_heater"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "       ",
            " AB BA ",
            "ACDEDCA",
            "ADE EDA",
            "CFGGGFC",
            "AHFFFHA",
            " AAAAA "
        ],
        "key": {
            "A": {
                "tag": "c:plates/osmium"
            },
            "B": {
                "tag": "c:circuits/ultimate"
            },
            "C": {
                "tag": "c:alloys/ultiamte"
            },
            "D": {
                "item": "chipped:saw"
            },
            "E": {
                "tag": "c:gears/osmium"
            },
            "F": {
                "item": "pneumaticcraft:reinforced_stone"
            },
            "G": {
                "item": "productivetrees:sawmill"
            },
            "H": {
                "item": "mekanism:energy_tablet"
            }
        },
        "result": {
            "id": "mekanism:precision_sawmill"
        }
    });

    event.replaceInput(
        { id: 'evolvedmekanism:fluid_tank/overclocked' },
        'mekanism:ultimate_fluid_tank',
        'pneumaticcraft:huge_tank',
    );

    event.replaceInput(
        { id: 'mekanism:fluid_tank/advanced' },
        'mekanism:basic_fluid_tank',
        'pneumaticcraft:medium_tank',
    );

    event.shaped({
        "pattern": [
            "ABA",
            "BCB",
            " B "
        ],
        "key": {
            "A": {
                "tag": "c:dusts/redstone"
            },
            "B": {
                "tag": "c:ingots/iron"
            },
            "C": {
                "item": "pneumaticcraft:small_tank"
            }
        },
        "result": {
            "id": "mekanism:basic_fluid_tank"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
            "ABC",
            "ADA",
            "CTA"
        ],
        "key": {
            "A": {
                "item": "minecraft:ender_eye"
            },
            "B": {
                "tag": "c:alloys/ultimate"
            },
            "C": {
                "tag": "c:ingots/gold"
            },
            "D": {
                "item": "occultism:stable_wormhole"
            },
            "T": {
                "item": "draconicevolution:advanced_dislocator"
            }
        },
        "result": {
            "id": "mekanism:teleportation_core"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAA AAA",
            "ABA ABA",
            "CDBEBDC",
            "CDF FDC",
            "GDDEDDG",
            "GBBDBBG",
            "GGGDGGG"
        ],
        "tier": 3,
        "key": {
            "A": {
                "tag": "c:ingots/draconium"
            },
            "B": {
                "tag": "c:circuits/absolute"
            },
            "C": {
                "item": "draconicevolution:draconium_core"
            },
            "D": {
                "item": "mekanism:dynamic_tank"
            },
            "E": {
                "item": "evolvedmekanism:overclocked_chemical_tank"
            },
            "F": {
                "item": "mekanism:enrichment_chamber"
            },
            "G": {
                "tag": "c:ingots/derium"
            }
        },
        "result": {
            "id": "mekanism:pressurized_reaction_chamber"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "ABBBA",
            "AB BA",
            "ABBBA",
            "AAAAA"
        ],
        "tier": 2,
        "key": {
            "A": {
                "tag": "c:plates/steel"
            },
            "B": {
                "item": "enderio:dark_steel_bars"
            }
        },
        "result": {
            "count": 4,
            "id": "mekanism:dynamic_tank"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAA   AAA",
            "ABBIIIBBA",
            "ABEAIAEBA",
            "ADEFGFEDA",
            "ADHGIGHDA",
            "ADHFGFHDA",
            "JKEEHEEKJ",
            "JKKAAAKKJ",
            "JJAAAAAJJ"
        ],
        "key": {
            "A": {
                "item": "mekanismgenerators:fusion_reactor_frame"
            },
            "B": {
                "tag": "c:ingots/lavium"
            },
            "D": {
                "tag": "c:gears/sculk"
            },
            "E": {
                "tag": "c:circuits/infinite"
            },
            "F": {
                "item": "ifeu:ultimate_machine_frame"
            },
            "G": {
                "item": "draconicevolution:awakened_core"
            },
            "H": {
                "tag": "c:storage_blocks/insanite"
            },
            "I": {
                "item": "kubejs:abbysal_alloy"
            },
            "J": {
                "item": "minecraft:reinforced_deepslate"
            },
            "K": {
                "item": "deeperdarker:reinforced_echo_shard"
            }
        },
        "result": {
            "id": "mekanism:antiprotonic_nucleosynthesizer"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AA   AA",
            "ABCBDBA",
            "AECCDEA",
            "AFCDDFA",
            "AFGHGFA",
            "AHFFFHA",
            "AAAAAAA"
        ],
        "key": {
            "A": {
                "item": "mekanism:hdpe_sheet"
            },
            "B": {
                "item": "mekanism:laser"
            },
            "C": {
                "item": "mekanism:pellet_polonium"
            },
            "D": {
                "item": "mekanism:pellet_plutonium"
            },
            "E": {
                "tag": "c:circuits/supreme_quantum"
            },
            "F": {
                "item": "mekanism:steel_casing"
            },
            "G": {
                "item": "ifeu:ultimate_machine_frame"
            },
            "H": {
                "item": "evolvedmekanism:overclocked_chemical_tank"
            }
        },
        "result": {
            "id": "mekanismelements:radiation_irradiator"
        }
    });
});