import React, { Component,PropTypes } from 'react'
import Sohu from '../components/sohu'

export default class extends Component {
	static propTypes = {
		body:PropTypes.string,
		des:PropTypes.string,
		pic:PropTypes.string,
		id:PropTypes.string
	}
	componentDidMount(){
		// 获取正文DOM
		var htmlCode = this.refs.htmlCode;
		// 编辑正文-高亮代码
		if(htmlCode.querySelectorAll('.prettyprint').length > 0){
			var scriptPre = document.createElement("script");
			scriptPre.type = "text/javascript";
			scriptPre.src  = 'http://www.jingjingke.com/res/js/prettify.js';
			document.querySelector("head").appendChild(scriptPre);
		}
		// 设置带openUrl样式-跳转页面
		var openList = htmlCode.querySelectorAll('.openUrl');
		for(let i=0; i<openList.length; i++){
			openList[i].addEventListener('click',function(){
				window.open(this.innerText,'_self')
			})
		}
	}
	render(){
		if(this.props.des === undefined){
			return (<div className="article-detail"></div>)
		}else{
			//判断是否有缩略图
			var picImg = (<p className="disNone"></p>)
			if(this.props.pic!==''){
				picImg = (<p className="center"><img src={"http://www.jingjingke.com/"+this.props.pic} alt="缩略图" /></p>)
			}
			//获取畅言所需id
			var shstr = '<div id="SOHUCS" sid="'+this.props.id+'"></div>'
			//正式渲染
			return (
				<div className="article-detail">
					<p>{this.props.des}</p>
					{picImg}
					<div dangerouslySetInnerHTML={{__html:this.props.body}} ref='htmlCode'></div>
					<div dangerouslySetInnerHTML={{__html:shstr}} className="sohucy"></div>
					<Sohu id={this.props.id} />
				</div>
			)
		}
	}
}
