<template>
    <header>
        <v-toolbar color="primary" dense flat dark>
            <v-divider vertical class="ml-12"></v-divider>
            <v-btn text large tile class="text-capitalize" to="/wishlist">
                <v-icon class="mr-3" style="font-size: 35px;" color="pink"
                >mdi-heart-outline</v-icon
                >
                wishlist
                <span class="favorites-badge">5</span>
            </v-btn>
            <v-divider vertical></v-divider>
            <v-btn text large tile class="text-capitalize">checkout</v-btn>
            <v-divider vertical></v-divider>

            <template v-if="users">
                <v-menu
                    offsetY
                    origin="center center"
                    transition="scale-transition"
                >
                    <template v-slot:activator="{ on }">
                        <v-avatar
                            color="white"
                            size="36"
                            class="mx-3 pointer"
                            v-on="on"
                        >
                            <span class="primary--text profile-avatar">
                            out
                            </span>
                        </v-avatar>
                    </template>
                    <v-list>
                        <v-list-item-group color="primary">
                            <v-list-item @click="logout" v-show="access_token">
                                <v-list-item-title>
                                    Sign Out
                                </v-list-item-title>
                                <v-list-item-action>
                                    <v-icon>mdi-logout</v-icon>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-menu>
                <v-divider vertical class="mr-3"></v-divider>
                <span class="user-greeting">
                    Hi, {{users.email}}
                </span>
            </template>

            <template v-else>
                <v-btn text large tile class="text-capitalize" to="/login">
                    sign in
                    <v-icon class="ml-1">mdi-login</v-icon>
                </v-btn>
                <v-divider vertical></v-divider>
                <v-btn text large tile class="text-capitalize" to="/register"
                >register</v-btn
                >
                <v-divider vertical></v-divider>
            </template>

            <v-spacer></v-spacer>

            <v-divider vertical class="ml-12"></v-divider>
            <v-btn text large tile class="text-capitalize">
                <v-icon class="mr-4">mdi-phone</v-icon>
                helpline : (+00) 12 3456 890
            </v-btn>
            <v-divider vertical></v-divider>
            <v-divider vertical></v-divider>

            <v-btn text large tile class="text-capitalize">
                <v-icon class="mr-2">mdi-cart</v-icon>
                <v-badge color="pink" offset-y="10" :content="cartCount.totalCart"></v-badge>
                <span class="ml-7">£{{cartCount.sum}}</span>
            </v-btn>

            <v-divider vertical class="mr-12" ></v-divider>
        </v-toolbar>

        <v-row no-gutters class="my-3">
            <v-col cols="4" class="text-center" align-self="end">
                <v-btn icon color="primary" large>
                    <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon color="primary" large>
                    <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon color="primary" large>
                    <v-icon>mdi-linkedin</v-icon>
                </v-btn>
                <v-btn icon color="primary" large>
                    <v-icon>mdi-instagram</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="4">
                <router-link to="/">
                    <v-img
                        src="logo.png"
                        width="207"
                        height="65"
                        contain
                        style="margin: auto"
                    ></v-img>
                </router-link>
            </v-col>

            <v-col cols="4" align-self="end" class="px-12">
                <v-text-field
                    color="primary"
                    placeholder="Search Products"
                    append-icon="mdi-magnify"
                    outlined
                    rounded
                    dense
                    hide-details
                    class="mx-5"
                    @keydown.enter="search"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-tabs class="mt-12" centered>
            <v-tab
                v-for="link in links"
                :key="link.title"
                v-text="link.title"
                :to="link.to"
                class="navLink"
            ></v-tab>
        </v-tabs>
    </header>
</template>

<script>
import { mapMutations, mapActions,  mapGetters,  mapState } from "vuex";
import Buttons from "./buttons/buttons";
import router from "../router/router";
export default {
    name: "AppHeader",
    components: {Buttons},
    data: () => ({
        links: [
            { title: "home", to: "/" },
            { title: "shop", to: "/shop" },
            { title: "blog", to: "/blog" },
            { title: "about us", to: "/about" },
            { title: "contact us", to: "/contact" }
        ],
        users:{},
        access_token: localStorage.getItem('token') != null
    }),
    computed: {
        ...mapGetters(['cartCount']),
    },
    methods: {
        ...mapMutations(["removeAuth"]),
        ...mapActions(['countCart']),
        search() {
            alert(5);
        },
        logout(){
            axios.post('/api/logout').then(response => {
                if(response.status === 200){
                    localStorage.removeItem('token');
                    router.push('/login');
                }
            })
        },
        user(){
            axios.post('/api/userInfo').then((response)=>{
                this.users = response.data.user

            })
        },
    },
    mounted(){
        this.countCart(),
        this.user()
    },

};
</script>

<style scoped>
.navLink {
    font-size: 18px;
    font-weight: 600;
    width: 150px;
    text-transform: capitalize;
}

.favorites-badge {
    font-size: 12px;
    position: absolute;
    top: 10.5px;
    left: 12.5px;
}

.profile-avatar {
    font-size: 1.2rem !important;
    font-weight: 500;
    line-height: 2rem;
}

.user-greeting {
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.0892857143em;
}
</style>
