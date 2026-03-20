ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
            "AAA",
            "ABA",
            "AAA"
        ],
        "key": {
            "A": {
                "tag": "c:plates/steel"
            },
            "B": {
                "item": "occultism:stable_wormhole"
            }
        },
        "result": {
            "id": "dimstorage:dim_core"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
            "ABA",
            "B B",
            "ABA"
        ],
        "key": {
            "A": {
                "tag": "c:plates/steel"
            },
            "B": {
                "item": "actuallyadditions:empowered_restonia_crystal"
            }
        },
        "result": {
            "count": 2,
            "id": "dimstorage:dim_wall"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
            "AAA",
            "ABA",
            "AAA"
        ],
        "key": {
            "A": {
                "item": "dimstorage:dim_wall"
            },
            "B": {
                "item": "dimstorage:dim_core"
            }
        },
        "result": {
            "id": "dimstorage:solid_dim_core"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 100000,
        "power_rate": 2000,
        "pattern": [
            "AAA",
            "ABA",
            "AAA"
        ],
        "key": {
            "A": {
                "item": "dimstorage:dim_wall"
            },
            "B": {
                "item": "dimstorage:solid_dim_core"
            }
        },
        "result": {
            "id": "dimstorage:dimensional_chest"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 100000,
        "power_rate": 2000,
        "pattern": [
            "ABA",
            "ACA",
            "ADA"
        ],
        "key": {
            "A": {
                "item": "dimstorage:dim_wall"
            },
            "B": {
                "item": "alltheores:steel_plate"
            },
            "C": {
                "item": "mekanism:basic_fluid_tank"
            },
            "D": {
                "item": "dimstorage:solid_dim_core"
            }
        },
        "result": {
            "id": "dimstorage:dimensional_tank"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 300000,
        "power_rate": 2000,
        "pattern": [
            "AAA",
            "ABA",
            "CDC"
        ],
        "key": {
            "A": {
                "tag": "c:plates/steel"
            },
            "B": {
                "item": "dimstorage:dimensional_chest"
            },
            "C": {
                "item": "fluxnetworks:flux_block"
            },
            "D": {
                "item": "dimstorage:solid_dim_core"
            }
        },
        "result": {
            "id": "dimstorage:dimensional_tablet"
        }
    });
});