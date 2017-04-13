import React, { Component } from 'react'
import MenuToggle from '../components/menu-toggle'
import HeadCaptionList from '../components/head-caption-list'
import MainSiteList from '../components/main-site-list'
import ArticleListUl from '../components/article-list-ul'
import Footer from '../components/footer'

import axios from 'axios'

export default class extends Component {
	constructor(props){
		super(props)
		this.state = {
			data:[],
			params:{}
		}
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
		//发送ajax
		axios.get('list.php',{
			params:setData
		}).then(response=>{
			this.setState({
				data:response.data,
				params:params
			})
		})
		//ajax完成
	}
	render(){
		//判断参数是否存在，并且判断props参数与state参数是否一致(这样判断保证只执行一次，不会重复执行)
		if(this.state.params.type !== undefined && this.state.params !== this.props.params){
			//实际就是当路由参数变化时发送ajax
			this.setAajx()
		}
		return (
			<div className="container">
				<div className="header">
					<MenuToggle />
					<HeadCaptionList />
				</div>
				<div className="main">
					<MainSiteList />
					<ArticleListUl data={this.state.data} />
					<Footer />
				</div>
			</div>
		)
	}
}