let planets = [`mercory`, `venus`, `earth`, `mars`, `upiter`, `saturn`, `uranus`, `neptun`];
let colors = [`#AA6339`, `yellow`, `blue`, `red`, `orange`, `#AA9439`, `#2E4372`, `lightblue`];
let section = document.body.firstElementChild;
let planets2 = [
	{mercory: 0},
	{venus: 0},
	{earth: 1},
	{mars: 2},
	{upiter: 79},
	{saturn: 82},
	{uranus: 27},
	{neptun: 14},
]
function solarSystem () {
	for (let i = 0; i < planets.length; i++) {
		let newD = document.createElement(`div`);
		newD.classList.add(`planet`, `${planets[i]}`);
		section.appendChild(newD);
		document.querySelector(`.${planets[i]}`).style.backgroundColor = colors[i]
		newD.style.display = `grid`
		newD.style.gridTemplateColumns = `repeat(41, 1fr)`
		for (let d = 0; d < planets2[i][`${planets[i]}`]; d++) {
			let newM = document.createElement(`div`);
			newM.classList.add(`moon`)
			newD.appendChild(newM)
		}
	}
}

solarSystem ()

