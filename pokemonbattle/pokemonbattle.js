var width = 1000;
var height = 800;
var pg;
var x = 100;
var y = 100;
var button;
function setup(){
    createCanvas(1000, 850);
    button = createButton('ATTACK')
}
function draw(){
    background(50);
    fill(Math.floor(random()*256), Math.floor(random()*256), Math.floor(random()*256));
    textSize(30);
    text("Pokemon Battle", 400, 10, 400, 600);
    fill(255);
    rect (0, 50, 700, 500); // box 1
    fill(200);
    rect(550, 100, 140, 30); // health bar 2
    fill(200);
    rect(50, 400, 140, 30); // health bar 1
    fill(255, 69, 0);
    text("Health:", 550, 100, 40, 30);
    fill(255, 69, 0);
    text("Health:", 50, 400, 40, 30);
    fill(180);
    rect(0, 550, 350, 300); // box 2
    fill(150);
    rect(350, 550, 350, 300); // box 3
    fill(120);
    rect(700, 50, 300, 800); // box 4
    fill(0, 76, 153);
    text("Team1", 10, 560, 30, 30);
    fill(0, 153, 76);
    text("Team2", 360, 560, 30, 30);
    fill(76, 0, 153);
    text("Stats", 710, 60, 50, 50);
    fill(0, 76, 153);
    rect(70, 440, 100, 100); // rectangle 1
    fill(76, 0, 153);
    rect(575, 140, 100, 100); // rectangle 2
    fill(250);
    rect(50, 600, 150, 50);
    fill(0);
    text("ATTACK", 70, 610, 50, 45);
    fill(250);
    rect(50, 670, 150, 50);
    fill(0);
    text("DEFENSE", 55, 680, 50, 45);
   
}
// function mouseClicked(){
//     if (mouseClicked){
//         rotate(PI/3.0);
//         rect(70, 440, 100, 100); // rectangle 1
//     }
// }