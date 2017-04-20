import React, { Component } from 'react'
import {hashHistory} from 'react-router'

export default class extends Component {
	buttonClick(){
		//获取输入框和弹出错误节点
		const text = this.refs.mySearchText;
		const err = this.refs.searchErr;
		//匹配特别字符正则表达式
		const reg = /[`~!@#$%^&*()_+<>?:"{},.\\;'\]]/g;
		
		//进行简单判断：是否为空，是否包含特殊字符
		if(text.value.trim() === ''){
			text.value = ''
			err.innerHTML = "请输入关键词！"
		}else if(reg.test(text.value)){
			//提示含有特殊字符，然后将特殊字符清除
			err.innerHTML = "含有特殊字符！"
			setTimeout(()=>{
				text.value = text.value.replace(reg,'')
				err.innerHTML = "特殊字符已清除！重点搜索"
			},1000)
		}else{
			//用路由开始跳转
			hashHistory.push('/search?query=' + text.value.trim())
		}
	}
	
	inputKeyDown(){
		//获取输入框和弹出错误节点
		const text = this.refs.mySearchText;
		const err = this.refs.searchErr;
		//判断如果有错误文字且输入文字不为空时
		if(err.innerHTML !== '' && text.value.trim() !== ''){
			//将错误文字清空
			err.innerHTML = ''
		}
	}
	
	render(){
		return (
			<div className="menu-find">
				<input type="text" placeholder="输入关键词" ref='mySearchText' onKeyUp={this.inputKeyDown.bind(this)} />
				<button type="button" onClick={this.buttonClick.bind(this)}>搜索</button>
				<p className="err" ref='searchErr'></p>
			</div>
		)
	}
}
