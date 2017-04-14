import React, { Component,PropTypes } from 'react'
import {Link} from 'react-router'

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
				<h2><Link to={'/detail/'+item.aid}>{item.title}</Link></h2>
				<div className="article-des">
					<Link to={'/detail/'+item.aid}><img src={"http://www.jingjingke.com/"+item.litpic} alt="缩略图" /></Link>
					<p>{item.description}</p>
				</div>
				<div className="article-source">
					<Link to={'/detail/'+item.aid} className="article-more">MORE</Link>
					<p className="article-source-info"><b>{item.senddate}</b> by <b>{item.source}</b></p>
				</div>
			</li>
		)
	}
}
