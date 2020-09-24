<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-4 mt-5">
                <h2>Register</h2>
                <form @submit.prevent="register">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input v-model="user.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input v-model="user.password" type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div>
                        <router-link to="/login">Go To Login</router-link>
                    </div>
                    <br>
                    <button type="submit" class="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Register",

    data(){
        return {
            user : {
                email: null,
                password: null,
            },
        }
    },

    methods: {
        register(){
            this.$store.dispatch('User/register', this.user);
        }
    }
}
</script>

<style scoped>

</style>
