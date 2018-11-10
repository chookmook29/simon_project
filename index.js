var gameArray = []; // Variables initialized, to be used in different scopes
var level = 0;
var currentButton;
var count = 0;
var playerCount = 0;
var arrayLengthCheck = 1;
const firstInterval = 1000;
const secondInterval = 1080;
var arrayVisible;
var arrayHidden;
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
	clearInterval(arrayVisible);
	clearInterval(arrayHidden);
}

function powerOff(){ // Deactivates screen and Start, Hard buttons
	let audio = new Audio();
	audio.src = "sounds/button_2.wav";
	audio.preload = 'auto';
	audio.play();
	clearInterval(arrayVisible);
	clearInterval(arrayHidden);
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
	currentButton;
	clearInterval(arrayVisible);
	clearInterval(arrayHidden);
	gameArray = [];
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
	var hslLightFirst = String(Math.floor(Math.random() * 361));
	lightFirst = "hsl(" + hslLightFirst + ", 60%, 50%)";
	var hslLightSecond = String(Math.floor(Math.random() * 361));
	lightSecond = "hsl(" + hslLightSecond + ", 60%, 50%)";
	var hslLightThird = String(Math.floor(Math.random() * 361));
	lightThird = "hsl(" + hslLightThird + ", 60%, 50%)";
	var hslLightFourth = String(Math.floor(Math.random() * 361));
	lightFourth = "hsl(" + hslLightFourth + ", 60%, 50%)";
	currentButton;
	clearInterval(arrayVisible);
	clearInterval(arrayHidden);
	gameArray = [];
	timeout =  setTimeout(addElement,1000);
}

function pushEmpty(){ // Used for Start, Hard buttons after power switches off
	let audio = new Audio();
	audio.src = "sounds/button_2.wav";
	audio.preload = 'auto';
	audio.play();
}

function addElement(){ // Adds array element and sends to "displayArray()" and "displayClear()"
  document.getElementById("start").onclick = function(){pushStart()};
  document.getElementById("first").onclick = function(){pushEmpty()};
  document.getElementById("second").onclick = function(){pushEmpty()};
  document.getElementById("third").onclick = function(){pushEmpty()};
  document.getElementById("fourth").onclick = function(){pushEmpty()};
	let result = Math.floor(Math.random() * 4) + 1;
	switch(result){
		case 1:
		gameArray.push("lightFirst");
		count = 0;
		arrayVisible = setInterval(displayArray,firstInterval);
		arrayHidden = setInterval(displayClear,secondInterval);
		break;
	case 2:
		gameArray.push("lightSecond");
		count = 0;
		arrayVisible = setInterval(displayArray,firstInterval);
		arrayHidden = setInterval(displayClear,secondInterval);
		break;
	case 3:
		gameArray.push("lightThird");
		count = 0;
		arrayVisible = setInterval(displayArray,firstInterval);
		arrayHidden = setInterval(displayClear,secondInterval);
		break;
	case 4:
		gameArray.push("lightFourth");
		count = 0;
		arrayVisible = setInterval(displayArray,firstInterval);
		arrayHidden = setInterval(displayClear,secondInterval);
		break;
	}
}

function addHard(){ // Adds array element and sends to "arrayHard()" and "displayClear()", starts with empty array every new level
	document.getElementById("hard").onclick = function(){pushHard()};
	document.getElementById("first").onclick = function(){pushEmpty()};
	document.getElementById("second").onclick = function(){pushEmpty()};
	document.getElementById("third").onclick = function(){pushEmpty()};
	document.getElementById("fourth").onclick = function(){pushEmpty()};
	for (let x = 0; x <= level; x++){
		let result = Math.floor(Math.random() * 4) + 1;
		if(result === 1){
			gameArray.push("lightFirst");
			count = 0;
		}
		else if(result === 2){
			gameArray.push("lightSecond");
			count = 0;
		}
		else if(result === 3){
			gameArray.push("lightThird");
			count = 0;
		}
		else {
			gameArray.push("lightFourth");
			count = 0;
		}
	}
	arrayVisible = setInterval(arrayHard,firstInterval);
	arrayHidden = setInterval(displayClear,secondInterval);
}

