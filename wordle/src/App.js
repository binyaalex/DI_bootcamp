import './App.css';
import {connect} from 'react-redux';
import {changeAction, enterAction} from './redux/actions';


const App = (props) => {
  const {change, enter} = props
  return (
    <>
      <input onChange={change} type='text' />
      <button onClick={enter}>Enter</button>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    change: (e) => dispatch(changeAction(e.target.value)),
    enter: () => dispatch(enterAction()),
  }
}

export default connect(null, mapDispatchToProps)(App) 

