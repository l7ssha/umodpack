const ArtifactVersion = Java.loadClass("org.apache.maven.artifact.versioning.DefaultArtifactVersion");

// Using var for global-ish script variables is safer in older Rhino engines
var announcements = {}; 
var currentVersion = null;
var lastDismissedKey = 'LastDissmisedVersion';

function initAnnouncements() {
    addAnnouncement("0.1", Text.of("Welcome to the modpack! You are using ").append(Text.red("alpha")).append(" version. Everything is up for change."));
}

function addAnnouncement(version, message) {
    var content = typeof message === "string" ? Text.of(message) : message;
    if (!announcements[version]) {
        announcements[version] = [];
    }
    announcements[version].push(content);
}

ServerEvents.loaded(event => {
    if (!Platform.isLoaded("bcc")) return;
    var BCC = Java.loadClass("dev.wuffs.bcc.BetterCompatibilityChecker");
    try {
        currentVersion = new ArtifactVersion(BCC.betterStatus.version());
    } catch (e) {
        console.error("Failed to read pack version: " + e);
    }
    announcements = {};
    initAnnouncements();
});

PlayerEvents.loggedIn(event => {
    if (!currentVersion) return;

    var player = event.player;
    var pData = player.persistentData;
    var lastDismissed = new ArtifactVersion(pData.getString(lastDismissedKey) || "0.0.0");

    var hasUnread = false;
    var printHeader = true;
    
    // Pre-declare all loop variables to prevent "redeclaration" errors
    var vString, messages, versionKey, isNewerThanDismissed, isCurrentOrOlderPackVersion, dismissMessage, versionPrefix;

    for (vString in announcements) {
        messages = announcements[vString];
        versionKey = new ArtifactVersion(vString);
        
        isNewerThanDismissed = lastDismissed.compareTo(versionKey) < 0;
        isCurrentOrOlderPackVersion = currentVersion.compareTo(versionKey) >= 0;

        if (isNewerThanDismissed && isCurrentOrOlderPackVersion) {
            hasUnread = true;

            if (printHeader) {
                player.tell(Text.of("=====[ ").append(Text.yellow("Modpack Announcements").bold()).append(" ]=====").gold().bold());
                printHeader = false;
            }

            // Using a standard for loop instead of forEach for maximum Rhino compatibility
            for (var i = 0; i < messages.length; i++) {
                versionPrefix = Text.gold("[" + vString + "]");
                player.tell(Text.of("").append(versionPrefix).append(" - ").append(messages[i].yellow()));
            }
        }
    }

    if (hasUnread) {
        player.tell(Text.of(" ")); 
        dismissMessage = Text.of("Click here to dismiss announcements up to v" + currentVersion.toString())
            .green()
            .hover(Text.of("Click to mark all as read"))
            .clickRunCommand("/dismiss_announcements");

        player.tell(dismissMessage);
    }
});

ServerEvents.basicPublicCommand("dismiss_announcements", event => {
    var player = event.player;
    if (!player) return;

    var pData = player.persistentData;

    if (event.input === "clear") {
        pData.putString(lastDismissedKey, "0.0.0");
        return event.respond(Text.yellow("Reset your announcement history."));
    }

    if (!currentVersion) {
        return event.respond(Text.red("Error: Pack version not detected."));
    }

    pData.putString(lastDismissedKey, currentVersion.toString());
    event.respond(Text.green("Announcements dismissed up to v" + currentVersion.toString()));
});