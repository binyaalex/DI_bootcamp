import React from 'react'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {

    }    
  }

  render(){
    const firstName = (e) => {
      let name = document.querySelectorAll('p')[0]
      name.textContent = `Your name: ${e.target.value}`
    }
    const lastName = (e) => {
      let name = document.querySelectorAll('p')[0]
      name.textContent = `Your name: ${e.target.previousElementSibling.previousElementSibling.value} ${e.target.value}`
    }
    const age = (e) => {
      let age = document.querySelectorAll('p')[1]
      age.textContent = `Your age: ${e.target.value}`
    }
    const gender = (e) => {
      let gender = document.querySelectorAll('p')[2]
      if (document.querySelectorAll('input')[3].checked || document.querySelectorAll('input')[4].checked) {
        gender.textContent = `Your gender: ${e.target.value}` 
      }
    }
    const destination = (e) => {
      let destination = document.querySelectorAll('p')[3]
      destination.textContent = `Your destination: ${e.target.value}`
    }
    const nuts = (e) => {
      let nuts = document.querySelectorAll('span')[3]
      if (document.querySelectorAll('input')[5].checked) {
        nuts.textContent = `**Nuts free : Yes` 
      } else {
        nuts.textContent = `**Nuts free : No`
      }
    }
    const Lactose = (e) => {
      let Lactose = document.querySelectorAll('span')[4]
      if (document.querySelectorAll('input')[6].checked) {
        Lactose.textContent = `**Nuts free : Yes` 
      } else {
        Lactose.textContent = `**Nuts free : No`
      }
    }
    const vegan = (e) => {
      let vegan = document.querySelectorAll('span')[5]
      if (document.querySelectorAll('input')[7].checked) {
        vegan.textContent = `**Nuts free : Yes` 
      } else {
        vegan.textContent = `**Nuts free : No`
      }
    }

    return (
      <>
       <div>
        <main>
          <h1>Sample form</h1>
          <form class="inputForm">
            <input onChange={firstName} class="text" name="firstName" placeholder="First Name"/><br/>
            <input onChange={lastName} class="text" name="lastName" placeholder="Last Name"/><br/>
            <input onChange={age} class="text" name="age" placeholder="Age"/><br/><br/>
            <label>
              <input onChange={gender} class="radiobutton" type="radio" name="gender" value="male"/>Male
            </label>
            <label><br/>
              <input onChange={gender} class="radiobutton" type="radio" name="gender" value="female"/>Female
            </label><br/>
            <label class="destination-header">Select your destination</label><br/>
            <select onChange={destination} class="destination-input" name="destination">
              <option value="">-- Please Choose a destination --</option>
              <option value="Thailand">Thailand</option>
              <option value="Japan">Japan</option>
              <option value="Brazil">Brazil</option>
            </select><br/><br/>
            <label class="restrictions-title">Dietary restrictions:</label><br/>
            <div class="restrictions">
              <input onChange={nuts} type="checkbox" name="nutsFree"/><span>Nuts free</span><br/>
              <input onChange={Lactose} type="checkbox" name="lactoseFree"/><span>Lactose free</span><br/>
              <input onChange={vegan} type="checkbox" name="isVegan"/><span>Vegan</span>
            </div>
            <button class="submit">Submit</button>
          </form>
          <hr/>
          <div class="entered-info">
            <h2>Entered information:</h2>
            <p>Your name:  </p>
            <p>Your age: </p>
            <p>Your gender: </p>
            <p>Your destination: </p>
            <p>Your dietary restrictions: </p>
            <div class="restrictions"><span>**Nuts free : No</span> 
            <br/><span>**Lactose free : No</span> 
            <br/><span>**Vegan meal : No</span>
          </div>
        </div>
      </main>
       </div> 
      </>
    )
  }
  componentDidMount(){
  }
}

export default App;
