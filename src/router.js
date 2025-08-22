import { createWebHistory, createRouter } from "vue-router";

const HOME = '/';
const WINNERS = '/winners'

const routes = [
    {  path: HOME, component: () => import("./pages/HomePage.vue") },
];

const router = createRouter({
    // mode: 'history',
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    next();
});


export default router;