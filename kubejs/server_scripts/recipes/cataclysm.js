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
});