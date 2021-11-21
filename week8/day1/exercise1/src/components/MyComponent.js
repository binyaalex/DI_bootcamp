import './MyComponent.css';

const mystyle = {
	backgroundColor: 'DodgerBlue',
	color: 'white',
	padding: '10px',
	fontFamily: 'ariel'
}

const mySuperStyles = {
	backgroundColor: 'black',
	color: 'yellow',
	fontSize: '16px',
	fontWeight: 'bold',
	border: '1px solid yellow',
	padding: '5px',
	borderRadius: '8px',
	curser: 'pointer',
	margin: '10px'
}
const MyComponent = () => {
	return (
		<div>
			<h1 className='color-red bg-lightblue'>hello style</h1>
			<h1 style={mystyle}>hello style2</h1>
			<button style={mySuperStyles}>i'm a stylish button</button>
			<h1 className='newStyle'>hello style</h1>
			<p>this is a paragraph</p>
			<a href="#">this is a link</a>
			<form>
			<h2>this is a form</h2>
			enter your name:
			<input type="sumnit"></input>
			</form>
			<h3>here is an image</h3>
			<img src="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png?size=200x200"></img>
			<ul>
				<li>coffe</li>
				<li>tea</li>
				<li>milk</li>
			</ul>
		</div>
	)
}

export default MyComponent