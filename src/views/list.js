import React, { Component,PropTypes } from 'react'
import MenuToggle from '../components/menu-toggle'
import HeadCaptionList from '../components/head-caption-list'
import MainSiteList from '../components/main-site-list'
import ArticleListUl from '../components/article-list-ul'
import Footer from '../components/footer'

import axios from 'axios'

export default class extends Component {
	static propTypes = {
		typeData:PropTypes.array,
		tagData:PropTypes.array
	}
	constructor(props){
		super(props)
		this.mounted = true
		this.state = {
			data:[],
			params:{}
		}
	}
	componentWillUnmount(){
		this.mounted = false
	}
	componentDidMount(){
		//用state接收路由参数
		this.setState({
			params:this.props.params
		})
		this.setAajx()
	}
	setAajx(){
		//接收props参数
		const params = this.props.params
		//计算需要发送ajax时用的参数
		const setData = {};
		setData[params.type] = params.value;
		//发送ajax--列表
		axios.get('list.php',{
			params:setData
		}).then(response=>{
			if(this.mounted){
				this.setState({
					data:response.data,
					params:params
				})
			}
		})
		//ajax完成		
	}
	handleInfo(arr){
		var props = this.props.params;
		var info = {};
		if(arr.length > 0){
			for(let i=0; i < arr.length; i++){
				if(arr[i].id === props.value){
					info = arr[i];
					info['type'] = props.type;
				}
			}
		}
		return info;
	}
	render(){
		//判断获取到的列表栏目信息
		var typeInfo;
		if(this.props.params.type==='typeid'){
			typeInfo = this.handleInfo(this.props.typeData)
		}else{
			typeInfo = this.handleInfo(this.props.tagData)
		}
		
		//判断参数是否存在，并且判断props参数与state参数是否一致(这样判断保证只执行一次，不会重复执行)
		if(this.state.params.type !== undefined && this.state.params !== this.props.params){
			//实际就是当路由参数变化时发送ajax
			this.setAajx()
		}
		
		return (
			<div className="container">
				<div className="header">
					<MenuToggle />
					<HeadCaptionList type={typeInfo} />
				</div>
				<div className="main">
					<MainSiteList type={typeInfo} />
					<ArticleListUl data={this.state.data} />
					<Footer />
				</div>
			</div>
		)
	}
}