var ship;
var asteroids = [];
function setup(){
    createCanvas(1350, 785);
    ship = new Ship();
    for (var j=0; j< 15; j++){
        asteroids.push(new Asteroid());
    }
    
}
function draw(){
    background(0);
    ship.render();
    ship.turn();
    ship.update();
    ship.edges();

    for (var i=0; i<asteroids.length; i++){
        asteroids[i].render();
    }
}

function keyReleased(){
    ship.setRotation(0);
    ship.boosting(false);
}
function keyPressed(){
    if (keyCode == RIGHT_ARROW) {
        ship.setRotation(0.1);
    }else if (keyCode == LEFT_ARROW) {
        ship.setRotation(-0.1);
    }else if (keyCode == UP_ARROW) {
        ship.boosting(true);
    }
}

