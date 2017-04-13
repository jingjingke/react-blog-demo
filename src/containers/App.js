import React, { Component } from 'react';
import '../assets/css/style.css';
import MenuNav from '../components/menu-nav'

import axios from 'axios'

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			data:[]
		}
	}
	componentDidMount(){
		axios.get('type.php').then(response=>{
			this.setState({data:response.data})
		})
	}
  render() {
    return (
      <div className="App">
        <MenuNav data={this.state.data}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
