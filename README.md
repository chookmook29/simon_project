# Simon Game

- This is a recreation of the cult classic in a different, attractive incarnation
- It gives people chance to test their memory in a fun, entertaining way
- Visual inspiration came from [Atari 2600](https://en.wikipedia.org/wiki/Atari_2600)
 
## UX
 
- This game is created for casual gamers
- They would like to enjoy their time spend with the game
- They would like to have a sense of achievement

- Design is minimalist and archaic
- Available features stand out and are clearly visible
- Large buttons are easily accessible
- There is a modest palette of nostalgic sounds
- Rules are simple and easy to understand
- Retro look and old-school behaviour invokes fond memories 
- Lack of strict mode from original game allows players to enjoy relaxed gameplay

- User Stories:
	- As a player, I want to interact with the game, so I can see effects of my actions
	- As a player, I want to make correct guess, so I can progress to next level
	- As a player, I want to have a sense of achievement
	- As a casual user, I want to relax playing and have a pleasant experience

- There wasn't much need for mock-ups as it's an uncomplicated, plain looking game

## Features

### Game logic

- Game employs loops, conditional statements and Math.random method extensively
- To make it display series of succeeding colours over time setInterval() method is used 
- Colours are randomised so every game there is a different palette
- In hard mode colour palette changes every level
- In normal mode game adds extra step every level on top of existing order of steps
- In hard mode game shuffles existing order and adds one step every new level

 
### Existing Features

- Power button switches game on and off
- Two modes are present, normal and hard
- Player chooses between modes by clicking buttons
- Screen displays useful information about the game
- Games shows consecutive changes of colours of boxes
- After all colours are displayed, player has to repeat game's sequence by pressing coresponding buttons

### Features Left to Implement
- Different sound tones for every colour change, ideally using [OscillatorNode](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode)
- Background changes, different background image which will add more professional look


## Technologies Used

- **HTML**, **CSS** and **Javascript**
	- Base languages used to create website
- [Bootstrap](http://getbootstrap.com/)
	- I use **Bootstrap** to give our project a simple, responsive layout


## Testing

- Flowcharts were made on paper to better understand game's logic
- Breaking down code to simple blocs made it easier to understand function's construction
- Simple test were made in **Chrome DevTools**
	- to remove syntax errors
	- to tie up HTML with js functions correctly
- Checked for errors using **jhint** extension in Sublime Text
	- to remove parameters not used by functions
	- to identify some missing semicolons
	- to find variables without any value declaration
- Chunks of prototype code were tested using **Jasmine**
	- to check if functions are working properly
	- to refactor some of games logic
	- to discover unwished for type conversion caused by lack of strict equality
	- to identify variables with undesirable values
- All code used on the site has been tested to ensure everything is working as expected
- Game viewed and tested in the following browsers:
	- Google Chrome
	- Opera
	- Mozilla Firefox
- Size has been adapted to different devices, in both orientations
- Mobile first approach has been used
- Bugs
	- jhint incorrectly detects missing semicolons when passing {script} with onclick event handler in js
	- One of the variables still have "undefined" value in certain scopes, even when explicitly declared as a string or number
	- Unable to merge rows of lights and buttons together as object.style.boxShadow property was not showing current colour correctly when given value from 
  	  randomised variable. It also presented styling problems 

## Deployment

- There is no backend dependency, callbacks to server side dictionaries, databases
- Files are transfered over FTP
- Alternative option is deployment through [GitHub Pages](https://pages.github.com/)
- To run locally open index.html in a browser


## Credits

### Media

- The fonts used in this game were obtained from [FamFonts](https://famfonts.com/)
- The background image was obtained from [Pexels](https://www.pexels.com/)

### Acknowledgements

- I would like to thank to **Antonija Šimić** for her crucial advice and help