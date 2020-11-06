<template>
<div>
    <Navbar></Navbar>
</div>
</template>

<script>
import Navbar from "../components/Navbar";
import {mapGetters} from "vuex";
import VueRecaptcha from 'vue-recaptcha';
export default {
name: "Home.vue",
    components: {Navbar, VueRecaptcha},
}
</script>

