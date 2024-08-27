import { createRouter, createWebHistory } from 'vue-router';
import Login from "@/components/LoginComponent.vue";
import SignUp from "@/components/SignUpComponent.vue"; // SignUp 컴포넌트 추가

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp, // SignUp 컴포넌트 추가
    },
    // 다른 라우트들...
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
