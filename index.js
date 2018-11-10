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
var colours = ["lightFirst", "lightSecond", "lightThird", "lightFourth"];
var lightFirst;
var lightSecond;
var lightThird;
var lightFourth;
var timeout;

function powerOn(){ // Function that switches screen on and activates Start and Hard buttons
  let audio = new Audio();
  audio.src = "sounds/button_2.wav";
  audio.preload = 'auto';
  audio.play();
  document.getElementById("screen").innerHTML = "0000";
  document.getElementById("start").onclick = function(){pushStart()};
  document.getElementById("hard").onclick = function(){pushHard()};
  document.getElementById("screen").setAttribute('style', "color: #00FE00");
  document.getElementById("power").onclick = function(){powerOff()};
  clearInterval(array_visible);
  clearInterval(array_hidden);
  }

function powerOff(){ // Deactivates screen and Start, Hard buttons
  let audio = new Audio();
  audio.src = "sounds/button_2.wav";
  audio.preload = 'auto';
  audio.play();
  clearInterval(array_visible);
  clearInterval(array_hidden);
  document.getElementById("start").onclick = function(){pushEmpty()};
  document.getElementById("hard").onclick = function(){pushEmpty()};
  document.getElementById("screen").setAttribute('style', "color: black");
  document.getElementById("screen").innerHTML = "8888";
  document.getElementById("power").onclick = function(){powerOn()};
  }

function pushHard(){ // Hard mode initial function
  document.getElementById("hard").onclick = function(){pushEmpty()};
  document.getElementById("screen").innerHTML = "WATCH";
  let audio = new Audio();
  audio.src = "sounds/button_2.wav";
  audio.preload = 'auto';
  audio.play();
  count = 0;
  level = 0;
  current_button;
  clearInterval(array_visible);
  clearInterval(array_hidden);
  game_array = [];
  timeout =  setTimeout(addHard,1000);
  }

function pushStart(){ // Normal mode initial function
  document.getElementById("start").onclick = function(){pushEmpty()};
  document.getElementById("screen").innerHTML = "WATCH";
  let audio = new Audio();
  audio.src = "sounds/button_2.wav";
  audio.preload = 'auto';
  audio.play();
  count = 0;
  level = 0;
  var hsl_lightFirst = String(Math.floor(Math.random() * 361));
  lightFirst = "hsl(" + hsl_lightFirst + ", 60%, 50%)";
  var hsl_lightSecond = String(Math.floor(Math.random() * 361));
  lightSecond = "hsl(" + hsl_lightSecond + ", 60%, 50%)";
  var hsl_lightThird = String(Math.floor(Math.random() * 361));
  lightThird = "hsl(" + hsl_lightThird + ", 60%, 50%)";
  var hsl_lightFourth = String(Math.floor(Math.random() * 361));
  lightFourth = "hsl(" + hsl_lightFourth + ", 60%, 50%)";
  current_button;
  clearInterval(array_visible);
  clearInterval(array_hidden);
  game_array = [];
  timeout =  setTimeout(addElement,1000);
  }
function pushEmpty(){ // Used for Start, Hard buttons after power switches off
  let audio = new Audio();
  audio.src = "sounds/button_2.wav";
  audio.preload = 'auto';
  audio.play();
  }

