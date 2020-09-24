require('./bootstrap');
window.Vue = require('vue');

import Vue from 'vue'
import Layout from "./Layout";
import router from "./router/router";
import store from "./store/store";
import Vuetify from '../plugins/vuetify';

axios.interceptors.request.use(function(config) {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

new Vue({
    router,
    vuetify:Vuetify,
    store,
    render: h => h(Layout)
}).$mount('#app');
