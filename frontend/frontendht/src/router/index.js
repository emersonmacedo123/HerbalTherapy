import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";
import RegistrationPage from "@/views/RegistrationPage.vue";
import store from '../store';


const routes = [{
        path: "/",
        name: "frontPage",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
        path: "/ServicosOferecidos",
        name: "ServicosOferecidos",
        component: () =>
            import ( /* webpackChunkName: "homepage" */ "../views/ServicosOferecidos.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ( /* webpackChunkName: "login" */ "../views/LoginPage.vue"),
    },
    {
        path: "/registration",
        name: "registration",
        component: () =>
            import ( /* webpackChunkName: "registration" */ "../views/RegistrationPage.vue"),
    },
    {
        path: "/home",
        name: "loggedHome",
        component: () =>
            import ( /* webpackChunkName: "loggedHome" */ "../views/LoggedHome.vue"),
        meta: { requiresAuth: true }
    },
    {
        path: "/schedule",
        name: "schedule",
        component: () =>
            import ( /* webpackChunkName: "schedule" */ "../views/AgendarConsulta.vue"),
    },
    {
        path: "/history",
        name: "history",
        component: () =>
            import ( /* webpackChunkName: "history" */ "../views/ConsultasHistorico.vue"),
    },
    {
        path: "/agendamentos",
        name: "ConsultasAgendadas",
        component: () =>
            import ( /* webpackChunkName: "agendamentos" */ "../views/ConsultasAgendadas.vue"),
    },
    {
        path: "/perfilcliente",
        name: "perfilcliente",
        component: () =>
            import ( /* webpackChunkName: "perfilcliente" */ "../views/ClientePerfil.vue"),
    },
    {
        path: "/admin/users",
        name: "AdminView",
        component: () =>
            import ( /* webpackChunkName: "adminUsers" */ "../views/AdminViewUsers.vue"),
        meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
        path: "/admin/home",
        name: "AdminHome",
        component: () =>
            import ( /* webpackChunkName: "adminHome" */ "../views/AdminLoggedHome.vue"),
        meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
        path: "/admin/users/edit/:id",
        name: "AdminEditUser",
        component: () =>
            import ("../views/AdminEditUser.vue"),
        meta: { requiresAuth: true, requiresAdmin: true }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isAuthenticated) {
            next('/login');
        } else if (to.matched.some(record => record.meta.requiresAdmin) && !store.getters.isAdmin) {
            next('/'); // Redirect non-admin users to home
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;