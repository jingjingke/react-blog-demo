import React, { Component,PropTypes } from 'react'
import ArticleListLi from '../components/article-list-li'
import PageNumbers from '../components/page-numbers'

export default class extends Component {
	static propTypes = {
		data:PropTypes.array
	}
	constructor(props){
		super(props)
		this.state = {
			pageNow:0
		}
	}
	render(){
		const datas = this.props.data;
		if(datas.length > 0){
			//每页多少
			const pageSize = 12;
			//总共多少页
			var pageTotal = parseInt(datas.length/pageSize,10);
			//最后一页（小于或等于pageSize）
			const pageLast = datas.length%pageSize;
			//若pageLast不为0，则总数需要加1
			if( pageLast !== 0 ){
				pageTotal++;
			}
			
			//整理list
			var list = datas.slice(this.state.pageNow*pageSize,(this.state.pageNow+1)*pageSize).map((item,index)=>{
				return (
					<ArticleListLi key={index} data={item} />
				)
			})
		}
		
		return (
			<div>
				<ul className="article-list">
					{list}
				</ul>
				<PageNumbers total={pageTotal} now={this.state.pageNow} />
			</div>
		)
	}
}
