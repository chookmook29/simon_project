var game_array = [];
var player_array = [];
var level = 0;
function push_red(){
       var audio = new Audio();
	   audio.src = "sounds/button_1.mp3";
	   audio.preload = 'auto';
       audio.play();
                 }
function push_blue(){
       var audio = new Audio();
	   audio.src = "sounds/button_1.mp3";
	   audio.preload = 'auto';
       audio.play();
                 }
function push_green(){
       var audio = new Audio();
	   audio.src = "sounds/button_1.mp3";
	   audio.preload = 'auto';
       audio.play();
                 }
function push_orange(){
       var audio = new Audio();
	   audio.src = "sounds/button_1.mp3";
	   audio.preload = 'auto';
       audio.play();
                 }
function push_strict(){
       var audio = new Audio();
	   audio.src = "sounds/button_2.mp3";
	   audio.preload = 'auto';
       audio.play();
                 }
function push_reset(){
       var audio = new Audio();
	   audio.src = "sounds/button_2.mp3";
	   audio.preload = 'auto';
       audio.play();
                 }
function start_game(){
		audio = new Audio();
		audio.src = "sounds/button_2.mp3";
		audio.preload = 'auto';
		audio.play();
		array_add();
	}
function array_add(){
	result = Math.floor(Math.random() * 4) + 1;
	switch(result){
	case 1:
    game_array.push("red");
	red = document.getElementById("red");
	red.style.backgroundColor="red";
	setTimeout(default_colour, 500)
	break;
	case 2:
    game_array.push("blue");
	blue = document.getElementById("blue");
	blue.style.backgroundColor="blue";
	setTimeout(default_colour, 500)
	break;
	case 3:
    game_array.push("green");
	green = document.getElementById("green");
	green.style.backgroundColor="green";
	setTimeout(default_colour, 500)
	break;
	case 4:
    game_array.push("orange");
	orange = document.getElementById("orange");
	orange.style.backgroundColor="orange";
	setTimeout(default_colour, 500)
	break;
	}  
}
function push_red(){
	current_button = "red";
	if (current_button == game_array[0]){
		level = level + 1;
		document.getElementById("screen").innerHTML = level;
		game_array = [];
}
}
function push_blue(){
	current_button = "blue";
	if (current_button == game_array[0]){
		level = level + 1;
		document.getElementById("screen").innerHTML =  level;
		game_array = [];
}
}
function push_green(){
	current_button = "green";
	if (current_button == game_array[0]){
		level = level + 1;
		document.getElementById("screen").innerHTML =  level;
		game_array = [];
}
}
function push_orange(){
	current_button = "orange";
	if (current_button == game_array[0]){
		level = level + 1;
		document.getElementById("screen").innerHTML =  level;
		game_array = [];
}
}
function default_colour(){
	red = document.getElementById("red");
	red.style.backgroundColor="gray";
	blue = document.getElementById("blue");
	blue.style.backgroundColor="gray";
	green = document.getElementById("green");
	green.style.backgroundColor="gray";
	orange = document.getElementById("orange");
	orange.style.backgroundColor="gray";
}
	