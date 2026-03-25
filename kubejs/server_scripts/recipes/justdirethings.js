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

  event.custom({
    "type": "avaritia:shaped_table",
    "pattern": [
      " ABA ",
      "ABCDA",
      "DCECD",
      "ADCBA",
      " ABA "
    ],
    "tier": 2,
    "key": {
      "A": {
        "tag": "c:dusts/blaze"
      },
      "B": {
        "tag": "c:dusts/redstone"
      },
      "C": {
        "item": "justdirethings:gooblock_tier1"
      },
      "D": {
        "item": "minecraft:nether_wart"
      },
      "E": {
        "item": "minecraft:red_nether_bricks"
      }
    },
    "result": {
      "id": "justdirethings:gooblock_tier2"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter",
    "pattern": [
      "ABC",
      "DAD",
      "CBA"
    ],
    "key": {
      "A": {
        "item": "rftoolsbase:infused_enderpearl"
      },
      "B": {
        "item": "justdirethings:gooblock_tier2"
      },
      "C": {
        "item": "allthecompressed:end_stone_1x"
      },
      "D": {
        "item": "modularbees:dragon_breath_bucket"
      }
    },
    "result": {
      "id": "justdirethings:gooblock_tier3"
    }
  });

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AA   AA",
      "AB C BA",
      "  DED  ",
      " CE EC ",
      "  DED  ",
      "AB C BA",
      "AA   AA"
    ],
    "tier": 3,
    "key": {
      "A": {
        "item": "minecraft:echo_shard"
      },
      "B": {
        "item": "minecraft:sculk"
      },
      "C": {
        "item": "minecraft:sculk_shrieker"
      },
      "D": {
        "item": "justdirethings:gooblock_tier3"
      },
      "E": {
        "item": "deeperdarker:sculk_stone"
      }
    },
    "result": {
      "id": "justdirethings:gooblock_tier4"
    }
  });
});