import Vue from 'vue'
import header from "../components/AppHeader";
import footer from "../components/AppFooter";
import VueRouter from 'vue-router'
import Register from "../pages/Register";
import Login from "../pages/Login";

Vue.use(VueRouter);

const routes = [

    {
        path: "/",
        name: "Home",
        components: {
            header,
            default: () =>
                import("../views/Home.vue"),
            footer
        }
    },

    {
        path: '/register',
        component: Register,

    },
    {
        path: '/login',
        component: Login,
    },

    {
        path: "/shop",
        name: "Shop",
        components: {
            header,
            default: () =>
                import("../views/Shop.vue"),
            footer
        }
    },
    {
        path: "/blog",
        name: "Blog",
        components: {
            header,
            default: () =>
                import("../views/Blog.vue"),
            footer
        }
    },
    {
        path: "/about",
        name: "About",
        components: {
            header,
            default: () =>
                import( "../views/About.vue"),
            footer
        }
    },
    {
        path: "/contact",
        name: "Contact",
        components: {
            header,
            default: () =>
                import(
                     "../views/Contact.vue"
                    ),
            footer
        }
    },

    {
        path: "/admin",
        name: "Admin",
        components: {
            header: () =>
                import(
                     "../components/admin/Header.vue"
                    ),
            default: () =>
                import(
                    "../views/admin/Admin.vue"
                    )
        },
        children: [
            {
                path: "users",
                name: "AdminUsers",
                component: () =>
                    import(
                        "../views/admin/Users.vue"
                        )
            },
            {
                path: "categories",
                name: "AdminCategories",
                component: () =>
                    import(
                         "../views/admin/Categories.vue"
                        )
            },
            {
                path: "products",
                name: "AdminProducts",
                component: () =>
                    import(
                       "../views/admin/Products.vue"
                        )
            }
        ]
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
                path: '/',
            });
        }
        else if(token && to.path!=='/login' &&  to.path !== '/register' )
        {

            if(router.options.routes.map(item=>item.path).indexOf(to.path) == -1){
                next({
                    path: '/',
                });
            }
        }
    next()
})

export default router;
