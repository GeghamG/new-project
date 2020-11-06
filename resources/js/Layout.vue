<template>
   <v-app>
       <router-view name="header"></router-view>
        <v-main>
            <router-view></router-view>
        </v-main>
       <router-view name="footer"></router-view>
    </v-app>
</template>

<script>

export default {
    name: "Layout"
}

</script>
<style lang="scss">
@import "assets/scss/index.scss";

.bb {
    border: 1px solid black;
}
.bw {
    border: 1px solid white;
}

.b-tile {
    border-radius: 0 !important;
}

.pointer {
    cursor: pointer;
}
</style>

