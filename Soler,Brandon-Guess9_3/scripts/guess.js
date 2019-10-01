
//
// Demo: Guess the Number
// Author: Brandon Soler
// Date: 9/3/2019
// Due date: 9/6/2019
//


let numberOfGuesses = 5;     	// declaring the numberofguesses the user has 5 and used let because the number will change the more the user guesses
const MIN = 1;					//declaring MIN and MAX variables constant so they are not changed throughout the code
const MAX = 20;
let randomNumber = Math.floor(Math.random() * (MAX-MIN) + MIN); //making a global variable for the random nubmer
console.log("Global: " +""+ randomNumber);

//making a function that will print out an input button and remove the start game button when it is clicked

function startGame() 
{		
	let userAnswer = document.getElementById("userAnswer"); 
	userAnswer.innerHTML = "<div><button id='check' class='buttons' onclick = 'guessNumber()'>Check <button class='buttons'onclick='restartGame()'>Restart</div>";														
	
	let addInput = document.getElementById("Input"); 
	addInput.innerHTML = "<input type = 'text' id = 'userGuess'><br><br>"; 	//going inside of the website and printing out an input box 
	
	let remove = document.getElementById('startGameButt');//making a variable called remove and using getelementbyid to grab the button
    remove.parentNode.removeChild(remove);				  //i remove the button once the start game button is clicked			
   	
   	document.getElementById("numberOfGuesses").innerHTML = "Number of Guesses: " + numberOfGuesses; //I print out the amount of guesses the user has the start of the game
}
//a sleep timer so it doesnt restart as soon as the user presses the buttons 
function restartTimer()
{
	document.getElementById("check").disabled=false; //disabling the check the answer button
		numberOfGuesses = 5; //resetting the number of guesses back to 5 when the user resets
		document.getElementById("numberOfGuesses").innerHTML = "Number of Guesses: " + numberOfGuesses; //printing it out as it was in the start
		document.getElementById("outPut").innerHTML = ""; //clearing the output that alwa
}

 function restartGame()       //restart function if a user wants to restart the game
{
		
		restartNumber = Math.floor(Math.random() * (MAX-MIN) + MIN);  //random number gen
		randomNumber = restartNumber;                                 //declaring the random number as restart so it overrides the global variable
		console.log("Updated Number: "+""+randomNumber)				

		document.getElementById("outPut").innerHTML = "Restarting..";
		setTimeout(restartTimer, 2000); //adding a time sleep using settimout
}
		
function numGuessSleep() //making a function so i can print this after i run settimeout in the guess number function
{
	document.getElementById("outPut").innerHTML = "Press the restart button to go again";
}



//
//guessNumber
//
//making a function to check if the users number matches the random generated number 

function guessNumber()
{	


	let userInputInt = document.getElementById("userGuess").value; //grabbing the input from the user and making it a number so it doesn't come out with NaN
	
	 if (userInputInt == randomNumber)
	{
		document.getElementById("outPut").innerHTML = "YOU GOT IT!!"  //making an if statement that prints out the user got it if the input matches the random number
		document.getElementById("check").disabled=true;               //disabling the check button when the user gets it correct so it forces them to restart if they decide to
	}

	else if (userInputInt > randomNumber) //else if statement that shows if the input is greater than the random number
	{
		document.getElementById("outPut").innerHTML = "LOWER!!"
	
		numberOfGuesses-- //everytime the user guesses wrong the number of guesses decrease by 1
		document.getElementById("numberOfGuesses").innerHTML = "Number of Guesses: " + numberOfGuesses; //changing the number of guesses displayed
	}
	
	else
	{
		document.getElementById("outPut").innerHTML = "HIGHER!!"
		numberOfGuesses-- 																					//if the input number is lower the output displays a statement that tells the user to guess higher
		document.getElementById("numberOfGuesses").innerHTML = "Number of Guesses: " + numberOfGuesses;
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	if (numberOfGuesses == 0)
	{
		document.getElementById("check").disabled=true; //disabling the button after the user runs out of guesses
		document.getElementById("outPut").innerHTML = "Out of Guesses..";
		setTimeout(numGuessSleep, 1000);										
		

	}

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	if (userInputInt > 19) //if the user inputs a number greater than the greatest random number  it will throw an alert and tell you cant type over 19 and it restarts
	{
		alert("You can't type any number over 19");
		restartGame();
	}

	else if (userInputInt == "") //if the user types no input it will display a sentence
	{
		document.getElementById("outPut").innerHTML = "Type something..";
		numberOfGuesses = 5; //without this the number of guesses will decrease 
		document.getElementById("numberOfGuesses").innerHTML = "Number of Guesses: " + numberOfGuesses;

	}

	else if (userInputInt < MIN) //if the user inputs a number less than the lowest possible number it also throws an alert and tells you cant type beow 1 and it restarts
	{
		alert("You can't type any number below 1.");
		restartGame(); //running the restart game function
	}


}


	