import React, { Component } from 'react';
import '../assets/css/style.css';
import MenuNav from '../components/menu-nav'

import axios from 'axios'
import store from 'store'

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
		//判断缓存中是否有数据
		if(store.enabled && store.get('type-list')!==undefined && store.get('tag-list')!==undefined){
			this.setState({type:store.get('type-list')})
			this.setState({tag:store.get('tag-list')})
		}else{
			axios.get('type.php').then(response=>{
				if(store.enabled) store.set('type-list',response.data);
				this.setState({type:response.data})
			})
			axios.get('tag.php').then(response=>{
				if(store.enabled) store.set('tag-list',response.data);
				this.setState({tag:response.data})
			})
		}
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
