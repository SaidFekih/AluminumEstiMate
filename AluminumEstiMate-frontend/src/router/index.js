import { createRouter,createWebHistory } from "vue-router";
import Showcase from "../views/ShowcaseView.vue";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue"

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"/showcase",
            name:"showcase",
            component:Showcase,
        },
        {
            path:"/login",
            name:"login",
            component: LoginView,
        },
        {
            path:"/home",
            name:"home",
            component: HomeView,
        }
    ]

});

export default router;