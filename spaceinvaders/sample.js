var ship;
var bullet; 
var alien = [];
var lazers = [];
var width = 600;
var height = 400;
var x = width;
var y = height;
var r = 5;
var a = 0;
var b = 50;
var c = 100;
var d = 150;
var e = 30
var f = 200;
var speed = 5;
function setup(){
    createCanvas(600, 400);
    ship = new Ship();
    // alien = new aliens();
    // bullet = new Bullet();
}
function draw(){
    background(50);
    ship.show();
    // alien.show();
    ship.move();
    // Bullet.show();
    // bullet.keyPressed();
    strokeWeight(4);
    fill(0, 155, 100);
    ellipse(a, e, 20 ,20);
    fill(0, 155, 100);
    ellipse(b, e, 20, 20);
    fill(0, 155, 100);
    ellipse(c, e, 20, 20);
    fill(0, 155, 100);
    ellipse(d, e, 20, 20);
    fill(0, 155, 100);
    ellipse(f, e, 20, 20);
    a = a + speed;
    b = b + speed;
    c = c + speed;
    d = d + speed;
    f = f + speed;
    if (f > width){
        e = e += 40;
        speed = -5;
    }
    if (a < 0){
        e = e += 40;
        speed = 5;
    }
    if (e > 400){
        fill(255);
        text("                  GAME OVER                  ", 200, 100, 400, 100);
    }

}
function Ship(){
    this.x = x/2;
    this.xdir = 0;
     
    this.show = function(){
        noStroke();
        fill(156, 150, 94);
        rect(this.x, y - 40, 20, 40);
    }
    this.move = function(){
        if (keyIsDown(LEFT_ARROW)){
            this.x-=7;
        }
        if (keyIsDown(RIGHT_ARROW)){
            this.x+=7;
        }
        // if (keyIsDown(UP_ARROW)){
        //     y-=5;
        // }
        // if (keyIsDown(DOWN_ARROW)){
        //     y+=5;
        // }
        // if (y >= height){
        //     y = height;
        // }
        // if (y <= 0){
        //     y = height;
        // }
        if (this.x >= width){
            this.x = width - 20;
        }
        if (this.x <=0){
            this.x = 0;
        }
    }
    
}
// function aliens(){
//     this.x = width/2;
//     this.y = 40;
//     this.r = 30;

//     this.show = function(x, y){
//         fill(255, 0 ,155);
//         ellipse(this.x, this.y, this.r*2, this.r*2);
//     }
// }
// function Bullet(x, y, r){
//     this.x = x;
//     this.y = y;
//     this.r = r;

//     this.show = function() {
//         fill(255);
//         ellipse(this.x, this.y, this.r*2, this.r*2);
//     }
//         this.keyPressed = function(){
//         if (keyCode === 32){
//             fill (255);
//             ellipse(ship.x, ship.y, 10, 10);
    
//         }
//         this.move = function(){
//             var bulletFired = false;

//             if (bulletFired = true){
//                 this.y -= 10;
//             }

//         }
//     }
// }

