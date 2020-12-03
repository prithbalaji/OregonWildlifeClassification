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
				</Container>
			</Jumbotron>
				<Container>
					<Row style={{ height: '25em' }}>
						<Col className="row justify-content-center">
						<AboutCard
							title="Carlos Conley"
							text="Frontend"
							github="https://github.com/carlosconley"/>
						</Col>
						<Col className="row justify-content-center">
						<AboutCard
							title="Colin Lu"
							text="Frontend"
							github="https://github.com/SimpleGeometry"/>
						</Col>
						<Col className="row justify-content-center">
							<AboutCard
								title="David Valencia"
								text="Backend"
								github="https://github.com/" />
						</Col>
					</Row>
					<Row style={{ height: "25em" }}>
						<Col className="row justify-content-center">
						<AboutCard
							title="Carl Chen"
							text="Backend"
							github="https://github.com/"/>
						</Col>
						<Col className="row justify-content-center">
						<AboutCard
							title="Prithvi Balaji"
							text="Backend"
							github="https://github.com/"/>
						</Col>
						<Col className="row justify-content-center">
						<AboutCard
							title="Jiwung Cha"
							text="Modeling"
							github="https://github.com/"/>
						</Col>
					</Row>
					<Row style={{ height: "25em" }}>
						<Col></Col>
						<Col className="row justify-content-center">
						<AboutCard
							title="Ahmed Hasan"
							text="PM"
							github="https://github.com/"/>
						</Col>
						<Col></Col>
					</Row>
				</Container>
		</div>
	);
}

export default About;
