// exercise 1
// In the <div> above, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let divNav = document.getElementById(`navBar`);
divNav.setAttribute(`id`, `socialNetworkNavigation`);
// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
let newLi = document.createElement(`li`);
let newA =document.createElement(`a`);
// Create a new text node with “Logout” as its specified text.
newA.textContent = `Logout`;
newA.setAttribute(`href`, `#`)
// Append the text node to the newly created list node (li)
newLi.appendChild(newA);
// Finally, append this updated list node to the unordered list above, using the appendChild method.
let ulElemnt = document.querySelector(`ul`);
ulElemnt.appendChild(newLi);
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last li elements from their parent element (ul). Display the text of each link. (Hint: use the textContent property).
let firsLi = ulElemnt.firstElementChild.textContent;
let lastLi = ulElemnt.lastElementChild.textContent;
console.log(`${firsLi} \n${lastLi}`);


