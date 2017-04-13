import React, { Component } from 'react'
import {Link} from 'react-router'

class Navbar extends Component {
	render(){
		return (
			<ul>
				<li><Link to="/">首页</Link></li>
				<li><Link to="/list">列表页</Link></li>
				<li><Link to="/detail">内容页</Link></li>
			</ul>
		)
	}
}
export default Navbar