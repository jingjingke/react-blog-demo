import React, { Component } from 'react'

export default class extends Component {
	render(){
		return (
			<div className="page-numbers">
				<a href="#" className="prev">&lt;</a>
				<a href="#" className="next">&gt;</a>
				<a href="#">1</a>
				<a href="#">2</a>
				<span className="current">3</span>
				<a href="#">4</a>
			</div>
		)
	}
}
