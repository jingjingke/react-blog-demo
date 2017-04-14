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
			id:0,
			tt:''
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
				id:type.id,
				tt:type.type
			})
		})
	}
	render(){
		
		if(this.props.type === undefined){
			return (<div className='disNone'></div>)
		}else{
			var title,tags;
			if(this.props.type.type==='typeid'){
				//判断只有当props传递的数据与state保存的数据不一致时再去发送ajax
				if(this.props.type.id !== this.state.id && this.props.type.type !== this.state.tt){
					this.setAajx()
				}
				//制作tag列表
				var list = this.state.data.map((item,index)=>{
					return (<Link key={index} to={'/list/tagid/'+item.id}>{item.tag}</Link>)
				})
				title = (<h1>{this.props.type.typename}</h1>)
				tags = (<p className="header-tags">{list}</p>)
			}else{
				title = (<h1>{this.props.type.tag}</h1>)
				tags = (<p className='disNome'></p>)
			}
			
			return (
				<div className="header-caption">{title}{tags}</div>
			)
		}
	}
}
