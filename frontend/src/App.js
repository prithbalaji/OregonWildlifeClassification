import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Navigation from './components/Navigation';

function App() {
	return (
		<BrowserRouter>
			<Navigation />
            <Switch>
				<Route path="/" component={Home} exact/>
				<Route path="/about" component={About}/>
            	<Route component={Error}/>
			</Switch>
        </BrowserRouter>
  );
}

export default App;
