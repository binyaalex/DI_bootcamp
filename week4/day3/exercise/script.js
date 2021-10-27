// exercise 1
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// ['bread', "apple", "orange", 'chicken', "carrot", "potato"];
// ------2------
const country = "USA";
console.log([...country]);
// [`U`, `S`, `A`]
// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// [undefined, undefined]
// exercise 2
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
let first = users.map(element => `Hello ${element.firstName}`)
for (let i = 0; i < first.length; i++) {
  console.log(first[i])
}

// Using the filter() method, congratulate only the Full Stack Residents.
let full = users
           .filter(element => element.role === 'Full Stack Resident')
           .map(element => element.firstName)
           .forEach(element => console.log(`hello ${element}`))

// exercise 3
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// 1. Use the reduce() method to combine all of these into a single string.
const myFunc = (all, word) => all + ` ` + word;
let sentence = epic.reduce(myFunc);
console.log(sentence)

// exercise 4
let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
// Use the filter() method to congratulate the students that passed the course.
let passed = student
             .filter(element => element.isPassed === true)
             .map(element => element.name)
             .forEach(element => console.log(`Hello ${element}`))


