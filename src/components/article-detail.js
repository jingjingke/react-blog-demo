import React, { Component,PropTypes } from 'react'
import Sohu from '../components/sohu'

export default class extends Component {
	static propTypes = {
		body:PropTypes.string,
		des:PropTypes.string,
		pic:PropTypes.string,
		id:PropTypes.string
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
					<div dangerouslySetInnerHTML={{__html:this.props.body}}></div>
					<div dangerouslySetInnerHTML={{__html:shstr}} className="sohucy"></div>
					<Sohu id={this.props.id} />
				</div>
			)
		}
	}
}
