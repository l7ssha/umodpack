ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 2,
        "pattern": [
            "     ",
            " AAA ",
            "BACAD",
            " AAA ",
            "     "
        ],
        "key": {
            "A": {
                "item": "mysticalagradditions:insanium_block"
            },
            "B": {
                "item": "mysticalagriculture:master_infusion_crystal"
            },
            "C": {
                "item": "mysticalagradditions:insanium_ingot_block"
            },
            "D": {
                "item": "avaritia:infinity_catalyst"
            }
        },
        "result": {
            "id": "mysticalagradditions:creative_essence"
        }
    });

    event.replaceInput(
        { id: 'mysticalagriculture:prosperity_seed_base' },
        'mysticalagriculture:prosperity_shard',
        'mysticalagriculture:prosperity_block'
    );

    event.replaceInput(
        { id: 'mysticalagriculture:soulium_seed_base' },
        'mysticalagriculture:soulium_dust',
        'mysticalagriculture:soulium_block'
    );

    event.replaceInput(
        { id: 'mysticalagradditions:nether_star_crux' },
        'mysticalagradditions:insanium_essence',
        'mysticalagradditions:insanium_block'
    );

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 100000,
        "input": {
            "item": "advancednetherite:netherite_diamond_block"
        },
        "ingredients": [
            {
                "item": "extendedcrafting:nether_star_block"
            },
            {
                "item": "mysticalagradditions:insanium_gemstone_block"
            },
            {
                "item": "mysticalagradditions:withering_soul"
            },
            {
                "item": "mysticalagradditions:withering_soul"
            },
            {
                "item": "mysticalagradditions:insanium_gemstone_block"
            },
            {
                "item": "mysticalagradditions:insanium_gemstone_block"
            },
            {
                "item": "mysticalagradditions:insanium_gemstone_block"
            }
        ],
        "result": {
            "id": "mysticalagradditions:nether_star_crux"
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 100000,
        "input": {
            "item": "advancednetherite:netherite_diamond_block"
        },
        "ingredients": [
            {
                "item": "mysticalagradditions:dragon_scale"
            },
            {
                "item": "mysticalagradditions:dragon_scale"
            },
            {
                "item": "mysticalagradditions:dragon_scale"
            },
            {
                "item": "mysticalagradditions:dragon_scale"
            },
            {
                "item": "mysticalagradditions:dragon_scale"
            },
            {
                "item": "mysticalagradditions:dragon_scale"
            },
            {
                "item": "mysticalagradditions:insanium_gemstone_block"
            },
            {
                "item": "mysticalagradditions:dragon_scale"
            },
            {
                "item": "mysticalagradditions:dragon_scale"
            },
            {
                "item": "mysticalagradditions:insanium_gemstone_block"
            },
            {
                "item": "mysticalagradditions:insanium_gemstone_block"
            },
            {
                "item": "mysticalagradditions:insanium_gemstone_block"
            }
        ],
        "result": {
            "id": "mysticalagradditions:dragon_egg_crux"
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 100000,
        "input": {
            "item": "advancednetherite:netherite_diamond_block"
        },
        "ingredients": [
            {
                "item": "draconicevolution:awakened_draconium_block"
            },
            {
                "item": "draconicevolution:awakened_draconium_block"
            },
            {
                "item": "draconicevolution:awakened_draconium_block"
            },
            {
                "item": "draconicevolution:awakened_draconium_block"
            },
            {
                "item": "draconicevolution:awakened_draconium_block"
            },
            {
                "item": "draconicevolution:awakened_draconium_block"
            },
            {
                "item": "mysticalagradditions:insanium_gemstone_block"
            },
            {
                "item": "draconicevolution:dragon_heart"
            },
            {
                "item": "draconicevolution:dragon_heart"
            },
            {
                "item": "mysticalagradditions:insanium_gemstone_block"
            },
            {
                "item": "mysticalagradditions:insanium_gemstone_block"
            },
            {
                "item": "mysticalagradditions:insanium_gemstone_block"
            }
        ],
        "result": {
            "id": "mysticalagradditions:awakened_draconium_crux"
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 100000,
        "input": {
            "item": "advancednetherite:netherite_diamond_block"
        },
        "ingredients": [
            {
                "item": "mysticalagradditions:creative_essence"
            },
            {
                "item": "mysticalagradditions:creative_essence"
            },
            {
                "item": "mysticalagradditions:creative_essence"
            },
            {
                "item": "mysticalagradditions:creative_essence"
            },
            {
                "item": "avaritia:neutron"
            },
            {
                "item": "avaritia:neutron"
            },
            {
                "item": "avaritia:neutron"
            },
            {
                "item": "avaritia:neutron"
            }
        ],
        "result": {
            "id": "mysticalagradditions:neutronium_crux"
        }
    });

    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 100000,
        "input": {
            "item": "advancednetherite:netherite_diamond_block"
        },
        "ingredients": [
            {
                "item": "powah:capacitor_nitro"
            },
            {
                "item": "powah:capacitor_nitro"
            },
            {
                "item": "powah:capacitor_nitro"
            },
            {
                "item": "powah:capacitor_nitro"
            },
            {
                "item": "mysticalagradditions:insanium_gemstone_block"
            },
            {
                "item": "powah:nitro_crystal_block"
            },
            {
                "item": "powah:nitro_crystal_block"
            },
            {
                "item": "mysticalagradditions:insanium_gemstone_block"
            },
            {
                "item": "mysticalagradditions:insanium_gemstone_block"
            },
            {
                "item": "mysticalagradditions:insanium_gemstone_block"
            }
        ],
        "result": {
            "id": "mysticalagradditions:nitro_crystal_crux"
        }
    });
});