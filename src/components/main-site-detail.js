import React, { Component,PropTypes } from 'react'
import {Link} from 'react-router'

export default class extends Component {
	static propTypes = {
		typeid:PropTypes.string,
		typename:PropTypes.string,
		title:PropTypes.string
	}
	render(){
		return (
			<p className="main-site">
				当前位置：
					<Link to="/">首页</Link>-
					<Link to={"/list/typeid/"+this.props.typeid}>{this.props.typename}</Link>-
					<span>{this.props.title}</span>-
					<span>详情</span>
			</p>
		)
	}
}
