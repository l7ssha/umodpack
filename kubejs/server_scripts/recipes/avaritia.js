ServerEvents.recipes(event => {
  event.custom({
    type: "extendedcrafting:shaped_table",
    tier: 1,
    pattern: [
      " A ",
      "ABA",
      " A "
    ],
    key: {
      "A": {
        "item": "avaritia:neutron_ingot"
      },
      "B": {
        "item": "avaritia:neutron_nugget"
      }
    },
    result: {
      "id": "avaritia:neutron_gear"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 2,
    "pattern": [
      "AAAAA",
      "AAAAA",
      "AAAAA",
      "AAAAA",
      "AAAAA"
    ],
    "key": {
      "A": {
        "item": "mysticalagriculture:neutronium_essence"
      }
    },
    "result": {
      "id": "avaritia:neutron_pile"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "       AA",
      "      ABA",
      "     ABA ",
      " A  ABA  ",
      " AAABA   ",
      "  ABA    ",
      " CAAA    ",
      "CAC AA   ",
      "AC       "
    ],
    "tier": 4,
    "key": {
      "A": {
        "item": "avaritia:neutron_ingot"
      },
      "B": {
        "item": "minecraft:netherite_block"
      },
      "C": {
        "item": "avaritia:neutron_nugget"
      }
    },
    "result": {
      "id": "avaritia_expand:neutron_sword"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ",
      "         ",
      "         ",
      "ABBBBBBBA",
      "BCCCCCCCB",
      "ADEFFFEDA",
      "AFDDDDDFA",
      "FAAAAAAAF",
      "         "
    ],
    "tier": 4,
    "key": {
      "A": {
        "item": "mekanism:steel_casing"
      },
      "B": {
        "item": "ae2:quartz_vibrant_glass"
      },
      "C": {
        "item": "mekmm:large_solar_neutron_activator"
      },
      "D": {
        "item": "extendedcrafting:ender_catalyst"
      },
      "E": {
        "item": "minecraft:piston"
      },
      "F": {
        "item": "industrialforegoing:machine_frame_supreme"
      }
    },
    "result": {
      "id": "avaritia:neutron_collector"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "         ",
      "         ",
      "         ",
      "   ABA   ",
      "   BCB   ",
      "   ABA   ",
      "         ",
      "         ",
      "         "
    ],
    "tier": 4,
    "key": {
      "A": {
        "tag": "c:circuits/infinite_multiversal"
      },
      "B": {
        "tag": "justdirethings:paradox_deny"
      },
      "C": {
        "item": "extendedcrafting:ultimate_singularity"
      }
    },
    "result": {
      "id": "kubejs:unrefined_infinity"
    }
  });
});
