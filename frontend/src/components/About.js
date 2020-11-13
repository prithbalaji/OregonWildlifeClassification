import React from 'react';
import carlos from '../images/carlosicon_pinktoyellow.png';
import d_img from '../images/test_photo.jpg';
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
					<Row style={{ height: '22em' }}>
						<Col>
						<AboutCard
							title="Carlos Conley"
							text="Frontend"
							image={carlos}
							github="https://github.com/carlosconley"/>
						</Col>
						<Col>
						<AboutCard
							title="Colin Lu"
							text="Frontend"
							image={d_img}
							github="https://github.com/SimpleGeometry"/>
						</Col>
						<Col>
							<AboutCard
								title="David Valencia"
								text="Backend"
								image=""
								github="https://github.com/" />
						</Col>
					</Row>
					<Row style={{ height: "22em" }}>
						<Col>
						<AboutCard
							title="Carl Chen"
							text="Backend"
							image={d_img}
							github="https://github.com/"/>
						</Col>
						<Col>
						<AboutCard
							title="Prithvi Balaji"
							text="Modeling"
							image={d_img}
							github="https://github.com/"/>
						</Col>
						<Col>
						<AboutCard
							title="Jiwung Cha"
							text="Modeling"
							image={d_img}
							github="https://github.com/"/>
						</Col>
					</Row>
					<Row style={{ height: "22em" }}>

						<Col></Col>
						<Col>
						<AboutCard
							title="Ahmed Hasan"
							text="PM"
							image={d_img}
							github="https://github.com/"/>
						</Col>
						<Col></Col>
					</Row>
				</Container>
			</Jumbotron>
		</div>
	);
}

export default About;
