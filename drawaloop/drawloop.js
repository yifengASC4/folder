function setup(){
    createCanvas(400,400);
}
var x = 0;
function draw(){
    background(200);
    ellipse(x, 200, 100, 100);
    x++;
    ellipse(200, x, 16, 16);
    x++;
    ellipse(x, x, 16, 16);
    x++;
    ellipse(200, 200, x, x);
    x++;
    ellipse(200, 200, x/10, x/10);
    x++;
    ellipse(200, 200, x/5, x/5);
    x++;
}
 fill(30);
    textSize(30);
    text(strings[0], 10, 100);
    fill(30);
    textSize(30);
    text(strings[1], 10, 130);
    fill(30);
    textSize(30);
    text(strings[2], 10, 150);
    fill(30);
    textSize(30);
    text(strings[3], 10, 180);
    fill(30);
    textSize(30);
    text(strings[4], 10, 210);