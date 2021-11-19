const exp = require('express')
const db = require('./modules/db')
const path = require('path')

const app = exp()
app.use(exp.json());

app.use(exp.static(__dirname + '/public'))

app.post('/loggedin', (req, res) =>{
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

app.put('/loggedin', (req, res) =>{
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

app.delete('/loggedin', (req, res) =>{
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

app.get('/find/:destination', (req, res) =>{
	console.log('find')
	console.log(req.params.destination)
	console.log(1)
	db.findTrip(req.params.destination)
	.then(row => {
		res.json(row)
	})
	.catch(e => {
		console.log(e)
	})
})

app.get('/', (req, res) =>{
	res.sendFile(path.resolve('public/loggedin.html'))
})

app.listen(5000, ()=>{
  console.log(`listening to port 5000`);
})