// let allBooks =  [
// 					{
// 						title: `The Time Traveler's Wife`,
// 						author: `Audrey Niffenegger`,
// 						image: `https://upload.wikimedia.org/wikipedia/en/b/bf/TimeTravellersWife.jpg`,
// 						alreadyRead: true
// 					},

// 					{
// 						Title: `The Curious Incident of the Dog in the Night-Time`,
// 						Author: `Mark Haddon`,
// 						image: `https://upload.wikimedia.org/wikipedia/he/thumb/5/58/%D7%9E%D7%A7%D7%A8%D7%94_%D7%9E%D7%95%D7%96%D7%A8.JPG/300px-%D7%9E%D7%A7%D7%A8%D7%94_%D7%9E%D7%95%D7%96%D7%A8.JPG`,
// 						alreadyRead: false
// 					}
// 			    ]

// let div = document.querySelector(`div`)
// let table = document.createElement(`table`)
// div.appendChild(table)

// for (let i = 0; i < 3; i++) {
// 	let newTr = document.createElement(`tr`)
// 	table.appendChild(newTr)
// }
// for (let el in allBooks[0]) {
// 	let th = document.createElement(`th`)
// 	th.textContent = el
// 	table.firstElementChild.appendChild(th)
// }
// for (let el in allBooks[0]) {
// 	let td = document.createElement(`td`)
// 	td.textContent = allBooks[0][el]
// 	table.children[1].appendChild(td)
// 	if (allBooks[0].alreadyRead) {
// 		td.style.color = `red`
// 	}
// }
// table.children[1].children[2].textContent = ``
// let img1 = document.createElement(`img`)
// img1.setAttribute(`src`, allBooks[0].image)
// img1.style.width = `100px`
// table.children[1].children[2].appendChild(img1)
// for (let el in allBooks[1]) {
// 	let td = document.createElement(`td`)
// 	td.textContent = allBooks[1][el]
// 	table.children[2].appendChild(td)
// 	if (allBooks[1].alreadyRead) {
// 		td.style.color = `red`
// 	}
// }
// table.children[2].children[2].textContent = ``
// let img2 = document.createElement(`img`)
// img2.setAttribute(`src`, allBooks[1].image)
// img2.style.width = `100px`
// table.children[2].children[2].appendChild(img2)
console.log(1)
let table = document.body.firstElementChild;
let arr = []
for (let a = 0; a < table.children.length; a++) {
	for (let b = 0; b < table.children[a].children.length; b++) {
		for (let c = 0; c < table.children[a].children[b].children.length; c++) {
			console.log(table.children[a].children[b].children[c])
			console.log[a]			
			for (let d = 0; d < table.children[a].children[b].children[c].textContent.length; d++) {
				console.log(a)
				console.log(b)
				arr.push(table.children[a].children[b].children[c].textContent[d])
				console.log(table.children[a].children[b].children[c].textContent[d])				
			}
			if (arr[0] === arr[2]) {
				table.children[a].children[b].children[c].style.color = `blue`
			}
			arr = []
		}
	}
}