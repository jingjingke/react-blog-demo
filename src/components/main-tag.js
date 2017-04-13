import React, { Component } from 'react'

import axios from 'axios'

export default class extends Component {
	constructor(props){
		super(props)
		this.state = {
			loading:true,
			data:[]
		}
	}
	componentDidMount(){
		axios.get('tag.php').then(response=>{
			this.setState({
				loading:false,
				data:response.data
			})
			
		})
	}
	render(){
		if(this.state.ok){
			return (
				<div></div>
			)
		}else{
			const datas = this.state.data;
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
