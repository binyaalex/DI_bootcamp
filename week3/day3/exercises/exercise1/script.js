let redBox = document.getElementById('animate')
let pixel = 5
let timeId

function myMove() {
	timeId = setInterval(moveRight, 5)
}

function moveRight () {
	if (pixel === 350) {
		clearInterval(timeId);
	} else {
		pixel +=5
		redBox.style.left = `${pixel}px`;
	}
}



