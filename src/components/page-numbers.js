import React, { Component,PropTypes } from 'react'

export default class extends Component {
	static propTypes = {
		total:PropTypes.number,
		now:PropTypes.number,
		thisclick:PropTypes.func
	}
	clickEvent(event){
		// 触发父组件中定义的点击事件
		this.props.thisclick(event)
		// 点击的时候滚动条位置滑到顶部
		const stop = document.body.scrollTop;
		let num = 20;
		var setTime = setInterval(()=>{
			document.body.scrollTop = stop/20 * num;
			num--;
			if(num <= 0){
				clearInterval(setTime)
				document.body.scrollTop = 0
			}
		},10)
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
			var prev = (<span className="prev" onClick={this.clickEvent.bind(this)} ></span>)
			var next = (<span className="next" onClick={this.clickEvent.bind(this)} ></span>)
			//判断如果是第一页或最后一页隐藏
			if(now === 1){
				prev = (<span className="prev disNone">无</span>);
			}
			if(now === total){
				next = (<span className="next disNone">无</span>);
			}
			
			//所有页码--暂存到temp
			var temp = [];
			var styleName;
			for(var i = 1; i <= total; i++){
				var thisEle;
				if(i===now){
					styleName='current'
				}else{
					styleName='';
				}
				thisEle = (<span key={i} className={styleName} onClick={this.clickEvent.bind(this)}>{i}</span>)
				temp.push(thisEle)
			}
			//提取需要的页码--list正式
			var list = [];
			//判断是否需要加省略号的
			if(total < 8){
				//正常赋值 list=temp就可以
				list = temp;
			}else{
				list.push(temp[0])
				if(now <= 4 ){
					//当前页偏前时的情况
					for(let i=1; i<5; i++){
						list.push(temp[i])
					}
					list.push((<span key={total+1}>···</span>))
					//判断完
				}else if(now >= total-3){
					//当前页偏后时的情况
					list.push((<span key='-1'>···</span>))
					for(let i=total-5; i<total-1; i++ ){
						list.push(temp[i])
					}
					//判断完
				}else{
					//当前面在中间区间的情况
					list.push((<span key='-1'>···</span>))
					for(let i=now-2;i<now+1;i++){
						list.push(temp[i])
					}
					list.push((<span key={total+1}>···</span>))
					//判断完
				}
				list.push(temp[total-1])
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
