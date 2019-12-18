import Vue from 'vue'
import VueRouter from 'vue-router'
import Schedule from '@/views/Schedule.vue'
import Game from '@/views/Game.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Schedule
	},
	{
		path: '/game/:id?',
		name: 'game',
		component: Game
	},
	{
		path: '/about',
		name: 'about',
		component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router;
