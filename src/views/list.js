import React, { Component,PropTypes } from 'react'
import MenuToggle from '../components/menu-toggle'
import HeadCaptionList from '../components/head-caption-list'
import MainSiteList from '../components/main-site-list'
import ArticleListUl from '../components/article-list-ul'
import Footer from '../components/footer'

import axios from 'axios'
import store from 'store'

export default class extends Component {
	static propTypes = {
		typeData:PropTypes.array,
		tagData:PropTypes.array,
		menuClick:PropTypes.func
	}
	constructor(props){
		super(props)
		this.state = {
			data:[],
			type:'',
			id:''
		}
	}
	componentDidUpdate(){
		const params = this.props.params
		//判断state保存的id否有变化
		if(this.state.type !== params.type || this.state.id !== params.value){
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
		//将变化的id及时存入state
		this.setState({
			type:params.type,
			id:params.value
		})
		//判断缓存中是否有数据
		if(store.enabled && store.get('list-'+params.type+params.value) !== undefined){
			this.setState({
				data:store.get('list-'+params.type+params.value)
			})
		}else{
			//计算需要发送ajax时用的参数
			const setData = {};
			setData[params.type] = params.value;
			//发送ajax--列表
			axios.get('list.php',{
				params:setData
			}).then(response=>{
				if(store.enabled) store.set('list-'+params.type+params.value,response.data);
				this.setState({
					data:response.data
				})
			})
			//ajax完成
		}
	}
	handleInfo(arr){
		const props = this.props.params;
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
		
		return (
			<div className="container">
				<div className="header">
					<MenuToggle thisclick={this.props.menuClick} />
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