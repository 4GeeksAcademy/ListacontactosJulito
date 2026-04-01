import { Link } from "react-router-dom";



export const Navbar = () => {

	return (
		
		<nav id="id" className="navbar ">
			<div id="Navbar" className="container">
				
				<div className="ml-auto">
					<Link to="/add-contact">
						<button id="bottonNabvar" className="btn btn-primary">Nuevo contacto</button>
					</Link>
				</div>
			</div>
		</nav>
	);
}