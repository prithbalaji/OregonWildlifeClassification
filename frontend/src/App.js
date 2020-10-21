import React from 'react';
import logo from './logo.svg';
import './App.css';
import './custom.scss';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Construction from './components/Construction';

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route path="/" component={Home} exact/>
				<Route path="/about" component={About}/>
				<Route path="/construction" component={Construction}/>
				<Route component={Error}/>
			</Switch>
		</BrowserRouter>
  );
}

export default App;
