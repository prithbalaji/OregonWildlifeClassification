import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import AboutCard from './AboutCard';
import carlos from '../images/carlos.png';
import colin from '../images/colin.png';
import david from '../images/david.jpg'
import carl from '../images/carl.png'
import prithvi from '../images/prithvi.jpg'
import jiwung from '../images/jiwung.jpg'
import ahmed from '../images/ahmed.png'

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
							img={ carlos }
							title="Carlos Conley"
							text="Frontend"
							github="https://github.com/carlosconley"/>
						</Col>
						<Col className="row justify-content-center">
						<AboutCard
							img={ colin }
							title="Colin Lu"
							text="Frontend"
							github="https://github.com/SimpleGeometry"/>
						</Col>
						<Col className="row justify-content-center">
							<AboutCard
								img={ david }
								title="David Valencia"
								text="Backend"
								github="https://github.com/svalenciadavid" />
						</Col>
					</Row>
					<Row style={{ height: "25em" }}>
						<Col className="row justify-content-center">
						<AboutCard
							img = { carl }
							title="Carl Chen"
							text="Backend"
							github="https://github.com/"/>
						</Col>
						<Col className="row justify-content-center">
						<AboutCard
							img={ prithvi }
							title="Prithvi Balaji"
							text="Backend"
							github="https://github.com/prithbalaji"/>
						</Col>
						<Col className="row justify-content-center">
						<AboutCard
							img={ jiwung }
							title="Jiwung Cha"
							text="Modeling"
							github="https://github.com/jcha-dot"/>
						</Col>
					</Row>
					<Row style={{ height: "25em" }}>
						<Col></Col>
						<Col className="row justify-content-center">
						<AboutCard
							img={ ahmed }
							title="Ahmed Hasan"
							text="PM"
							github="https://github.com/ranchncarrots"/>
						</Col>
						<Col></Col>
					</Row>
				</Container>
		</div>
	);
}

export default About;
