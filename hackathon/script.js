// retrive main elements
let start = document.getElementById('start')
let h1 = document.getElementById('h1')
let player1Dice = document.getElementById('player1')
let player2Dice = document.getElementById('player2')
let gambleBtn = document.getElementById('gamble')
let many = document.getElementById('many')
let dice = document.getElementById('dice')
let lie = document.getElementById('lie')

// declare necessary variable
let turn = 1
let loser
let diceArr1 = [2, 1, 3, 3, 4]
let diceArr2 = [3, 1, 2, 6, 2]
let allDice = []
let gamble = [1, 1]

//add event listeners to the buttons
start.addEventListener(`click`,startGame)
gambleBtn.addEventListener(`click`,raiseGamble)
lie.addEventListener(`click`,whoWin)


// the function create the dice of the players and mix them
// at the end stop display start button
function startGame () {
	for (let i = 0; i < diceArr1.length; i++) {
		diceArr1[i] = Math.floor(Math.random() * 6) + 1;
		let newD = document.createElement(`div`)
		newD.textContent = diceArr1[i]
		player1Dice.appendChild(newD)
	}
	for (let i = 0; i < diceArr2.length; i++) {
		diceArr2[i] = Math.floor(Math.random() * 6) + 1;
		let newD = document.createElement(`div`)
		newD.textContent = diceArr2[i]
		player2Dice.appendChild(newD)
	}
	start.style.display = `none`;
	gambleBtn.style.display = `inline-block`;
	h1.textContent = `player ${turn} it's your turn please gamble`
	allDice = []
}

// the function take the input of the player gamble
//first check if the gamble legal
//then update the gamble variable
//change the player turn and give Instructions
function raiseGamble (e) {
	e.preventDefault()
	if (0 < dice.value && dice.value < 7) {
		if (many.value > gamble[0]) {
		gamble[0] = many.value
		gamble[1] = dice.value
		if (turn === 1) {
			turn = 2
		} else {
			turn = 1
		}
		h1.textContent = `player ${turn} its you turn`
		lie.style.display = `inline-block`;
		} else if (many.value == gamble[0] && dice.value > gamble[1]) {
			gamble[0] = many.value
			gamble[1] = dice.value
			if (turn === 1) {
				turn = 2
			} else {
				turn = 1
			}
			h1.textContent = `player ${turn} its you turn`
			lie.style.display = `inline-block`; 
		} else {
			h1.textContent = `player ${turn} you need to raise the gamble`
		}
	} else {
		h1.textContent = `player ${turn} a dice can be only between 1 to 6`
	}
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
		h1.textContent = `player ${turn} you lost this round, you lost a dice`
		setTimeout(mixDice, 3000)
	} else  if (turn === 1){
		h1.textContent = `player 2 you win!!!`
		start.style.display = `inline-block`;
		gambleBtn.style.display = `none`;
	} else {
		h1.textContent = `player 1 you win!!!`
		start.style.display = `inline-block`;
		gambleBtn.style.display = `none`;
	}
	
	allDice = []
	gamble = [0, 0]
	lie.style.display = `none`;
}

// the functions take one dice out from the loser
function cutDice1() {
	player1Dice.lastElementChild.remove()
}

function cutDice2() {
	player2Dice.lastElementChild.remove()
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
	h1.textContent = `let's start another round, player ${turn} it's your turn`;
	many.value = ``;
	dice.value = ``;
}