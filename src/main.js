import Vue from 'vue'
import App from './App'
import router from './router'
/*import VueParticles from 'vue-particles'
Vue.use(VueParticles)*/

Vue.config.productionTip = false;

new Vue({
	el:'#app',
	router,
	render: h => h(App)
})
