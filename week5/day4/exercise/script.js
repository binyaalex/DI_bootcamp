// Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);
async function convert () {
    let response = await fetch("https://swapi.dev/api/starships/9/")
    let jsonObj = await response.json()
    console.log(jsonObj)
}
convert()

// Exercise 2: Analyze
// Instructions
// Analyze the code provided above what will be the outcome?

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// calling
// resolved