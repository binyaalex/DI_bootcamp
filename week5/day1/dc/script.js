(function () {
	let form = document.querySelector('form')
	form.addEventListener(`submit`, json)
})()

function json (e) {
	e.preventDefault()
	let results = document.getElementById("results");
	let object = {}
	const urlSearchParams = new URLSearchParams(window.location.search);
	for (const [key, value] of urlSearchParams.entries()) {
		object[key] = key
		object[key] = value
	}
	let objectJson = JSON.stringify(object)
	let newP = document.createElement(`p`)
	results.appendChild(newP)
	newP.textContent = objectJson
}

