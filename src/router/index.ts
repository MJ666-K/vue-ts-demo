import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// RouteRecordRaw内置的类型接口

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: 'home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../components/layout/index.vue'),
        children: [
            {
                path: '/index',
                name: 'index',
                component: () => import('../views/index/index.vue'),
            },
            {
                path: '/vue3',
                name: 'vue3',
                component: () => import('../views/vue3/index.vue'),
            },
            {
                path: '/typeScript',
                name: 'typeScript',
                component: () => import('../views/typeScript/index.vue'),
            },
        ]
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
