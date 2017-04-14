import React, { Component,PropTypes } from 'react'
import {Link} from 'react-router'

export default class extends Component {
	static propTypes = {
		data:PropTypes.array
	}
	render(){
		const datas = this.props.data;
		if(datas.length > 0){
			var list = datas.map((item,index)=>{
				return (
					<li key={index}><Link to={"/list/typeid/"+item.id}>{item.typename}</Link></li>
				)
			})
		}
		return (
			<div className="menu-nav">
				<form className="menu-find">
					<input type="text" placeholder="search" />
				</form>
				<ul className="menu-list">
					<li><Link to='/'>首页</Link></li>
					{list}
				</ul>
				<p className="menu-code">
					<span>若有疑问可加入网站建设QQ群：169548454或用手机扫描二维码</span>
					<img src="http://jingjingke.com/res/img/qunCode.png" alt='加QQ群' />
				</p>
			</div>
		)
	}
}
