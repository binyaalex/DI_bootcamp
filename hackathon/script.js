// retrive main elements
let start = document.getElementById('start')
let h1 = document.getElementById('h1')
let player1Dice = document.getElementById('player1')
let player2Dice = document.getElementById('player2')
let showHide1 = document.getElementById(`show1`)
let showHide2 = document.getElementById(`show2`)
let many = document.getElementById('many')
let dice = document.getElementById('dice')
let gambleBtn = document.getElementById('gamble')
let lie = document.getElementById('lie')
let playAgain = document.getElementById('playagain')

// declare necessary variable
let turn = 1
let loser
let diceArr1 = []
let diceArr2 = []
let allDice = []
let gamble = [0, 0]

//add event listeners to the buttons
start.addEventListener(`click`,startGame)
gambleBtn.addEventListener(`click`,checkGamble)
lie.addEventListener(`click`,whoWin)
showHide1.addEventListener(`click`,function () {showHideDice(showHide1,player1Dice)})
showHide2.addEventListener(`click`,function() {showHideDice(showHide2,player2Dice)})
playAgain.addEventListener(`click`,clean)

// the function make type writer effect on the instructions to the player
let i = 0;
let d;
function typeWriter(text) {
	d = 0
	gambleBtn.disabled = "disabled";
	lie.disabled = "disabled";
	if (i < text.length) {
		h1.innerHTML += text.charAt(i);
		i++;
		setTimeout(function(){typeWriter(text)}, 100);
	} else {
		// gambleBtn.disabled = false;
		d = 1
		lie.disabled = false;
	}

}
// the function create the dice of the players and mix them
// at the end stop display start button
function startGame () {
start1(diceArr1, player1Dice)
start1(diceArr2, player2Dice)
start2()
}

function start1 (diceArr, playerDice) {
	for (let i = 0; i < 5; i++) {
		diceArr[i] = Math.floor(Math.random() * 6) + 1;
		let newD = document.createElement(`div`)
		newD.textContent = diceArr[i]
		newD.style.display = `none`
		playerDice.appendChild(newD)
	}
	let newD = document.createElement(`div`);
	newD.textContent = `?`;
	newD.style.fontSize = `90px`;
	newD.style.fontFamily = `none`;
	playerDice.appendChild(newD);
}

function start2 () {	
	start.style.display = `none`;
	gambleBtn.style.display = `inline-block`;
	i = 0
	h1.innerHTML = ``
  	let text = `player ${turn} it's your turn please gamble`;
	typeWriter(text)
	allDice = []
}

// the function make buutons disabled while one of the inputs is empety
// and also while inside typeWriter function
function gambleBtnDisabled () {
	gambleBtn.disabled = "disabled";
	if (many.value !== `` && dice.value !== `` && d == 1) {
		gambleBtn.disabled = false;
	}
}

setInterval(gambleBtnDisabled, 100);


// the function show and hide the players dice
// allows each player to hide the dice from the opponent
// and to see the dice when asking the opponent to not lookS
function showHideDice (showHide, playerDice) {
	if (showHide.textContent === `show`) {
		for (let i = 0; i < playerDice.children.length-1; i++) {
			playerDice.children[i].style.display = `block`;
		}
		playerDice.children[playerDice.children.length-1].style.display = `none`;
		showHide.textContent = `hide`
	} else {
		for (let i = 0; i < playerDice.children.length-1; i++) {
			playerDice.children[i].style.display = `none`;
		}
		playerDice.children[playerDice.children.length-1].style.display = `block`;
		showHide.textContent = `show`
	}
}

// the function take the input of the player gamble
//first check if the gamble legal
//then update the gamble variable
//change the player turn and give Instructions
function checkGamble () {
	if (0 < dice.value && dice.value < 7) {
		if (lie.style.display !== `none`) {
			if ((dice.value == 1 && gamble[1] == 1) || (dice.value != 1 && gamble[1] != 1)) {
				if (Number(many.value) > gamble[0]) {
					raiseGamble()
				} else if (many.value == gamble[0] && dice.value > gamble[1]) {
					raiseGamble() 
				} else {
					gambleNotRaised();
				}
			} else if (dice.value == 1) {
				if (Number(many.value) > gamble[0]/2) {
					raiseGamble()
				} else {
					gambleNotRaised()
				}
			} else {
				if (Number(many.value) >= gamble[0]*2) {
					raiseGamble()
				} else {
					gambleNotRaised()
				}
			}
		} else if (dice.value != 1) {
			raiseGamble()
		} else {
			i = 0
			h1.innerHTML = ``
  			let text = `player ${turn} you can't gamble on the first turn on 1`;
			typeWriter(text)
		}
	} else {
		i = 0
		h1.innerHTML = ``
		let text = `player ${turn} a dice can be only between 1 to 6`;
		typeWriter(text)
	}
}