function displayArray() { // Modifies colour of DOM elements based on random array from "addElement()", at interval, loops and stops after last element is displayed
	let audio = new Audio();
	audio.src = "sounds/button_3.wav";
	audio.preload = 'auto';
	audio.play();
	let colour = document.getElementById(gameArray[count]);
	colour.style.backgroundColor = gameArray[count];
		if(gameArray[count] === "lightFirst"){
		document.getElementById("screen").innerHTML = "WATCH";
		colour.style.backgroundColor = lightFirst;
		colour.style.boxShadow = "0 0 0 1px " + lightFirst + "inset, 0 0 0 2px " + lightFirst + "inset, 0 7px 0 0 " + lightFirst + ", 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
	}
	else if(gameArray[count] === "lightSecond"){
		document.getElementById("screen").innerHTML = "WATCH";
		colour.style.backgroundColor = lightSecond;
		colour.style.boxShadow = "0 0 0 1px " + lightSecond + "inset, 0 0 0 2px " + lightSecond + "inset, 0 7px 0 0 " + lightSecond + ", 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
	}
	else if(gameArray[count] === "lightThird"){
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
	if (count === gameArray.length){
		document.getElementById("screen").innerHTML = "GO!";
		document.getElementById("first").onclick = function(){pushFirst()};
		document.getElementById("second").onclick = function(){pushSecond()};
		document.getElementById("third").onclick = function(){pushThird()};
		document.getElementById("fourth").onclick = function(){pushFourth()};
		clearInterval(arrayVisible);
	}
}

function setLight(light){ //Used for "arrayHard" function
	let audio = new Audio();
	audio.src = "sounds/button_3.wav";
	audio.preload = 'auto';
	audio.play();
	var element2 = document.getElementById(gameArray[count]);
	document.getElementById("screen").innerHTML = "WATCH";
	let hsl = String(Math.floor(Math.random() * 361));
	element2.style.backgroundColor = "hsl(" + hsl + ", 60%, 50%)";
	element2.style.boxShadow = "0 0 0 1px " + "hsl(" + hsl + ", 60%, 50%)" + "inset, 0 0 0 2px " + "hsl(" + hsl + ", 60%, 50%)" + "inset, 0 7px 0 0 " + "hsl(" + hsl + ", 60%, 50%)" + ", 0 8px 0 1px #020202, 0 8px 8px 1px #070707";
}

function arrayHard(){ // Same as "displayArray", but elements taken from "addHard", random colours every instance
	colours.forEach(light => {
		setLight(light);
	});
	count++;
		if (count === gameArray.length){
		document.getElementById("screen").innerHTML = "GO!";
		document.getElementById("first").onclick = function(){firstHard()};
		document.getElementById("second").onclick = function(){secondHard()};
		document.getElementById("third").onclick = function(){thirdHard()};
		document.getElementById("fourth").onclick = function(){fourthHard()};
		clearInterval(arrayVisible);
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
	if (count === gameArray.length){
		clearInterval(arrayHidden);
  }
}

function pushFirst(){ // Checks if player's button is from the same column as array element
	currentButton = "lightFirst";
	let audio = new Audio();
	audio.src = "sounds/button_1.wav";
	audio.preload = 'auto';
	audio.play();
	checkButton();
}

function pushSecond(){
	currentButton = "lightSecond";
	let audio = new Audio();
	audio.src = "sounds/button_1.wav";
	audio.preload = 'auto';
	audio.play();
	checkButton();
}

function pushThird(){
	currentButton = "lightThird";
	let audio = new Audio();
	audio.src = "sounds/button_1.wav";
	audio.preload = 'auto';
	audio.play();
	checkButton();
}

function pushFourth(){
	currentButton = "lightFourth";
	let audio = new Audio();
	audio.src = "sounds/button_1.wav";
	audio.preload = 'auto';
	audio.play();
	checkButton();
}

function checkButton(){
	if (currentButton === gameArray[playerCount] && arrayLengthCheck != gameArray.length){
		playerCount++;
		arrayLengthCheck++;
	}
	else if (currentButton === gameArray[playerCount] && arrayLengthCheck === gameArray.length){
		level = level + 1;
		playerCount = 0;
		arrayLengthCheck = 1;
	if (level.toString().length === 1){
		document.getElementById("screen").innerHTML = "000" + level;
	}
	else if (level.toString().length === 2){
		document.getElementById("screen").innerHTML = "00" + level;
	}
	else if (level.toString().length === 3){
		document.getElementById("screen").innerHTML = "0" + level;
	}
	else if (level.toString().length === 4){
		document.getElementById("screen").innerHTML = level;}
		addElement();
	}
}

function firstHard(){
	currentButton = "lightFirst";
	let audio = new Audio();
	audio.src = "sounds/button_1.wav";
	audio.preload = 'auto';
	audio.play();
	checkHard();
}

function secondHard(){
	currentButton = "lightSecond";
	let audio = new Audio();
	audio.src = "sounds/button_1.wav";
	audio.preload = 'auto';
	audio.play();
	checkHard();
}

function thirdHard(){
	currentButton = "lightThird";
	let audio = new Audio();
	audio.src = "sounds/button_1.wav";
	audio.preload = 'auto';
	audio.play();
	checkHard();
}

 function fourthHard(){
	currentButton = "lightFourth";
	let audio = new Audio();
	audio.src = "sounds/button_1.wav";
	audio.preload = 'auto';
	audio.play();
	checkHard();
}

function checkHard(){ // Checks if player's button is from the same column as array element in hard mode
  if (currentButton === gameArray[playerCount] && arrayLengthCheck != gameArray.length){
		playerCount++;
    arrayLengthCheck++;
  }
  else if (currentButton === gameArray[playerCount] && arrayLengthCheck === gameArray.length){
		level = level + 1;
    playerCount = 0;
    arrayLengthCheck = 1;
    gameArray = [];
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