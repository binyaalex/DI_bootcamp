let datalist1 = document.getElementById('currencies1')
let datalist2 = document.getElementById('currencies2')
let currency1 = document.getElementById('input1')
let value1
let currency2 = document.getElementById('input2')
let value2
let amount = document.getElementById('amount')
let output = document.getElementById('output')
let btn = document.querySelector(`button`)
let rate

btn.addEventListener(`click`, getRate)

function currencyList () {

	fetch(`http://api.currencylayer.com/list?access_key=6b543e9294a71d26a6606f5449cf71a6&format=1`)
		.then(res=> res.json())
		.then(json=> json.currencies)
		.then(list=> {
			console.log(list)
			for (let key in list) {
				let newO1 = document.createElement(`option`)
				newO1.setAttribute(`value`, `${key} - ${list[key]}`)
				let newO2 = document.createElement(`option`)
				newO2.setAttribute(`value`, `${key} - ${list[key]}`)
				datalist1.appendChild(newO1)
				datalist2.appendChild(newO2)
			}
		})

}
currencyList ()



function getRate () {
		value1 = currency1.value.slice(0,3)
		value2 = currency2.value.slice(0,3)
	fetch(`http://api.currencylayer.com/live?access_key=6b543e9294a71d26a6606f5449cf71a6&format=1`)
		.then(res=> res.json())
		.then(json=> json.quotes)
		.then(rateList=> {
			console.log(rateList)
			console.log(value2)
			rate1 = rateList[`USD${value1}`]
			rate2 = rateList[`USD${value2}`]
			console.log(rate1)
			console.log(rate2)
			output.textContent = 1/rate1*rate2*amount.value
		})
}

