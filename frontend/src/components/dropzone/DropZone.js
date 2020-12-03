import React from 'react';
import './DropZone.css';

// Cited from:
// https://codepen.io/hartzis/pen/VvNGZP?editors=0010
// https://blog.logrocket.com/create-a-drag-and-drop-component-with-react-dropzone/
class DropZone extends React.Component {
	constructor(props) {
		super(props);
		this.state = {file: '', imagePreviewUrl: ''};
	}
	
	handleImageChange(e) {
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			this.setState({
			    file: file,
			    imagePreviewUrl: reader.result
		    });

			this.props.sendImageToModel(file);
		}
		
		if (file) {
			reader.readAsDataURL(file);
		}
	}

	dragOver(e) {
		e.preventDefault();
	}

	dragEnter(e) {
		e.preventDefault();
	}

	dragLeave(e) {
		e.preventDefault();
	}

	fileDrop(e) {
		e.preventDefault();
	
		let reader = new FileReader();
		let file = e.dataTransfer.files[0];
		
		console.log(file)

		reader.onloadend = () => {
			this.setState({
			    file: file,
			    imagePreviewUrl: reader.result
		    });

			this.props.sendImageToModel(file);
		}
		
		if (file) {
			reader.readAsDataURL(file);
		}
	}
	
	render() {
		let {imagePreviewUrl} = this.state;
		let imagePreview = null;
		if (imagePreviewUrl) {
			imagePreview = (<img src={imagePreviewUrl} style={{height: '500px', width: '500px'}} />);
		} else {
			imagePreview = (
				<div className="drop-message">
					<div className="upload-icon"></div>
					Drag & drop files here or click to upload
				</div>
			);
		}

		return (
			<div className="container">
				<div className="drop-container"
					onDragOver={(e) => this.dragOver(e)}
					onDragEnter={(e) => this.dragEnter(e)}
					onDragLeave={(e) => this.dragLeave(e)}
					onDrop={(e) => this.fileDrop(e)}
				>
					{imagePreview}
				</div>
				<form>
          			<input className="fileInput" 
            			type="file" 
            			onChange={(e) => this.handleImageChange(e)} />
        		</form>
			</div>
		);
	}
}
export default DropZone;
