const shell = document.querySelector("input");

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
    }
}

function showHelp() {
    console.log("Here is a list of all commands")
}