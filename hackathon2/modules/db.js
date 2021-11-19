const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: '5432',
    user: 'postgres',
    password: 'test',
    database: 'hackathon'
  }
})

const addUser = (fn, ln, pw, user_age, user_email) => {
	return db('users')
	.insert({
		first_name:fn,
		last_name:ln, 
		password:pw, 
		age:user_age, 
		email: user_email
	})
	.returning(['*'])
}

const log = (user_email, pw) => {
	console.log(user_email)
	return db('trips')
	.select('*')
	.rightJoin('users', 'trips.user_id', 'users.user_id')
	.where({email:user_email, password:pw})
}

const allTrips = (user_id) => {
	console.log(user_id)
	return db('trips')
	.select('*')
	.rightJoin('users', 'trips.user_id', 'users.user_id')
	.where({'users.user_id':user_id})
}

const addTrip = (uid, destination, start, end, type) => {
	return db('trips')
	.insert({
		user_id:uid,
		destination:destination, 
		start_date:start, 
		end_date:end, 
		type: type
	})
	.returning(['*'])
}

const findTrip = (destination) => {
	console.log(destination)
	return db('trips')
	.select('*')
	.join('users', 'trips.user_id', 'users.user_id')
	.where({destination:destination})
}

module.exports = {
	addUser,
	addTrip,
	findTrip,
	log,
	allTrips
}