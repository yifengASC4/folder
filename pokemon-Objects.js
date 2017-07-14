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
function pokemonAttacked(arr){
    for (var i=0; i<arr.length; i++){
        arr[i].hp -= 10
    }
}
function subtractHp(){
    var randomPokemon = arr[(Math.floor(Math.random()*arr.length))];
    HpSubtracted = prompt("How much hp will you subtract?");
    randomPokemon.hp -= HpSubtracted;
    console.log(randomPokemon.name + " lost " + HpSubtracted + " hp ");
}
subtractHp();
function removePokemon(){
    for (var i=0; i<arr.length; i++){
        var randomPokemon = arr[Math.floor(Math.random()*arr.length)];
        arr[i] = arr[i] -= randomPokemon; 
        console.log(randomPokemon.name + " has retired from the team ");
    }
}
removePokemon()
printRoster(arr);