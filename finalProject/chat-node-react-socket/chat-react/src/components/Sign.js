import {Link} from 'react-router-dom';

const Sign = (props) => {
	const {signInF} = props
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
				<h2 className='signInH2'>Sign In</h2>
				<div className='signInputs'>
					<div className='inputAndI'>
						<i class="fas fa-user-alt"></i>
			      		<input onChange={black} type="text" id='userInputName' name="userInputName" placeholder="write your name" className="userInputName"/>
					</div>
					<div className='inputAndI'>
						<i class="fas fa-mobile-alt"></i>
			      		<input onChange={black} type="number" id='userInputNumber' name="userInputNumber" placeholder="write your phone number" className="userInputNumber"/>
					</div>
					<div className='inputAndI'>
						<i class="fas fa-lock"></i>
			      		<input onChange={black} type="password" name="password" placeholder="write your password" className="password"/>
					</div>
				</div>
				<Link onClick={signInF} to="/main" className="signLink signBtn" >Sign In</Link>
			</section>
		</div>
	)
}
export default Sign