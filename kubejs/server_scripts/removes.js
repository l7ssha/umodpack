ServerEvents.recipes(event => {
    // Mekanism and addons
    event.remove({ id: /evolvedmekanism.*creative.*/ });
    event.remove({ id: /ocultism:crushing\/.*alloy.*/ });
    event.remove({ id: "emextras:alloying/circuit/creative"});

    // Draconic Evolution
    event.remove({ input: "draconicevolution:awakened_draconium_dust"});
});