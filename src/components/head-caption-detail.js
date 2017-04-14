import React, { Component,PropTypes } from 'react'

export default class extends Component {
	static propTypes = {
		title:PropTypes.string,
		sdate:PropTypes.string,
		source:PropTypes.string
	}
	render(){
		return (
			<div className="header-caption">
				<h1>{this.props.title}</h1>
				<p className="caption-des">{this.props.sdate} by {this.props.source}</p>
			</div>
		)
	}
}
