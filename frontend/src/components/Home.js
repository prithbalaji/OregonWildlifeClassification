import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import DropZone from './dropzone/DropZone';
import * as d3 from 'd3';
import csv_data from "../data/temp.csv";

// React class structure adapted from https://medium.com/@Elijah_Meeks/interactive-applications-with-react-d3-f76f7b3ebc71
class Home extends Component {
	constructor(props) {
		super(props);
		this.createBarChart = this.createBarChart.bind(this);
	}

	componentDidMount() {
		this.createBarChart();
	}

	componentDidUpdate() {
		this.createBarChart();
	}

	createBarChart() {
		// Adapted from Ahmed's code
		const svg = d3.select('svg');
		const width = +svg.attr('width');
		const height = +svg.attr('height');

		const render = data => {
			const xValue = d => d.probability;
			const yValue = d => d.predictedClass;
			const margin = {top: 20, right: 20, bottom: 20, left: 100};
			const innerWidth = width - margin.left - margin.right;
			const innerHeight = height - margin.top - margin.bottom;

	    	const xScale = d3.scaleLinear()
			    .domain([0, d3.max(data, xValue)])
			    .range([0, innerWidth]);
			console.log(xScale.range());

			const yScale = d3.scaleBand()
			    .domain(data.map(yValue))
			    .range([0, innerHeight]);

			const yAxis = d3.axisLeft(yScale);

			const g = svg.append('g')
			    .attr('transform', `translate(${margin.left},${margin.top})`);

			yAxis(g.append('g'));

			g.selectAll('rect').data(data)
			    .enter().append('rect')
			    .attr('y', d => yScale(yValue(d)))
			    .attr('width', d => xScale(xValue(d)))
			    .attr('height', yScale.bandwidth());
			
			console.log("hello");
		};

		d3.csv(csv_data).then((data) => {
			data.forEach(d => {
				d.probability = +d.probability * 1000;
			});
			data.forEach(d => {
				console.log(d);
			});
			render(data);
			console.log(data);
		});
	}

	render() {
    	return (
			<div>
				<Jumbotron fluid>
    	    		<Container>
    	    	    	<h1>Classification Probability Visualizer</h1>
    	    	    	<div>
    	    	      		Upload or drag and drop an image to see the prediction probabilities!
    	    	    	</div>

					</Container>
    	    	</Jumbotron>
				<div>
				    <div className="content">
		    	    	<DropZone />
				    </div>
				</div>
				<svg
					ref={node => this.node = node}
					width={1200} height={400}
				></svg>
			</div>
    	);
	}
}

export default Home;

