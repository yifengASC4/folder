$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
}
function setup(){
          createCanvas(500,500);
          background(220);
          var name = getParam("name") || "Bob";
          var lives = getParam("lives") || 5;
          var gold = getParam("gold") || 100;
          
          text("Name : "+ name, 200,100);
          text("Lives : "+ lives, 200,200);
          text("Gold : "+ gold, 200,300);
}