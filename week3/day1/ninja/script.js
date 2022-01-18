function createCalendar(year, month) {
	let section = document.querySelector(`section`)
	if (section.firstElementChild) {
	    section.firstElementChild.remove()
	}
	let table = document.createElement(`table`)
	section.appendChild(table)
	let daysArr = [`Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`]
	let lastDate = new Date(year, month-1, 31).getDate()
	if (month === 2) {
		if (lastDate === 3) {
			lastDate = 28
		} else {
			lastDate = 29
		}
	} else if (lastDate === 1) {
		lastDate = 30
	}
	let num = 1
	let row = 6
	let firstDate = new Date(year, month-1, 1)
	let c = firstDate.getDay()
	if (c === 0) {
		c = 7
	}
	if ((c === 7 && lastDate > 29) || (c === 6 && lastDate === 31)) {
		row = 7
	} else if (lastDate === 28 && c === 1) {
		row = 5
	}
	for (let i = 0; i < row; i++) {
		let newTr = document.createElement(`tr`)
		table.appendChild(newTr)
		let day = 2
		for (let a = 0; i < 1 && a < 7; a++) {
			let newTh =document.createElement(`th`)
			newTh.textContent = daysArr[a]
			newTr.appendChild(newTh)
		}
		for (let b = 0; i > 0 && b < 7; b++) {
			let newTd =document.createElement(`td`)
			newTr.appendChild(newTd)
		}
	}
		for (let i = 1; i < 2; i++) {
			for (c -= 1 ; c < table.children[i].children.length; c++) {
				table.children[i].children[c].textContent = num
				num++
			}
		}
		for (let i = 2; i < table.children[i].children.length; i++) {
			for (let a = 0 ; a < table.children[i].children.length && num <= lastDate; a++) {
				table.children[i].children[a].textContent = num
				num++
			}
		}
}



createCalendar(2021, 2)
