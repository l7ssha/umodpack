StartupEvents.registry('fluid', event => {
    event.create('digital_time_infusion')
        .displayName('Digital Time Infusion Fluid')
        .stillTexture('kubejs:block/time_traveller')
        .flowingTexture('kubejs:block/time_traveller')
        .noBucket();
});