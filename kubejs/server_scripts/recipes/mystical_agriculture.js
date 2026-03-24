ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAB",
            "AAAAA",
            "ABDBA",
            "AAAAA",
            "BAAAB"
        ],
        "tier": 2,
        "key": {
            "A": {
                "item": "kubejs:divinium_essence"
            },
            "B": {
                "item": "mysticalagriculture:master_infusion_crystal"
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
                "item": "kubejs:divinium_essence"
            },
            {
                "item": "kubejs:divinium_essence"
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
                "item": "kubejs:divinium_essence"
            },
            {
                "item": "kubejs:divinium_essence"
            },
            {
                "item": "kubejs:divinium_essence"
            },
            {
                "item": "kubejs:divinium_essence"
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