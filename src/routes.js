import { createWebHistory, createRouter } from "vue-router";
import SignIn from "./SignIn.vue";
import SignUp from "./SignUp.vue";
import HomePage from "./HomePage.vue";
import NewContact from "./NewContact.vue";

const routes = [
    {
        path: "/",
        name: "Sign In",
        component: SignIn,
    },
    {
        path: "/signup",
        name: "Sign Up",
        component: SignUp,
    },
    {
        path: "/HomePage",
        name: "Home Page",
        component: HomePage,
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