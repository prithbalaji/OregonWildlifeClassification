import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../leaf_logo.png';

function Navigation() {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="/" className="text-primary">
				<img
					src={logo}
					width="64"
					height="64"
					className="d-inline-block align-middle"
					alt=""
				/>
				_WildCoders</Navbar.Brand>


			<Nav className="mr-auto">
				<Nav.Link href="/model">Model</Nav.Link>
				<Nav.Link href="/about">About</Nav.Link>
			</Nav>
		</Navbar>
	);
}

export default Navigation;