function displayArray() { // Modifies colour of DOM elements based on random array from "addElement()", at interval, loops and stops after last element is displayed
  let audio = new Audio();
  audio.src = "sounds/button_3.wav";
  audio.preload = 'auto';
  audio.play();
  let colour = document.getElementById(game_array[count]);
  colour.style.backgroundColor=game_array[count];
  if(game_array[count] === "lightFirst"){
    document.getElementById("screen").innerHTML = "WATCH";
    colour.style.backgroundColor = lightFirst;
    colour.style.boxShadow = "0 0 0 1px " + lightFirst + "inset, 0 0 0 2px " + lightFirst + "inset, 0 7px 0 0 " + lightFirst + ", 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
  }
  else if(game_array[count] === "lightSecond"){
    document.getElementById("screen").innerHTML = "WATCH";
    colour.style.backgroundColor = lightSecond;
    colour.style.boxShadow = "0 0 0 1px " + lightSecond + "inset, 0 0 0 2px " + lightSecond + "inset, 0 7px 0 0 " + lightSecond + ", 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
  }
  else if(game_array[count] === "lightThird"){
    document.getElementById("screen").innerHTML = "WATCH";
    colour.style.backgroundColor = lightThird;
    colour.style.boxShadow = "0 0 0 1px " + lightThird + "inset, 0 0 0 2px " + lightThird + "inset, 0 7px 0 0 " + lightThird + ", 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
  }
  else{
    document.getElementById("screen").innerHTML = "WATCH";
    colour.style.backgroundColor = lightFourth;
    colour.style.boxShadow = "0 0 0 1px " + lightFourth + "inset, 0 0 0 2px " + lightFourth + "inset, 0 7px 0 0 " + lightFourth + ", 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
  }
  count++;
  if (count === game_array.length){
    document.getElementById("screen").innerHTML = "GO!";
    document.getElementById("first").onclick = function(){pushFirst()};
    document.getElementById("second").onclick = function(){pushSecond()};
    document.getElementById("third").onclick = function(){pushThird()};
    document.getElementById("fourth").onclick = function(){pushFourth()};
    clearInterval(array_visible);
  }
}
function arrayHard() { // Same as "displayArray", but elements taken from "addHard", random colours every instance
  let audio = new Audio();
  audio.src = "sounds/button_3.wav";
  audio.preload = 'auto';
  audio.play();
  let colour = document.getElementById(game_array[count]);
  if(game_array[count] === "lightFirst"){
    document.getElementById("screen").innerHTML = "WATCH";
    let hsl = String(Math.floor(Math.random() * 361));
    colour.style.backgroundColor = "hsl(" + hsl + ", 60%, 50%)";
    colour.style.boxShadow = "0 0 0 1px " + "hsl(" + hsl + ", 60%, 50%)" + "inset, 0 0 0 2px " + "hsl(" + hsl + ", 60%, 50%)" + "inset, 0 7px 0 0 " + "hsl(" + hsl + ", 60%, 50%)" + ", 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
  }
  else if(game_array[count] === "lightSecond"){
    document.getElementById("screen").innerHTML = "WATCH";
    let hsl = String(Math.floor(Math.random() * 361));
    colour.style.backgroundColor = "hsl(" + hsl + ", 60%, 50%)";
    colour.style.boxShadow = "0 0 0 1px " + "hsl(" + hsl + ", 60%, 50%)" + "inset, 0 0 0 2px " + "hsl(" + hsl + ", 60%, 50%)" + "inset, 0 7px 0 0 " + "hsl(" + hsl + ", 60%, 50%)" + ", 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
  }
  else if(game_array[count] === "lightThird"){
    document.getElementById("screen").innerHTML = "WATCH";
    let hsl = String(Math.floor(Math.random() * 361));
    colour.style.backgroundColor = "hsl(" + hsl + ", 60%, 50%)";
    colour.style.boxShadow = "0 0 0 1px " + "hsl(" + hsl + ", 60%, 50%)" + "inset, 0 0 0 2px " + "hsl(" + hsl + ", 60%, 50%)" + "inset, 0 7px 0 0 " + "hsl(" + hsl + ", 60%, 50%)" + ", 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
  }
  else{
    document.getElementById("screen").innerHTML = "WATCH";
    let hsl = String(Math.floor(Math.random() * 361));
    colour.style.backgroundColor = "hsl(" + hsl + ", 60%, 50%)";
    colour.style.boxShadow = "0 0 0 1px " + "hsl(" + hsl + ", 60%, 50%)" + "inset, 0 0 0 2px " + "hsl(" + hsl + ", 60%, 50%)" + "inset, 0 7px 0 0 " + "hsl(" + hsl + ", 60%, 50%)" + ", 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
  }
  count++;
  if (count === game_array.length){
    document.getElementById("screen").innerHTML = "GO!";
    document.getElementById("first").onclick = function(){firstHard()};
    document.getElementById("second").onclick = function(){secondHard()};
    document.getElementById("third").onclick = function(){thirdHard()};
    document.getElementById("fourth").onclick = function(){fourthHard()};
    clearInterval(array_visible);
  }
}
function setBackground(color) { // Used in "displayClear()" function, default colour and shadow declaration
  var element = document.getElementById(color);
  element.style.backgroundColor = "gray";
  element.style.boxShadow = "0 0 0 1px #8E8E8E inset, 0 0 0 2px #777777 inset, 0 7px 0 0 #727272, 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
}
function displayClear(){ // Changes DOM elements colour to default gray
  colours.forEach(color => {
  setBackground(color);
  });
  if (count === game_array.length){
    clearInterval(array_hidden);
  }
}


function pushFirst(){ // Checks if player's button is from the same column as array element
	current_button = "lightFirst";
  let audio = new Audio();
  audio.src = "sounds/button_1.wav";
  audio.preload = 'auto';
  audio.play();
  if (current_button === game_array[player_count] && game_a_length_check != game_array.length){
		player_count++;
    game_a_length_check++;
  }
  else if (current_button === game_array[player_count] && game_a_length_check === game_array.length){
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
		addElement();
  }
}

function pushSecond(){
	current_button = "lightSecond";
  let audio = new Audio();
  audio.src = "sounds/button_1.wav";
  audio.preload = 'auto';
  audio.play();
  if (current_button === game_array[player_count] && game_a_length_check != game_array.length){
		player_count++;
    game_a_length_check++;
  }
  else if (current_button === game_array[player_count] && game_a_length_check === game_array.length){
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
		addElement();
  }
}

