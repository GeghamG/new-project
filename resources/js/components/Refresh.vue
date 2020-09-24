<template>
    <button @click="refresh" class="btn btn-success">Refresh</button>
</template>

<script>
import router from "../router/router";

export default {
    name: "Refresh",

    methods:{
        refresh(){
            axios.post('/api/refresh').then(response => {
                console.log(response);
                if(response.status === 200){
                    localStorage.setItem('token', response.data.access_token);
                    axios.interceptors.request.use(function(config) {
                        const token = localStorage.getItem('token');
                        if ( token != null ) {
                            config.headers.Authorization = `Bearer ${token}`;
                        }

                        return config;
                    });
                }
            })
        }
    }
}
</script>

<style scoped>

</style>
