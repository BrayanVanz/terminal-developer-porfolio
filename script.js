const body = document.querySelector("body");
const shell = document.querySelector("input");
const header = document.querySelector("header");
const userInput = document.querySelector("#userInput");

shell.addEventListener("keydown", (press) => {
    if (press.key == "Enter") {
        chooseCMD(shell.value);
    }
});

function chooseCMD(cmd) {
    cmd = cmd.trim();
    cmd = cmd.toLowerCase();

    switch (cmd) {
        case "help":
            showHelp();
            break;
    }
}

function showHelp() {
    const options = {
        whois : "- Learn more about me.",
        experience : "- Work related experience.",
        projects : " - Personal projects I have worked on.",
        skills : "- Tools I have studied and used previously.",
        education : "- Formal education and certifications.",
        contact : "- Channels for professional inquiries."
    };

    const commandSection = document.createElement("div");

    Object.keys(options).forEach( (option) => {
        const command = document.createElement("h4");
        command.textContent = option;
        
        const description = document.createElement("p");
        description.textContent = options[option];

        commandSection.appendChild(command);
        commandSection.appendChild(description);
    });

    body.insertBefore(commandSection, userInput);
    shell.value = '';
}