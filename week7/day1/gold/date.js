// function date() {
// 	const januar = new Date(2021, 12, 1)
// 	const today = new Date
// 	const daysLeft = Math.round((januar - today) / (1000*60*60*24))
// 	return daysLeft
// }
// module.exports = {
// 	date
// }

/*function birthdate(year, month, day) {
	const birth = new Date(Number(year), Number(month), Number(day))
	const today = new Date
	const minuteLive = Math.round((today - birth) / (1000*60))
	return minuteLive
}
module.exports = {
	birthdate
}*/

function date() {
	const hanucka = new Date(2021, 11, 28)
	const today = new Date
	const daysLeft = Math.round((hanucka - today) / (1000*60*60*24))
	return daysLeft
}
module.exports = {
	date
}