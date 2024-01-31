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