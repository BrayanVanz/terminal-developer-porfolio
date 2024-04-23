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
        case "experience":
            showExperience();
            break;
        case "projects":
            showProjects();
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

function showExperience() {
    const jobs = {
        "TSE - Voting Machine Public Security Test | Investigator" :
        ["- Analyzed voting machine's source code and hardware",
         "- Performed multiple exploits in order to break the secret ballot",
         "- Organized related data into a report addressed to thre Supreme Electoral Court",
         "- Brasília, DF | 11.2023 - 12.2023"],
        "UPF - Laboratory of Microbiology and Immunology | Intern" : 
        ["- Read and interpreted scientific papers",
         "- Assembled data collected through experiments",
         "- Synthesized sample results into graphs and Excel spreadsheets",
         " - Passo Fundo, RS | 04.2022 - 12.2022"]
    };

    const experienceSection = document.createElement("div");
    createDiv(jobs, experienceSection);
    shell.value = '';
}

function showProjects() {
    const projects = {
        "Terminal Developer Portfolio" : 
        ["- Simulate a computer terminal emulator",
         "- Use JavaScript to manipulate the DOM",
         "- Make unique shell style with CSS",
         "- Showcase personal skillset"],
        "Website Landing Page" : 
        ["- Create a sample website landing page",
         "- Practice HTML page formatting",
         "- Style different sections with CSS",
         "- Organize elements using Flexbox"],
        "Space Transmitter" : 
        ["- Collect space probe data through user input",
         "- Establish websocket communication between client and server",
         "- Run both nodes simultaneously via multithreading",
         "- Use AES and RSA enctryption to validate file exchange"],
        "Space Marker" : 
        ["- Python project using the Pygame library",
         "- Create and name stars upon clicking",
         "- Calculate distance between them to make constellations",
         "- Store information into a loadable local database"]
    };

    const projectsSection = document.createElement("div");
    createDiv(projects, projectsSection);
    shell.value = '';
}

function createDiv(object, parentNode) {

    Object.keys(object).forEach((key) => {
        const contentDiv = document.createElement("div");

        const title = document.createElement("h4");
        title.textContent = key;
        contentDiv.appendChild(title);

        const values = object[key];
        for (let i = 0; i < values.length; i++) {
            const details = document.createElement("p");
            details.textContent = values[i];
            contentDiv.appendChild(details);
        }

        parentNode.appendChild(contentDiv);
    });

    parentNode.className = "contentDiv";
    body.insertBefore(parentNode, userInput);
}