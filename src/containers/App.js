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
			menu:false,
			keyF5:false,
			keyCtrl:false
		}
	}
	componentDidMount(){
		
		//如果缓存是可以使用的
		if(store.enabled){
			//查找缓存中是否有localTime记录
			if(store.get('localTime') !== undefined){
				//有则需要去判断是否已经过期(2天--86400000)
				if(Math.abs(Date.parse(new Date())-store.get('localTime'))>=86400000){
					//清除缓存并刷新页面
					store.clearAll()
					location.reload()
				}
			}else{
				//没有则去设置一下
				store.set( 'localTime',Date.parse(new Date()))
			}
			
			//监听键盘事件--"ctrl+F5"时清空localstorage
			window.addEventListener('keydown',this.downEvent.bind(this))
			window.addEventListener('keyup',this.upEvent.bind(this))
		}
		
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
	
	downEvent(event){
		//如果F5或者ctrl键分别是按下的状态
		if(event.key === 'F5'){
			//设置F5按下的状态
			if(this.state.keyF5===false){
				this.setState({keyF5:true})
			}
			//因为ctrl+f5预设的是先按ctrl后按F5所以在按下F5后判断是否都按下了（如果不想分的话可以将下面这段剪切到downEvent结尾处上方）
			//如果两个键同时按下
			if(this.state.keyF5 && this.state.keyCtrl){
				//清空缓存
				store.clearAll()
			}
		}else if(event.key === 'Control'){
			//设置ctrl按下的状态
			if(this.state.keyCtrl===false){
				this.setState({keyCtrl:true})
			}
		}
	}
	upEvent(event){
		//如果F5或者ctrl键弹起的话就将state状态更改
		if(event.key === 'F5'){
			this.setState({keyF5:false});
		}else if(event.key === 'Control'){
			this.setState({keyCtrl:false});
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