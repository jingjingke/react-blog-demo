import React, { Component } from 'react'
import MenuToggle from '../components/menu-toggle'
import HeadCaptionDetail from '../components/head-caption-detail'
import MainSiteDetail from '../components/main-site-detail'
import ArticleDetail from '../components/article-detail'
import Footer from '../components/footer'

export default class extends Component {
	render(){
		return (
			<div className="container">
				<div className="header">
					<MenuToggle />
					<HeadCaptionDetail />
				</div>
				<div className="main">
					<MainSiteDetail />
					<ArticleDetail />
					<Footer />
				</div>
			</div>
		)
	}
}