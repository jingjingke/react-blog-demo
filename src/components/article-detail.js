import React, { Component,PropTypes } from 'react'

export default class extends Component {
	static propTypes = {
		body:PropTypes.string,
		des:PropTypes.string,
		pic:PropTypes.string
	}
	render(){
		if(this.props.des === undefined){
			return (<div className="article-detail"></div>)
		}else{
			//判断是否有缩略图
			if(this.props.pic===''){
				var pic = (<p className="disNone"></p>)
			}else{
				var pic = (<p className="center"><img src={"http://www.jingjingke.com/"+this.props.pic} alt="缩略图" /></p>)
			}
			//正式渲染
			return (
				<div className="article-detail">
					<p>{this.props.des}</p>
					{pic}
					<div dangerouslySetInnerHTML={{__html:this.props.body}}></div>
				</div>
			)
		}
	}
}
