// let select = document.querySelector(`select`);
// // let blues = select.children[1];
// // let div = document.querySelector(`div`);
// // let h1 = document.createElement(`h1`)
// // h1.textContent = blues.value
// // div.appendChild(h1)

// // let classic = document.createElement(`option`)
// // classic.textContent = `Classic`
// // classic.setAttribute('value', 'classic')
// // classic.setAttribute('selected', ``)
// // select.appendChild(classic)

// let btn = document.querySelector('input')
// btn.addEventListener(`click`, removecolor)

// function removecolor(e) {
//  	for (let i = 0; i < select.children.length; i++) {
//  		if (select.children[i].textContent === select.value) {
//  			select.children[i].style.display = `none`
//  		}
//  	}
//  } 

let div = document.querySelector(`div`)
let shoppingList = []
let form = document.createElement(`form`)
div.appendChild(form)
let input = document.createElement(`input`)
div.appendChild(input)
let addItem = document.createElement(`button`)
div.appendChild(addItem)
addItem.textContent = `AddItem`
let clearAll = document.createElement(`button`)
div.appendChild(clearAll)
clearAll.textContent = `ClearAll`

addItem.addEventListener(`click`, addItemf)
clearAll.addEventListener(`click`, clearAllf)

function addItemf() {
	shoppingList.push(input.value)
}

function clearAllf() {
	shoppingList = []
}




















