ServerEvents.recipes(event => {
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "       ",
      " AB BA ",
      " CDEDC ",
      " AEFEA ",
      " CDGDC ",
      " ACACA ",
      "       "
    ],
    "tier": 2,
    "key": {
      "A": {
        "tag": "c:ingots/eclipsealloy"
      },
      "B": {
        "item": "ae2:quantum_entangled_singularity"
      },
      "C": {
        "tag": "c:plates/quantum_alloy"
      },
      "D": {
        "item": "justdirethings:time_crystal"
      },
      "E": {
        "item": "justdirethings:time_crystal_block"
      },
      "F": {
        "item": "industrialforegoing:machine_frame_supreme"
      },
      "G": {
        "item": "advanced_ae:quantum_storage_component"
      }
    },
    "result": {
      "id": "justdirethings:paradoxmachine"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "  ABC",
      "  ATB",
      "  DAA",
      " D   ",
      "D    "
    ],
    "tier": 2,
    "key": {
      "A": {
        "tag": "c:ingots/blazegold"
      },
      "B": {
        "tag": "c:ingots/eclipsealloy"
      },
      "C": {
        "item": "justdirethings:time_crystal"
      },
      "D": {
        "tag": "c:ingots/ferricore"
      },
      "T": {
        "item": "justdirethings:time_crystal_block"
      }
    },
    "result": {
      "id": "justdirethings:time_wand"
    }
  });
});