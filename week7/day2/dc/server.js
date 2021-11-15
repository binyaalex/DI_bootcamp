const exp = require('express');
const bp = require('body-parser');

const app = exp();

const user = {
    firstname: 'John',
    lastname: 'Doe'
};

const myJSON = JSON.stringify(user);
const url = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
const urlJSON = JSON.stringify(url);



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

app.get('/aboutMe/:hobby', (req, res)=>{
	let myhobby = req.params.hobby
  	if(typeof(myhobby) !== 'string'){
    	res.status(404).send('Page Not Found');
 	}
	res.send(myhobby)
})

app.get('/pic', (req, res)=>{
	console.log(`url`)
	res.send(urlJSON)
})


app.listen(3000, ()=>{
  console.log('listen to port 3000');
})

app.get('/formData', (req,res)=>{
  res.send(`${req.query.email} sent you a message ${req.query.massage}`);
})