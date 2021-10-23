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
showHide1.addEventListener(`click`,showHideDice1)
showHide2.addEventListener(`click`,showHideDice2)
playAgain.addEventListener(`click`,clean)

let i = 0;
function typeWriter(text) {
	gambleBtn.disabled = "disabled";
	lie.disabled = "disabled";
	if (i < text.length) {
		h1.innerHTML += text.charAt(i);
		i++;
		setTimeout(function(){typeWriter(text)}, 100);
	} else {
		// gambleBtn.disabled = false;
		lie.disabled = false;
	}

}
// the function create the dice of the players and mix them
// at the end stop display start button
function startGame () {
	for (let i = 0; i < 5; i++) {
		diceArr1[i] = Math.floor(Math.random() * 6) + 1;
		let newD = document.createElement(`div`)
		newD.textContent = diceArr1[i]
		newD.style.display = `none`
		player1Dice.appendChild(newD)
	}
	for (let i = 0; i < 5; i++) {
		diceArr2[i] = Math.floor(Math.random() * 6) + 1;
		let newD = document.createElement(`div`)
		newD.textContent = diceArr2[i]
		newD.style.display = `none`
		player2Dice.appendChild(newD)
	}
	let newD1 = document.createElement(`div`);
	newD1.textContent = `?`;
	newD1.style.fontSize = `90px`;
	let newD2 = document.createElement(`div`);
	newD2.textContent = `?`;
	newD2.style.fontSize = `90px`;
	player1Dice.appendChild(newD1);
	player2Dice.appendChild(newD2);
	start.style.display = `none`;
	gambleBtn.style.display = `inline-block`;
	i = 0
	h1.innerHTML = ``
  	let text = `player ${turn} it's your turn please gamble`;
	typeWriter(text)
	allDice = []
}

function gambleBtnDisabled () {
	gambleBtn.disabled = "disabled";
	if (many.value !== `` && dice.value !== ``) {
		gambleBtn.disabled = false;
	}
}

gambleBtnDisabled()
setInterval(gambleBtnDisabled, 100);


// the function show and hide the players dice
// allows each player to hide the dice from the opponent
// and to see the dice when asking the opponent to not lookS
function showHideDice1 () {
	if (showHide1.textContent === `show`) {
		for (let i = 0; i < player1Dice.children.length-1; i++) {
			player1Dice.children[i].style.display = `block`;
		}
		player1Dice.children[player1Dice.children.length-1].style.display = `none`;
		showHide1.textContent = `hide`
	} else {
		for (let i = 0; i < player1Dice.children.length-1; i++) {
			player1Dice.children[i].style.display = `none`;
		}
		player1Dice.children[player1Dice.children.length-1].style.display = `block`;
		showHide1.textContent = `show`
	}
}

function showHideDice2 () {
	if (showHide2.textContent === `show`) {
		for (let i = 0; i < player2Dice.children.length-1; i++) {
			player2Dice.children[i].style.display = `block`;
		}
		player2Dice.children[player2Dice.children.length-1].style.display = `none`;
		showHide2.textContent = `hide`
	} else {
		for (let i = 0; i < player2Dice.children.length-1; i++) {
			player2Dice.children[i].style.display = `none`;
		}
		player2Dice.children[player2Dice.children.length-1].style.display = `block`;
		showHide2.textContent = `show`
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
				if (many.value > gamble[0]) {
					raiseGamble()
				} else if (many.value == gamble[0] && dice.value > gamble[1]) {
					raiseGamble() 
				} else {
					gambleNotRaised();
				}
			} else if (dice.value == 1) {
				if (many.value > gamble[0]/2) {
					raiseGamble()
				} else {
					gambleNotRaised()
				}
			} else {
				if (many.value >= gamble[0]*2) {
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
	console.log(allDice)
	console.log(gamble)
	for (let i = 0; i < allDice.length; i++) {
		if (allDice[i] == gamble[1] || allDice[i] === 1) {
			howMany++
		}
	}
	console.log(`howmany:${howMany}`)
	console.log(`turn:${turn}`)
	if (howMany >= gamble[0]) {
		if (turn === 1) {
			diceArr1.pop()
			cutDice1()
		} else {
			diceArr2.pop()
			cutDice2()
		}
	} else {
		if (turn === 1) {
			turn = 2
			diceArr2.pop()
			cutDice2()
		} else {
			turn = 1
			diceArr1.pop()
			cutDice1()
		}
	}
	if (diceArr1.length > 0 && diceArr2.length > 0) {
		i = 0;
		h1.innerHTML = ``
		let text = `player ${turn} you lost this round, you lost a dice`;
		typeWriter(text);
		setTimeout(mixDice, 5500)	
	} else {
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
function cutDice1() {
	player1Dice.firstElementChild.remove()
}

function cutDice2() {
	player2Dice.firstElementChild.remove()
}

//the function mix the dice and start another round
function mixDice () {
	for (let i = 0; i < diceArr1.length; i++) {
		diceArr1[i] = Math.floor(Math.random() * 6) + 1;
		player1Dice.children[i].textContent = diceArr1[i]
	}
	for (let i = 0; i < diceArr2.length; i++) {
		diceArr2[i] = Math.floor(Math.random() * 6) + 1;
		player2Dice.children[i].textContent = diceArr2	[i]
	}
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
		console.log(i);
		console.log(player2Dice.children[i])
		player2Dice.children[i].remove()
	}
	console.log(player2Dice)
	playAgain.style.display = `none`
	showHide1.textContent = `show`
	showHide1.textContent = `show`
	startGame()
}