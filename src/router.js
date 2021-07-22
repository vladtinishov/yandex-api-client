import Vue from "vue"
import Router from "vue-router"
import TextAd from "./views/TextAd"

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/textad",
            component: TextAd,
        },
    ]
})