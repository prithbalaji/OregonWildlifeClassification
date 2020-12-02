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
    	    	    	<h1>Classification Probability Visualizer</h1>
    	    	    	<div>
    	    	      		Upload or drag and drop an image to see the prediction probabilities!
    	    	    	</div>
						<div>
						<Button href="/model">Test your image!</Button>
						</div>
					</Container>
    	    	</Jumbotron>
			</div>
		)
	}
}

export default Home
