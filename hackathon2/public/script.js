// this function sending the user sign in info to the server
// and after the info back 
// transfer him to his profile with his user_id at the url
const userAdd = () => {
	const first = document.querySelectorAll('input')[0].value
	const last = document.querySelectorAll('input')[1].value
	const pass = document.querySelectorAll('input')[2].value
	const age = document.querySelectorAll('input')[3].value
	const email = document.querySelectorAll('input')[4].value
	fetch('http://localhost:5000/profile', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify({first, last, pass, age, email})
	})
	.then(res => res.json())
	.then(row => {
		console.log(row)
		window.location.href=`/?user_id=${row[0].user_id}`
	})
	.catch(e => {
		console.log(e)
	})
}

// this function sending the user log in info to the server
// and after the info back 
// transfer him to his profile with his user_id at the url
const login = () => {
	console.log(1)
	const pass = document.querySelectorAll('input')[1].value
	const email = document.querySelectorAll('input')[0].value
	fetch('http://localhost:5000/profile', {
		method: 'PUT',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify({email, pass})
	})
	.then(res => res.json())
	.then(row => {
		console.log(row)
		if (row.length === 0) {
			alert(`the email or the password or both are not correct, you can try again`)
		}
		window.location.href=`/?user_id=${row[0].user_id}&destination=${row[0].destination}`
	})
	.catch(e => {
		console.log(e)
	})
}

// this function sending the user to the sign in page
const goSignin = () => {
	window.location.href=`signin.html`
}

//that for make the userId global that we can take his info from all the pages
const params = new URLSearchParams(window.location.search)
const userID = params.get('user_id')

// this function take the info of the user and display it on his profile
const getTrips = () => {
	console.log(1)
	fetch('http://localhost:5000/profile', {
		method: 'DELETE',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify({userID})
	})
	.then(res => res.json())
	.then(row => {
		console.log(row)
		const header = document.querySelector('header')
		const h2 = document.createElement(`h2`)
		if (row[0].destination !== null) {
			h2.textContent = `Hello ${row[0].first_name} here are your trips`
			header.appendChild(h2)
			for (let i = 0; i < row.length; i++) {
				const h3 = document.createElement(`h3`)
				h3.textContent = `${row[i].destination} ${row[i].start_date.slice(0, -14)} - ${row[i].end_date.slice(0, -14)}`
				header.appendChild(h3)
			}
		} else {
			h2.textContent = `Hello ${row[0].first_name}`
			header.appendChild(h2)		
		}
	})
	.catch(e => {
		console.log(e)
	})
}

// that make sure the function will display only on the profile
if (window.location.href.includes(`?`) && !window.location.href.includes(`html`)) {
	getTrips()
}

// this function sending the user to the create page along with his id
const goCreate = () => {
	window.location.href=`create.html?user_id=${userID}`
}

// this function sending the trip info to the server
// and after the info back 
// transfer him to his profile with his user_id at the url
const create = () => {
	const destination = document.querySelectorAll('input')[0].value
	const start = document.querySelectorAll('input')[1].value
	const end = document.querySelectorAll('input')[2].value
	const type = document.querySelectorAll('input')[3].value
	fetch('http://localhost:5000/created', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify({userID, destination, start, end, type})
	})
	.then(res => res.json())
	.then(row => {
		console.log(row)
		window.location.href=`/?user_id=${row[0].user_id}`
	})
	.catch(e => {
		console.log(e)
	})
}

// this function sending the user to the find page along with his id
const goFind = () => {
	window.location.href=`find.html?user_id=${userID}`
}

// this function sending the search info to the server
// and after the info back display it to th user 
const find = () => {
	console.log(1)
	let destination = document.querySelectorAll('input')[0].value
	if (destination == '') {
		destination = 'anydestination'
	}
	let date = document.querySelectorAll('input')[1].value
	if (date == '') {
		date = 'anydate'
	}
	let type = document.querySelectorAll('input')[2].value
	if (type == '') {
		type = 'anytype'
	}
	fetch(`http://localhost:5000/find/${destination}/${date}/${type}`)
	.then(res => res.json())
	.then(row => {
		console.log(row)
		if (row.length === 0) {
			alert(`doesn't find a ${type} trip to ${destination} on ${date}, you can create one by your own`)
		} else {
			const divs = document.querySelectorAll('div')
			for (let i = 0; i < divs.length; i++) {
				divs[i].remove()
			}
			const footer = document.querySelector('footer')
			for (let i = 0; i < row.length; i++) {
				let div = document.createElement(`div`)
				footer.appendChild(div)
				let h3 = document.createElement(`h3`)
				h3.textContent = `${row[i].first_name}, ${row[i].age} yaers old, going to ${row[i].destination} for a ${row[i].type} trip from  ${row[i].start_date.slice(0, -14)} to ${row[i].end_date.slice(0, -14)}`
				div.appendChild(h3)
				let h4 = document.createElement(`h4`)
				h4.textContent = `contact: ${row[i].email}`
				div.appendChild(h4)
			}
		}
	})
	.catch(e => {
		console.log(e)
	})
}

// this function sending the user to the profile page along with his id
const goProfile = () => {
	window.location.href=`/?user_id=${userID}`
}

// this function sending the user to the profile page along with his id
const goLogin = () => {
	window.location.href=`login.html`
}