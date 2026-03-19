ServerEvents.recipes(event => {
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter",
    "pattern": [
      "ABA",
      "CDC",
      "EBE"
    ],
    "key": {
      "A": {
        "item": "minecraft:purpur_pillar"
      },
      "B": {
        "item": "minecraft:shulker_shell"
      },
      "C": {
        "item": "minecraft:end_stone_bricks"
      },
      "D": {
        "item": "minecraft:ender_eye"
      },
      "E": {
        "item": "minecraft:purpur_block"
      }
    },
    "result": {
      "id": "cataclysm:void_eye"
    }
  });

  event.custom({
    "type": "avaritia:shaped_table",
    "pattern": [
      "AAAAA",
      "B C B",
      "BCDCB",
      "BC CB",
      " BBB "
    ],
    "tier": 2,
    "key": {
      "A": {
        "item": "minecraft:blaze_powder"
      },
      "B": {
        "item": "minecraft:soul_sand"
      },
      "C": {
        "item": "minecraft:netherite_scrap"
      },
      "D": {
        "item": "minecraft:ender_eye"
      }
    },
    "result": {
      "id": "cataclysm:flame_eye"
    }
  });

  event.custom({
    "type": "avaritia:shaped_table",
    "pattern": [
      "AABAA",
      "ACBCA",
      "BBCBB",
      "ACBCA",
      "AABAA"
    ],
    "tier": 2,
    "key": {
      "A": {
        "tag": "chipped:nether_bricks"
      },
      "B": {
        "tag": "c:dusts/blaze"
      },
      "C": {
        "item": "minecraft:netherite_upgrade_smithing_template"
      }
    },
    "result": {
      "id": "cataclysm:ignitium_upgrade_smithing_template"
    }
  });

  event.custom({
    "type": "avaritia:shaped_table",
    "pattern": [
      " ABA ",
      "ABCBA",
      " ABA ",
      "     ",
      "     "
    ],
    "tier": 2,
    "key": {
      "A": {
        "tag": "chipped:nether_bricks"
      },
      "B": {
        "tag": "c:dusts/blaze"
      },
      "C": {
        "item": "cataclysm:ignitium_upgrade_smithing_template"
      }
    },
    "result": {
      "id": "cataclysm:ignitium_upgrade_smithing_template",
      "count": 2,
    }
  });
});