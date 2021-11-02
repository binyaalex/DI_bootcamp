// Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen that takes a number as an argument.
// The function should return a Promise that tests if the value of the given argument is less or greater than 10.

function comperaToTen(num) {
    return new Promise ((resolve, reject) => {
        if (num > 10) {
            resolve(`${num} is greater than 10, success`)
        } else if(num < 10) {
            reject(`${num} is less than 10, error`)
        } else {
            throw new Error(`dont pick string or 10`)
        }
    })
    .then(result=>console.log(result))
    .catch(error=>console.log(error))
}

// comperaToTen(11)

// Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

    let success = new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve(`success string`)
            } else  {
                reject(`bad string`)
            }
        }, 4000)
    })
    .then(result=>console.log(result))
    .catch(error=>console.log(error))
// Read about Promise.resolve() and Promise.reject().
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.
const promiseObj = Promise.resolve('success string');
    setTimeout(() => {
        promiseObj.then(value => console.log(value))
                  .catch(error=> console.log(`Ooops something went wrong`))
    }, 4000);

// Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
const promise = Promise.resolve(3);
promise.then(value => console.log(value))

const reject = Promise.reject(`Boo`);
reject.then(value => console.log(value))