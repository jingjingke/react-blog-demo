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
			let pageSize = 12;
			//总共多少页
			var pageTotal = 0;
			//最后一页（小于或等于pageSize）
			let pageLast = datas.length%pageSize;
			//计算需要分多少页
			pageTotal = pageLast===0 ? parseInt(datas.length/pageSize) : parseInt(datas.length/pageSize) + 1;
			
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
