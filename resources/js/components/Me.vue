<template>
    <button @click="getUser" class="btn btn-success">Me</button>
</template>

<script>
export default {
    name: "Me",

    methods:{
        getUser(){
            this.$store.dispatch('User/getUser')
        }
    }
}
</script>

<style scoped>

</style>
