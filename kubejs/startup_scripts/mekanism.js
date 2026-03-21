const $Chemical = Java.loadClass('mekanism.api.chemical.Chemical');
const $ChemicalBuilder = Java.loadClass('mekanism.api.chemical.ChemicalBuilder');

StartupEvents.registry('mekanism:chemical', event => {
    event.createCustom('allthemodium', () => {
        let builder = $ChemicalBuilder.builder().tint(0xFFD700);
        return new $Chemical(builder);
    });

    event.createCustom('vibranium', () => {
        let builder = $ChemicalBuilder.builder().tint(0x75feb8);
        return new $Chemical(builder);
    });

    event.createCustom('unobtainium', () => {
        let builder = $ChemicalBuilder.builder().tint(0x942bd1);
        return new $Chemical(builder);
    });
});