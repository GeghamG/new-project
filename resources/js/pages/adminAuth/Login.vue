<template>
    <v-app>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-4 mt-5">
                <h2>Login Admin</h2>
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input v-model="admin.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input v-model="admin.password" type="password" class="form-control" id="exampleInputPassword1">
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
import router from "../../router/router";
export default {
    name: "Login",
    data(){
        return {
            admin : {
                email: null,
                password: null,
            },
        }
    },

    methods: {
        login(){
           axios.post('/api/admin/login', this.admin).then((response)=>{
               localStorage.setItem('tokenAdmin',response.data.access_token);
               router.push('/admin');
             //  console.log()
           })
        }
    }

}
</script>

<style scoped>

</style>
