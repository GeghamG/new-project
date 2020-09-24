<template>
    <v-app>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-4 mt-5">
                <h2>Login</h2>
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input v-model="user.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input v-model="user.password" type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div>
                        <router-link to="/register">Go To Register</router-link>
                    </div>
                    <br>
                        <v-btn type="submit" rounded color="deep-purple" class="text-capitalize">
                            <span class="white--text">Login</span>
                        </v-btn>
                </form>
            </div>
        </div>
    </div>
    </v-app>
</template>

<script>
import Logout from "../components/Logout";
export default {
    name: "Login",
    components: {Logout},
    data(){
        return {
            user : {
                email: null,
                password: null,
            },
        }
    },

    methods: {
        login(){
            this.$store.dispatch('User/login', this.user);
        }
    }

}
</script>

<style scoped>

</style>
