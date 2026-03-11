StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create('ultimate_explosive_primer');
  event.create('unrefined_infinity');
  event.create('nether_core');
  event.create("jitl_prediction");
  event.create("ultimate_prediction");
});