import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
      <Jumbotron fluid>
          <Container>
            <h1>Team 10 Landing Page</h1>
            <p>
              You know we kick em out if they ain't with the crew, yeah im talkin about you you begging for attention talking shit on twitter too
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
          </Container>
        </Jumbotron>
    );
}

export default Home;

