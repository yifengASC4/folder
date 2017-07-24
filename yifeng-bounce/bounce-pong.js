var width = 1000;
var height = 700;
var xspeed = 5;
var yspeed = 7;
// var x2 = 10;
// var y2 = 350;
// var w = 10;
// var h = 50;
var paddle;
var ball;
// var left;
// var right;
function setup(){
    createCanvas(1000,700);
    ball = new Ball(width/2, height/2, 5, 3, 16);
    // left = new paddle(0);
    // right = new paddle(width);
}
function show(){
    fill(255);
    
}

function Ball(x,y,xV, yV, radius){
    this.x = x; 
    this.y = y;
    this.xV =  xV;
    this.yV = yV;
    this.radius = radius;
    this.update = function(){
        if(this.contactPaddle()){
            this.x = -this.x;
        }
        else if(this.contactTopOrBotWall()){
            this.y = -this.y;
        }
        else if(this.contactLeftOrRightWall()){
            this.x = -this.x;
        }
         this.x = this.x + this.xV;
         this.y = this.y + this.yV;
        
    // this.show();
}
    this.show = function(){
        ellipse(this.x, this.y, this.radius, this.radius);
        
    }

    this.contactPaddle = function(){
        return (this.x + this.radius + this.xV <= 80 && (this.y + this.radius + this.xV <= mouseY + 80 ||
                                                     this.y - this.radius - this.yV >= mouseY - 80));
    }
    this.contactTopOrBotWall = function(){
        return (this.y + this.radius + this.yV <= 0 || this.y - this.radius - this.yV >= height);
    }
    this.contactLeftOrRightWall = function(){
        return (this.x - this.radius - this.xV <= 0 || this.x + this.radius + this.xV >= height);
    }
        
}
function draw(){
    background(0);
    paddle = new Paddle(50, mouseY, 20, 100);
    paddle.show2();
    ball.show();
    ball.update();
    // show2();

}

function reset(){
    x = width/2;
    y = height/2;
}
function Paddle(x2, y2, w, h) {
    this.x2 = x2;
    this.y2 = y2;
    this.w = w;
    this.h = h;

     this.show2 = function(){
     fill(255);
     rectMode(CENTER);
     rect(this.x2, this.y2, this.w, this.h);
}

}
