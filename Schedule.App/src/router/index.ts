import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const scheduleComponent = () =>
    import(/* webpackChunkName: "schedule" */ "@/views/Schedule.vue");

const gameComponent = () =>
    import(/* webpackChunkName: "game" */ "@/views/Game.vue");

const aboutComponent = () =>
    import(/* webpackChunkName: "about" */ "@/views/About.vue");

const routes = [
    {
        path: "/",
        name: "home",
        component: scheduleComponent,
    },
    {
        path: "/schedule/:year",
        name: "schedule",
        component: scheduleComponent,
    },
    {
        path: "/game/:id",
        name: "game",
        component: gameComponent,
    },
    {
        path: "/about",
        name: "about",
        component: aboutComponent,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
