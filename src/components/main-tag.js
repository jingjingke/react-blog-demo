import React, { Component,PropTypes } from 'react'
import {Link} from 'react-router'

export default class extends Component {
	static propTypes = {
		data:PropTypes.array
	}
	render(){
		if(this.props.data.length === 0){
			return (
				<div></div>
			)
		}else{
			const datas = this.props.data;
			if(datas.length > 0){
				var list = datas.map((item,index)=>{
					return (
						<Link key={index} to={"/list/tagid/"+item.id}>{item.tag}</Link>
					)
				})
			}
			return (
				<p className="main-tag">
					<span>TAGs:</span>
					{list}
				</p>
			)
		}
	}
}
