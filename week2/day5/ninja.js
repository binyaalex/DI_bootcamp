let wrong = 0
let answer = prompt(`player1 please choose word with minimum 8 letters`)
	while (answer.length < 8) {
		answer = prompt(`the word you pick had less than 8 letters, please choose word with minimum 8 letters`)
	}
console.log (`*`.repeat(answer.length))
let show = []
let letters = []
let az = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `n`, `m`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`]
for (var i = 0; i < answer.length; i++) {
	show.push (`*`)
}
player2Win = 0

function player2 () {
	let letter = prompt(`player2 please guess a letter`)
		if (!az.includes(letter)) {
			letter = prompt(`${letter} is not a letter,please guess a letter`)
		}
		while (letters.includes(letter)) {
			letter = prompt(`you already gusse ${letter} please guess another letter`)
		}
		letters.push(letter)	
		for (var i = 0; i < answer.length; i++) {
			if (answer[i] === letter) {
			show.splice(i, 1, letter)
			} 
		}
		if (answer.includes(letter) === false) {
				wrong++
				console.log(`there is no ${letter} in the word you have ${10 - wrong} more guess`)
			}
		console.log(show.join(``))
		console.log(letters.join(`, `))
		if (show.includes(`*`) === false) {
		console.log (`CONGRATS player2 YOU WIN with only ${wrong} mistake`)
		player2Win = 1
		}
}
		 
while (wrong < 10 && player2Win === 0) {
	player2()
}
if (player2Win === 0) {
	console.log (`player2 you lose`)
}
			
		
		