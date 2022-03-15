import {Link} from 'react-router-dom';

const Login = (props) => {
	const {LogInF} = props
	const black = (e) => {
		if (e.target.value.length > 0) {
			e.target.previousSibling.style.color = 'black'
		} else {
			e.target.previousSibling.style.color = 'rgb(173,173,173)'
		}
	}
	return (
		<div className='sign' >
			<h1>Chat App</h1>
			<section>
				<h2 className='signInH2'>Log In</h2>
				<div className='signInputs'>
					<div className='inputAndI'>
						<i class="fas fa-mobile-alt"></i>
			      		<input onChange={black} type="number" id='userInputNumber' name="userInputNumber" placeholder="write your phone number" className="userInputNumber"/>
					</div>
					<div className='inputAndI'>
						<i class="fas fa-lock"></i>
			      		<input onChange={black} type="password" id='userInputPassword' name="password" placeholder="write your password" className="password"/>
					</div>
				</div>
				<Link to='/'>Didn't sign in yet? press here</Link>
				<button onClick={LogInF} className="signLink signBtn" >Log In</button>
			</section>
		</div>
	)
}
export default Login