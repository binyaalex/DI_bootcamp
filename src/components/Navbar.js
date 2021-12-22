import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav>
			  <div>
			  	<Link to="/">Home</Link>
			  </div>
			  <div>
			  	<Link to="/projects">Projects</Link>
			  </div>
			</nav>
		</>
	)
}
export default Navbar