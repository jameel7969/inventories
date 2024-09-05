import { createRouter, createWebHistory } from 'vue-router';
import Category from '../components/Category.vue';

const routes = [
    {
        path: '/:itemName',
        name: 'ItemPage',
        component: Category,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
