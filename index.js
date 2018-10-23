var game_array = []; // Variables initialized, to be used in different scopes
var level = 0;
var current_button;
var count = 0;
var player_count = 0;
var game_a_length_check = 1;
const first_interval = 1000;
const second_interval = 1080;
var array_visible;
var array_hidden;
var colors = ["red", "blue", "green", "orange"];
var red;
var blue;
var green;
var orange;

function push_power_on(){ // Function that switches screen on and activates Start and Hard buttons
     var audio = new Audio();
	   audio.src = "sounds/button_2.wav";
	   audio.preload = 'auto';
     audio.play();
     document.getElementById("screen").innerHTML = "0000"
     document.getElementById("start").onclick = function(){push_start()};
     document.getElementById("hard").onclick = function(){push_hard()};
     document.getElementById("screen").setAttribute('style', "color: #00FE00");
     document.getElementById("power").onclick = function(){push_power_off()};
   }

function push_power_off(){ // Deactivates screen and Start, Hard buttons
      var audio = new Audio();
   	  audio.src = "sounds/button_2.wav";
   	  audio.preload = 'auto';
      audio.play();
      clearInterval(array_visible);
      clearInterval(array_hidden);
      document.getElementById("start").onclick = function(){push_empty()};
      document.getElementById("hard").onclick = function(){push_empty()};
      document.getElementById("screen").setAttribute('style', "color: black");
      document.getElementById("screen").innerHTML = "8888"
      document.getElementById("power").onclick = function(){push_power_on()};
  }

function push_hard(){ // Hard mode initial function
      let audio = new Audio();
      audio.src = "sounds/button_2.wav";
      audio.preload = 'auto';
      audio.play();
      count = 0;
      level = 0;
      clearInterval(array_visible);
      clearInterval(array_hidden);
      if (level.toString().length === 1){
        document.getElementById("screen").innerHTML = "000" + level;}
      else if (level.toString().length === 2){
        document.getElementById("screen").innerHTML = "00" + level;}
      else if (level.toString().length === 3){
        document.getElementById("screen").innerHTML = "0" + level;}
      else if (level.toString().length === 4){
        document.getElementById("screen").innerHTML = level;}
      game_array = [];
  		var1 =  setTimeout(add_array_hard,1000);
   }

function push_start(){ // Normal mode initial function
		let audio = new Audio();
		audio.src = "sounds/button_2.wav";
		audio.preload = 'auto';
		audio.play();
    count = 0;
    level = 0;
    var hsl_red = String(Math.floor(Math.random() * 361));
    red = "hsl(" + hsl_red + ", 60%, 50%)";
    var hsl_blue = String(Math.floor(Math.random() * 361));
    blue = "hsl(" + hsl_blue + ", 60%, 50%)";
    var hsl_green = String(Math.floor(Math.random() * 361));
    green = "hsl(" + hsl_green + ", 60%, 50%)";
    var hsl_orange = String(Math.floor(Math.random() * 361));
    orange = "hsl(" + hsl_orange + ", 60%, 50%)";
    clearInterval(array_visible);
    clearInterval(array_hidden);
    if (level.toString().length === 1){
      document.getElementById("screen").innerHTML = "000" + level;}
    else if (level.toString().length === 2){
      document.getElementById("screen").innerHTML = "00" + level;}
    else if (level.toString().length === 3){
      document.getElementById("screen").innerHTML = "0" + level;}
    else if (level.toString().length === 4){
      document.getElementById("screen").innerHTML = level;}
    game_array = [];
		var1 =  setTimeout(add_array_element,1000);
	}
function push_empty(){ // Used for Start, Hard buttons after power switches off
  		let audio = new Audio();
  		audio.src = "sounds/button_2.wav";
  		audio.preload = 'auto';
  		audio.play();
  	}

