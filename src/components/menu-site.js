import React, { Component } from 'react'

export default class extends Component {
	render(){
		return (
			<div className="menu-footer">
                <p className="foot-right">Copyright©2018 jingjingke</p>
				<p className="menu-foot-icon">
					<a className="git" href="https://github.com/jingjingke" target="blank" title="我的github"></a>
                    <a className="site" href="http://jingjingke.com/" target="blank" title="我的网站"></a>
				</p>
			</div>
		)
	}
}
