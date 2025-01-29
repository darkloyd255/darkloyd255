// This is how to add a new mod to the game.

// Create a new Javascript file like this one.
// Add the file to the mods folder on GitHub, or host it somewhere else.
// https://github.com/R74nCom/sandboxels/tree/main/mods

// To add it in the Mod Loader:
// If it is in the mods folder, you can just use the name of the file.
// If it is hosted somewhere else, you can use the full URL, including the HTTPS://.

// Raw JavaScript behaviors:
// Adding elements:
elements.langton = {
    color: "#ffffff",
    behavior: behaviors.POWDER,
    category: "special",
    viscosity: 1000000,
    state: "solid",
    density: 720,
};

// Run after all mods are loaded, for cross-mod compatibility
runAfterLoad(function() {
    // Your code here
    console.log("Hello World!");
});

// Run if another mod is active
if (enabledMods.includes("mods/test.js")) {
    runAfterLoad(function() {
        // Your code here
        console.log("Hello World!");
    });
}

