import React, { Component,PropTypes } from 'react'
import MenuToggle from '../components/menu-toggle'
import HeadCaptionDetail from '../components/head-caption-detail'
import MainSiteDetail from '../components/main-site-detail'
import ArticleDetail from '../components/article-detail'
import Footer from '../components/footer'

import axios from 'axios'
import store from 'store'

export default class extends Component {
	static propTypes = {
		menuClick:PropTypes.func
	}
	constructor(props){
		super(props)
		this.state = {
			data:[],
			aid:''
		}
	}
	componentDidUpdate(){
		//判断state保存的id否有变化
		if(this.state.aid !== this.props.params.aid){
			//发送ajax
			this.setAjax();
		}
	}
	componentDidMount(){
		//第一次发送ajax
		this.setAjax();
	}
	setAjax(){
		//接收props参数
		const params = this.props.params
		//将变化的aid及时存入state
		this.setState({
				aid:params.aid
		})
		//判断缓存中是否有数据
		if(store.enabled && store.get('article-'+params.aid)!== undefined){
			this.setState({
				data:store.get('article-' + params.aid)
			})
		}else{
			//发送ajax
			axios.get('article.php',{
				params:params
			}).then(response=>{
				//是否存入缓存
				if(store.enabled) store.set('article-'+params.aid,response.data);
				//保存state里
				this.setState({
					data:response.data
				})
			})
			//ajax完成
		}
	}
	render(){
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