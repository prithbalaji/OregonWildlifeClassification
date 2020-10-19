import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import DropZone from './dropzone/DropZone';

function Home() {
    return (
		<Jumbotron fluid>
        	<Container>
            	<h1>Team 10 Landing Page</h1>
            	<p>
              		You know we kick em out if they ain't with the crew, yeah im talkin about you you begging for attention talking shit on twitter too
            	</p>

				<div>
		        	<p className="title">React Drag and Drop Image Upload</p>
		        	<div className="content">
		            	<DropZone />
		        	</div>
		    	</div>
			</Container>
        </Jumbotron>
    );
}
 
export default Home;

