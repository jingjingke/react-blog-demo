import React, { Component,PropTypes } from 'react'
import {Link} from 'react-router'

import axios from 'axios'

export default class extends Component {
	static propTypes = {
		type:PropTypes.object
	}
	constructor(props){
		super(props)
		this.state = {
			data:[],
			typeid:0
		}
	}
	setAajx(){
		//准备数据
		const type = this.props.type;
		const setData = {};
		setData['typeid']=type.id;
		//发送ajax
		axios.get('tag.php',{
			params:setData
		}).then(response=>{
			this.setState({
				data:response.data,
				typeid:type.id
			})
		})
	}
	render(){
		
		if(this.props.type === undefined){
			return (<div className='disNone'></div>)
		}else{
			//判断只有当props传递的数据与state保存的数据不一致时再去发送ajax
			if(this.props.type.id !== this.state.typeid){
				this.setAajx()
			}
			//制作tag列表
			var list = this.state.data.map((item,index)=>{
				return (<Link key={index} to={'/list/tagid/'+item.id}>{item.tag}</Link>)
			})
			//完
			return (
				<div className="header-caption">
					<h1>{this.props.type.typename}</h1>
					<p className="header-tags">
						{list}
					</p>
				</div>
			)
		}
	}
}
