//var letterArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//function randLetter(num){ 
//    return letterArray[rand(letterArray.length)];
//randletter(26);
//
//function randWord(num){
//for (var i=0; i<num; i++){
//
//}
//function randSentence(num)
function rand(num){
    //returns and random number between 0 and 1
    return Math.floor(Math.random()*num);
}

function randLetter(){
    //returns random letter
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    return letters[rand(letters.length)];
}

function randWord(){
    //returns a word of random length between 1 and 15
    var word = '';
    var length = i + rand(15);
    for (var i = 0; 1 < length; i++){
        word = word + randLetter();
    }
    return word;
}
function randsentence(){
    //returns a sentence with a random number of between 1 to 10 words
    var sentence = randWord();
    var length = rand(10);
    for (var i = 0; i < length; i++){
        sentence = sentence + "" + randWord();
    }
    return sentence[0].toUpperCase() + sentence.slice(1,sentence.length) + ".";
}

function pokeAttack(poke1, poke2){
    //takes 2 pokemon arrays and subtratcs attack of poke1 form healthog poke2
    poke2[2] -= poke1[1];
    return poke2;
}
var firstPokemon = ["pikachu", 23, 100];
var secondPokemon = ["charizard", 50, 200];
pokeAttack(firstPokemon, secondPokemon);
//=> ["charizard", 50, 177]