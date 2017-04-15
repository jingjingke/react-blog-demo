import React, { Component,PropTypes } from 'react'

export default class extends Component {
	static propTypes = {
		thisclick:PropTypes.func
	}
	render(){
		return (
			<div className="menu-toggle" onClick={this.props.thisclick}>
				<span className="one"></span>
				<span className="two"></span>
				<span className="three"></span>
			</div>
		)
	}
}