function pushThird(){
	current_button = "lightThird";
  let audio = new Audio();
  audio.src = "sounds/button_1.wav";
  audio.preload = 'auto';
  audio.play();
  if (current_button === game_array[player_count] && game_a_length_check != game_array.length){
		player_count++;
    game_a_length_check++;
  }
  else if (current_button === game_array[player_count] && game_a_length_check === game_array.length){
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
		addElement();
  }
}

function pushFourth(){
	current_button = "lightFourth";
  let audio = new Audio();
  audio.src = "sounds/button_1.wav";
  audio.preload = 'auto';
  audio.play();
  if (current_button === game_array[player_count] && game_a_length_check != game_array.length){
		player_count++;
    game_a_length_check++;
  }
  else if (current_button === game_array[player_count] && game_a_length_check === game_array.length){
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
		addElement();
  }
}
function firstHard(){  // Checks if player's button is from the same column as array element in hard mode
	current_button = "lightFirst";
  let audio = new Audio();
  audio.src = "sounds/button_1.wav";
  audio.preload = 'auto';
  audio.play();
  if (current_button === game_array[player_count] && game_a_length_check != game_array.length){
		player_count++;
    game_a_length_check++;
  }
  else if (current_button === game_array[player_count] && game_a_length_check === game_array.length){
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
		addHard();
  }
}
function secondHard(){
	current_button = "lightSecond";
  let audio = new Audio();
  audio.src = "sounds/button_1.wav";
  audio.preload = 'auto';
  audio.play();
  if (current_button === game_array[player_count] && game_a_length_check != game_array.length){
		player_count++;
    game_a_length_check++;
  }
  else if (current_button === game_array[player_count] && game_a_length_check === game_array.length){
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
		addHard();
  }
}
function thirdHard(){
	current_button = "lightThird";
  let audio = new Audio();
  audio.src = "sounds/button_1.wav";
  audio.preload = 'auto';
  audio.play();
  if (current_button === game_array[player_count] && game_a_length_check != game_array.length){
		player_count++;
    game_a_length_check++;
  }
  else if (current_button === game_array[player_count] && game_a_length_check === game_array.length){
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
		addHard();
  }
}
function fourthHard(){
	current_button = "lightFourth";
  let audio = new Audio();
  audio.src = "sounds/button_1.wav";
  audio.preload = 'auto';
  audio.play();
  if (current_button === game_array[player_count] && game_a_length_check != game_array.length){
		player_count++;
    game_a_length_check++;
  }
  else if (current_button === game_array[player_count] && game_a_length_check === game_array.length){
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
		addHard();
  }
}
function addElement(){ // Adds array element and sends to "displayArray()" and "displayClear()"
  document.getElementById("start").onclick = function(){pushStart()};
  document.getElementById("first").onclick = function(){pushEmpty()}; //
  document.getElementById("second").onclick = function(){pushEmpty()};
  document.getElementById("third").onclick = function(){pushEmpty()};
  document.getElementById("fourth").onclick = function(){pushEmpty()};
	let result = Math.floor(Math.random() * 4) + 1;
	switch(result){
    case 1:
      game_array.push("lightFirst");
      count = 0;
      array_visible = setInterval(displayArray,first_interval);
      array_hidden = setInterval(displayClear,second_interval);
    	break;
  	case 2:
      game_array.push("lightSecond");
      count = 0;
      array_visible = setInterval(displayArray,first_interval);
      array_hidden = setInterval(displayClear,second_interval);
      break;
  	case 3:
      game_array.push("lightThird");
      count = 0;
      array_visible = setInterval(displayArray,first_interval);
      array_hidden = setInterval(displayClear,second_interval);
      break;
  	case 4:
      game_array.push("lightFourth");
      count = 0;
      array_visible = setInterval(displayArray,first_interval);
      array_hidden = setInterval(displayClear,second_interval);
      break;
	}
}
function addHard(){ // Adds array element and sends to "arrayHard()" and "displayClear()", starts with empty array every new level
  document.getElementById("hard").onclick = function(){pushHard()};
  document.getElementById("first").onclick = function(){pushEmpty()};
  document.getElementById("second").onclick = function(){pushEmpty()};
  document.getElementById("third").onclick = function(){pushEmpty()};
  document.getElementById("fourth").onclick = function(){pushEmpty()};
  for (let x = 0; x<= level; x++){
    let result = Math.floor(Math.random() * 4) + 1;
  	if(result === 1){
        game_array.push("lightFirst");
        count = 0;}
    else if(result === 2){
        game_array.push("lightSecond");
        count = 0;}
    else if(result === 3){
        game_array.push("lightThird");
        count = 0;}
    else {
        game_array.push("lightFourth");
        count = 0;}
  	   }
     array_visible = setInterval(arrayHard,first_interval);
     array_hidden = setInterval(displayClear,second_interval);
}
