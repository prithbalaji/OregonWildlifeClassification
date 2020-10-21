import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import DropZone from './dropzone/DropZone';

function Home() {
    return (
		<div>
			<Jumbotron fluid>
        		<Container>
        	    	<h1>Team 10 Landing Page</h1>
        	    	<div>
        	      		You know we kick em out if they ain't with the crew, yeah im talkin about you you begging for attention talking shit on twitter too
        	    	</div>

				</Container>
        	</Jumbotron>
			<div>
			    <div className="content">
	    	    	<DropZone />
			    </div>
			</div>
		</div>
    );
}
 
export default Home;

