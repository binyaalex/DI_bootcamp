	let answer;
	let userNumber;
	let computerNumber;
	let counter = 0;



function  playTheGame() {
	answer = confirm(`do you want to play?`);
	if (answer === false) {
	  alert (`No problem, Goodbye`);
	} else {
		userNumber = Number(prompt(`enter a number between 0 to 10`))
	 	if (userNumber < 0 || userNumber > 10) {
			alert (`Sorry it’s not a good number, Goodbye`)
			playTheGame()
	  	} else if (userNumber <= 10 || userNumber >= 0) {
			console.log(`good`)
			computerNumber = Math.floor(Math.random() * 11)
			test(userNumber, computerNumber)
	  	} else {
			alert (`Sorry Not a number`)
			playTheGame()
		}
	}
	
	
}


function test (userNumber1, computerNumber1) {
	if (userNumber1 === computerNumber1) {
		alert(`you win`)
		console.log(computerNumber1)
		console.log(userNumber1)
	} else if (userNumber1 > computerNumber1) {
		alert (`Your number is bigger then the computer’s, guess again`)
		console.log(computerNumber1)
		console.log(userNumber1)
		counter += 1
		if (counter < 3) {
			playTheGame()
		} else {
			alert(`you try 3 times game over`)
		}
	} else if (userNumber1 < computerNumber1) {
		alert (`Your number is smaller then the computer’s, guess again`)
		console.log(computerNumber1)
		console.log(userNumber1)
		counter += 1
		if (counter < 3) {
			playTheGame()
		} else {
			alert(`you try 3 times game over`)
		}
	}
}
