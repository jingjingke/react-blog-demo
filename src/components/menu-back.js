import React, { Component } from 'react'

export default class extends Component {
	handlerClick(){
		//根据浏览器历史记录返回上一页
		window.history.back()
	}
	render(){
		return (
			<div className="menu-back" onClick={this.handlerClick}>上一页</div>
		)
	}
}
