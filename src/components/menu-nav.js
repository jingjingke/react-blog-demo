import React, { Component,PropTypes } from 'react'
import {Link} from 'react-router'
import MenuNavSearch from './menu-nav-search';

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
				<p className="menu-avatar"><img src="https://avatars3.githubusercontent.com/u/24471671?v=3&s=460" alt="头像" /></p>
				<ul className="menu-list">
					<li><Link to='/'>首页</Link></li>
					{list}
				</ul>
				<MenuNavSearch />
				<p className="menu-code">
					<span>若有疑问可加入网站建设QQ群：169548454或用手机扫描二维码</span>
					<img src="http://jingjingke.com/res/img/qunCode.png" alt='加QQ群' />
				</p>
			</div>
		)
	}
}