function raiseGamble() {
	gamble[0] = many.value
		gamble[1] = dice.value
		if (turn === 1) {
			turn = 2
		} else {
			turn = 1
		}
		i = 0;
		h1.innerHTML = ``
		let text = `player ${turn} its you turn`;
		typeWriter(text)
		lie.style.display = `inline-block`;
}

function gambleNotRaised() {
	i = 0;
	h1.innerHTML = ``
	let text = `player ${turn} you need to raise the gamble`;
	typeWriter(text);
}

// the function gather all the dice to one array
function gatherDice () {
	for (let i = 0; i < 5; i++) {
		allDice.push(diceArr1[i]);
		allDice.push(diceArr2[i]);
	}
}

//after one of the player declare that the other player lie
//lie means that he think his gamble wrong
//the function check who win in this round 
//then call citDice that take one of the dice from the looser
//at the end reset the gamble and call mixDice
function whoWin (e) {
	e.preventDefault()
	gatherDice ()
	let howMany = 0;
	for (let i = 0; i < allDice.length; i++) {
		if (allDice[i] == gamble[1] || allDice[i] === 1) {
			howMany++
		}
	}
	if (howMany >= gamble[0]) {
		if (turn === 1) {
			diceArr1.pop()
			cutDice(player1Dice)
		} else {
			diceArr2.pop()
			cutDice(player2Dice)
		}
	} else {
		if (turn === 1) {
			turn = 2
			diceArr2.pop()
			cutDice(player2Dice)
		} else {
			turn = 1
			diceArr1.pop()
			cutDice(player1Dice)
		}
	}
	if (diceArr1.length > 0 && diceArr2.length > 0) {
		i = 0;
		h1.innerHTML = ``
		let text = `player ${turn} you lost this round, you lost a dice`;
		typeWriter(text);
		setTimeout(nextRound, 5500)	
	} else if (diceArr1.length == 0) {
		turn = 2
		i = 0;
		h1.innerHTML = ``
		let text = `player ${turn} you win!!!`;
		typeWriter(text);
		playAgain.style.display = `inline-block`;
		gambleBtn.style.display = `none`;
	} else {
		turn = 1
		i = 0;
		h1.innerHTML = ``
		let text = `player ${turn} you win!!!`;
		typeWriter(text);
		playAgain.style.display = `inline-block`;
		gambleBtn.style.display = `none`;
	}
	allDice = []
	gamble = [0, 0]
	lie.style.display = `none`;
	many.value = ``;
	dice.value = ``;
}

// the functions take one dice out from the loser
function cutDice(playerDice) {
	playerDice.firstElementChild.remove()
}

//the function mix the dice and start another round
function nextRound () {
	mixDice(diceArr1, player1Dice)
	mixDice(diceArr2, player2Dice)
	writeNext()
}
function mixDice (diceArr, playerDice) {
	for (let i = 0; i < diceArr.length; i++) {
		diceArr[i] = Math.floor(Math.random() * 6) + 1;
		playerDice.children[i].textContent = diceArr[i]
	}
}
	// for (let i = 0; i < diceArr2.length; i++) {
	// 	diceArr2[i] = Math.floor(Math.random() * 6) + 1;
	// 	player2Dice.children[i].textContent = diceArr2	[i]
	// }
function writeNext () {
	i = 0;
	h1.innerHTML = ``
	let text = `let's start another round, player ${turn} it's your turn`;
	typeWriter(text);
	many.value = ``;
	dice.value = ``;
}


function clean () {
	for (let i = diceArr1.length; i >= 0; i--) {
		player1Dice.children[i].remove()
	}
	for (let i = diceArr2.length; i >= 0; i--) {
		player2Dice.children[i].remove()
	}
	playAgain.style.display = `none`
	showHide1.textContent = `show`
	showHide1.textContent = `show`
	startGame()
}