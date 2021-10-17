// exercise 2
// Add a “light blue” background color and some padding to the <div>.
let div = document.body.firstElementChild;
div.style.backgroundColor = `lightblue`;

// Do not display the first name (John) in the list.
let ul = document.body.children[1];
ul.firstElementChild.style.display = `none`

// Add a border to the second name (Pete).
ul.lastElementChild.style.border = `1px solid black`;

// Change the font size of the whole body.
document.body.style.fontSize = `30px`;

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
let x = ul.firstElementChild.textContent;
let y = ul.lastElementChild.textContent;
if (div.style.backgroundColor === `lightblue`) {
	alert(`Hello ${x} and ${y}`)
}