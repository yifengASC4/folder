var ship;
var x = 0;
var speed = 20;
// var aliens= [];
// var lazer = [];
var setDir = 0;
function setup(){
    createCanvas(600, 400);
    ship = new ship();
    // aliens = new aliens(i * 80 + 80, 60);
}
function draw(){
    background(5);
    stroke(255);
    
    }
    if (keyIsDown(LEFT_ARROW))
        ship.setDir(-11);
    if (keyIsDown(RIGHT_ARROW))
        ship.setDir(11);
}
function ship(){
    this.x = width/2;
    this.xdir = 0;

    this.show = function(){
        fill(0, 102, 204);
        rectMode(CENTER);
        rect(width/2, height-40, 30, 30);
    }
    
    this.move = function(dir){
        this.x = this.xdir*5
    }

    this.setDir= function(dir){
        this.xdir = dir;
    }
}
// function aliens(){
//     this.x = x;
//     this.y = y;
//     this.r = 30;
//     this.xdir = 1;

//     this.show = function (){
//         fill(150, 200, 145);
//         ellipse(this.x, this.y, this.r*2, this.r*2);
//     }
// }
// function lazers(x, y){
//     this.x = x;
//     this.y = y;
//     this.r = 8;
//     this.remove = false;

//     this.show = function(){
//         noStroke();
//         fill(50, 0, 150);
//         rect(this.x, this.y, this.r*2, this.r*2);
//     }
//     this.hits = function()
// }
// function keyPressed(){
//     if (keyCode === 39){
//         ship.setDir(1);
//     }
//     else if (keyCode === 37){
//         ship.setDir(-1);
//     }
// }