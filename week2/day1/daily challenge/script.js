// exercise 1

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0, 1);
fruits.sort();
fruits.push(`kiwi`);
fruits.shift();
fruits.reverse();
console.log(fruits)

// exercise 2

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
Oranges = moreFruits[1][1][0];
console.log(Oranges)

const add = () => {
	console.log(1)
}