var game_array = [];
var player_array = [];
var level = 0;
var current_button;
var other_count = 0;
var yet_another_count = 1;
const first_interval = 1000;
const second_interval = 1050;
var colors = ["red", "blue", "green", "orange"];

function push_power_on(){
     var audio = new Audio();
	   audio.src = "sounds/button_2.mp3";
	   audio.preload = 'auto';
     audio.play();
     document.getElementById("screen").setAttribute('style', "color: #00FE00");
     document.getElementById("power").onclick = function(){push_power_off()};
   }

function push_power_off(){
      var audio = new Audio();
   	  audio.src = "sounds/button_2.mp3";
   	  audio.preload = 'auto';
      audio.play();
      document.getElementById("screen").setAttribute('style', "color: black");
      document.getElementById("power").onclick = function(){push_power_on()};
  }

function push_hard(){
     var audio = new Audio();
	   audio.src = "sounds/button_2.mp3";
	   audio.preload = 'auto';
     audio.play();
   }

function push_start(){
		audio = new Audio();
		audio.src = "sounds/button_2.mp3";
		audio.preload = 'auto';
		audio.play();
    level = 0;
    count = 0;
    if (level.toString().length === 1){
      document.getElementById("screen").innerHTML = "000" + level;}
    else if (level.toString().length === 2){
      document.getElementById("screen").innerHTML = "00" + level;}
    else if (level.toString().length === 3){
      document.getElementById("screen").innerHTML = "0" + level;}
    else if (level.toString().length === 4){
      document.getElementById("screen").innerHTML = level;}
    game_array = [];
    player_array = [];
		var1 =  setTimeout(add_array_element,1000);
	}

function display_array() {
  audio = new Audio();
  audio.src = "sounds/button_3.mp3";
  audio.preload = 'auto';
  audio.play();
  colour = document.getElementById(game_array[count]);
  colour.style.backgroundColor=game_array[count];
  if(game_array[count] === "red"){
    colour.style.boxShadow = "0 0 0 1px red inset, 0 0 0 2px red inset, 0 7px 0 0 red, 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
  }
  else if(game_array[count] === "blue"){
    colour.style.boxShadow="0 0 0 1px blue inset, 0 0 0 2px blue inset, 0 7px 0 0 blue, 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
  }
  else if(game_array[count] === "green"){
    colour.style.boxShadow = "0 0 0 1px green inset, 0 0 0 2px green inset, 0 7px 0 0 green, 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
  }
  else{
    colour.style.boxShadow =" 0 0 0 1px orange inset, 0 0 0 2px orange inset, 0 7px 0 0 orange, 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
  }
  count++;
  if (count == game_array.length){
    clearInterval(var2);
  }
}

function set_background(color) {
  var element = document.getElementById(color);
  element.style.backgroundColor = "gray";
  element.style.boxShadow = "0 0 0 1px #8E8E8E inset, 0 0 0 2px #777777 inset, 0 7px 0 0 #727272, 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
}
function display_clear(){
  colors.forEach(color => {
  set_background(color);
  });
  if (count == game_array.length){
    clearInterval(var3);
  }
}


function push_first(){
	current_button = "red";
  var audio = new Audio();
  audio.src = "sounds/button_1.mp3";
  audio.preload = 'auto';
  audio.play();
  if (current_button === game_array[other_count] && yet_another_count != game_array.length){
		other_count++;
    yet_another_count++;
  }
  else if (current_button === game_array[other_count] && yet_another_count == game_array.length){
		level = level + 1;
    other_count = 0;
    yet_another_count = 1;
      if (level.toString().length === 1){
        document.getElementById("screen").innerHTML = "000" + level;}
      else if (level.toString().length === 2){
        document.getElementById("screen").innerHTML = "00" + level;}
      else if (level.toString().length === 3){
        document.getElementById("screen").innerHTML = "0" + level;}
      else if (level.toString().length === 4){
        document.getElementById("screen").innerHTML = level;}
		add_array_element();
  }
}

function push_second(){
	current_button = "blue";
  var audio = new Audio();
  audio.src = "sounds/button_1.mp3";
  audio.preload = 'auto';
  audio.play();
  if (current_button === game_array[other_count] && yet_another_count != game_array.length){
		other_count++;
    yet_another_count++;
  }
  else if (current_button === game_array[other_count] && yet_another_count == game_array.length){
		level = level + 1;
    other_count = 0;
    yet_another_count = 1;
    if (level.toString().length === 1){
      document.getElementById("screen").innerHTML = "000" + level;}
    else if (level.toString().length === 2){
      document.getElementById("screen").innerHTML = "00" + level;}
    else if (level.toString().length === 3){
      document.getElementById("screen").innerHTML = "0" + level;}
    else if (level.toString().length === 4){
      document.getElementById("screen").innerHTML = level;}
		add_array_element();
  }
}

function push_third(){
	current_button = "green";
  var audio = new Audio();
  audio.src = "sounds/button_1.mp3";
  audio.preload = 'auto';
  audio.play();
  if (current_button === game_array[other_count] && yet_another_count != game_array.length){
		other_count++;
    yet_another_count++;
  }
  else if (current_button === game_array[other_count] && yet_another_count == game_array.length){
		level = level + 1;
    other_count = 0;
    yet_another_count = 1;
    if (level.toString().length === 1){
      document.getElementById("screen").innerHTML = "000" + level;}
    else if (level.toString().length === 2){
      document.getElementById("screen").innerHTML = "00" + level;}
    else if (level.toString().length === 3){
      document.getElementById("screen").innerHTML = "0" + level;}
    else if (level.toString().length === 4){
      document.getElementById("screen").innerHTML = level;}
		add_array_element();
  }
}

function push_fourth(){
	current_button = "orange";
  var audio = new Audio();
  audio.src = "sounds/button_1.mp3";
  audio.preload = 'auto';
  audio.play();
  if (current_button === game_array[other_count] && yet_another_count != game_array.length){
		other_count++;
    yet_another_count++;
  }
  else if (current_button === game_array[other_count] && yet_another_count == game_array.length){
		level = level + 1;
    other_count = 0;
    yet_another_count = 1;
    if (level.toString().length === 1){
      document.getElementById("screen").innerHTML = "000" + level;}
    else if (level.toString().length === 2){
      document.getElementById("screen").innerHTML = "00" + level;}
    else if (level.toString().length === 3){
      document.getElementById("screen").innerHTML = "0" + level;}
    else if (level.toString().length === 4){
      document.getElementById("screen").innerHTML = level;}
		add_array_element();
  }
}

function add_array_element(){
	result = Math.floor(Math.random() * 4) + 1;
	switch(result){
    case 1:
      game_array.push("red");
      count = 0;
      var2 = setInterval(display_array,first_interval);
      var3 = setInterval(display_clear,second_interval);
    	break;
  	case 2:
      game_array.push("blue");
      count = 0;
      var2 = setInterval(display_array,first_interval);
      var3 = setInterval(display_clear,second_interval);
      break;
  	case 3:
      game_array.push("green");
      count = 0;
      var2 = setInterval(display_array,first_interval);
      var3 = setInterval(display_clear,second_interval);
      break;
  	case 4:
      game_array.push("orange");
      count = 0;
      var2 = setInterval(display_array,first_interval);
      var3 = setInterval(display_clear,second_interval);
      break;
	}
}
