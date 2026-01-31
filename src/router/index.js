import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserInfoView from '../views/UserInfoView.vue'
import GenderSelectionView from '../views/GenderSelectionView.vue'
import PhysicalInfoView from '../views/PhysicalInfoView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/userinfo'
        },
        {
            path: '/userinfo',
            name: 'userinfo',
            component: UserInfoView
        },
        {
            path: '/gender',
            name: 'gender',
            component: GenderSelectionView
        },
        {
            path: '/physical',
            name: 'physical',
            component: PhysicalInfoView
        }
    ]
})

export default router
