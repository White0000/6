import Vue from 'vue'
import VueRouter from 'vue-router'

import Homepage from '../components/HomePage.vue' //主页
import Login from "../components/Login.vue" //登陆
import Register from "../components/Register.vue" //注册
import No1 from "../components/No1.vue"
import Navbar from '../components/views/Navbar.vue'
import index from '../components/index.vue'
Vue.use(VueRouter) 

const routes = [
	{
	    path: '/',
	    name: 'login',
	    component: Login
	},
	{
		path:'/index',
		name:'index',
		component:index
	},
    {
        path: '/Register',
        name: 'Register',
        component: Register
    }, {
        path: '/Homepage',
        name: 'Homepage',
        component: Homepage
    },
		{
		path:'/No1',
		name:'No1',
		component:No1
	},
		
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes


})
 
export default router