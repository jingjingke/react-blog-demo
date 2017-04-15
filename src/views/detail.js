import React, { Component,PropTypes } from 'react'
import MenuToggle from '../components/menu-toggle'
import HeadCaptionDetail from '../components/head-caption-detail'
import MainSiteDetail from '../components/main-site-detail'
import ArticleDetail from '../components/article-detail'
import Footer from '../components/footer'

import axios from 'axios'

export default class extends Component {
	static propTypes = {
		menuClick:PropTypes.func
	}
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
		//发送ajax
		axios.get('article.php',{
			params:params
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
		if(this.state.params.aid !== undefined && this.state.params !== this.props.params){
			//实际就是当路由参数变化时发送ajax
			this.setAajx()
		}
		return (
			<div className="container">
				<div className="header">
					<MenuToggle thisclick={this.props.menuClick} />
					<HeadCaptionDetail title={this.state.data.title} sdate={this.state.data.senddate} source={this.state.data.source}/>
				</div>
				<div className="main">
					<MainSiteDetail typeid={this.state.data.typeid} typename={this.state.data.typename} title={this.state.data.title} />
					<ArticleDetail des={this.state.data.description} body={this.state.data.body} pic={this.state.data.litpic} />
					<Footer />
				</div>
			</div>
		)
	}
}