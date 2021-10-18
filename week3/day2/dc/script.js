let btn = document.getElementById(`lib-button`);
btn.addEventListener(`click`, lib)
let inputs = document.getElementsByTagName(`input`)
let story = document.getElementById(`story`)
let version1
let version2
let version3
let version4
let counter = 0
let check = 0 
let div = document.getElementById(`container`)
let nounValue
let adjectiveValue
let personValue
let verbValue
let placeValue
let shuffle


function lib(event) {
	event.preventDefault();
	let inputNoun = inputs[0];
	let inputAdjective = inputs[1];
	let inputPerson = inputs[2];
	let inputVerb = inputs[3];
	let inputPlace = inputs[4];
	nounValue = inputNoun.value;
	adjectiveValue = inputAdjective.value;
	personValue = inputPerson.value;
	verbValue = inputVerb.value;
	placeValue = inputPlace.value;
	console.log(nounValue, adjectiveValue, personValue, verbValue, placeValue)
	if (nounValue !==`` &&
		adjectiveValue !==`` &&
		personValue !==`` &&
		verbValue !==`` && 
		placeValue !==``) 
	{
		version1 = `${personValue} ${verbValue} ${adjectiveValue} ${nounValue} ${placeValue}`
		story.textContent = version1;
		if (check === 0) {
			shuffle = document.createElement(`button`)
			shuffle.setAttribute(`id`, `shuffle`)
			shuffle.textContent = `shuffle`
			div.appendChild(shuffle)
			shuffle.addEventListener(`click`, shuffleArr)
			console.log(version1)
			check = 1
		}
	}
}

function shuffleArr () {
	console.log(`shuffle`)
	let arr = [nounValue, adjectiveValue, personValue, verbValue, placeValue]
	let randomArr = []
	let i = Math.floor(Math.random() * 5)
	let a = i
	randomArr.push(arr[i])
	i = Math.floor(Math.random() * 5)
	while (a === i) {
		i = Math.floor(Math.random() * 5)
	}
	let b = i
	randomArr.push(arr[i])
	i = Math.floor(Math.random() * 5)
	while (a === i || b === i) {
		i = Math.floor(Math.random() * 5)
	}
	let c = i
	randomArr.push(arr[i])
	i = Math.floor(Math.random() * 5)
	while (a === i || b === i || c === i) {
		i = Math.floor(Math.random() * 5)
	}
	let d = i
	randomArr.push(arr[i])
	i = Math.floor(Math.random() * 5)
	while (a === i || b === i || c === i || d === i) {
		i = Math.floor(Math.random() * 5)
	}
	randomArr.push(arr[i])
	console.log(randomArr)
	if (counter === 0) {
		version2 = randomArr.join(` `)
		if (version1 !== version2) {
			story.textContent = version2
			counter++
		} else {
			shuffleArr()
		}
	} else if (counter === 1) {
		version3 = randomArr.join(` `)
		if (version3 !== version2 && version3 !== version1) {
			story.textContent = version3
			counter++
		} else {
			shuffleArr()
		}
	} else {
		version4 = randomArr.join(` `)
		if (version4 !== version2 && version4 !== version1 && version4 !== version3) {
			story.textContent = version4
			counter++
		} else {
			shuffleArr()
		}
	}
	
	
}
		



