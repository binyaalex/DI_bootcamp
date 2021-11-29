import React from 'react';

const Info = (props) => {
	const {form, reset} = props
	console.log(props.form)
	return (
  		<>
  			<p>{props.form.first},{props.form.first}</p>
  			<p>{props.form.phone}|{props.form.email}</p>
  			<button onClick={reset}>reset</button>
  		</>
	)
}
export default Info;
