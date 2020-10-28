import React from 'react';
import { Jumbotron, Container, Row } from 'react-bootstrap'
import AboutCard from './AboutCard';

function About() {
	return (
		<div>
			<Jumbotron>
				<Container>
					<h1>About Us</h1>
					<h6 align="left" class="text-dark">Hello, we are the WildCoders and this is our group project for CS196 at UIUC. We hope you look around and find something interesting!</h6>
					<hr/>
				</Container>
				<Container fluid>
					<Row style= {{ height: '600px'}}>
						<AboutCard
							title="Carlos Conley"
							text="Frontend"
							image=""
							github="https://github.com/carlosconley"/>
						<AboutCard
							title="Colin Lu"
							text="Frontend"
							image=""
							github="https://github.com/SimpleGeometry"/>
						<AboutCard
							title="David Valencia"
							text="Backend"
							image=""
							github="" />
						<AboutCard
							title="David Valencia"
							text="Backend"
							image=""
							github="" />
					</Row>
				</Container>
			</Jumbotron>
		</div>
	);
}

export default About;
