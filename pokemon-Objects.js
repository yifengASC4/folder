var prompt = require('prompt-sync')();
var arr = [
    {
        atk: 100,
        def: 200,
        hp: 150,
        legend: false,
        name: "pikachu",
        type: "electric"
    },
    {
        atk: 100,
        def: 200,
        hp: 150,
        legend: false,
        name: "electabuzz",
        type: "electric"
    },
    {
        atk: 100,
        def: 200,
        hp: 150,
        legend: false,
        name: "raichu",
        type: "electric"
    },
    {
        atk: 100,
        def: 200,
        hp: 150,
        legend: false,
        name: "magnemite",
        type: "electric"
    },
    {
        atk: 100,
        def: 200,
        hp: 150,
        legend: false,
        name: "magnetron",
        type: "electric"
    },
    {
        atk: 100,
        def: 200,
        hp: 150,
        legend: false,
        name: "electrode",
        type: "electric"       
    }
];

function printRoster(arr){
    for (var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
printRoster(arr);
function pokemonAttacked(arr){
    for (var i=0; i<arr.length; i++){
        arr[i].hp -= 10
    }
}
function promptTheUser(){
    HpSubtracted = prompt("How much hp will you subtract?");
    var randNum = Math.floor(Math.random()*arr.length)


    var randomPokemon = arr[randNum];
    randomPokemon.hp -= HpSubtracted;
    console.log(randomPokemon.name + " lost " + HpSubtracted + " hp ");
    if (randomPokemon.hp <= 0){
        removePokemon(randNum) 
    } 
    else if ( randomPokemon.hp > 0){
        console.log("Super effective, they are still alive");
    }
    
}

function removePokemon(randNum){
        
        var randomPokemon = arr[randNum];
        arr.splice(randNum, 1);
        console.log(randomPokemon.name + " has retired from the team ");
    }
while (arr.length > 0){
    promptTheUser();
}
if (arr.length == 0){
    console.log("Game Over")
}