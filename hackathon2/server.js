const exp = require('express')
const db = require('./modules/db')
const path = require('path')

const app = exp()
app.use(exp.json());

app.use(exp.static(__dirname + '/public'))

//adding the user to the database and send back the info to the script
app.post('/profile', (req, res) =>{
	console.log(req.body.first)
	console.log(2)
	db.addUser(req.body.first, req.body.last, req.body.pass, req.body.age,  req.body.email)
	.then(row => {
		res.json(row)
	})
	.catch(e => {
		console.log(e)
	})
})

// checking email and password and sending back the info
app.put('/profile', (req, res) =>{
	console.log(req.body.email)
	console.log(2)
	db.log(req.body.email, req.body.pass)
	.then(row => {
		console.log(row)
		res.json(row)
	})
	.catch(e => {
		console.log(e)
	})
})

//get the trips of the user and sending back to the script
app.delete('/profile', (req, res) =>{
	console.log(req.body.userID)
	console.log(3)
	db.allTrips(req.body.userID)
	.then(row => {
		console.log(row)
		res.json(row)
	})
	.catch(e => {
		console.log(e)
	})
})

//adding the trip to the database and send back the info to the script
app.post('/created', (req, res) =>{
	console.log('created')
	console.log(req.body.userID)
	console.log(1)
	db.addTrip(req.body.userID, req.body.destination, req.body.start, req.body.end,  req.body.type)
	.then(row => {
		res.json(row)
	})
	.catch(e => {
		console.log(e)
	})
})

// searching this trip and sending back the info
app.get('/find/:destination/:date/:type', (req, res) =>{
	console.log('find')
	console.log(req.params.destination)
	db.findTrip(req.params.destination, req.params.date, req.params.type)
	.then(row => {
		res.json(row)
	})
	.catch(e => {
		console.log(e)
	})
})

//make this url the profile url 
app.get('/', (req, res) =>{
	res.sendFile(path.resolve('public/profile.html'))
})

app.listen(5000, ()=>{
  console.log(`listening to port 5000`);
})