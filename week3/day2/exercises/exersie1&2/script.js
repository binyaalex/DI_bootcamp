// exercise 1
// Using DOM methods, remove the last paragraph in the <article> tag from the DOM.
let lastp = document.body.firstElementChild.lastElementChild;
lastp.remove();
// Add an event listener which will change the background color of the h2 tag from the DOM when clicked on.
let h2 = document.body.firstElementChild.children[1];

function changeBgc(event) {
	h2.style.backgroundColor = 'yellow';
}

h2.addEventListener(`click`, changeBgc);
// Set the font size of the h1 tag to a random pixel size between 0 to 100.(Check out this documentation)
let h1 = document.body.firstElementChild.children[0];
h1.style.fontSize = `${Math.floor(Math.random() * 101)}px`;
// Add an event listener which will hide the h3 when it’s clicked on (use the display property).
let h3 = document.body.firstElementChild.children[2];
function hide (argument) {
	h3.style.display = `none`;
}
h3.addEventListener(`click`, hide);
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let article = document.body.firstElementChild;
let boldBtn = document.createElement(`button`);
boldBtn.textContent = 'bold';
article.appendChild(boldBtn);
let allP = document.getElementsByTagName(`p`);
function bold () {
	for (let p of allP) {
		p.style.fontWeight = `bold`;
	}
}
boldBtn.addEventListener(`click`, bold);

// When the “Submit” button of the form is clicked:
// get the values of the input tags
// make sure that they are not empty,
// then append them to a HTML table, in the div, below the form.
let form = document.forms[0];
form.addEventListener(`submit`, table);
let firstTime = 0;
let heads = 0;
let usersAnswer = document.body.children[2];
let ev = 0
function table (event) {
	event.preventDefault();
	let inputFname = event.target.elements.fname;
	let inputLname = event.target.elements.lname;
	let FnameValue = inputFname.value;
	let LnameValue = inputLname.value;

	if (FnameValue !== `` && LnameValue !== ``) {
		if (firstTime === 0) {
			ev = event;
			let table = document.createElement(`table`);
			usersAnswer.appendChild(table);
			for (let i = 0; i < form.length-1; i++) {
				let newTr = document.createElement(`tr`);
				table.appendChild(newTr);
				for (let i = 0; i < form.length*2; i += 4) {
					if (heads === 0) {
						let newTh = document.createElement(`th`);
						newTr.appendChild(newTh);
						newTh.textContent = form.children[i].textContent;
					}
				}
				heads = 1;
				firstTime = 1;
			}
			for (let i = 0; i < form.length-1; i++) {
				let newTd = document.createElement(`td`);
				let trLast = usersAnswer.firstElementChild.lastElementChild;
				trLast.appendChild(newTd);
			}
			usersAnswer.firstElementChild.lastElementChild.firstElementChild.textContent = FnameValue
			usersAnswer.firstElementChild.lastElementChild.lastElementChild.textContent = LnameValue
			inputFname.value = "";
			inputLname.value = ""
		} else {
				let newTr = document.createElement(`tr`);
				usersAnswer.firstElementChild.appendChild(newTr)
				for (let i = 0; i < form.length-1; i++) {
					let newTd = document.createElement(`td`);
					newTr.appendChild(newTd);
				}
			usersAnswer.firstElementChild.lastElementChild.firstElementChild.textContent = FnameValue
			usersAnswer.firstElementChild.lastElementChild.lastElementChild.textContent = LnameValue
			inputFname.value = "";
			inputLname.value = ""
		}
	}
}

// When you hoover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
let p2 = document.body.firstElementChild.children[4];

function fadeOut () {
	p2.style.opacity = `0%`;
	p2.style.transition = `2s`;
}

p2.addEventListener(`mouseover`, fadeOut);

// exercise 2
// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph.
let allBold;
function getBold_items () {
	allBold = document.getElementsByTagName(`strong`);
}
getBold_items ();
// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
	for (let i = 0; i < allBold.length; i++) {
		allBold[i].style.color = `blue`;
	}
}
highlight()
// Create a function called return_normal() that changes the color of all the bold text back to black.
function return_normal() {
	for (let i = 0; i < allBold.length; i++) {
		allBold[i].style.color = `black`;
	}
}
return_normal()
// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph)
let strongP = document.body.children[3];
strongP.addEventListener(`mouseover`, highlight);
strongP.addEventListener(`mouseout`, return_normal);