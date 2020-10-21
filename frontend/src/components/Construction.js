import React from 'react'
import { Jumbotron, Alert, Container } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'

function Construction() {
	return (
		<div>
			<Jumbotron fliud>
				<Container>
					<h1>This page is under construction!</h1>
					<Alert variant="primary">
						Click <Alert.Link href="/">here</Alert.Link> to go back to our home page
					</Alert>
				</Container>
			</Jumbotron>
			<Container>
				<Spinner animation="grow" variant="primary"/>
			</Container>
		</div>
	)
}

export default Construction
