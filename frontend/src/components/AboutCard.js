import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function AboutCard(props) {
	return (
		<div>
			<Card style={{ width: '18rem' }}>
				<Card.Body>
					<Card.Img variant="top" src={props.image}/>
					<Card.Title>{props.title}</Card.Title>
					<Card.Text>
						{props.text}
					</Card.Text>
					<Button variant="primary" href={props.github} target="_blank">Github</Button>
				</Card.Body>
			</Card>
		</div>
	)
}

export default AboutCard;

AboutCard.propTypes = {
	image:  PropTypes.string.isRequired,
	title:  PropTypes.string.isRequired,
	text:   PropTypes.string.isRequired,
	github: PropTypes.string,
}