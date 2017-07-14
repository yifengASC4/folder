function superHero(realName, power, justice, height, health){
    this.realname = realName;
    this.power = power;
    this.justice = justice; // boolean
    this.height = height;
    this.health = health;

    this.fight = function(){
        var num = Math.floor(Math.random()*100);
        this.health = this.health - num;
        
    }

    
};

var superMan = new superHero ("Clark Kent", "Super Strength", true, "6'3", 100);

var batMan = new superHero ("Bruce Wayne", "Martial Arts", true, "6'2", 100);

var vs = "Batman versus Superman, Superman wins!";

console.log(batMan)
