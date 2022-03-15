// let planets = [`mercory`, `venus`, `earth`, `mars`, `upiter`, `saturn`, `uranus`, `neptun`];
// let colors = [`#AA6339`, `yellow`, `blue`, `red`, `orange`, `#AA9439`, `#2E4372`, `lightblue`];
let section = document.body.firstElementChild;
// let planets2 = [
// 	{mercory: 0},
// 	{venus: 0},
// 	{earth: 1},
// 	{mars: 2},
// 	{upiter: 79},
// 	{saturn: 82},
// 	{uranus: 27},
// 	{neptun: 14},
// ]
// function solarSystem () {
// 	for (let i = 0; i < planets.length; i++) {
// 		let newD = document.createElement(`div`);
// 		newD.classList.add(`planet`, `${planets[i]}`);
// 		section.appendChild(newD);
// 		document.querySelector(`.${planets[i]}`).style.backgroundColor = colors[i]
// 		newD.style.display = `grid`
// 		newD.style.gridTemplateColumns = `repeat(41, 1fr)`
// 		for (let d = 0; d < planets2[i][`${planets[i]}`]; d++) {
// 			let newM = document.createElement(`div`);
// 			newM.classList.add(`moon`)
// 			newD.appendChild(newM)
// 		}
// 	}
// }

// solarSystem ()

let planets2 = [
	{
	name:`mercury`,
	moons: 0,
	color:`#AA6339`,
	},
	{
	name:`venus`,
	moons: 0,
	color:`yellow`,
	},
	{
	name:`earth`,
	moons: 1,
	color:`blue`,
	},
	{
	name:`mars`,
	moons: 2,
	color:`red`,
	},
	{
	name:`jupiter`,
	moons: 79,
	color:`orange`,
	},
	{
	name:`saturn`,
	moons: 82,
	color:`#AA9439`,
	},
	{
	name:`uranus`,
	moons: 27,
	color:`#2E4372`,
	},
	{
	name:`neptune`,
	moons: 14,
	color:`lightblue`,
	},
]

function solarSystem2 () {
	for (let i = 0; i < planets2.length; i++) {
		let newD = document.createElement(`div`);
		newD.classList.add(`planet`, `${planets2[i][`name`]}`);
		section.appendChild(newD);
		document.querySelector(`.${planets2[i][`name`]}`).style.backgroundColor = planets2[i][`color`]
		newD.style.display = `grid`
		newD.style.gridTemplateColumns = `repeat(41, 1fr)`
		for (let d = 0; d < planets2[i][`moons`]; d++) {
			let newM = document.createElement(`div`);
			newM.classList.add(`moon`)
			newD.appendChild(newM)
		}
	}
}

solarSystem2()