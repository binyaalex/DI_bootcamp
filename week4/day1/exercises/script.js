// exercie 1
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
// 3

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
// 0

//#3
function q3() {
    window.a = "hello";
}

function q32() {
    alert(a);
}
// hello

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
// test

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
// 5
// 5

// exercie 2
// You need to modify the function called experiencePoints()
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator (ie. change the conditional block into a ternary operator).

function winBattle(){
    return true;
}

// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

// experiencePoints()

let experiencePoints = () => winBattle() ? 10 : 1 

experiencePoints()

// exercie 3
// Check if this array includes the color “Violet”.
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

let checkViolet = colors.some(element => element === `Violet`)

// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

let orderColors = colors.forEach((element, index) => console.log(`${index+1}# choice is ${colors[index]}`))

// exercie 4
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…


function orderColors2 () {
	for (let i = 0; i < color.length; i++) {
		let d = 0
		d++
		if (i > 2) {
			d = -1
		}
		console.log(`${i+1}${ordinal[d+1]} choice is ${colors[i]}`)
	}
}

orderColors2()

// exercie 5
// Write a JavaScript function that checks whether the value of an input is a string or not.

// let isString = (array) => array.every(element => `number` !== typeof(element))

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false


function isString (array) {
	if (`object` === typeof (array)) {
		return array.every(element => `number` !== typeof(element))	
	} else {
		if (`number` === typeof(array)) {
			return false
		} else {
			return true
		}
	}

}

// exercie 6
// In this exercise, you have to decide which type of variables you have to use:

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses - both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the expenditures, ie. the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

let bankAmount = 5000
const vat = 1.17
let details = ["+200", "-100", "+146", "+167", "-2900"]
let moneyOfMonth = 0
function endOfmonth () {
	details.forEach((element, index, array) => {
		details[index] *= vat
		moneyOfMonth += details[index]
	})
	bankAmount += moneyOfMonth
	console.log(bankAmount)
}

endOfmonth ()