import React, { Component } from 'react'
import MenuToggle from '../components/menu-toggle'
import HeadCaptionList from '../components/head-caption-list'
import MainSiteList from '../components/main-site-list'
import ArticleListUl from '../components/article-list-ul'
import Footer from '../components/footer'

export default class extends Component {
	render(){
		return (
			<div className="container">
				<div className="header">
					<MenuToggle />
					<HeadCaptionList />
				</div>
				<div className="main">
					<MainSiteList />
					<ArticleListUl />
					<Footer />
				</div>
			</div>
		)
	}
}