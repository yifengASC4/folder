var database = firebase.database().ref();
var userChoice;
var result;
function rand(){
    var choices = ["rock", "paper", "scissor"];
    var compChoice = choices[Math.floor(Math.random()*3)];

    return rand();
}
if (userChoice == compChoice){
        result = "It's a tie!";
        console.log(result);
}
if (compChoice == "rock"){
    if (userChoice == "paper"){
            result = "Player Wins!";
            console.log(result);
    }
}
if (compChoice == "rock"){
    if (userChoice == "scissor"){
            result = "Computer Wins!";
            console.log(result);
    }
}
if (compChoice == "paper"){
    if (userChoice == "rock"){
    result = "Computer Wins!";
            console.log(result);
    }
}
if (compChoice == "paper"){
    if (userChoice == "scissor"){
            result = "Player Wins!";
            console.log(result);
    }
}
if (compChoice == "scissor"){
    if (userChoice = "rock"){
            result = "Player Wins!";
            console.log(result);
    }
}
if (compChoice == "scissor"){
    if (userChoice = "paper"){
            result = "Computer Wins!";
            console.log(result);
    }
}
// if (compChoice ) {
// 	compChoice = "rock";
// } else if(compChoice <= 0.67) {
// 	compChoice = "paper";
// } else {
// 	compChoice = "scissor";
// } 
// console.log("Computer: " + compChoice);
// function reRun(){
//     if (result === "It's a tie!"){
//         compChoice = choices[Math.floor(Math.random()*3)];
//     }
//     if (result === "Player Wins!"){
//         compChoice = choices[Math.floor(Math.random()*3)];
//     }
//     if (result === "Computer Wins!"){
//         compChoice = choices[Math.floor(Math.random()*3)];
//     }
// }
function myFunction(){
    $('#picBackground img').attr('src', 'http://1000awesomethings.com/wp-content/uploads/2008/08/rock.jpg');
}
function paperImg(){
    $('#picBackground img').attr('src', 'http://1000awesomethings.com/wp-content/uploads/2008/08/paper.jpg');
}
function scissorImg(){
    $('#picBackground img').attr('src', 'http://4.bp.blogspot.com/-v_ooWUiEKNQ/UGOonq6f4-I/AAAAAAAACks/yUzYr7OBTug/s1600/scissors.jpg');
}
function pickRock(){
    userChoice = "rock";
    console.log("Player: " + userChoice);
    rand();
    updateDB();
    // reRun();
}

function pickPaper(){
    userChoice = "paper";
    console.log("Player: " + userChoice);
    rand();
    updateDB();
    // reRun();
}
function pickScissor(){
    userChoice = "scissor";
    console.log("Player: " + userChoice);
    rand();
    updateDB();
    // reRun();
}
function updateDB(){
    var player = userChoice;
    var computer = compChoice;
    var results = result;
    // console.log("player : " + player + " vs " + "computer : " + computer );
    // console.log(result)

    //Update database here
    var value = {
        PLAYER: player,
        COMPUTER: computer
    }
    database.push(value);
}
database.on("child_added", function(rowData) {
    var row = rowData.val();
    var player = row.PLAYER;
    var computer = row.COMPUTER;
    var results = "<p> Result : " + result + "</p>"
    $(".gameresults").prepend(results);
    var score = "<p> player: " + player + " vs " + "computer : " + computer + "</p>";
    $(".gameresults").prepend(score);
})
function removeData(){
    database.remove();
    window.location.reload();
}
// function scrollWin(x, y) {
//     window.scrollBy(x, y);
// }