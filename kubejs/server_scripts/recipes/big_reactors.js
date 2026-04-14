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
    "tier": 2,
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
  });

  event.shaped({
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
      "count": 4,
      "id": "bigreactors:reinforced_turbineglass"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABCBA",
      "ABDBA",
      "ABEBA",
      "ABDBA",
      "ABCBA"
    ],
    "tier": 2,
    "key": {
      "A": {
        "tag": "c:plates/steel"
      },
      "B": {
        "tag": "c:ingots/iron"
      },
      "C": {
        "item": "actuallyadditions:empowered_enori_crystal_block"
      },
      "D": {
        "tag": "c:gears/allthemodium"
      },
      "E": {
        "item": "actuallyadditions:empowered_restonia_crystal_block"
      }
    },
    "result": {
      "id": "bigreactors:reinforced_turbinerotorbearing"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABAA",
      "ABCBA",
      "DEEED",
      "ABCBA",
      "AABAA"
    ],
    "tier": 2,
    "key": {
      "A": {
        "item": "bigreactors:reinforced_turbinecasing"
      },
      "B": {
        "tag": "c:plates/steel"
      },
      "C": {
        "tag": "c:circuits/absolute"
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
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABAA",
      "ABCBA",
      "DEEED",
      "ABCBA",
      "AABAA"
    ],
    "tier": 2,
    "key": {
      "A": {
        "item": "bigreactors:reinforced_reactorcasing"
      },
      "B": {
        "tag": "c:plates/steel"
      },
      "C": {
        "tag": "c:circuits/absolute"
      },
      "D": {
        "item": "mekanism_extras:absolute_mechanical_pipe"
      },
      "E": {
        "item": "pneumaticcraft:reinforced_pressure_tube"
      }
    },
    "result": {
      "id": "bigreactors:reinforced_reactorfluidport_forge_active"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "     ",
      "AAAAA",
      "ABBBA",
      "AAAAA",
      "     "
    ],
    "tier": 2,
    "key": {
      "A": {
        "tag": "c:plates/steel"
      },
      "B": {
        "tag": "c:ingots/blutonium"
      }
    },
    "result": {
      "id": "bigreactors:reinforced_turbinerotorblade"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      " AAA ",
      "AABAA",
      " ABA ",
      "AABAA",
      " AAA "
    ],
    "tier": 2,
    "key": {
      "A": {
        "tag": "c:plates/steel"
      },
      "B": {
        "tag": "c:ingots/blutonium"
      }
    },
    "result": {
      "id": "bigreactors:reinforced_turbinerotorshaft"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABAA",
      "ACDCA",
      "BDEDB",
      "ACDCA",
      "AABAA"
    ],
    "tier": 2,
    "key": {
      "A": {
        "tag": "c:plates/steel"
      },
      "B": {
        "tag": "c:ingots/iron"
      },
      "C": {
        "item": "actuallyadditions:enori_crystal"
      },
      "D": {
        "tag": "c:ingots/cyanite"
      },
      "E": {
        "tag": "c:buckets/water"
      }
    },
    "result": {
      "id": "bigreactors:reprocessorcasing"
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
        "item": "bigreactors:reprocessorcasing"
      },
      "B": {
        "item": "mekanism:structural_glass"
      }
    },
    "result": {
      "count": 4,
      "id": "bigreactors:reprocessorglass"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABCBA",
      "DECED",
      "DEFED",
      "DEGED",
      "ABHBA"
    ],
    "tier": 2,
    "key": {
      "A": {
        "item": "bigreactors:reprocessorcasing"
      },
      "B": {
        "item": "actuallyadditions:enori_crystal"
      },
      "C": {
        "item": "enderio:dark_steel_bars"
      },
      "D": {
        "tag": "c:plates/steel"
      },
      "E": {
        "item": "advancednetherite:netherite_iron_ingot"
      },
      "F": {
        "item": "functionalstorage:collector_upgrade"
      },
      "G": {
        "tag": "c:pistons"
      },
      "H": {
        "tag": "c:hoppers"
      }
    },
    "result": {
      "id": "bigreactors:reprocessorcollector"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABAA",
      "ACDCA",
      "BCECB",
      "AFGFA",
      "AABAA"
    ],
    "tier": 2,
    "key": {
      "A": {
        "item": "bigreactors:reprocessorcasing"
      },
      "B": {
        "tag": "c:plates/steel"
      },
      "C": {
        "tag": "c:ingots/cyanite"
      },
      "D": {
        "item": "mekanism:ultimate_fluid_tank"
      },
      "E": {
        "item": "minecraft:sticky_piston"
      },
      "F": {
        "tag": "c:dusts/redstone"
      },
      "G": {
        "item": "functionalstorage:pusher_upgrade",
      }
    },
    "result": {
      "id": "bigreactors:reprocessorfluidinjector"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABAA",
      "ACDCA",
      "BCECB",
      "AFGFA",
      "AABAA"
    ],
    "tier": 2,
    "key": {
      "A": {
        "item": "bigreactors:reprocessorcasing"
      },
      "B": {
        "tag": "c:plates/steel"
      },
      "C": {
        "tag": "c:ingots/cyanite"
      },
      "D": {
        "item": "mekanism:radioactive_waste_barrel"
      },
      "E": {
        "item": "minecraft:sticky_piston"
      },
      "F": {
        "tag": "c:dusts/redstone"
      },
      "G": {
        "item": "functionalstorage:pusher_upgrade"
      }
    },
    "result": {
      "id": "bigreactors:reprocessorwasteinjector"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABAA",
      "ABCBA",
      "BDEDB",
      "AFGFA",
      "AAHAA"
    ],
    "tier": 2,
    "key": {
      "A": {
        "item": "bigreactors:reprocessorcasing"
      },
      "B": {
        "tag": "c:plates/steel"
      },
      "C": {
        "item": "advancednetherite:netherite_iron_ingot"
      },
      "D": {
        "tag": "functionalstorage:drawer"
      },
      "E": {
        "item": "minecraft:dispenser"
      },
      "F": {
        "tag": "c:dusts/redstone"
      },
      "G": {
        "item": "functionalstorage:pusher_upgrade"
      },
      "H": {
        "item": "mekanism:ultimate_logistical_transporter"
      }
    },
    "result": {
      "id": "bigreactors:reprocessoroutputport"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABAA",
      "ACDCA",
      "EFGFE",
      "AHDHA",
      "AABAA"
    ],
    "key": {
      "A": {
        "item": "bigreactors:reprocessorcasing"
      },
      "B": {
        "item": "mekanism_extras:absolute_universal_cable"
      },
      "C": {
        "tag": "c:gems/diamond"
      },
      "D": {
        "tag": "c:dusts/redstone"
      },
      "E": {
        "tag": "c:plates/steel"
      },
      "F": {
        "tag": "c:ingots/cyanite"
      },
      "G": {
        "item": "mekanism_extras:absolute_control_circuit"
      },
      "H": {
        "item": "actuallyadditions:empowered_diamatine_crystal"
      }
    },
    "result": {
      "id": "bigreactors:reprocessorpowerport"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABAA",
      "ACDCA",
      "BEFEB",
      "AGHGA",
      "AAIAA"
    ],
    "key": {
      "A": {
        "item": "bigreactors:reprocessorcasing"
      },
      "B": {
        "item": "alltheores:steel_plate"
      },
      "C": {
        "item": "minecraft:redstone"
      },
      "D": {
        "item": "ae2:fluix_smart_cable"
      },
      "E": {
        "item": "mekanism_extras:absolute_control_circuit"
      },
      "F": {
        "item": "ae2:terminal"
      },
      "G": {
        "item": "advancednetherite:netherite_iron_ingot"
      },
      "H": {
        "item": "immersiveengineering:redstone_switchboard"
      },
      "I": {
        "item": "mekanism:structural_glass"
      }
    },
    "result": {
      "id": "bigreactors:reprocessorcontroller"
    }
  });
});
