import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DropZone from './dropzone/DropZone';
import * as d3 from 'd3';
import csv_data from "../data/temp.csv";
import axios from "axios";

// React class structure adapted from https://medium.com/@Elijah_Meeks/interactive-applications-with-react-d3-f76f7b3ebc71
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {probabilities: []};
		
		this.createBarChart = this.createBarChart.bind(this);

		/*
		axios.get("http://127.0.0.1:8000/api/students/testtesttest").then(resp => {
			console.log(resp.data.test);
		});
		*/
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
			const margin = {top: 20, right: 100, bottom: 20, left: 100};
			const innerWidth = width - margin.left - margin.right;
			const innerHeight = height - margin.top - margin.bottom;

	    	const xScale = d3.scaleLinear()
			    .domain([0, d3.max(data, xValue) * 1.1])
				.range([0, innerWidth]);

			const yScale = d3.scaleBand()
			    .domain(data.map(yValue))
			    .range([0, innerHeight]);

			const yAxis = d3.axisLeft(yScale);
			const xAxis = d3.axisTop(xScale).tickFormat(d3.format(".0%"));

			const g = svg.append('g')
			    .attr('transform', `translate(${margin.left},${margin.top})`);

			g.append('g').call(xAxis);
			g.append('g').call(yAxis);

			g.selectAll('rect').data(data)
				.enter().append('rect')
				.on("mouseover", onMouseOver)
				.on("mouseout", onMouseOut)
				.attr('y', d => yScale(yValue(d)) + 11)
				.attr('x', 1)
			    .attr('width', d => xScale(xValue(d)))
				.attr('height', yScale.bandwidth() - 20)
				.attr('fill', d => color(d.probability));

			g.selectAll("text")
				.attr('fill', 'black')
				.attr('font-size', 12)
				.attr('font-family', 'sans-serif');

			function onMouseOver(mouseEvent, d) {
				const color = d3.scaleSequential()
				                .domain([0, 100])
				                .interpolator(d3.interpolateRgb('#DFD5CD', '#855E42'));

				d3.select(this).attr("fill", d => color(d.probability));

				d3.select(this)
				  .transition()
				  .duration(400)
				  .attr('width',  d => xScale(xValue(d)) + 5)
				  .attr('y', d => yScale(yValue(d)) + 1)
				  .attr('height', yScale.bandwidth());

				const xOffset = xScale(xValue(d)) + 20;
				const yOffset = yScale(yValue(d)) + yScale.bandwidth() / 2 + 5;
				g.append("text").attr("class", "val")
					.attr('x', xOffset)
					.attr('y', yOffset)
					.text((xValue(d) * 100).toFixed(2) + "%");

			}

			function onMouseOut(d, i) {
				d3.select(this).attr('fill', d => color(d.probability))
				d3.select(this)
				  .transition()
				  .duration(400)
				  .attr('y', d => yScale(yValue(d)) + 11)
				  .attr('width', d => xScale(xValue(d)))
				  .attr('height', yScale.bandwidth() - 20)
				  .attr('fill', d => color(d.probability));

				d3.selectAll('.val')
				  .remove()
			}
		};

		const color = d3.scaleSequential()
						.domain([0, 1])
						.interpolator(d3.interpolateRgb('rgb(200, 225, 204)', 'rgb(1, 68, 33)'));


		d3.csv(csv_data).then((data) => {
			render(data);
		});
	}

	updateProbabilities = (imageFile) => {
		axios.post("http://127.0.0.1:8000/api/students/testtesttest", imageFile, {
			headers: {
				'Content-Type': imageFile.type
			}
		}).then(response => {
			this.setState({probabilities: response.data.probabilities});
			console.log(response.data.probabilities);
		});
	};

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
				<Container>
					<Row style={{ height: '50em' }} className="justify-content-center">
						<div>
							<div className="content">
								<DropZone sendImageToModel = {this.updateProbabilities}/>
							</div>
						</div>
					</Row>
					<Row className="justify-content-center">
						<svg
							ref={node => this.node = node}
							width={1200} height={400}
						></svg>
					</Row>
				</Container>
			</div>
    	);
	}
}

export default Home;

