import React, { Component,PropTypes } from 'react'
import {Link} from 'react-router'
import MainSiteBack from './main-site-back'

export default class extends Component {
	static propTypes = {
		title:PropTypes.string
	}
	render(){
		return (
			<p className="main-site">
				当前位置：
				<Link to="/">首页</Link>-
				<span>{this.props.title}</span>-
				<span>列表页</span>
				<MainSiteBack />
			</p>
		)
	}
}
