import React, { Component,PropTypes } from 'react'
import {Link} from 'react-router'
import MainSiteBack from './main-site-back'

export default class extends Component {
	static propTypes = {
		type:PropTypes.object
	}
	render(){
		if(this.props.type === undefined){
			return (<p className="main-site"></p>)
		}else{
			//判断传的是typeid还是tagid
			var showtype;
			if(this.props.type.type === 'typeid'){
				showtype = (<span>{this.props.type.typename}</span>)
			}else{
				showtype = (<span>{this.props.type.tag}</span>)
			}
			
			return (
				<p className="main-site">
					当前位置：
					<Link to="/">首页</Link>-
					{showtype}-
					<span>列表页</span>
					<MainSiteBack />
				</p>
			)
		}
	}
}
