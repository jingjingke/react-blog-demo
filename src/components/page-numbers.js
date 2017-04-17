import React, { Component,PropTypes } from 'react'

export default class extends Component {
	static propTypes = {
		total:PropTypes.number,
		now:PropTypes.number,
		thisclick:PropTypes.func
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
			var prev = (<span className="prev" onClick={this.props.thisclick}>&lt;</span>)
			var next = (<span className="next" onClick={this.props.thisclick}>&gt;</span>)
			//判断如果是第一页或最后一页隐藏
			if(now === 1){
				prev = (<span className="prev disNone">无</span>);
			}
			if(now === total){
				next = (<span className="next disNone">无</span>);
			}
			
			//所有页码
			var list = [];
			var styleName;
			for(var i = 1; i <= total; i++){
				var thisEle;
				if(i===now){
					styleName='current'
				}else{
					styleName='';
				}
				thisEle = (<span key={i} className={styleName} onClick={this.props.thisclick}>{i}</span>)
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
