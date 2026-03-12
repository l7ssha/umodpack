ServerEvents.recipes(event => {
    event.shaped({
        "pattern": [
            "ABA",
            "ACA",
            "DED"
        ],
        "key": {
            "A": {
                "tag": "c:leathers"
            },
            "B": {
                "item": "iceandfire:blindfold"
            },
            "C": {
                "item": "dankstorage:dank_1"
            },
            "D": {
                "tag": "c:strings"
            },
            "E": {
                "item": "minecraft:leather_chestplate"
            }
        },
        "result": {
            "id": "sophisticatedbackpacks:backpack"
        }
    });

    event.shaped({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "ABA",
            "BCB",
            "ABA"
        ],
        "key": {
            "A": {
                "tag": "minecraft:trapdoors"
            },
            "B": {
                "tag": "c:fences"
            },
            "C": {
                "item": "minecraft:redstone_torch"
            }
        },
        "result": {
            "id": "sophisticatedstorage:basic_tier_upgrade"
        }
    });

    event.replaceInput(
        { id: 'sophisticatedstorage:basic_to_copper_tier_upgrade' },
        'sophisticatedstorage:basic_to_copper_tier_upgrade',
        'sophisticatedstorage:basic_tier_upgrade'
    );

    event.smithing(
        'sophisticatedstorage:basic_to_netherite_tier_upgrade',
        'minecraft:netherite_upgrade_smithing_template',
        'sophisticatedstorage:basic_to_diamond_tier_upgrade',
        'minecraft:netherite_ingot',
    );

    event.replaceInput(
        { id: 'sophisticatedstorage:copper_to_iron_tier_upgrade' },
        'minecraft:lever',
        'minecraft:redstone_torch',
    );

    event.smithing(
        'sophisticatedstorage:copper_to_netherite_tier_upgrade',
        'minecraft:netherite_upgrade_smithing_template',
        'sophisticatedstorage:copper_to_diamond_tier_upgrade',
        'minecraft:netherite_ingot',
    );

    event.replaceInput(
        { id: 'sophisticatedstorage:iron_to_gold_tier_upgrade' },
        'minecraft:lever',
        'minecraft:redstone_torch',
    );

    event.smithing(
        'sophisticatedstorage:iron_to_netherite_tier_upgrade',
        'minecraft:netherite_upgrade_smithing_template',
        'sophisticatedstorage:iron_to_diamond_tier_upgrade',
        'minecraft:netherite_ingot',
    );

    event.replaceInput(
        { id: 'sophisticatedstorage:gold_to_diamond_tier_upgrade' },
        'minecraft:lever',
        'minecraft:redstone_torch',
    );

    event.smithing(
        'sophisticatedstorage:gold_to_netherite_tier_upgrade',
        'minecraft:netherite_upgrade_smithing_template',
        'sophisticatedstorage:gold_to_diamond_tier_upgrade',
        'minecraft:netherite_ingot',
    );

    event.smithing(
        'sophisticatedstorage:diamond_to_netherite_tier_upgrade',
        'minecraft:netherite_upgrade_smithing_template',
        'minecraft:redstone_torch',
        'minecraft:netherite_ingot',
    );

    event.replaceInput(
        { id: 'sophisticatedstorage:basic_to_copper_tier_upgrade' },
        'minecraft:lever',
        'sophisticatedstorage:basic_tier_upgrade',
    );
});