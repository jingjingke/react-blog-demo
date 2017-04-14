import React, { Component } from 'react'
import {Link} from 'react-router'

export default class extends Component {
	render(){
		return (
			<p className="main-site">
				当前位置：
				<Link to="/">首页</Link>-
				<span>前端笔记</span>-
				<span>列表页</span>
			</p>
		)
	}
}
