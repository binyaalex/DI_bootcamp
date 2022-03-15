const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

let empty
// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
let array = []
gameInfo.forEach((element) => array.push(element["username"] + `!`))
console.log(array)

// Create an array using forEach that contains the usernames of all players with a score bigger than 5.
let array2 = []
gameInfo.forEach((element) => element[`score`] > 5 ? array2.push(element["username"]) : empty=0);
console.log(array2)

// Find and display the total score of the users.
let total = 0
gameInfo.forEach((element) => total += element[`score`])
console.log(total)















