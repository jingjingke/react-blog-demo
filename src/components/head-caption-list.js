import React, { Component,PropTypes } from 'react'
import {Link} from 'react-router'

import axios from 'axios'
import store from 'store'

export default class extends Component {
	static propTypes = {
		type:PropTypes.object
	}
	constructor(props){
		super(props)
		this.mounted = true
		this.state = {
			data:[],
			id:''
		}
	}
	componentDidUpdate(){
		//获取props数据
		const type = this.props.type;
		//判断state保存的id否有变化
		if(this.state.id !== type.id){
			//将变化的id及时存入state
			this.setState({
				id:type.id
			})
			//发送获取数据
			this.setAjax();
		}
	}
	setAjax(){
		const type = this.props.type;
		//判断缓存中是否有数据
		if(store.enabled && store.get('tag-typeid'+type.id) !== undefined){
			this.setState({
				data:store.get('tag-typeid'+type.id)
			})
		}else{
			//准备数据
			const setData = {};
			setData['typeid']=type.id;
			//发送ajax
			axios.get('tag.php',{
				params:setData
			}).then(response=>{
				if(store.enabled) store.set('tag-typeid'+this.props.type.id,response.data);
				if(this.mounted){
					this.setState({
						data:response.data
					})
				}
			})
			//ajax完成
		}
	}
	render(){
		if(this.props.type === undefined){
			return (<div className='disNone'></div>)
		}else{
			var title,tags;
			if(this.props.type.type==='typeid'){
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
			//综合渲染
			return (
				<div className="header-caption">{title}{tags}</div>
			)
		}
	}
}
