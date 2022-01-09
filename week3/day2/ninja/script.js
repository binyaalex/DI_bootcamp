// let totalTip = document.getElementById(`totalTip`)
// totalTip.style.display = `none`
// let calculate = document.getElementById(`calculate`)

// calculate.addEventListener(`click`, calculateTip)



// function calculateTip() {
// 	let billAmount = document.getElementById('billAmt').value
// 	let serviceQuality = document.getElementById('serviceQual').value
// 	let numberOfPeople = document.getElementById('peopleAmt').value
// 	if (billAmount === `` || serviceQuality === `0`) {
// 		alert(`please write the amount and quality`)
// 	}
// 	if (numberOfPeople === ``) {
// 		numberOfPeople = 1
// 		let each = document.getElementById(`each`)
// 		each.style.display = `none`
// 	}
// 	let total = ((billAmount * serviceQuality) / numberOfPeople).toFixed(2)
// 	totalTip.style.display = `block`
// 	let tip = document.getElementById(`tip`)
// 	tip.textContent = total
// 	tip.style.display = `block`
// }


/*let email = document.getElementById(`email`)
let submit = document.getElementById(`submit`)
let form = document.querySelector(`form`)

form.addEventListener(`submit`, validity)

function validity (e) {
	if (!/.@.../.test(email.value)) {
		e.preventDefault()
		alert(`please enter a valid email address`)
	}
}*/

let btn = document.querySelector(`button`)
let div = document.querySelector(`div`)
let section = document.querySelector(`section`) 
btn.addEventListener(`click`, position)

function position() {
	navigator.geolocation.getCurrentPosition(showPosition);
}


function showPosition(position) {
  div.textContent = "Latitude: " + position.coords.latitude;
  section.textContent = "Longitude: " + position.coords.longitude;
}
