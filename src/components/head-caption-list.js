import React, { Component,PropTypes } from 'react'
import {Link} from 'react-router'

export default class extends Component {
	static propTypes = {
		type:PropTypes.string,
		title:PropTypes.string,
		tags:PropTypes.array
	}
	render(){
		
		var content;
		if(this.props.type==='typeid'){
			//制作tag列表
			var list = this.props.tags.map((item,index)=>{
				return (<Link key={index} to={'/list/tagid/'+item.id}>{item.tag}</Link>)
			})
			content = (<p className="header-tags">{list}</p>)
		}else{
			content = (<p className='disNome'></p>)
		}
		
		return (
			<div className="header-caption">
				<h1>{this.props.title}</h1>
				{content}
			</div>
		)

	}
}
