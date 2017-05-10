import $ from 'jquery'
import Vue from 'vue'
import Util from './libs/util'
import App from './app.vue'
import './styles/main.less'

new Vue({
	el: '#app',
	render: h => h(App)
})

