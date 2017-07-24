function setup(){
    createCanvas(1250,750);
    background(0);
    var radius = 100
    fill(Math.floor(random()*256), Math.floor(random()*256), Math.floor(random()*256));
    ellipse(width/3, height - radius, radius, radius);
    fill(Math.floor(random()*256), Math.floor(random()*256), Math.floor(random()*256));
    ellipse(width/2, height - radius, radius, radius);
    fill(Math.floor(random()*256), Math.floor(random()*256), Math.floor(random()*256));
    ellipse(width - radius*4.2, height - radius, radius, radius);
}

function mousePressed(){
    var radius = 100 
 //   fill(Math.floor(random()*256), Math.floor(random()*256), Math.floor(random()*256));
 //   ellipse(width/3, height - radius, radius, radius);
// 
 //   fill(Math.floor(random()*256), Math.floor(random()*256), Math.floor(random()*256));
  //  ellipse(width/2, height - radius, radius, radius);
    
   // fill(Math.floor(random()*256), Math.floor(random()*256), Math.floor(random()*256));
   // ellipse(width - radius*4.2, height - radius, radius, radius);
    
    if (mousePressed())
    console.log();
    console.log(width/3 + radius);
    console.log(mouseX + " " + mosueY);
}
function mouseDragged(){
    noStroke();
    fill(Math.floor(random()*256), Math.floor(random()*256), Math.floor(random()*256));
    ellipse (mouseX, mouseY, 50, 45, random(50, 45)) ;
}
function keyPressed(){
    if(keyCode === UP_ARROW);
    clear();
    background(0);
}