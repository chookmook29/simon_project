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
	break;
	case 2:
    game_array.push("green");
	break;
	case 3:
    game_array.push("blue");
	break;
	case 4:
    game_array.push("orange");
	break;
	}      
}