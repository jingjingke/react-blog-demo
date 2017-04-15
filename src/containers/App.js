import React, { Component } from 'react';
import '../assets/css/style.css';
import MenuNav from '../components/menu-nav'

import axios from 'axios'

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			type:[],
			tag:[],
			menu:false
		}
	}
	componentDidMount(){
		axios.get('type.php').then(response=>{
			this.setState({type:response.data})
		})
		axios.get('tag.php').then(response=>{
			this.setState({tag:response.data})
		})
	}
	menuHandleClick(){
		this.setState({
			menu:!this.state.menu
		})
	}
  render() {
  	var styleName = this.state.menu?' menu-open':'';
    return (
      <div className={'App'+styleName}>
        <MenuNav data={this.state.type}/>
        {this.props.children && React.cloneElement(this.props.children,{
        	typeData:this.state.type,
        	tagData:this.state.tag,
        	menuClick:this.menuHandleClick.bind(this)
        })}
      </div>
    );
  }
}

export default App;
