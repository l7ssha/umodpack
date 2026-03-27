ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 10000,
        "power_rate": 600,
        "pattern": [
            " AB",
            "ACA",
            "BA "
        ],
        "key": {
            "A": {
                "item": "minecraft:iron_ingot"
            },
            "B": {
                "item": "powah:dielectric_paste"
            },
            "C": {
                "item": "minecraft:redstone_block"
            }
        },
        "result": {
            "id": "powah:capacitor_basic"
        }
    });

    event.custom({
        "type": "extendedcrafting:shapeless_flux_crafter",
        "power_required": 10000,
        "power_rate": 600,
        "ingredients": [
            {
                "item": "powah:capacitor_basic"
            }
        ],
        "result": {
            "id": "powah:capacitor_basic_tiny"
        }
    });

    event.custom({
        "type": "extendedcrafting:shapeless_flux_crafter",
        "power_required": 10000,
        "power_rate": 600,
        "ingredients": [
            {
                "item": "powah:capacitor_basic"
            },
            {
                "item": "powah:capacitor_basic"
            }
        ],
        "result": {
            "id": "powah:capacitor_basic_large"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 50000,
        "power_rate": 1600,
        "pattern": [
            "ABA",
            "BCB",
            "ABA"
        ],
        "key": {
            "A": {
                "item": "powah:dielectric_paste"
            },
            "B": {
                "item": "powah:steel_energized"
            },
            "C": {
                "item": "powah:capacitor_basic_large"
            }
        },
        "result": {
            "id": "powah:capacitor_hardened"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 50000,
        "power_rate": 1600,
        "pattern": [
            "ABA",
            "BCB",
            "ABA"
        ],
        "key": {
            "A": {
                "item": "powah:dielectric_paste"
            },
            "B": {
                "item": "powah:crystal_blazing"
            },
            "C": {
                "item": "powah:capacitor_hardened"
            }
        },
        "result": {
            "id": "powah:capacitor_blazing"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 50000,
        "power_rate": 1600,
        "pattern": [
            "ABA",
            "BCB",
            "ABA"
        ],
        "key": {
            "A": {
                "item": "powah:dielectric_paste"
            },
            "B": {
                "item": "powah:crystal_niotic"
            },
            "C": {
                "item": "powah:capacitor_blazing"
            }
        },
        "result": {
            "id": "powah:capacitor_niotic"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 100000,
        "power_rate": 1600,
        "pattern": [
            "ABA",
            "BCB",
            "ABA"
        ],
        "key": {
            "A": {
                "item": "powah:dielectric_paste"
            },
            "B": {
                "item": "powah:crystal_spirited"
            },
            "C": {
                "item": "powah:capacitor_niotic"
            }
        },
        "result": {
            "id": "powah:capacitor_spirited"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 200000,
        "power_rate": 3200,
        "pattern": [
            "ABA",
            "BCB",
            "ABA"
        ],
        "key": {
            "A": {
                "item": "powah:dielectric_paste"
            },
            "B": {
                "item": "powah:crystal_nitro"
            },
            "C": {
                "item": "powah:capacitor_spirited"
            }
        },
        "result": {
            "id": "powah:capacitor_nitro"
        }
    });

    event.replaceInput(
        { output: 'powah:dielectric_paste' },
        '#c:coal',
        '#c:coal_coke'
    );
});