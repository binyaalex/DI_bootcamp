const exp = require('express');
const app = exp();

const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: '5432',
    user: 'postgres',
    password: 'test',
    database: 'postgres'
  }
})


app.use('/',exp.static(__dirname + '/public'))

app.listen(3000, ()=>{
  console.log('listen to port 3000');
})


app.get('/items/', (req, res)=>{
	db.select('*').from('items')
	.then(data => {
	console.log(data);
	res.json(data)
	})
	.catch(e => {
		console.log(e);
	})
})

app.post('/items/:name/:price', (req, res)=>{
	console.log('data')
	let itemName = req.params.name
	let priceV = req.params.price
	console.log(itemName)
	console.log(priceV)
	db('items')
	.insert(
	  	[
	    	{
	  	    	name: itemName,
	  	    	price: priceV
	    	}
	  	]
	)
	.returning('*')
	.then(data => {
	console.log(data);
	res.json(data)
	})
	.catch(e => {
		console.log(e);
	})
})
