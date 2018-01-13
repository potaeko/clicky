import React from "react";
import "./EachImage.css";


class EachImage extends React.Component {
	state = {
		id: this.id,
		clicked: false
	}

	checkClick = () => {
		this.props.addToScore(this.props.id);
	};

	render() {
		return (
			<div className="card">
			<div className="img-container">
			<img alt={this.props.name} src={this.props.image} clicked={this.props.clicked} id={this.props.id} onClick={this.checkClick}/>
			</div>
			<div className="content">
			</div>
			</div>
		);
	}
}



export default EachImage;