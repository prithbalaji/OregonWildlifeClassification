import React from 'react';
import './DropZone.css'

function DropZone() {
	const dragOver = (e) => {
		e.preventDefault();
	}

	const dragEnter = (e) => {
		e.preventDefault();
	}

	const dragLeave = (e) => {
		e.preventDefault();
	}

	const fileDrop = (e) => {
		e.preventDefault();
		const files = e.dataTransfer.files;
		console.log(files);
	}
	
	return (
		<div className="container">
			<div className="drop-container"
				onDragOver={dragOver}
				onDragEnter={dragEnter}
				onDragLeave={dragLeave}
				onDrop={fileDrop}
			>
				<div className="drop-message">
					<div className="upload-icon"></div>
					Drag & drop files here or click to upload
				</div>
			</div>
		</div>
	)
}
export default DropZone;
