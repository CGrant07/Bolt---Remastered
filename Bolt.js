//Team Members: Carson Grant, Cade Smith
//Name: Carson Grant
//Date: 1.22.2024
//Program: Sphero Bolt Maze
//Bolt ID: B2F8

//Start Commit

async function startProgram() {

	setMainLed({ r: 255, g: 255, b: 255 });

	await speak("Start", true); 

	//Blue LED Commit
	
	await roll((getHeading() + 0), 60, 2.5); 
	
	await delay (1);
	
	await setMainLed({ r: 0, g: 0, b: 255 }); 
	
	await delay (1);

	//Sound 1 Commit

	await roll((getHeading() + 90), 60, 1.5); 
	
	await delay (1);
	
	setMainLed({ r: 0, g:0 , b:0  });
	
	await Sound.Game.Coin.play(true); 
	
	await delay (1);

	//Red LED Commit

	await roll((getHeading() + 90), 60, 1.1);  
	
	await delay (1); 
	
	await roll((getHeading() + 35), 60, 1.05);	
	
	await scrollMatrixText('Red!', { r: 255, g: 0, b: 0 }, 30, true)
	
	setMainLed({ r: 255, g:0 , b:0  });
	
	await delay (1);

	//Sound 2 Commit

	await roll((getHeading() + -90), 60, .6) 
	
	await delay (1);
	
	await roll((getHeading() + -85), 60, 1.15) 
	
	setMainLed({ r: 0, g:0 , b:0  }); 

	await Sound.Animal.Cat.play(true); 