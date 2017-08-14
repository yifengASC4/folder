var currentMode;

function GameMode(mode){
    this.mode = mode;
    switch(this.mode){
        case "Easy":
                this.amountOfAsteroids = 10;
                break;
        case "Medium":
                this.amountOfAsteroids = 30;
                break;
        case "Hard":
                this.amountOfAsteroids = 50;
                break;
    }
    
}

function activateEasy(button){
    button.value = "10";
    currentMode = "Easy";
    var gamemode = new GameMode(currentMode);
    return gamemode;
}
function activateMedium(button){
    button.value = "20";
    currentMode = "Easy";
    var gamemode = new GameMode(currentMode);
    return gamemode;
}
function activateHard(button){
    button.value = "50";
    currentMode = "Easy";
    var gamemode = new GameMode(currentMode);
    return gamemode;
}
