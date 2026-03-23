StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create('ultimate_explosive_primer');
  event.create('unrefined_infinity');

  event.create('confusion_alloy');
  event.create('abbysal_alloy');
  
  event.create('nether_core');
  
  event.create("ultimate_prediction");

  event.create("tesseract").tooltip('It feels weird in your hand').fireResistant();

  event.create("divinium_essence");
});