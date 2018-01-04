import React, { Component,PropTypes } from 'react'
import MenuToggle from '../components/menu-toggle'
import HeadCaptionIndex from '../components/head-caption-index'
import MainTag from '../components/main-tag'
import ArticleListUl from '../components/article-list-ul'
import Delay from '../components/delay'

import axios from 'axios'
import store from 'store'

export default class extends Component {
	static propTypes = {
		tagData:PropTypes.array,
		menuClick:PropTypes.func
	}
	constructor(props){
		super(props)
		this.state = {
			data:[],
			isOK:false
		}
	}
	componentDidMount(){
		//判断缓存中是否有数据
		if(store.enabled && store.get('list-all')!== undefined){
			this.setState({
				data:store.get('list-all'),
				isOK:true
			})
		}else{
			this.setAjax()
		}
	}
	setAjax(){
		axios.get('list.php').then(response=>{
			if(store.enabled) store.set('list-all',response.data);
			this.setState({
				data:response.data,
				isOK:true
			})
		})
	}
	render(){
		if(this.state.isOK){
			return (
				<div className="container">
					<div className="header">
						<MenuToggle thisclick={this.props.menuClick} />
						<HeadCaptionIndex />
					</div>
					<div className="main">
						<MainTag data={this.props.tagData} />
						<ArticleListUl data={this.state.data} />
					</div>
				</div>
			)
		}else{
			return (<Delay />)
		}
	}
}