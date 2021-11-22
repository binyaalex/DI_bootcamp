import React from 'react'
import logo from './logo.svg';
import './App.css';
  let Php = {name: "Php", votes: 0}
  let Python = {name: "Python", votes: 0}
  let JavaSript = {name: "JavaSript", votes: 0}
  let Java = {name: "Java", votes: 0}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      languages : [
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
      ]
    }
  }
  addOne = (e) => {
    
    let name = e.target.previousElementSibling.textContent
    if (name == Php.name) {
      Php.votes++
    } else if (name == Python.name) {
      Python.votes++
    } else if (name == JavaSript.name) {
      JavaSript.votes++
    } else if (name == Java.name) {
      Java.votes++
    }
    this.setState({languages:[
        {name: "php", votes: Php.votes},
        {name: "Python", votes: Python.votes},
        {name: "JavaSript", votes: JavaSript.votes},
        {name: "Java", votes: Java.votes}
    ]})
  }

  render(){
    const votes0 = this.state.languages[0].votes
    const votes1 = this.state.languages[1].votes
    const votes2 = this.state.languages[2].votes
    const votes3 = this.state.languages[3].votes
    console.log(this.state.languages)
    return (
      <>
      <h1>Vote Your Language</h1>
      <div>
        <p>{votes0}</p>
        <p>Php</p>
        <button onClick={this.addOne}>CLick Here</button>
      </div>
      <div>
        <p>{votes1}</p>
        <p>Python</p>
        <button onClick={this.addOne}>CLick Here</button>
      </div>
      <div>
        <p>{votes2}</p>
        <p>JavaSript</p>
        <button onClick={this.addOne}>CLick Here</button>
      </div>
      <div>
        <p>{votes3}</p>
        <p>Java</p>
        <button onClick={this.addOne}>CLick Here</button>
      </div>
      </>
    )
  }
}

export default App;
