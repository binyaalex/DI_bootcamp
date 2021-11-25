
import logo from './logo.svg';
import './App.css';

function App() {
  let tasks = []
  const add = (e) => {
    if (e.code === 'Enter') {
      tasks.push(document.querySelector('input').value)
      let p = document.createElement(`p`)
      p.addEventListener('click', dlt)
      p.addEventListener('mouseover', line)
      p.addEventListener('mouseout', unline)
      p.textContent = tasks[tasks.length-1]
      p.style.width = 'fit-content'
      document.getElementById('div').appendChild(p)
      document.querySelector('input').value = ''
    }
  }
  const line = (e) => {
    e.target.style.textDecoration = 'line-through';
  }
  const unline = (e) => {
    e.target.style.textDecoration = 'unset';
  }
  const dlt = (e) => {
    e.target.remove()
  }
  return (
    <>
      <h1>Todo's</h1>
      <div id='div'></div>
      <input onKeyPress={add} type="text"/>
    </>
  );
}

export default App;
