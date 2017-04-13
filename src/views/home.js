import React, { Component } from 'react'
import MenuToggle from '../components/menu-toggle'
import HeadCaptionIndex from '../components/head-caption-index'
import MainTag from '../components/main-tag'
import ArticleListUl from '../components/article-list-ul'
import Footer from '../components/footer'

export default class extends Component {
	render(){
		return (
			<div className="container">
				<div className="header">
					<MenuToggle />
					<HeadCaptionIndex />
				</div>
				<div className="main">
					<MainTag />
					<ArticleListUl />
					<Footer />
				</div>
			</div>
		)
	}
}