function display_array() { // Modifies colour of DOM elements based on random array from "add_array_element()", at interval, loops and stops after last element is displayed
  let audio = new Audio();
  audio.src = "sounds/button_3.wav";
  audio.preload = 'auto';
  audio.play();
  let colour = document.getElementById(game_array[count]);
  colour.style.backgroundColor=game_array[count];
  if(game_array[count] === "red"){
    colour.style.backgroundColor = red;
    colour.style.boxShadow = "0 0 0 1px " + red + "inset, 0 0 0 2px " + red + "inset, 0 7px 0 0 " + red + ", 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
  }
  else if(game_array[count] === "blue"){
    colour.style.backgroundColor = blue;
    colour.style.boxShadow = "0 0 0 1px " + blue + "inset, 0 0 0 2px " + blue + "inset, 0 7px 0 0 " + blue + ", 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
  }
  else if(game_array[count] === "green"){
    colour.style.backgroundColor = green;
    colour.style.boxShadow = "0 0 0 1px " + green + "inset, 0 0 0 2px " + green + "inset, 0 7px 0 0 " + green + ", 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
  }
  else{
    colour.style.backgroundColor = orange;
    colour.style.boxShadow = "0 0 0 1px " + orange + "inset, 0 0 0 2px " + orange + "inset, 0 7px 0 0 " + orange + ", 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
  }
  count++;
  if (count == game_array.length){
    document.getElementById("first").onclick = function(){push_first()};
    document.getElementById("second").onclick = function(){push_second()};
    document.getElementById("third").onclick = function(){push_third()};
    document.getElementById("fourth").onclick = function(){push_fourth()};
    clearInterval(array_visible);
  }
}
function display_array_hard() { // Same as "display_array", but elements taken from "add_array_hard", random colours every instance
  let audio = new Audio();
  audio.src = "sounds/button_3.wav";
  audio.preload = 'auto';
  audio.play();
  let colour = document.getElementById(game_array[count]);
  if(game_array[count] === "red"){
    let hsl = String(Math.floor(Math.random() * 361));
    colour.style.backgroundColor = "hsl(" + hsl + ", 60%, 50%)";
    colour.style.boxShadow = "0 0 0 1px " + "hsl(" + hsl + ", 60%, 50%)" + "inset, 0 0 0 2px " + "hsl(" + hsl + ", 60%, 50%)" + "inset, 0 7px 0 0 " + "hsl(" + hsl + ", 60%, 50%)" + ", 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
  }
  else if(game_array[count] === "blue"){
    let hsl = String(Math.floor(Math.random() * 361));
    colour.style.backgroundColor = "hsl(" + hsl + ", 60%, 50%)";
    colour.style.boxShadow = "0 0 0 1px " + "hsl(" + hsl + ", 60%, 50%)" + "inset, 0 0 0 2px " + "hsl(" + hsl + ", 60%, 50%)" + "inset, 0 7px 0 0 " + "hsl(" + hsl + ", 60%, 50%)" + ", 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
  }
  else if(game_array[count] === "green"){
    let hsl = String(Math.floor(Math.random() * 361));
    colour.style.backgroundColor = "hsl(" + hsl + ", 60%, 50%)";
    colour.style.boxShadow = "0 0 0 1px " + "hsl(" + hsl + ", 60%, 50%)" + "inset, 0 0 0 2px " + "hsl(" + hsl + ", 60%, 50%)" + "inset, 0 7px 0 0 " + "hsl(" + hsl + ", 60%, 50%)" + ", 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
  }
  else{
    let hsl = String(Math.floor(Math.random() * 361));
    colour.style.backgroundColor = "hsl(" + hsl + ", 60%, 50%)";
    colour.style.boxShadow = "0 0 0 1px " + "hsl(" + hsl + ", 60%, 50%)" + "inset, 0 0 0 2px " + "hsl(" + hsl + ", 60%, 50%)" + "inset, 0 7px 0 0 " + "hsl(" + hsl + ", 60%, 50%)" + ", 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
  }
  count++;
  if (count == game_array.length){
    document.getElementById("first").onclick = function(){first_hard()};
    document.getElementById("second").onclick = function(){second_hard()};
    document.getElementById("third").onclick = function(){third_hard()};
    document.getElementById("fourth").onclick = function(){fourth_hard()};
    clearInterval(array_visible);
  }
}
function set_background(color) { // Used in "display_clear()" function, default colour and shadow declaration
  var element = document.getElementById(color);
  element.style.backgroundColor = "gray";
  element.style.boxShadow = "0 0 0 1px #8E8E8E inset, 0 0 0 2px #777777 inset, 0 7px 0 0 #727272, 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
}
function display_clear(){ // Changes DOM elements colour to default gray
  colors.forEach(color => {
  set_background(color);
  });
  if (count == game_array.length){
    clearInterval(array_hidden);
  }
}


