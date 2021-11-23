import React from 'react'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isToggleOn: true,
      username: '',
      age: null,
      errormessage: '',
      textarea:'bla bla',
      select:'Volvo'
    }    
  }
  header = ''

  render(){
    const {color} = this.state
    const clickHandler = () => {
      alert('I was clicked')
    }
    const handleKeyPress = (e) => {
      if (e.code === 'Enter') {
        const value = e.target.value
        alert(`the enter key was pressed, your input is: ${value}`)  
      }
    }
    const toggle = (e) => {
      if (e.target.textContent === 'ON') {
        e.target.textContent = 'OFF'
        this.setState({isToggleOn:false})
      } else {
        e.target.textContent = 'ON'
        this.setState({isToggleOn:true})
      }
    }

    const displayUser = (e) => {
      this.header = 'Hello '
      const value = e.target.value
      this.setState({username:value})
    }
    const displayAge = (e) => {
      const value = e.target.value
      
      this.header = 'Hello '
      this.setState({age:value})
      if (isNaN(value)) {
        this.setState({errormessage:'your age must be a number'})
      }
    }
    const mySubmitHandler = (e) => {
      e.preventDefault()
      alert(`you are submitting ${this.state.username}`)
    }
    return (
      <>
       <div>
        <button onClick={clickHandler}>Click Me!</button>
        <input onKeyPress={handleKeyPress} type='text' placeholder='press the ENTER key'/>
        <button onClick={toggle}>ON</button>
       </div>
       <div>
         <form onSubmit={mySubmitHandler}>
          <h1>{this.header}{this.state.username} {this.state.age}</h1>
          <p>Enter your name:</p>
          <input onChange={displayUser} type='text'/>
          <p>Enter your age:</p>
          <input onChange={displayAge} type='text'/>{this.state.errormessage}
          <input type="submit" value="submit"/>
          <textarea value={this.state.textarea}/>
          <select value={this.state.select}>
            <option>Ford</option>
            <option>Volvo</option>
            <option>Fiat</option>
          </select>
         </form>
       </div> 
      </>
    )
  }
  componentDidMount(){
  }
}

export default App;
