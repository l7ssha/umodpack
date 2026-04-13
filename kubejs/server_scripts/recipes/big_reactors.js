ServerEvents.recipes(event => {
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABABA",
      "BCCCB",
      "ACDCA",
      "BCCCB",
      "ABABA"
    ],
    "tier": 2,
    "key": {
      "A": {
        "tag": "c:plates/lead"
      },
      "B": {
        "tag": "c:ingots/graphite"
      },
      "C": {
        "tag": "c:plates/steel"
      },
      "D": {
        "item": "actuallyadditions:empowered_enori_crystal_block"
      }
    },
    "result": {
      "count": 3,
      "id": "bigreactors:reinforced_reactorcasing"
    }
  });

  event.shaped({
    "pattern": [
      "ABA",
      "BBB",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "bigreactors:reinforced_reactorcasing"
      },
      "B": {
        "item": "mekanism:structural_glass"
      }
    },
    "result": {
      "count": 4,
      "id": "bigreactors:reinforced_reactorglass"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABBBA",
      "ACDCA",
      "AEDEA",
      "ACDCA",
      "DAAAD"
    ],
    "tier": 2,
    "key": {
      "A": {
        "tag": "c:plates/lead"
      },
      "B": {
        "item": "mekanism:structural_glass"
      },
      "C": {
        "item": "mekanism:yellow_cake_uranium"
      },
      "D": {
        "tag": "c:plates/hop_graphite"
      },
      "E": {
        "item": "evolvedmekanism:enriched_uranium"
      }
    },
    "result": {
      "id": "bigreactors:reinforced_reactorfuelrod"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABBBA",
      "CDDDC",
      "ADDDA",
      "CEEEC",
      "ACFCA"
    ],
    "key": {
      "A": {
        "tag": "c:plates/hop_graphite"
      },
      "B": {
        "tag": "c:plates/allthemodium"
      },
      "C": {
        "item": "bigreactors:reinforced_reactorcasing"
      },
      "D": {
        "tag": "c:rods/lead"
      },
      "E": {
        "tag": "c:pistons"
      },
      "F": {
        "tag": "c:plates/lead"
      }
    },
    "result": {
      "id": "bigreactors:reinforced_reactorcontrolrod"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABCBA",
      "ADEDA",
      "AFGFA",
      "ADEDA",
      "ABHBA"
    ],
    "tier": 2,
    "key": {
      "A": {
        "tag": "c:plates/lead"
      },
      "B": {
        "tag": "c:plates/steel"
      },
      "C": {
        "item": "functionalstorage:pusher_upgrade"
      },
      "D": {
        "item": "actuallyadditions:empowered_enori_crystal"
      },
      "E": {
        "tag": "c:pistons"
      },
      "F": {
        "item": "minecraft:hopper"
      },
      "G": {
        "tag": "functionalstorage:drawer"
      },
      "H": {
        "item": "functionalstorage:puller_upgrade"
      }
    },
    "result": {
      "id": "bigreactors:reinforced_reactorsolidaccessport"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABCBA",
      "ADEDA",
      "AFGFA",
      "ADEDA",
      "ABHBA"
    ],
    "tier": 2,
    "key": {
      "A": {
        "tag": "c:plates/lead"
      },
      "B": {
        "tag": "c:plates/steel"
      },
      "C": {
        "item": "functionalstorage:pusher_upgrade"
      },
      "D": {
        "item": "actuallyadditions:empowered_enori_crystal"
      },
      "E": {
        "tag": "c:pistons"
      },
      "F": {
        "item": "utilitarian:fluid_hopper"
      },
      "G": {
        "tag": "functionalstorage:fluid_1"
      },
      "H": {
        "item": "functionalstorage:puller_upgrade"
      }
    },
    "result": {
      "id": "bigreactors:reinforced_reactorfluidaccessport"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABBBA",
      "CDEDC",
      "CDFDC",
      "CGHGC",
      "ACCCA"
    ],
    "tier": 2,
    "key": {
      "A": {
        "item": "bigreactors:reinforced_reactorcasing"
      },
      "B": {
        "tag": "c:plates/allthemodium"
      },
      "C": {
        "tag": "c:plates/lead"
      },
      "D": {
        "tag": "c:circuits/absolute"
      },
      "E": {
        "item": "immersiveengineering:redstone_switchboard"
      },
      "F": {
        "item": "ae2:terminal"
      },
      "G": {
        "item": "actuallyadditions:empowered_restonia_crystal"
      },
      "H": {
        "item": "deepresonance:radiation_monitor"
      }
    },
    "result": {
      "id": "bigreactors:reinforced_reactorcontroller"
    }
  });

  event.shaped({
    "pattern": [
      "ABA",
      "BCB",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "bigreactors:reinforced_turbinecasing"
      },
      "B": {
        "tag": "c:ingots/cyanite"
      },
      "C": {
        "item": "bigreactors:reinforced_reactorcontroller"
      }
    },
    "result": {
      "id": "bigreactors:reinforced_turbinecontroller"
    }
  });

  event.shaped({
    "pattern": [
      "AAA",
      "BCB",
      "ADA"
    ],
    "key": {
      "A": {
        "item": "powah:energy_cable_niotic"
      },
      "B": {
        "item": "mekanism:energy_tablet"
      },
      "C": {
        "item": "bigreactors:reinforced_reactorpowertapfe_passive"
      },
      "D": {
        "item": "bigreactors:reinforced_reactorcasing"
      }
    },
    "result": {
      "id": "bigreactors:reinforced_reactorpowertapfe_active"
    }
  });

  event.shaped({
    "pattern": [
      "AAA",
      "BCB",
      "ADA"
    ],
    "key": {
      "A": {
        "item": "powah:energy_cable_niotic"
      },
      "B": {
        "item": "mekanism:energy_tablet"
      },
      "C": {
        "item": "bigreactors:reinforced_turbinepowertapfe_passive"
      },
      "D": {
        "item": "bigreactors:reinforced_turbinecasing"
      }
    },
    "result": {
      "id": "bigreactors:reinforced_turbinepowertapfe_active"
    }
  });
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABABA",
      "BCDCB",
      "AEFEA",
      "BCDCB",
      "ABABA"
    ],
    "key": {
      "A": {
        "item": "bigreactors:graphite_ingot"
      },
      "B": {
        "item": "immersiveengineering:ingot_hop_graphite"
      },
      "C": {
        "item": "alltheores:steel_plate"
      },
      "D": {
        "item": "bigreactors:blutonium_ingot"
      },
      "E": {
        "item": "bigreactors:cyanite_ingot"
      },
      "F": {
        "item": "actuallyadditions:empowered_enori_crystal_block"
      }
    },
    "result": {
      "id": "bigreactors:reinforced_turbinecasing"
    }
  })
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABA",
      "BBB",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "bigreactors:reinforced_turbinecasing"
      },
      "B": {
        "item": "mekanism:structural_glass"
      }
    },
    "result": {
      "id": "bigreactors:reinforced_turbineglass"
    }
  })
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABCBA",
      "ABDBA",
      "ABEBA",
      "ABDBA",
      "ABCBA"
    ],
    "key": {
      "A": {
        "item": "alltheores:steel_plate"
      },
      "B": {
        "item": "minecraft:iron_ingot"
      },
      "C": {
        "item": "actuallyadditions:empowered_enori_crystal_block"
      },
      "D": {
        "item": "allthemodium:allthemodium_gear"
      },
      "E": {
        "item": "actuallyadditions:empowered_restonia_crystal_block"
      }
    },
    "result": {
      "id": "bigreactors:reinforced_turbinerotorbearing"
    }
  })
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABAA",
      "ABCBA",
      "DEEED",
      "ABCBA",
      "AABAA"
    ],
    "key": {
      "A": {
        "item": "bigreactors:reinforced_turbinecasing"
      },
      "B": {
        "item": "alltheores:steel_plate"
      },
      "C": {
        "item": "mekanism_extras:absolute_control_circuit"
      },
      "D": {
        "item": "mekanism_extras:absolute_mechanical_pipe"
      },
      "E": {
        "item": "pneumaticcraft:reinforced_pressure_tube"
      }
    },
    "result": {
      "id": "bigreactors:reinforced_turbinefluidport_forge_active"
    }
  })
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "     ",
      "AAAAA",
      "ABBBA",
      "AAAAA",
      "     "
    ],
    "key": {
      "A": {
        "item": "alltheores:steel_plate"
      },
      "B": {
        "item": "bigreactors:blutonium_ingot"
      }
    },
    "result": {
      "id": "bigreactors:reinforced_turbinerotorblade"
    }
  })
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      " AAA ",
      "AABAA",
      " ABA ",
      "AABAA",
      " AAA "
    ],
    "key": {
      "A": {
        "item": "alltheores:steel_plate"
      },
      "B": {
        "item": "bigreactors:blutonium_ingot"
      }
    },
    "result": {
      "id": "bigreactors:reinforced_turbinerotorshaft"
    }
  })
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABAA",
      "ACDEA",
      "AFGFA",
      "AHDHA",
      "AABAA"
    ],
    "key": {
      "A": {
        "item": "alltheores:steel_plate"
      },
      "B": {
        "item": "mekanism_extras:absolute_universal_cable"
      },
      "C": {
        "item": "powah:energy_cell_spirited"
      },
      "D": {
        "item": "mekanism:energy_tablet"
      },
      "E": {
        "item": "mekanism_extras:absolute_energy_cube"
      },
      "F": {
        "item": "re_endergy:capacitor_crystalline"
      },
      "G": {
        "item": "bigreactors:reinforced_turbinecasing"
      },
      "H": {
        "item": "mekanism_extras:absolute_control_circuit"
      }
    },
    "result": {
      "id": "bigreactors:reinforced_turbinepowertapfe_active"
    }
  })
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABCBA",
      "DEFED",
      "DEGED",
      "DHIHD",
      "ADDDA"
    ],
    "key": {
      "A": {
        "item": "bigreactors:reinforced_turbinecasing"
      },
      "B": {
        "item": "allthemodium:allthemodium_plate"
      },
      "C": {
        "item": "ae2:fluix_smart_cable"
      },
      "D": {
        "item": "alltheores:steel_plate"
      },
      "E": {
        "item": "mekanism_extras:absolute_control_circuit"
      },
      "F": {
        "item": "ae2:terminal"
      },
      "G": {
        "item": "allthemodium:allthemodium_gear"
      },
      "H": {
        "item": "actuallyadditions:empowered_restonia_crystal_block"
      },
      "I": {
        "item": "immersiveengineering:redstone_switchboard"
      }
    },
    "result": {
      "id": "bigreactors:reinforced_turbinecontroller"
    }
  })
});