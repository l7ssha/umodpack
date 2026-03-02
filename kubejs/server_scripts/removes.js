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
    event.remove({ id: "minecraft:neutron" });
    event.remove({ id: "minecraft:neutron_nugget" });
    event.remove({ id: "minecraft:neutron_nugget_from_ingot" });

    // Mystical Agriculture
    event.remove({ id: "mysticalagradditions:essence/neutron_nugget" });

    // AE2
    event.remove({ id: "aeinfinitybooster:dimension_card" });
    event.remove({ id: "ae2:network/blocks/controller" });

    // Other
    event.remove({ id: "igleelib:modium_ingot"});
    event.remove({ id: "igleelib:modium_block"});
});

AvaritiaEvents.singularity(event => {
    event.removeAll();
});
