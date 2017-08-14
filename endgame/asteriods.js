function Asteroid(pos, r, word){
    if(pos){
        this.pos = pos.copy();
    }else{
        this.pos = createVector(random(width), random(height));
    }
    if (r) {
        this.r = r*0.5;
    }else{
        this.r = random(35, 50);
    }

    this.word = randomWord();
      
    this.vel = p5.Vector.random2D();
  
    this.total = floor(random(5, 20));
    
    this.update = function(){
        this.pos.add(this.vel);
    }
    this.render = function(){
        push();
        stroke(255);
        noFill();
        translate(this.pos.x, this.pos.y);
        // ellipse(0,0, this.r * 2)
        beginShape();
        for (var j=0; j<this.total; j++){
            var angle = map(j, 0, this.total, 0, TWO_PI); 
            var x = this.r *cos(angle);
            var y = this.r *sin(angle);
            vertex(x, y);
            
        }
        text(this.word, x - this.r, y + this.r / 5);
        endShape(CLOSE);
        pop();
    }

    this.breakup = function(){
        var newA = [];
        newA[0] = new Asteroid(this.pos, this.r);
        newA[1] = new Asteroid(this.pos, this.r);
        return newA;
    }
    this.edges = function(){
        if (this.pos.x > width + this.r) {
            this.pos.x = -this.r;
        }else if (this.pos.x < -this.r) {
            this.pos.x = width + this.r;
        }
        if (this.pos.y > height + this.r) {
            this.pos.y = -this.r;
        }else if (this.pos.y < -this.r) {
            this.pos.y = height + this.r;
        }
    }
}

function randomWord(){
    var words = ["venus", "mercury", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
    var random = words[Math.floor(Math.random()*8)];
    return random;
}
        