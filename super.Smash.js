var prompt = require('prompt-sync')();

var mashArray = ["Final Destination", "Mario Galaxy", "Luigi's Mansion", "Skyloft"];
var firstQuestion = [5, 10];
var secondQuestion = ["Ryuu", "Cloud"]; 

//for (var i=0; i<2; i++){
    firstQuestion.push(prompt("how may times will you strike"));
    secondQuestion.push(prompt("who will you choose to fight"));
//}
console.log(" you fought " + secondQuestion[2] + " in the " + mashArray[Math.floor(Math.random()*3)] + " and hit " + secondQuestion[Math.floor(Math.random()*1)] + firstQuestion[2] + " times ");
var result = ["YOU WIN", "YOU LOSE"];
