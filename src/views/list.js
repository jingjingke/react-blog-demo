import React, { Component,PropTypes } from 'react'
import MenuToggle from '../components/menu-toggle'
import HeadCaptionList from '../components/head-caption-list'
import MainSiteList from '../components/main-site-list'
import ArticleListUl from '../components/article-list-ul'
import Footer from '../components/footer'
import Delay from '../components/delay'

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
			tagList:[],
			type:'',
			id:'',
			isOK:false
		}
	}
	componentDidUpdate(){
		const params = this.props.params
		//判断state保存的id否有变化
		if(this.state.type !== params.type || this.state.id !== params.value){
			//将isOK设为false
			this.setState({
				isOK:false				
			})
			//滚动条返回顶部(只有栏目变化时)
			window.scrollTo(0,0)
			//只有当参数type为typeid时，才会去查tag
			if(this.props.params.type === 'typeid'){
				this.setTagAjax()
			}
			//发送ajax
			this.setListAjax();
		}
	}
	componentDidMount(){
		//只有当参数type为typeid时，才会去查tag
		if(this.props.params.type === 'typeid'){
			this.setTagAjax()
		}
		//第一次发送ajax
		this.setListAjax();
	}
	//获取list的数据
	setListAjax(){
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
				data:store.get('list-'+params.type+params.value),
				isOK:true
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
					data:response.data,
					isOK:true
				})
			})
			//ajax完成
		}
	}
	//获取list-tag的数据
	setTagAjax(){
		const params = this.props.params;		
		//判断缓存中是否有数据
		if(store.enabled && store.get('tag-typeid'+params.value) !== undefined){
			this.setState({
				tagList:store.get('tag-typeid'+params.value)
			})
		}else{
			//准备数据
			const setData = {};
			setData['typeid']=params.value;
			//发送ajax
			axios.get('tag.php',{
				params:setData
			}).then(response=>{
				if(store.enabled) store.set('tag-typeid'+params.value,response.data);
				this.setState({
					tagList:response.data
				})
			})
			//ajax完成
		}
	}
	handleInfo(arr){
		const props = this.props.params;
		var info = '';
		if(arr.length > 0){
			for(let i=0; i < arr.length; i++){
				if(arr[i].id === props.value){
					if(props.type==='typeid'){
						info = arr[i].typename
					}else{
						info = arr[i].tag
					}
				}
			}
		}
		return info;
	}
	render(){
		
		if(this.state.isOK){
			//判断获取到的列表栏目信息
			var typeInfo = (<HeadCaptionList type={this.props.params.type} title={this.handleInfo(this.props.tagData)} />);
			var siteInfo = (<MainSiteList title={this.handleInfo(this.props.tagData)} />)
			if(this.props.params.type==='typeid'){
				typeInfo = <HeadCaptionList type={this.props.params.type} title={this.handleInfo(this.props.typeData)} tags={this.state.tagList} />
				siteInfo = (<MainSiteList title={this.handleInfo(this.props.typeData)} />)
			}
			
			return (
				<div className="container">
					<div className="header">
						<MenuToggle thisclick={this.props.menuClick} />
						{typeInfo}
					</div>
					<div className="main">
						{siteInfo}
						<ArticleListUl data={this.state.data} />
						<Footer />
					</div>
				</div>
			)
		}else{
			return (<Delay />)
		}

	}
}