import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from "../pages/Register";
import Login from "../pages/Login";
import Youtube from "../pages/Youtube";


Vue.use(VueRouter);

const routes = [

    {
        path: '/youtube',
        component: Youtube,
        meta: {requiresAuth: true}
    },

    {
        path: '/register',
        component: Register,
        meta: {requiresAuth: true}

    },
    {
        path: '/login',
        component: Login,
        meta: {requiresAuth: true}
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});


router.beforeEach((to, from, next) => {
        const token = localStorage.getItem('token');
        if (!token && to.path !== '/login') {
            if(to.path === '/register'){
                next()
            } else{
                next({
                        path: '/login',
                    });
            }
        } else if(token && (to.path === '/login' ||  to.path === '/register')){
            next({
                path: '/youtube',
            });
        }
        else if(token && to.path!=='/login' &&  to.path !== '/register')
        {

            if(router.options.routes.map(item=>item.path).indexOf(to.path) == -1){
                next({
                    path: '/youtube',
                });
            }
        }
    next()
})

export default router;
