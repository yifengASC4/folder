var ship;
var asteroids = [];
var lasers = [];
var gameover = false;
function setup() {
    createCanvas(1349, 755);
    ship = new Ship();
    for (var j = 0; j < 15; j++) {
        asteroids.push(new Asteroid());
    }

}
function draw() {
    background(0);

    if (gameover == false) {
        for (var i = 0; i < asteroids.length; i++) {
            if (ship.hits(asteroids[i])) {
                gameover = true;
            }
            asteroids[i].render();
            asteroids[i].update();
            asteroids[i].edges();
        }
        for (var i = lasers.length - 1; i >= 0; i--) {
            lasers[i].render();
            lasers[i].update();
            if (lasers[i].offscreen()) {
                lasers.splice(i, 1);
            } else {
                for (var k = asteroids.length - 1; k >= 0; k--) {
                    if (lasers[i].hits(asteroids[k])) {
                        if (asteroids[k].r > 20) {
                            var newAsteroids = asteroids[k].breakup();
                            asteroids = asteroids.concat(newAsteroids);
                        }
                        asteroids.splice(k, 1);
                        lasers.splice(i, 1);
                        break;
                    }
                }
            }
        }

        ship.render();
        ship.turn();
        ship.update();
        ship.edges();
    } else {
        fill(70, 130, 180);
        textSize(100);
        text(" GAME OVER ", width / 3.5, height / 3);
        fill(70, 130, 180);
        textSize(60);
        text(" YOU LOSE TOO BAD =(!! ", width / 4, height / 2);
    }
    if (asteroids.length == 0) {
        fill(70, 130, 180);
        textSize(100);
        text(" GAME OVER ", width / 3.5, height / 3);
        fill(70, 130, 180);
        textSize(50);
        text(" YOU WIN!! ", width / 2.5, height / 2);
    }

}

function keyReleased() {
    ship.setRotation(0);
    ship.boosting(false);
}
function keyPressed() {
    if (key == ' ') {
        lasers.push(new Laser(ship.pos, ship.heading));
    } else if (keyCode == RIGHT_ARROW) {
        ship.setRotation(0.1);
    } else if (keyCode == LEFT_ARROW) {
        ship.setRotation(-0.1);
    } else if (keyCode == UP_ARROW) {
        ship.boosting(true);
    }
}
function reset() {
    window.location.reload();
}