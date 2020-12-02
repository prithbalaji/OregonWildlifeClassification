import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Jumbotron, Container, Button } from 'react-bootstrap';

export class Home extends Component {
	static propTypes = {

	}

	render() {
		return (
			<div>
				<Jumbotron fluid>
    	    		<Container>
    	    	    	<h1>Wildlife Image Classifier</h1>
    	    	    	<div style={{ height: "3em" }}>
    	    	      		Submit and image to see what we think it is!
    	    	    	</div>
						<div>
						<Button href="/model">Test your image.</Button>
						</div>
					</Container>
    	    	</Jumbotron>
			</div>
		)
	}
}

export default Home
