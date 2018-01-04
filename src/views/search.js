import React, { Component,PropTypes } from 'react'
import {Link} from 'react-router';
import MenuToggle from '../components/menu-toggle'
import MenuBack from '../components/menu-back'
import MenuFooter from '../components/menu-footer'
import ArticleListUl from '../components/article-list-ul'
import Delay from '../components/delay'

import axios from 'axios'

export default class extends Component {
	static propTypes = {
		menuClick:PropTypes.func
	}
	constructor(props){
		super(props)
		this.state = {
			data:[],
			query:'',
			hasList:false,
			isOK:false
		}
	}
	componentDidUpdate(){
		const param = this.props.location.query;
		
		if(param.query !== this.state.query){
			//滚动条返回顶部(只有栏目变化时)
			window.scrollTo(0,0)
			//如果query为空或undefined，则可以直接state一个状态，而不需要发送ajax
			if(param.query === '' || param.query === undefined){
				//重置部分state
				this.setState({
					isOK:true,
					hasList:false,
					query:param.query
				})
			}else{
				//重置部分state
				this.setState({
					isOK:false,
					hasList:false
				})
				//发送ajax(参数变化时)
				this.setAjax();
			}
		}
		
	}
	componentDidMount(){
		//第一次发送ajax
		this.setAjax();
	}
	setAjax(){
		//接收props-location.query参数
		const params = this.props.location.query
		//计算需要发送ajax时用的参数
		const setData = {};
		if(params.query !== undefined && params.query !== ''){
			//再过过滤一次（考虑手动的情况）
			setData['query'] = params.query;
		}else{
			setData['query'] = '';
		}
		//将查询的内容存入state
		this.setState({
			query:setData['query']
		})
		//发送ajax--列表
		axios.get('search.php',{
			params:setData
		}).then(response=>{
			let flag = false;
			//如果返回数组有个数
			if(response.data.length > 0){
				flag = true;
			}
			//去更新state
			this.setState({
				data:response.data,
				isOK:true,
				hasList:flag
			})
		})
		//ajax完成
	}
	
	render(){
		const query = this.props.location.query;
		const queryStr = query.query?query.query:'';
		
		if(this.state.isOK){
			//显示的是列表还是找不到结果判断
			let listRender = (<div className="search-nolist">小伙伴，没有你要的搜索结果唉~</div>);
			if(this.state.hasList){
				listRender = (<ArticleListUl data={this.state.data} />);
			}
			
			return (
				<div className="container">
					<div className="header">
						<MenuToggle thisclick={this.props.menuClick} />
						<MenuBack />
                        <p className="menu-site">
                            <Link to="/">首页</Link>/ 搜索结果
                        </p>
						<div className="header-caption"><h1>搜索"{queryStr}"的结果</h1></div>
                        <MenuFooter />
					</div>
					<div className="main">
						{listRender}
					</div>
				</div>
			)
		}else{
			return (<Delay />)
		}
	}
}