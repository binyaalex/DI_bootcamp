let form = document.forms[0];
form.addEventListener(`submit`, radiusToVolume);
function radiusToVolume(event) {
	event.preventDefault();
	let inputRadius = event.target.elements.radius;
	let inputVolume = event.target.elements.volume;
	let radiusValue = inputRadius.value;
	let volumeValue = inputVolume.value;
	radiusValue = Number(radiusValue);
	inputVolume.value = radiusValue*radiusValue*radiusValue*4*3.14/3
}
// exercise 4
// Add as many events listeners as possible to one element on your webpage. Each listener should do a different thing, for instance- change position x, change position y, change color, change the font size… and more.

let h1 = document.body.firstElementChild
h1.addEventListener(`click`, function(){
	h1.style.color = `blue`;
})
h1.addEventListener(`mouseover`, function(){
	h1.style.fontSize = `50px`;
})
h1.addEventListener(`mouseout`, function(){
	h1.style.fontWeight = `normal`;
})
h1.addEventListener(`contextmenu`, function(){
	h1.style.fontFamily = `monospace`;
})
h1.addEventListener(`dblclick`, function(){
	h1.style.fontStyle = `oblique`;
})
h1.addEventListener(`copy`, function(){
	h1.style.opacity = `50%`;
})
h1.addEventListener(`cut`, function(){
	h1.style.display = `none`;
})



