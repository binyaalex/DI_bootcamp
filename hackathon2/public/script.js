const userAdd = () => {
	const first = document.querySelectorAll('input')[0].value
	const last = document.querySelectorAll('input')[1].value
	const pass = document.querySelectorAll('input')[2].value
	const age = document.querySelectorAll('input')[3].value
	const email = document.querySelectorAll('input')[4].value
	fetch('http://localhost:5000/loggedin', {
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

const login = () => {
	console.log(1)
	const pass = document.querySelectorAll('input')[1].value
	const email = document.querySelectorAll('input')[0].value
	fetch('http://localhost:5000/loggedin', {
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


const goSignin = () => {
	window.location.href=`signin.html`
}

const params = new URLSearchParams(window.location.search)
const userID = params.get('user_id')

const getTrips = () => {
	console.log(1)
	fetch('http://localhost:5000/loggedin', {
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

if (window.location.href.includes(`?`) && !window.location.href.includes(`create`)) {
	getTrips()
}



const goCreate = () => {
	window.location.href=`create.html?user_id=${userID}`
}

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
		window.location.href=`/?user_id=${row[0].user_id}&destination=${row[0].destination}`
	})
	.catch(e => {
		console.log(e)
	})
}

const goFind = () => {
	window.location.href=`find.html?user_id=${userID}`
}

const find = () => {
	console.log(1)
	const destination = document.querySelectorAll('input')[0].value
	// const start = document.querySelectorAll('input')[1].value
	// const end = document.querySelectorAll('input')[2].value
	// const type = document.querySelectorAll('input')[3].value
	fetch(`http://localhost:5000/find/${destination}`)
	.then(res => res.json())
	.then(row => {
		console.log(row)
		if (row.length === 0) {
			alert(`doesn't find a trip to ${destination}, you can create one by your own`)
		} else {
			const footer = document.querySelector('footer')
			for (let i = 0; i < row.length; i++) {
				let h31 = document.createElement(`h3`)
				h31.textContent = `${row[i].first_name}, ${row[i].age} yaers old, going to ${row[i].destination} for a ${row[i].type} trip from  ${row[i].start_date.slice(0, -14)} to ${row[i].end_date.slice(0, -14)}`
				footer.appendChild(h31)
				const h32 = document.createElement(`h3`)
				h32.textContent = `contact: ${row[i].email}`
				footer.appendChild(h32)
			}
		}
	})
	.catch(e => {
		console.log(e)
	})
}

const goLoggedin = () => {
	window.location.href=`/?user_id=${userID}`
}