function push_first(){ // Checks if player's button is from the same column as array element
	current_button = "red";
  var audio = new Audio();
  audio.src = "sounds/button_1.wav";
  audio.preload = 'auto';
  audio.play();
  if (current_button === game_array[player_count] && game_a_length_check != game_array.length){
		player_count++;
    game_a_length_check++;
  }
  else if (current_button === game_array[player_count] && game_a_length_check == game_array.length){
		level = level + 1;
    player_count = 0;
    game_a_length_check = 1;
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
  audio.src = "sounds/button_1.wav";
  audio.preload = 'auto';
  audio.play();
  if (current_button === game_array[player_count] && game_a_length_check != game_array.length){
		player_count++;
    game_a_length_check++;
  }
  else if (current_button === game_array[player_count] && game_a_length_check == game_array.length){
		level = level + 1;
    player_count = 0;
    game_a_length_check = 1;
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
  audio.src = "sounds/button_1.wav";
  audio.preload = 'auto';
  audio.play();
  if (current_button === game_array[player_count] && game_a_length_check != game_array.length){
		player_count++;
    game_a_length_check++;
  }
  else if (current_button === game_array[player_count] && game_a_length_check == game_array.length){
		level = level + 1;
    player_count = 0;
    game_a_length_check = 1;
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
  audio.src = "sounds/button_1.wav";
  audio.preload = 'auto';
  audio.play();
  if (current_button === game_array[player_count] && game_a_length_check != game_array.length){
		player_count++;
    game_a_length_check++;
  }
  else if (current_button === game_array[player_count] && game_a_length_check == game_array.length){
		level = level + 1;
    player_count = 0;
    game_a_length_check = 1;
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
function first_hard(){  // Checks if player's button is from the same column as array element in hard mode
	current_button = "red";
  var audio = new Audio();
  audio.src = "sounds/button_1.wav";
  audio.preload = 'auto';
  audio.play();
  if (current_button === game_array[player_count] && game_a_length_check != game_array.length){
		player_count++;
    game_a_length_check++;
  }
  else if (current_button === game_array[player_count] && game_a_length_check == game_array.length){
		level = level + 1;
    player_count = 0;
    game_a_length_check = 1;
    game_array = [];
      if (level.toString().length === 1){
        document.getElementById("screen").innerHTML = "000" + level;}
      else if (level.toString().length === 2){
        document.getElementById("screen").innerHTML = "00" + level;}
      else if (level.toString().length === 3){
        document.getElementById("screen").innerHTML = "0" + level;}
      else if (level.toString().length === 4){
        document.getElementById("screen").innerHTML = level;}
		add_array_hard();
  }
}
function second_hard(){
	current_button = "blue";
  var audio = new Audio();
  audio.src = "sounds/button_1.wav";
  audio.preload = 'auto';
  audio.play();
  if (current_button === game_array[player_count] && game_a_length_check != game_array.length){
		player_count++;
    game_a_length_check++;
  }
  else if (current_button === game_array[player_count] && game_a_length_check == game_array.length){
		level = level + 1;
    player_count = 0;
    game_a_length_check = 1;
    game_array = [];
      if (level.toString().length === 1){
        document.getElementById("screen").innerHTML = "000" + level;}
      else if (level.toString().length === 2){
        document.getElementById("screen").innerHTML = "00" + level;}
      else if (level.toString().length === 3){
        document.getElementById("screen").innerHTML = "0" + level;}
      else if (level.toString().length === 4){
        document.getElementById("screen").innerHTML = level;}
		add_array_hard();
  }
}
function third_hard(){
	current_button = "green";
  var audio = new Audio();
  audio.src = "sounds/button_1.wav";
  audio.preload = 'auto';
  audio.play();
  if (current_button === game_array[player_count] && game_a_length_check != game_array.length){
		player_count++;
    game_a_length_check++;
  }
  else if (current_button === game_array[player_count] && game_a_length_check == game_array.length){
		level = level + 1;
    player_count = 0;
    game_a_length_check = 1;
    game_array = [];
      if (level.toString().length === 1){
        document.getElementById("screen").innerHTML = "000" + level;}
      else if (level.toString().length === 2){
        document.getElementById("screen").innerHTML = "00" + level;}
      else if (level.toString().length === 3){
        document.getElementById("screen").innerHTML = "0" + level;}
      else if (level.toString().length === 4){
        document.getElementById("screen").innerHTML = level;}
		add_array_hard();
  }
}
function fourth_hard(){
	current_button = "orange";
  var audio = new Audio();
  audio.src = "sounds/button_1.wav";
  audio.preload = 'auto';
  audio.play();
  if (current_button === game_array[player_count] && game_a_length_check != game_array.length){
		player_count++;
    game_a_length_check++;
  }
  else if (current_button === game_array[player_count] && game_a_length_check == game_array.length){
		level = level + 1;
    player_count = 0;
    game_a_length_check = 1;
    game_array = [];
      if (level.toString().length === 1){
        document.getElementById("screen").innerHTML = "000" + level;}
      else if (level.toString().length === 2){
        document.getElementById("screen").innerHTML = "00" + level;}
      else if (level.toString().length === 3){
        document.getElementById("screen").innerHTML = "0" + level;}
      else if (level.toString().length === 4){
        document.getElementById("screen").innerHTML = level;}
		add_array_hard();
  }
}
function add_array_element(){ // Adds array element and sends to "display_array()" and "display_clear()"
  document.getElementById("first").onclick = function(){push_empty()}; //
  document.getElementById("second").onclick = function(){push_empty()};
  document.getElementById("third").onclick = function(){push_empty()};
  document.getElementById("fourth").onclick = function(){push_empty()};
	let result = Math.floor(Math.random() * 4) + 1;
	switch(result){
    case 1:
      game_array.push("red");
      count = 0;
      array_visible = setInterval(display_array,first_interval);
      array_hidden = setInterval(display_clear,second_interval);
    	break;
  	case 2:
      game_array.push("blue");
      count = 0;
      array_visible = setInterval(display_array,first_interval);
      array_hidden = setInterval(display_clear,second_interval);
      break;
  	case 3:
      game_array.push("green");
      count = 0;
      array_visible = setInterval(display_array,first_interval);
      array_hidden = setInterval(display_clear,second_interval);
      break;
  	case 4:
      game_array.push("orange");
      count = 0;
      array_visible = setInterval(display_array,first_interval);
      array_hidden = setInterval(display_clear,second_interval);
      break;
	}
}
function add_array_hard(){ // Adds array element and sends to "display_array_hard()" and "display_clear()", starts with empty array every new level
  document.getElementById("first").onclick = function(){push_empty()};
  document.getElementById("second").onclick = function(){push_empty()};
  document.getElementById("third").onclick = function(){push_empty()};
  document.getElementById("fourth").onclick = function(){push_empty()};
  for (let x = 0; x<= level; x++){
    let result = Math.floor(Math.random() * 4) + 1;
  	if(result === 1){
        game_array.push("red");
        count = 0;}
    else if(result === 2){
        game_array.push("blue");
        count = 0;}
    else if(result === 3){
        game_array.push("green");
        count = 0;}
    else {
        game_array.push("orange");
        count = 0;}
  	   }
     array_visible = setInterval(display_array_hard,first_interval);
     array_hidden = setInterval(display_clear,second_interval);
}
