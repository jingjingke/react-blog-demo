//容器
import App from './containers/App'
//视图模板
import Home from './views/home'
import List from './views/list'
import Detail from './views/detail'
import Search from './views/search'

export default {
	path:'/',
	component:App,
	indexRoute:{
		component:Home
	},
	childRoutes:[
		{ path:'list/:type/:value', component:List},
		{ path:'detail/:aid', component:Detail},
		{ path:'search', component:Search}
	]
}