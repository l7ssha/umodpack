# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Minecraft 1.21.1 modpack built on NeoForge that uses KubeJS for extensive customization and FTB Quests for progression. The modpack features heavily modified recipes across multiple tech mods, custom items, and a controlled progression path through quest chapters.

## Key Technologies

- **KubeJS**: Primary scripting system for recipe modifications, custom items, and server-side logic
- **FTB Quests**: Quest system with chapters organizing progression (AE2, Mekanism, Exploration, Extended Crafting, etc.)
- **NeoForge 21.1.221**: Mod loader for Minecraft 1.21.1

## KubeJS Architecture

### Script Types
- **startup_scripts/**: Runs once at game startup for items, chemicals, and registrations
  - `items.js`: Custom item definitions (ultimate_explosive_primer, unrefined_infinity, tesseract, etc.)
  - `mekanism.js`: Custom Mekanism chemicals (allthemodium, vibranium, unobtainium, derium)
  
- **server_scripts/**: Runs on server reload for recipes, events, and modifications
  - `fixes.js`: Recipe condition fixes and tag corrections using KubeJSTweaks
  - `jei.js`: JEI integration and display modifications
  - `loot.js`: Loot table modifications
  - `announcements.js`: Server announcements
  - `recipes/`: Organized by mod (ae2/, mekanism/, mystical_agriculture/, etc.)
  - `mmr/`: Modular Machinery Reborn custom machines
  - `zz_removes.js`: Recipe removal system (critical for progression control)

- **client_scripts/**: Client-side modifications (tooltips, JEI events)

- **data/**: Datapack-style JSON recipes organized by mod

### Recipe Modification Pattern
The modpack uses a three-tier recipe system:
1. **Removal** (`zz_removes.js`): Extensive recipe removal to control progression
2. **Fixes** (`fixes.js`): Tag and condition corrections for compatibility
3. **Addition** (mod-specific files): Custom recipes for intended progression

## Development Workflow

### Recipe Development
When adding or modifying recipes:
1. Check `zz_removes.js` to ensure the recipe isn't being removed
2. Place new recipes in appropriate `recipes/<mod>/` directory
3. Use recipe IDs following pattern: `kubejs:<category>/<recipe_name>`
4. Test with `/reload` and verify in JEI

### Quest Development
Quests are stored in `config/ftbquests/quests/` as SNBT files:
- `chapters/`: Individual quest chapters by theme
- `lang/en_us.snbt`: Quest text and translations
- Modified quest changes require server restart

## Important Constraints

### Version Control
The `.gitignore` is comprehensive - only track:
- KubeJS scripts (excluding config/)
- Mod configs (excluding client-specific files)
- FTB Quests data
- Custom assets in `kubejs/assets/`
- Custom datapack JSON in `kubejs/data/`

Never commit:
- Runtime data (saves/, logs/, screenshots/)
- Mod JARs (mods/)
- Client configs (*-client.toml, keybinds.toml)
- Cache files (dynamic-resource-pack-cache/, .mixin.out/)

### Recipe Conflicts
The modpack aggressively removes recipes to enforce progression. Always check:
1. `zz_removes.js` - massive removal list by ID, type, input, and output
2. `fixes.js` - tag corrections that might affect your recipes
3. Existing recipe files in relevant mod directories

### Custom Items
Custom items defined in `startup_scripts/items.js` require:
- Texture in `kubejs/assets/kubejs/textures/item/`
- Optional model in `kubejs/assets/kubejs/models/item/`
- Localization in appropriate lang files

## Common Patterns

### Recipe Replacement
```javascript
ServerEvents.recipes(event => {
    event.replaceInput(
        { id: 'mod:recipe_id' },
        'minecraft:iron_ingot',
        { tag: 'c:plates/steel' }
    );
});
```

### Custom Recipe
```javascript
event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": ["ABC", "DEF", "GHI"],
    "tier": 2,
    "key": { "A": { "item": "mod:item" } },
    "result": { "id": "mod:result" }
});
```

### Recipe Removal
Already handled in `zz_removes.js`, but for specific removals:
```javascript
event.remove({ id: 'mod:recipe_id' });
```

## Modpack Progression

The modpack follows a quest-based progression through chapters:
1. **Getting Started** - Basic resources and early game
2. **Storage** - Basic storage solutions  
3. **Power Generation** - Early power systems
4. **Mekanism** - Chemical processing and machines
5. **Applied Energistics** - AE2 storage and automation
6. **Mystical Agriculture** - Resource farming
7. **Extended Crafting** - High-tier crafting
8. **Endgame** - Final progression goals

Each chapter controls which recipes are available through the quest system.