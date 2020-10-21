import React from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Navigation() {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="/" className="text-primary">WildCoders</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="/Construction">Model</Nav.Link>
				<NavDropdown title="Data Visulization" id="collasible-nav-dropdown">
					<NavDropdown.Item href="/Construction">Prediction Probability</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="/Construction">Training Visualiation</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="/Construction">Dataset Imbedding</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="/Construction">Activation Map</NavDropdown.Item>
				</NavDropdown>
				<Nav.Link href="/about">About</Nav.Link>
		    </Nav>
		</Navbar>
	);
}

export default Navigation;
