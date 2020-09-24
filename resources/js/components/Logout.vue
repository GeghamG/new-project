<template>
    <v-btn @click="logout" v-show="access_token" type="submit" class="text-capitalize">
        <span>Logout</span>
    </v-btn>
</template>

<script>
import router from "../router/router";

export default {
    name: "Logout",
    data(){
        return {
            access_token: localStorage.getItem('token') != null
        }
    },

    methods:{
        logout(){
            axios.post('/api/logout').then(response => {
                if(response.status === 200){
                    localStorage.removeItem('token');
                    router.push('/login');
                }
            })
        }
    }
}
</script>

<style scoped>

</style>
