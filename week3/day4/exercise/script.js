let sidebar = document.getElementById('sidebar');
let main = document.getElementById('main');
let colorArr = [`red`, `orangered`, `orange`, `yellow`, `yellowgreen`, `lightgreen`, `green`, `turquoise`, `cyan`, `lightskyblue`, `dodgerblue`, `blue`, `darkblue`, `indigo`, `darkmagenta`, `violet`, `lightpink`, `lightgray`, `gray`, `black`, `white`];
let myColor;
let isMouseDown;
let btn = document.getElementById('btn');

function pallet () {
	for (let i = 0; i < colorArr.length; i++) {
		let newD = document.createElement(`div`);
		newD.style.backgroundColor = `${colorArr[i]}`;
		newD.classList.add(`colorSqaure`)
		newD.addEventListener(`click`, getColor)
		sidebar.appendChild(newD)
	}
}

pallet();

function paintArea () {
	for (let i = 0; i < 1440; i++) {
		let newD = document.createElement(`div`);
		newD.style.backgroundColor = `white`;
		newD.classList.add(`whiteSqaure`);
		newD.addEventListener(`click`, setColor);
		newD.addEventListener(`mousedown`, MouseDown);
		newD.addEventListener(`mouseover`, mouseCheck);
		newD.addEventListener(`mouseup`, mouseUp);
		main.appendChild(newD);
	}
}

paintArea ();

function getColor (e) {
	myColor = e.target.style.backgroundColor
}

function setColor (e) {
	e.target.style.backgroundColor = myColor
}

function MouseDown() {
	isMouseDown = true;
}

function mouseCheck(e) {
	if (isMouseDown) {
		setColor(e)
	}
}

function mouseUp () {
	isMouseDown = false;
}

btn.addEventListener(`click`, clearMain)

function clearMain () {
	for (let i = 0; i < 1440; i++) {
		main.children[i].style.backgroundColor = `white`;
	}
}