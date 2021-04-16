import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Operators from '../views/Operators.vue'
import Comment from '../views/Comment.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/operators',
        name: 'Operators',
        component: Operators
    },
    {
        path: '/comment',
        name: 'Comment',
        component: Comment
    },
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router
