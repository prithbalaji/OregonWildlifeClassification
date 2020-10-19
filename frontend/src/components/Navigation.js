import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
 
function Navigation() {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="#home">Navbar</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="/">Home</Nav.Link>
				<Nav.Link href="/about">About</Nav.Link>
		    </Nav>
		</Navbar>
	);
}
 
export default Navigation;
