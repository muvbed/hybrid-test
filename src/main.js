import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './App.vue'
import Global from './store/global'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

const store = () => {
	return new Vuex.Store({
		modules: {
			Global
		}
	})
}

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/', 
			name: 'enter',
			component: () => import('./views/enter.vue')
		},
		{
			path: '/signin', 
			name: 'signin',
			component: () => import('./views/signin.vue')
		},
		{
			path: '/signup',
			name: 'signup',
			component: () => import('./views/signup.vue')
		},
		{
			path: '/mainframe',
			name: 'mainframe',
			component: () => import('./views/mainframe.vue')
		}
	]
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
