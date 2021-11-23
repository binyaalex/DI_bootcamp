import React from 'react'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      color: 'red'
    }
    this.shootRegular = this.shootRegular.bind(this)
  }
  changeColor = () => {
    this.setState({color: 'blue'})
  }
  shot() {
    alert('Great shot')
  }
  shootRegular() {
    alert(this)
  }
  shootRegularWithParameter(a) {
    alert(a)
  }
  shootWithArgument(a) {
    alert(a)
  }
  shootTwo = () => {
    alert(this)
  }

  render(){
    const {color} = this.state
    return (
      <>
      <header>my favorit color is {color}</header>
      <button onClick={this.changeColor}>change color</button>
      <button onClick={this.shot}>Take the shot!</button>
      <button onClick={this.shootRegular}>Keep Shooting!</button>
      <button onClick={this.shootRegularWithParameter.bind(this, 'pass')}>Shooting!</button>
      <button onClick={() => this.shootWithArgument('Goal')}>Shooting2!</button>
      <button onClick={this.shootTwo}>Keep Shooting!</button>
      </>
    )
  }
  componentDidMount(){
    setTimeout(() => {this.setState({color:'yellow'})}, 5000);
  }
}

export default App;
