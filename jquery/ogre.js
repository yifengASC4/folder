var HP = 100;
var gold = 0;
var numberDefeated= 0;

function updateStats(){
    $('#stats').text(" HP: " + HP + " // Gold: " + gold + " // Titan's Slain: " + numberDefeated);
}
function setup(){
    $("body").append(
        "<h1>Welcome to Titan Figther v.1.0</h1>"
    );
    $("body").append(
        "<div><h3>STATS</h3><p id='stats'></p></div>"
    );
    $("body").append(
        "<button id='play' onclick='attack()'>ATTACK THE TITAN</button>"
        

    );
    $("body").append(
        "<div id='Ogres'></div>"
    );

    updateStats();
}
$(document).ready(setup);
function attack(){
    if (HP>0){
        if(Math.random()*100>gold){
            gold = gold + 10;
            numberDefeated++;
            $('#Ogres').prepend(
                "<p style='color:blue'>You Won! + 10 gold.</p>"
            );
        }else{
            gold--;
            HP--;
            $('#Ogres').prepend(
                "<p style='color:red'>You Lost! - 1 gold.</p>"
            );
        }
        updateStats();
        spawnOgre();
    }else{
        $('#Ogres').prepend(
            "<h1>GAME OVER!</h1>"
        );
    }
    
}
function spawnOgre(){
    $('#Ogres').prepend(
        "<img src='https://i.ytimg.com/vi/SIwwJMmskMs/maxresdefault.jpg'>"
    );
}
$('document').ready(function () {
    $('#play').click(function () {
        var audio = {};
        audio["walk"] = new Audio();
        audio["walk"].src = "http://www.rangde.org/static/bell-ring-01.mp3"
        audio["walk"].addEventListener('load', function () {
            audio["walk"].play();
        });
    });
});   