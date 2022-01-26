json()
function json (e) {
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
