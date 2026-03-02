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
});
