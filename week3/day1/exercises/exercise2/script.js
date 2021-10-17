// exercise 2
// In the HTML above change the name “Pete” to “Richard”.
let ul1Li2 = document.body.children[1].children[1];
ul1Li2.textContent = `Richard`;
// Change each first name of the two <ul>'s to your name.
//At the end of each <ul> add a <li> that says “Hey students”.
let ulElements = document.querySelectorAll(`.list`);

for (ul of ulElements) {
	ul.firstElementChild.textContent = `benji`;
	let newLi = document.createElement(`li`);
	newLi.textContent = `Hey students`;
	ul.appendChild(newLi);
}

// Delete the name Sarah from the second <ul>.
let ul2Li2 = document.body.children[2].children[1];
ul2Li2.remove();

// Add a class called student_list to both of the <ul>'s.
for (ul of ulElements) {
	ul.classList.add("student_list")
}

// Add the classes university and attendance to the first <ul>.
document.querySelector(`.list`).classList.add(`university`, `attendance`)