import React, { Component,PropTypes } from 'react'

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
						<a key={index}>{item.tag}</a>
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
