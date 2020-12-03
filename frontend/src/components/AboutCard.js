import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function AboutCard(props) {
	return (
		<div>
			<Col>
				<Card bg="success" border="white" style={{ width: '18rem' }}>
					<Card.Body>
						<Card.Img variant="top" src={ props.img } style={{ objectFit: "cover", height: "200px", marginBottom: "0.5em" }} />
						<Card.Title>{props.title}</Card.Title>
						<Card.Text class="text-dark text-left">
							{props.text}
						</Card.Text>
						<Button variant="primary" href={props.github} target="_blank">Github</Button>
					</Card.Body>
				</Card>
			</Col>
		</div>
	)
}

export default AboutCard;

AboutCard.propTypes = {
	img: PropTypes.string,
	title:  PropTypes.string.isRequired,
	text:   PropTypes.string.isRequired,
	github: PropTypes.string,
}