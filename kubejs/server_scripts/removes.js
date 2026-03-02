ServerEvents.recipes(event => {
    // Mekanism and addons
    event.remove({ id: /evolvedmekanism.*creative.*/ });
    event.remove({ id: /ocultism:crushing\/.*alloy.*/ });
    event.remove({ id: "emextras:alloying/circuit/creative"});

    event.remove({ id: /evolvedmekanism:solidifying.*/ });
    event.remove({ id: /evolvedmekanism:melting.*/ });

    // Draconic Evolution
    event.remove({ input: "draconicevolution:awakened_draconium_dust"});

    // Avaritia related
    event.remove({ type: "avaritia:shaped_table" });
    event.remove({ type: "avaritia:shapeless_table" });
    event.remove({ id: /avaritia:.*/ });
    event.remove({ id: /avaritia_expand:.*/ });

    // Mystical Agriculture
    event.remove({ id: "mysticalagradditions:essence/neutron_nugget" });
});

AvaritiaEvents.singularity(event => {
    event.removeAll();
});
