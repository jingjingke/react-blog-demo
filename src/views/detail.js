import React, { Component,PropTypes } from 'react'
import {Link} from 'react-router'
import MenuToggle from '../components/menu-toggle'
import MenuBack from '../components/menu-back'
import MenuFooter from '../components/menu-footer'
import HeadCaptionDetail from '../components/head-caption-detail'
import ArticleDetail from '../components/article-detail'
import Delay from '../components/delay'

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
			aid:'',
			isOK:false
		}
	}
	componentDidUpdate(){
		//判断state保存的id否有变化
		if(this.state.aid !== this.props.params.aid){
			//将isOK设为false
			this.setState({
				isOK:false				
			})
			//滚动条返回顶部
			window.scrollTo(0,0)
			//发送ajax
			this.setAjax();
		}
	}
	componentDidMount(){
		//滚动条返回顶部
		window.scrollTo(0,0)
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
				data:store.get('article-' + params.aid),
				isOK:true				
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
					data:response.data,
					isOK:true
				})
			})
			//ajax完成
		}
	}
	render(){
		if(this.state.isOK){
			return (
				<div className="container">
					<div className="header">
						<MenuToggle thisclick={this.props.menuClick} />
						<MenuBack />
						<p className="menu-site">
                            <Link to="/">首页</Link>/<Link to={"/list/typeid/"+this.state.data.typeid}>{this.state.data.typename}</Link>/ 文章
						</p>
						<HeadCaptionDetail title={this.state.data.title} sdate={this.state.data.senddate} source={this.state.data.source}/>
						<MenuFooter />
					</div>
					<div className="main">
						<ArticleDetail des={this.state.data.description} body={this.state.data.body} pic={this.state.data.litpic} id={this.state.data.id} />
					</div>
				</div>
			)
		}else{
			return (<Delay />)
		}
	}
}