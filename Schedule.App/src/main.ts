import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import createStore from "./store";
import socket from "./socket";

Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
    router,
    store: createStore(socket),
    render: h => h(App)
}).$mount("#app");
