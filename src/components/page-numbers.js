import React, { Component,PropTypes } from 'react'

export default class extends Component {
	static propTypes = {
		total:PropTypes.number,
		now:PropTypes.number
	}
	render(){
		if(this.props.total === undefined){
			//如果数据还没有传过来
			return (
				<div className="page-numbers"></div>
			)
		}else{
			//数据已经传过来
			const total = this.props.total;
			const now = this.props.now;
			
			//上下页默认时
			var prev = (<a href="#" className="prev">&lt;</a>)
			var next = (<a href="#" className="next">&gt;</a>)
			//判断如果是第一页或最后一页隐藏
			if(now === 0){
				prev = (<span className="prev disNone">无</span>);
			}else if(now === total){
				next = (<span className="next disNone">无</span>);
			}
			
			//所有页码
			var list = [];
			for(var i = 0; i < total; i++){
				var thisEle;
				if(i === now){
					thisEle = (<span key={i+1} className="current">{i+1}</span>)
				}else{
					thisEle = (<a key={i+1} href="#">{i+1}</a>)
				}
				list.push(thisEle)
			}
			
			//渲染
			return (
				<div className="page-numbers">
					{prev}
					{next}
					{list}
				</div>
			)
		}
	}
}
