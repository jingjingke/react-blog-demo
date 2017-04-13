import React, { Component,PropTypes } from 'react'

export default class extends Component {
	static propTypes = {
		data:PropTypes.object
	}
	render(){
		const item = this.props.data;
		if(item.litpic===""){
			item.litpic = "images/defaultpic.gif"
		}
		return (
			<li>
				<h2><a href="#">{item.title}</a></h2>
				<div className="article-des">
					<a href="#"><img src={"http://www.jingjingke.com/"+item.litpic} alt="缩略图" /></a>
					<p>{item.description}</p>
				</div>
				<div className="article-source">
					<a href="#" className="article-more">MORE</a>
					<p className="article-source-info"><a href="#">{item.senddate}</a> by <a href="#">{item.source}</a></p>
				</div>
			</li>
		)
	}
}
