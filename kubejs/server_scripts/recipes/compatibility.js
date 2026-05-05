ServerEvents.recipes(event => {
    event.replaceInput(
        { input: "#c:slimeballs" },
        "#c:slimeballs",
        "#c:slime_balls",
    );

    event.replaceInput(
        { input: "pneumaticcraft:plastic" },
        "pneumaticcraft:plastic",
        "#c:plastics",
    );

    event.replaceInput(
        { input: "#pneumaticcraft:plastic_sheets" },
        "#pneumaticcraft:plastic",
        "#c:plastics",
    );
});