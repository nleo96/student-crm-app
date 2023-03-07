import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./HomePage.vue";
import SignUp from "./SignUp.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/signup",
        name: "Sign Up",
        component: SignUp,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;