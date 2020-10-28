import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import AboutCard from './AboutCard';

function About() {
	return (
		<div>
			<Jumbotron>
				<Container>
					<h1>About Us</h1>
					<p class="text-warning text-left">
						Hello, we are the WildCoders and this is our group project for CS196 at UIUC. We hope you look around and find something interesting!
					</p>
					<hr/>
				</Container>
				<Container fluid>
					<Row >
						<Col>
						<AboutCard
							title="Carlos Conley"
							text="Frontend"
							image=""
							github="https://github.com/carlosconley"/>
						</Col>
						<Col>
						<AboutCard
							title="Colin Lu"
							text="Frontend"
							image=""
							github="https://github.com/SimpleGeometry"/>
						</Col>
					</Row>
				</Container>
			</Jumbotron>
		</div>
	);
}

export default About;
