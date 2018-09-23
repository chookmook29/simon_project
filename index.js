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
    level = 0;
    document.getElementById("screen").innerHTML = level;
    game_array = [];
    player_array = [];
		initialize_array();
	}
function initialize_array(){
	result = Math.floor(Math.random() * 4) + 1;
	switch(result){
	case 1:
    game_array.push("red");
	red = document.getElementById("red");
	red.style.backgroundColor="red";
	red.style.boxShadow="0 0 0 1px red inset, 0 0 0 2px red inset, 0 7px 0 0 red, 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
	setTimeout(default_colour, 500)
	break;
	case 2:
    game_array.push("blue");
	blue = document.getElementById("blue");
	blue.style.backgroundColor="blue";
	blue.style.boxShadow="0 0 0 1px blue inset, 0 0 0 2px blue inset, 0 7px 0 0 blue, 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
	setTimeout(default_colour, 500)
	break;
	case 3:
    game_array.push("green");
	green = document.getElementById("green");
	green.style.backgroundColor="green";
	green.style.boxShadow="0 0 0 1px green inset, 0 0 0 2px green inset, 0 7px 0 0 green, 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
	setTimeout(default_colour, 500)
	break;
	case 4:
    game_array.push("orange");
	orange = document.getElementById("orange");
	orange.style.backgroundColor="orange";
	orange.style.boxShadow="0 0 0 1px orange inset, 0 0 0 2px orange inset, 0 7px 0 0 orange, 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
	setTimeout(default_colour, 500)
	break;
	}
}
function push_red(){
	current_button = "red";
	if (current_button == game_array[level]){
		level = level + 1;
		document.getElementById("screen").innerHTML = level;
		add_array_element();
}
}
function push_blue(){
	current_button = "blue";
	if (current_button == game_array[level]){
		level = level + 1;
		document.getElementById("screen").innerHTML =  level;
		add_array_element();
}
}
function push_green(){
	current_button = "green";
	if (current_button == game_array[level]){
		level = level + 1;
		document.getElementById("screen").innerHTML =  level;
		add_array_element();
}
}
function push_orange(){
	current_button = "orange";
	if (current_button == game_array[level]){
		level = level + 1;
		document.getElementById("screen").innerHTML =  level;
		add_array_element();
}
}
function default_colour(){
	red = document.getElementById("red");
	red.style.backgroundColor="gray";
	red.style.boxShadow="0 0 0 1px #8E8E8E inset, 0 0 0 2px #777777 inset, 0 7px 0 0 #727272, 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
	blue = document.getElementById("blue");
	blue.style.backgroundColor="gray";
	blue.style.boxShadow="0 0 0 1px #8E8E8E inset, 0 0 0 2px #777777 inset, 0 7px 0 0 #727272, 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
	green = document.getElementById("green");
	green.style.backgroundColor="gray";
	green.style.boxShadow="0 0 0 1px #8E8E8E inset, 0 0 0 2px #777777 inset, 0 7px 0 0 #727272, 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
	orange = document.getElementById("orange");
	orange.style.backgroundColor="gray";
	orange.style.boxShadow="0 0 0 1px #8E8E8E inset, 0 0 0 2px #777777 inset, 0 7px 0 0 #727272, 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
}
function add_array_element(){
	result = Math.floor(Math.random() * 4) + 1;
	switch(result){
	case 1:
    game_array.push("red");
	red = document.getElementById("red");
	red.style.backgroundColor="red";
	red.style.boxShadow="0 0 0 1px red inset, 0 0 0 2px red inset, 0 7px 0 0 red, 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
	setTimeout(default_colour, 500)
	break;
	case 2:
    game_array.push("blue");
	blue = document.getElementById("blue");
	blue.style.backgroundColor="blue";
	blue.style.boxShadow="0 0 0 1px blue inset, 0 0 0 2px blue inset, 0 7px 0 0 blue, 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
	setTimeout(default_colour, 500)
	break;
	case 3:
    game_array.push("green");
	green = document.getElementById("green");
	green.style.backgroundColor="green";
	green.style.boxShadow="0 0 0 1px green inset, 0 0 0 2px green inset, 0 7px 0 0 green, 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
	setTimeout(default_colour, 500)
	break;
	case 4:
    game_array.push("orange");
	orange = document.getElementById("orange");
	orange.style.backgroundColor="orange";
	orange.style.boxShadow="0 0 0 1px orange inset, 0 0 0 2px orange inset, 0 7px 0 0 orange, 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
	setTimeout(default_colour, 500)
	break;
	}
}
