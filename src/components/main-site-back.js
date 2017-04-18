import React, { Component } from 'react'

export default class extends Component {
	handlerClick(){
		//根据浏览器历史记录返回上一页
		window.history.back()
	}
	render(){
		return (
			<span className="main-site-back" onClick={this.handlerClick}>&lt;&lt;返回上一页</span>
		)
	}
}
