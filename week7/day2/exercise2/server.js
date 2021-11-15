const exp = require('express');

const app = exp();

const user = {
    firstname: 'John',
    lastname: 'Doe'
};

const myJSON = JSON.stringify(user);




app.use('/',exp.static(__dirname + '/public'))

app.get('/user', (req, res)=>{
	console.log(myJSON)
	res.send(myJSON)
})

app.get('/api/:id', (req, res)=>{
	let myid = req.params.id
	const obj = {id: myid}
	console.log(obj)

	res.send(obj)
})

app.listen(3000, ()=>{
  console.log('listen to port 3000');
})