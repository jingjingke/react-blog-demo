//容器
import App from './containers/App.js'
//视图模板
import Home from './views/home.js'
import List from './views/list.js'
import Detail from './views/detail.js'

export default {
	path:'/',
	component:App,
	indexRoute:{
		component:Home
	},
	childRoutes:[
		{ path:'list/:type/:value', component:List},
		{ path:'detail/:aid', component:Detail}
	]
}