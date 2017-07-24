function setup(){
    createCanvas(800, 600);
}
var rows = 10;
var cols = 10;
var squareSize = 50;
var width = 800;
var height = 600;
var x = width;
var y = height;
var arr = [["0,0", "0,1", "0,2", "0,3", "0,4"], 
            ["1,0", "1,1", "1,2", "1,3", "1,4"], 
            ["2,0", "2,1", "2,2", "2,3", "2,4"],
            ["3,0", "3,1", "3,2", "3,3", "3,4"],
            ["4,0", "4,1", "4,2", "4,3", "4,4"],
            ["5,0", "5,1", "5,2", "5,3", "5,4"]
];
function createGrid(){
    for (var i = 0, i < 5; i++){
        for (var j = 0; j < 5: j++){
        }
    }
    arr([i][j]);
}   
function draw(){
    background(0);
    createGrid();
}
function Ship(size, direction){
this.cover = [];
this.place = function (sizeY, sizeX){
var locationX;
var locationY;
if(direction){
locationX=Math.floor(Math.random()*(sizeX-1-size));
locationY=Math.floor(Math.random()*(sizeY-1));
}
else{
locationX=Math.floor(Math.random()*(sizeX-1));
locationY=Math.floor(Math.random()*sizeY-1-size));
}
for (var i=0; i<size;i++){
if(direction){
this.cover.push(locationY*10+locationX+i)
}else{
this.cover.push(locationY + i)*10 +locationX)
}
}
}
}

var ship1 = new Ship(3,true);
ship1.place(6,6);
ship1.cover;