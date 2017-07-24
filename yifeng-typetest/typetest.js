var sent = "Send a bolt of lightning";
var res = sent.split("");
    console.log(res);
var i = 0
var points = 0;
var userInput = "";
var millisecond = millis();
var x = 0;
function setup(){
    createCanvas(800,400);
}
function draw(){
    background(150);
    fill(Math.floor(random()*256), Math.floor(random()*256), Math.floor(random()*256));
    textSize(30);
    text("Type below:", 10, 10, 170 ,170);
    fill(Math.floor(random()*256), Math.floor(random()*256), Math.floor(random()*256));
    textSize(30);
    text(sent, 10, 70);
    fill(Math.floor(random()*256), Math.floor(random()*256), Math.floor(random()*256));
    textSize(30);
    text("Current Points = " + points, 10, 350);
    if (points >= 24){
        fill(Math.floor(random()*256), Math.floor(random()*256), Math.floor(random()*256));
        textSize(30);
        text("Congradulations, you won with perfect points!!!!!", 10, 230);
    }
    // fill(Math.floor(random()*256), Math.floor(random()*256), Math.floor(random()*256));
    // textSize(20);
    // text("Milliseconds \nrunning: \n" + millisecond, 600, 40)
}
function keyTyped(){
    switch(key){
        case res[i]:   
        points++;
        userInput+=res[i];
        console.log("hit");
        i++;
        case !res[i]:
        points++;
        userInput==res[i];
    }  
    if (userInput!=res[i]){
        points-=1;
    }
    if (points < 0){
        console.log("GAME OVER!!!!");
        location.reload();
    }
    if (points == 24){
        points+=1;
    }
}
function mousePressed(){
   clear();
   points = 0;
   if (points <= 0){
       location.reload();
   }
}
