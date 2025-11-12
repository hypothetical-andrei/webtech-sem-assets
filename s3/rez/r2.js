// implementați următoarea structură de tipuri. Software este un tip care are metoda 'run'. Browser moștenește Software și poate adăuga și instala Plugin. Un Browser poate avea multiple Plugin.
class Software {
    run() {
        console.log("Running software...");
    }
}

class Browser extends Software {
    constructor() {
        super();
        this.plugins = [];
    }

    installPlugin(plugin) {
        this.plugins.push(plugin);
        console.log(`Installed plugin: ${plugin.name}`);
    }
    run () {
        super.run();
        console.log("Running browser with plugins:");
        this.plugins.forEach(plugin => {
            console.log(`- ${plugin.name}`);
        });
    }
}

class Plugin {
    constructor(name) {
        this.name = name;
    }
}

// Exemplu de utilizare:
const myBrowser = new Browser();
myBrowser.run();

const adBlocker = new Plugin("AdBlocker");
const darkMode = new Plugin("DarkMode");

myBrowser.installPlugin(adBlocker);
myBrowser.installPlugin(darkMode);

myBrowser.run()