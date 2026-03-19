ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedcrafting:combination",
        "power_cost": 30000,
        "input": {
            "tag": "c:ender_pearls"
        },
        "ingredients": [
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            },
            {
                "item": "rftoolsbase:dimensionalshard"
            }
        ],
        "result": {
            "id": "rftoolsbase:infused_enderpearl"
        }
    });

    event.shaped({
        "pattern": [
            "ABA",
            "CDC",
            "ABA"
        ],
        "key": {
            "A": {
                "item": "immersiveengineering:cokebrick"
            },
            "B": {
                "tag": "c:plates/gold"
            },
            "C": {
                "tag": "c:plates/iron"
            },
            "D": {
                "item": "rftoolsbase:infused_diamond"
            }
        },
        "result": {
            "id": "rftoolsbase:machine_frame"
        }
    });

    event.custom({
        "type": "extendedcrafting:shaped_flux_crafter",
        "power_required": 50000,
        "power_rate": 1000,
        "pattern": [
            "ABA",
            "CDC",
            "AEA"
        ],
        "key": {
            "A": {
                "item": "allthecompressed:bricks_1x"
            },
            "B": {
                "item": "rftoolsbase:infused_enderpearl"
            },
            "C": {
                "item": "mekanism:ultimate_control_circuit"
            },
            "D": {
                "item": "rftoolsbase:machine_frame"
            },
            "E": {
                "item": "mekanism:energy_tablet"
            }
        },
        "result": {
            "id": "rftoolsbuilder:builder"
        }
    });

    event.replaceInput(
        { id: 'rftoolsutility:crafter1' },
        'minecraft:crafting_table',
        'minecraft:crafter',
    );
});