import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./HomePage.vue";
import SignUp from "./SignUp.vue";
import NewContact from "./NewContact.vue";

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
    {
        path: "/newContact",
        name: "New Contact",
        component: NewContact,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;