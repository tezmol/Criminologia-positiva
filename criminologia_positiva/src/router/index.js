import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:"/",
        name:"home",
        component:()=>import("../views/Home.vue")
    },
    {
        path:'/blog',
        name:'blog',
        component:()=>import('../views/Blog.vue')
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router
  
