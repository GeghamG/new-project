import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import modules from './modules';
import product from './product'
import index  from './index'


Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';


export default new Vuex.Store({

     modules: {
         modules,
         product,
         index,

     },

    strict: debug,
    plugins: debug ? [createLogger()] : [],
});

