import React, { Component } from 'react'
import ArticleListLi from '../components/article-list-li'
import PageNumbers from '../components/page-numbers'

export default class extends Component {
	render(){
		return (
			<div>
				<ul className="article-list">
					<ArticleListLi />
					<ArticleListLi />
					<ArticleListLi />
					<ArticleListLi />
					<ArticleListLi />
					<ArticleListLi />
					<ArticleListLi />
					<ArticleListLi />
					<ArticleListLi />
					<ArticleListLi />
					<ArticleListLi />
				</ul>
				<PageNumbers />
			</div>
		)
	}
}
