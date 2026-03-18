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
    "type": "extendedcrafting:combination",
    "power_cost": 100000000000,
    "power_rate": 1000000,
    "input": {
      "items": "extendedcrafting:singularity",
      "components": {
        "extendedcrafting:singularity_id": "extendedcrafting:diamond"
      },
      "type": "neoforge:components"
    },
    "ingredients": [
      {
        "item": "industrialforegoing:pink_slime_block"
      },
      {
        "item": "industrialforegoing:pink_slime_block"
      },
      {
        "item": "industrialforegoing:pink_slime_block"
      },
      {
        "item": "industrialforegoing:pink_slime_block"
      },
      {
        "items": "extendedcrafting:singularity",
        "components": {
          "extendedcrafting:singularity_id": "extendedcrafting:diamond"
        },
        "type": "neoforge:components"
      },
      {
        "item": "industrialforegoing:pink_slime_block"
      },
      {
        "items": "extendedcrafting:singularity",
        "components": {
          "extendedcrafting:singularity_id": "extendedcrafting:diamond"
        },
        "type": "neoforge:components"
      },
      {
        "items": "extendedcrafting:singularity",
        "components": {
          "extendedcrafting:singularity_id": "extendedcrafting:platinum"
        },
        "type": "neoforge:components"
      }
    ],
    "result": {
      "id": "avaritia:diamond_lattice"
    }
  });

  event.custom({
    "type": "extendedcrafting:combination",
    "power_cost": 100000,
    "input": {
      "item": "avaritia:double_compressed_crafting_table"
    },
    "ingredients": [
      {
        "tag": "c:ingots/blazegold"
      },
      {
        "tag": "c:ingots/blazegold"
      },
      {
        "item": "igleelib:blaze_shard"
      },
      {
        "item": "igleelib:blaze_shard"
      },
      {
        "tag": "chipped:red_nether_bricks"
      },
      {
        "item": "igleelib:blaze_shard"
      },
      {
        "tag": "chipped:red_nether_bricks"
      },
      {
        "tag": "chipped:red_nether_bricks"
      },
      {
        "tag": "chipped:red_nether_bricks"
      }
    ],
    "result": {
      "id": "avaritia:nether_crafting_table"
    }
  });
});
