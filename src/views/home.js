import React, { Component } from 'react'
import MenuToggle from '../components/menu-toggle'
import HeadCaptionIndex from '../components/head-caption-index'
import MainTag from '../components/main-tag'
import ArticleListUl from '../components/article-list-ul'
import Footer from '../components/footer'

import axios from 'axios'

export default class extends Component {
	constructor(props){
		super(props)
		this.state = {
			data:[]
		}
	}
	componentDidMount(){
		axios.get('list.php').then(response=>{
			this.setState({
				data:response.data
			})
		})
	}
	render(){
		return (
			<div className="container">
				<div className="header">
					<MenuToggle />
					<HeadCaptionIndex />
				</div>
				<div className="main">
					<MainTag />
					<ArticleListUl data={this.state.data} />
					<Footer />
				</div>
			</div>
		)
	}
}