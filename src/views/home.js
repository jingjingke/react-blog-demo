import React, { Component,PropTypes } from 'react'
import MenuToggle from '../components/menu-toggle'
import HeadCaptionIndex from '../components/head-caption-index'
import MainTag from '../components/main-tag'
import ArticleListUl from '../components/article-list-ul'
import Footer from '../components/footer'

import axios from 'axios'

export default class extends Component {
	static propTypes = {
		tagData:PropTypes.array
	}
	constructor(props){
		super(props)
		this.mounted = true
		this.state = {
			data:[]
		}
	}
	componentWillUnmount(){
		this.mounted = false
	}
	componentDidMount(){
		axios.get('list.php').then(response=>{
			if(this.mounted){
				this.setState({
					data:response.data
				})
			}
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
					<MainTag data={this.props.tagData} />
					<ArticleListUl data={this.state.data} />
					<Footer />
				</div>
			</div>
		)
	}
}