ServerEvents.recipes(event => {
  event.custom({
    "type": "occultism:ritual",
    "activation_item": {
      "item": "occultism:book_of_binding_bound_afrit"
    },
    "duration": 600,
    "ingredients": [
      {
        "item": "mekanism:hdpe_elytra"
      },
      {
        "item": "deeperdarker:sculk_bone"
      },
      {
        "item": "deeperdarker:sculk_bone"
      },
      {
        "item": "deeperdarker:sculk_bone"
      },
      {
        "tag": "c:strings"
      },
      {
        "item": "deeperdarker:sculk_bone"

      },
      {
        "item": "deeperdarker:sculk_bone"

      },
      {
        "item": "deeperdarker:soul_dust"
      },
      {
        "item": "deeperdarker:soul_dust"
      },
      {
        "item": "deeperdarker:soul_crystal"
      },
      {
        "item": "deeperdarker:soul_crystal"
      }
    ],
    "pentacle_id": "occultism:craft_afrit",
    "result": {
      "count": 1,
      "id": "deeperdarker:soul_elytra"
    },
    "ritual_type": "occultism:craft_with_spirit_name"
  });
});

