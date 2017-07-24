function setup(){
    createCanvas(1250,750);
    background(0);
    colorMode(RGB, 255);
}
function mouseDragged(){
    noStroke();
    fill(Math.floor(random()*256), Math.floor(random()*256), Math.floor(random()*256));
    ellipse (mouseX, mouseY, 50, 45, random(50, 45)) ;
}
function mousePressed(){
    clear();
}