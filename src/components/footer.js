import React, { Component } from 'react'

export default class extends Component {
	render(){
		return (
			<div className="footer">
				<p className="foot-copy"><a href="http://jingjingke.com/" target="blank" className="link">My Website</a>Copyright © 2017 by JINGJINGKE</p>
				<p className="foot-demo">My gitHub demos:
					<a href="https://github.com/jingjingke/vuePro-demo" target="blank" className="link">vuePro-demo</a>|
					<a href="https://github.com/jingjingke/vue2-app-demo" target="blank" className="link">vue2-app-demo</a>|
					<a href="https://github.com/jingjingke/scroll-select" target="blank" className="link">scroll-select</a>
				</p>
			</div>
		)
	}
}
