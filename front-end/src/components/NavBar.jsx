import React from 'react';
import {Link} from "react-router-dom";

function NavBar() {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<div className="container">
				<Link to={'/'} className="navbar-brand">
					<i className="bi bi-phone text-warning"> Contacts List</i>
				</Link>
			</div>
		</nav>
	);
}

export default NavBar;
