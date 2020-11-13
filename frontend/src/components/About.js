import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import AboutCard from './AboutCard';

function About() {
	return (
		<div>
			<Jumbotron>
				<Container>
					<h1>About Us</h1>
					<p className="text-warning text-left">
						Hello, we are the WildCoders and this is our group project for CS196 at UIUC. We hope you look around and find something interesting!
					</p>
					<hr/>
				</Container>
				<Container fluid>
					<Row className="justify-content-center">
						<Col>
						<AboutCard
							title="Carlos Conley"
							text="Frontend"
							github="https://github.com/carlosconley"/>
						</Col>
						<Col>
						<AboutCard
							title="Colin Lu"
							text="Frontend"
							github="https://github.com/SimpleGeometry"/>
						</Col>
						<Col>
						<AboutCard
							title="Carl Chen"
							text="Backend"
							github="https://github.com/"/>
						</Col>
						<Col>
						<AboutCard
							title="Prithvi Balaji"
							text="Backend"
							github="https://github.com/"/>
						</Col>
						<Col>
						<AboutCard
							title="Jiwung Cha"
							text="Modeling"
							github="https://github.com/"/>
						</Col>
						<Col>
						<AboutCard
							title="Ahmed Hasan"
							text="PM"
							github="https://github.com/"/>
						</Col>
					</Row>
				</Container>
			</Jumbotron>
		</div>
	);
}

export default About;
