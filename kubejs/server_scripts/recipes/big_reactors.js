ServerEvents.recipes(event => {
    event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AABAA",
    "ACDCA",
    "BDEDB",
    "ACDCA",
    "AABAA"
  ],
  "key": {
    "A": {
      "item": "bigreactors:graphite_block"
    },
    "B": {
      "item": "alltheores:lead_plate"
    },
    "C": {
      "item": "alltheores:steel_plate"
    },
    "D": {
      "item": "alltheores:steel_block"
    },
    "E": {
      "item": "actuallyadditions:empowered_enori_crystal_block"
    }
  },
  "result": {
    "id": "bigreactors:reinforced_reactorcasing"
  }
});

    event.custom({
  "type": "extendedcrafting:shaped_table",
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
    "id": "bigreactors:reinforced_reactorglass"
  }
});

    event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBBA",
    "CDCDC",
    "CDCDC",
    "CDCDC",
    "ACCCA"
  ],
  "key": {
    "A": {
      "item": "bigreactors:reinforced_reactorcasing"
    },
    "B": {
      "item": "mekanism:structural_glass"
    },
    "C": {
      "item": "bigreactors:graphite_block"
    },
    "D": {
      "item": "alltheores:uranium_ingot"
    }
  },
  "result": {
    "id": "bigreactors:reinforced_reactorfuelrod"
  }
});

    event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "DEFED",
    "DGFGD",
    "DEGED",
    "AHHHA"
  ],
  "key": {
    "A": {
      "item": "bigreactors:reinforced_reactorcasing"
    },
    "B": {
      "item": "alltheores:steel_plate"
    },
    "C": {
      "item": "allthemodium:allthemodium_rod"
    },
    "D": {
      "item": "bigreactors:graphite_block"
    },
    "E": {
      "item": "alltheores:steel_block"
    },
    "F": {
      "item": "alltheores:netherite_rod"
    },
    "G": {
      "item": "minecraft:piston"
    },
    "H": {
      "item": "allthecompressed:lead_block_1x"
    }
  },
  "result": {
    "id": "bigreactors:reinforced_reactorcontrolrod"
  }
});

    custom.event({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "ADEDA",
    "AFGFA",
    "ADEDA",
    "ABHBA"
  ],
  "key": {
    "A": {
      "item": "alltheores:lead_plate"
    },
    "B": {
      "item": "alltheores:steel_plate"
    },
    "C": {
      "items": "functionalstorage:pusher_upgrade",
      "components": {
        "functionalstorage:direction": "north"
      },
      "type": "neoforge:components"
    },
    "D": {
      "item": "actuallyadditions:empowered_enori_crystal"
    },
    "E": {
      "item": "minecraft:piston"
    },
    "F": {
      "item": "minecraft:hopper"
    },
    "G": {
      "tag": "functionalstorage:drawer"
    },
    "H": {
      "items": "functionalstorage:puller_upgrade",
      "components": {
        "functionalstorage:direction": "north"
      },
      "type": "neoforge:components"
    }
  },
  "result": {
    "id": "bigreactors:reinforced_reactorsolidaccessport"
  }
});

    custom.event({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "BDEFB",
    "BGEGB",
    "BHEHB",
    "ABCBA"
  ],
  "key": {
    "A": {
      "item": "bigreactors:reinforced_reactorcasing"
    },
    "B": {
      "item": "alltheores:steel_plate"
    },
    "C": {
      "item": "actuallyadditions:empowered_restonia_crystal_block"
    },
    "D": {
      "item": "mekanism_extras:absolute_energy_cube"
    },
    "E": {
      "item": "minecraft:redstone_block"
    },
    "F": {
      "item": "powah:energy_cell_spirited"
    },
    "G": {
      "item": "mekanism_extras:absolute_control_circuit"
    },
    "H": {
      "item": "re_endergy:capacitor_crystalline"
    }
  },
  "result": {
    "id": "bigreactors:reinforced_reactorpowertapfe_active"
  }
});

    custom.event({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBBA",
    "CDEDC",
    "CDFDC",
    "CGHGC",
    "ACCCA"
  ],
  "key": {
    "A": {
      "item": "bigreactors:reinforced_reactorcasing"
    },
    "B": {
      "item": "allthemodium:allthemodium_plate"
    },
    "C": {
      "item": "alltheores:lead_plate"
    },
    "D": {
      "item": "mekanism_extras:absolute_control_circuit"
    },
    "E": {
      "item": "immersiveengineering:redstone_switchboard"
    },
    "F": {
      "item": "ae2:terminal"
    },
    "G": {
      "item": "actuallyadditions:empowered_restonia_crystal_block"
    },
    "H": {
      "item": "deepresonance:radiation_monitor"
    }
  },
  "result": {
    "id": "bigreactors:reinforced_reactorcontroller"
  }
});

});