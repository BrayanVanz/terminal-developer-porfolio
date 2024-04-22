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
        
        case "whois":
            showWhoIs();
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

function showWhoIs() {
    const whoIsSection = document.createElement("div");
    whoIsSection.id = "whoIs";

    const profile = document.createElement("img");
    profile.src = "./media/profile.jpeg";
    profile.setAttribute("style", "border-radius: 50%");

    const information = document.createElement("div");
    information.setAttribute("style", "max-width: 500px; text-align: justify;");

    const title = document.createElement("h4");
    title.textContent = "About Me"
    
    const text = document.createElement("p");
    text.textContent = `
        I am a Computer Science student at ATITUS University. My love for computers,
        logic, and understanding how multiple systems interconnect has led me to pursue
        a career in technology. Some tools I have used in the past are: HTML, CSS, JS,
        Java, Python, PostgreSQL, AWS, VirtualBox, Shell Scripts. During my free time, I
        study programming, mathematics, and general CS. Looking for a software development
        internship to further develop my skills; always willing to learn new things and
        work with others. `
    
    information.appendChild(title);
    information.appendChild(text);
    whoIsSection.appendChild(profile);
    whoIsSection.appendChild(information);

    body.insertBefore(whoIsSection, userInput);
    shell.value = '';
}