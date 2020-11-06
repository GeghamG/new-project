<template>
    <section>
        <v-container>
            <v-row justify="center">
                <v-col cols="9">
                    <v-card-title class="display-3 primary--text main-title">
                        <v-col class="text-center pa-0">
                            Our Products
                        </v-col>
                    </v-card-title>
                    <v-card-text class="text-center my-5">
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
                        Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore
                        Magna Aliqua. Ut Enim Ad Minim Veniam
                    </v-card-text>
                </v-col>
            </v-row>

            <v-row>
                <v-col
                    v-for="product in products"
                    :key="product.id"
                    cols="3"
                    style="position: relative"
                >
                    <v-card tile flat >
<!--                        @click="myFunc(product.id)"-->
                        <div class="icon-holder">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn dark color="primary" icon v-on="on">
                                        <v-icon class="pointer"
                                            >mdi-eye-outline</v-icon
                                        >
                                    </v-btn>
                                </template>

                                <span>quick view</span>
                            </v-tooltip>

                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn dark color="primary" icon v-on="on">
                                        <v-icon class="pointer"
                                            >mdi-heart-outline</v-icon
                                        >
                                    </v-btn>
                                </template>

                                <span>make favorite</span>
                            </v-tooltip>

                            <v-tooltip bottom >
                                <template v-slot:activator="{ on }"  >
                                    <v-btn dark color="primary" icon v-on="on" @click="addCart(product.id)" >
                                        <v-icon class="pointer"
                                            >mdi-cart-outline</v-icon
                                        >
                                    </v-btn>
                                </template>

                                <span>add to cart</span>
                            </v-tooltip>
                        </div>
                        <v-img
                            :src="product.image"
                            height="400"
                            class="pointer"
                        ></v-img>
                    </v-card>
                    <v-rating
                        v-model="product.rating"
                        color="orange"
                        class="my-2"
                        half-increments
                        readonly
                    ></v-rating>
                    <div class="pl-2" v-text="product.title"></div>
                    <div class="price">£{{ product.price.toFixed(2) }}</div>
                </v-col>
            </v-row>
                            <v-row justify="center">
                                <v-btn color="primary" large class="mt-5" tile
                                    >load more products</v-btn
                                >
                            </v-row>
                        </v-container>
                    </section>
</template>
                <script>
                import {mapActions} from 'vuex'
                export default {
                    name: "OurProducts",

                    data: () => ({
                        products: []
                    }),
                    created() {
                        this.getProducts()
                    },
                    methods: {
                        // myFunc(id) {
                        //     this.$router.push(`/products/${id}`);
                        // },
                        getProducts(){
                           axios.post('/api/getProduct').then((response)=>{
                                  this.products = response.data.product
                           })
                        },
                        ...mapActions(['addCart']),
                        addCart(id){

                            this.$store.dispatch('addCart',id)
                        }
                    }
                };
                </script>


                <style scoped>
                .main-title {
                    font-weight: 900;
                    word-break: normal;
                }

                .price {
                    padding-left: 8px;
                    color: #0e1932;
                    font-size: 22px;
                    font-weight: bold;
                }

                .pointer {
                    cursor: pointer;
                }

                .icon-holder {
                    position: absolute;
                    top: 4px;
                    right: 4px;
                    z-index: 5;
                }
                </style>
