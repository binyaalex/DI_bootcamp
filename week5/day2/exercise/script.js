const div = document.querySelector(`div`)
let xhr = new XMLHttpRequest();

// exercise1
// Create a program to retrieve the data from the API URL provided above. Use XMLHttpRequest object to make an AJAX request to the Giphy API and console.log the Javascript Object.
// xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

// exercise2
// Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

xhr.responseType = 'json';
xhr.send();


xhr.onload = function() {
    if (xhr.status != 200) {
        console.log("error status")
        displayError(xhr)
    } else {
        console.log("Finished Loading")
        console.log(xhr.response)
        displayUser(xhr.response) 
    }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    console.log(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    console.log(`Received ${event.loaded} bytes`); // no Content-Length
    console.log(event)
    console.log(event.lengthComputable)
  }
};

xhr.onerror = function() {
  console.log('Error something wrong###');
};

const displayUser = (gifs) => {
	console.log(gifs)
    // let results = document.getElementById("results")
    // let img = document.querySelector(`img`)
    // img.setAttribute(`src`, "https://giphy.com/gifs/cheezburger-sun-mornings-CPutABwbvXC92")
    // animals.forEach(info => {
    //     let li = document.createElement("li");
    //     li.textContent = `hi im ${info.name} from ${info.address.city} you can contact me by my email ${info.email}`
    //     results.appendChild(li)
    // });

}

const displayError = (xhr) => {
    console.log("in display error")
}