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

// add the user sign in info to the database and return the info
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

// sending the info the user to the server
const log = (user_email, pw) => {
	console.log(user_email)
	return db('trips')
	.select('*')
	.rightJoin('users', 'trips.user_id', 'users.user_id')
	.where({email:user_email, password:pw})
}

// sending all the user trip to the server
const allTrips = (user_id) => {
	console.log(user_id)
	return db('trips')
	.select('*')
	.rightJoin('users', 'trips.user_id', 'users.user_id')
	.where({'users.user_id':user_id})
}

// adding the trip to the database
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

// search the trip in the data base
const findTrip = (destination, date, type) => {
	console.log(date + type)
	if (date == 'anydate' && type == 'anytype') {
		console.log('only des')
		return db('trips')
		.select('*')
		.join('users', 'trips.user_id', 'users.user_id')
		.where({destination:destination})
	} else if (date == 'anydate' && destination == 'anydestination') {
		console.log('only des')
		return db('trips')
		.select('*')
		.join('users', 'trips.user_id', 'users.user_id')
		.where({type:type})
	} else if (type == 'anytype' && destination == 'anydestination') {
		console.log('only des')
		return db('trips')
		.select('*')
		.join('users', 'trips.user_id', 'users.user_id')
		.where('start_date', '<', date)
		.where('end_date', '>', date)
	} else if (date == 'anydate') {
		console.log(destination)
		return db('trips')
		.select('*')
		.join('users', 'trips.user_id', 'users.user_id')
		.where({destination:destination, type:type})
	} else if (type == 'anytype') {
		console.log(destination + 'type0')
		return db('trips')
		.select('*')
		.join('users', 'trips.user_id', 'users.user_id')
		.where({destination:destination})
		.where('start_date', '<', date)
		.where('end_date', '>', date)
	} else if (destination == 'anydestination') {
		return db('trips')
		.select('*')
		.join('users', 'trips.user_id', 'users.user_id')
		.where({type:type})
		.where('start_date', '<', date)
		.where('end_date', '>', date)
	} else {
		return db('trips')
		.select('*')
		.join('users', 'trips.user_id', 'users.user_id')
		.where({type:type})
		.where('start_date', '<', date)
		.where('end_date', '>', date)
	}
	
}

module.exports = {
	addUser,
	addTrip,
	findTrip,
	log,
	allTrips
}