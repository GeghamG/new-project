<template>
    <v-card
        color="grey lighten-4"
        flat
        tile
        dark
    >
        <v-app-bar
            dense
            dark
        >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <Logout class="float-right m-4"></Logout>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            height="100vh"
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            <router-link to="/home" class="text-h6 text-white">Home</router-link>
                        </v-list-item-title>
                    </v-list-item>

                    <router-link to="/home" class="text-decoration-none">
                        <v-list-item class="text-h6 text-white">
                            <v-list-item-icon>
                                <v-icon color="red">mdi-youtube</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>
                                Home
                            </v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <router-link to="/shop" class="text-decoration-none">
                        <v-list-item class="text-h6 text-white">
                            <v-list-item-icon>
                                <v-icon color="red">mdi-youtube</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>
                                shop
                            </v-list-item-title>
                        </v-list-item>
                    </router-link>







                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script>

import Logout from "./Logout";

export default {
    name: "Navbar",
    components: {Logout},
    data() {
        return {
            drawer: false,
        }
    },
}
</script>

<style scoped>

</style>
