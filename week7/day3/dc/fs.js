const fs = require('fs');

fs.readFile('game', (err, data)=> {
	if (err) {
		console.log(err)
	} else {
		// console.log(data.toString())
		const game = data.toString()
		// console.log(game + 'good')
		let position = 0
		let steps = 0
		let first = 0
		for (let i = 0; i < game.length; i++) {
			steps++
			if (game[i] === `>`) {
				position++
			} else {
				position--
			}
			if (position === -1 && first === 0) {
				console.log(`first time in left side is in ${steps} steps`)
				first = 1
			}
		}
		console.log(`total stepd: ${position}`)
	}
})