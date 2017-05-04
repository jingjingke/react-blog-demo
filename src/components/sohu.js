import React, { Component,PropTypes } from 'react'
import sohu from './shcy'

export default class extends Component {
	static propTypes = {
		id:PropTypes.string
	}
	constructor(props){
		super(props)
		this.state = {
			id:''
		}
	}
	componentDidUpdate(){
		if(this.props.id !== this.state.id){
			this.idIsChange()
		}
	}
	componentDidMount(){
		this.idIsChange()
	}
	idIsChange(){
		//第一次//第N次通过改变Id获取文章时
		this.setState({
			id:this.props.id
		})
	}
	render(){
		//判断如果state的值与props传递过来的值不同再return
		if(this.props.id !== this.state.id){
			console.log(this.props.id+'执行了一次')
			//畅言id
			var shid = {
	        appid: "cysfjjXPd",
	        conf: "prod_5f90b5a91caf6605245f46e49af00db2"
	    }
			//执行畅言主要方法
			sohu.loadVersionJs()
			
			return (
				<div>
						{window.changyan.api.config(shid)}
				</div>
			)
		}else{
			return (<div className='disNone'></div>)	
		}
	}
}
