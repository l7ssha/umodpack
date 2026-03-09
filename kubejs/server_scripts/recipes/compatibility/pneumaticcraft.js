ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'pneumaticcraft:plastic' },
        'pneumaticcraft:plastic',
        { tag: 'c:plastics' },
    );
});