<template>
    <div>
        <v-row>
            <PlansHeader
                :title="'Your box cart'"
                :step="step"
                @back="$emit('back')"
            />
            <p class="font__description">
                Your plan:
            </p>
        </v-row>
            <PlanCartDescription
              :name="tmpCurrentPlan.name"
              :cost="cost"
              @customize="$emit('customize')"/>
        <PlanCartSummary
            :selected-plan-free-shipping-from="tmpCurrentPlan.freeShippingFrom"
        />
        <div
            class="plan-cart-products py-8"
            v-if="product"
        >
            <div
                v-for="(item, index) in product"
                :key="item.id"
                class="plan-cart-product"
            >
                <v-row class="align-center">
                    <v-col
                        xs="12"
                        sm="6"
                        md="6"
                        lg="2"
                    >
                        <div class="plan-cart-product__image-container">
                            <img
                                :src="item.image"
                                alt="product"
                                class="plan-cart-product__image"
                            >
                        </div>
                    </v-col>
                    <v-col
                        sm="6"
                        md="6"
                        lg="6"
                        class="plan-cart-product-description-product"
                    >
                        <p class="plan-cart-product-description-product__title font__title mb-3">
                            {{ item.title }}
                        </p>
                        <p class="plan-cart-product-description-product__description mb-0">

                        </p>
                    </v-col>
                    <v-col
                        sm="6"
                        md="6"
                        lg="2"
                    >
                        <p class="plan-cart-product__price mb-0">
              <span
                  class="plan-cart-product__price_small mr-1"
              >$</span>{{ item.price}}
                        </p>
                    </v-col>
                    <v-col
                        sm="6"
                        md="6"
                        lg="2"
                        class="counter-products d-flex align-center"
                    >
                        <v-btn
                            outlined
                            height="49"
                            min-width="49"
                            width="49"
                            color="#D9D9D9"
                            class="counter-btn pa-0"
                            depressed
                            @click="decrement(item)"
                        >
                            -
                        </v-btn>
                        <input
                            v-model="item.count"
                            class="plan-cart-product__amount-number mb-0"
                            type="number"
                        >
                        <v-btn
                            outlined
                            height="49"
                            min-width="49"
                            width="49"
                            color="#D9D9D9"
                            class="counter-btn pa-0"
                            depressed
                            @click="increment(item)"
                        >
                            +
                        </v-btn>
                        <v-btn
                            icon
                            class="ml-8"
                            height="49"
                            width="49"
                        >
                            <img
                                src="../../../assets/plans/benefits/close.png"
                                alt="close"
                                @click="deleteProduct(item.id)"
                            >
                        </v-btn>
                    </v-col>
                </v-row>
            </div>
        </div>
        <div v-else>
            <h2 class="font__title mt-4 mb-16">
                No Products
            </h2>
        </div>
        <div class="text-right my-10">
            <span class="overall-price__text mb-1 mr-4">Overal:</span>
            <span class="overall-price__price mb-0">
        <span class="overall-price__price_small mr-1">$</span>
        {{ overalPrice }}
      </span>
        </div>
        <div class="overall-price d-flex align-center justify-end">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur cumque dolore earum
                error harum laborum perspiciatis quasi
            </p>
            <v-btn
                v-if="step !== 1"
                rounded
                outlined
                color="#efb60f"
                width="170"
                height="52"
                depressed
                class="custom-btn custom-btn--checkout ml-auto mr-12"
                @click="onCheckout(selectedPlanId)"
            >
                Checkout
            </v-btn>
            <v-btn
                rounded
                outlined
                color="#efb60f"
                width="170"
                height="52"
                depressed
                class="custom-btn custom-btn--checkout ml-auto mr-12"
                @click="update(selectedPlanId)"
            >
                Update Plan
            </v-btn>
        </div>
    </div>
</template>
<script>
import PlansHeader from "../PlansHeader";
import PlanCartDescription from "./PlanCartDescription";
import PlanCartSummary from "./PlanCartSummary";
import Buttons from "../../buttons/buttons";

export default {
    name: 'PlanCartProduct',
    components: {
        Buttons,
        PlansHeader,
        PlanCartDescription,
        PlanCartSummary
    },

     props: {
         selectedPlanId: {
             type: Number,
             default: ''
         },
        step: {
            type: Number,
            default: null
        }
     },
    computed: {
        overalPrice() {
            return this.product.reduce((sum, item) => sum + (item.count * item.price), 0)
        }
    },
    data: () => ({
        choose: false,
        tmpCurrentPlan: {},
        product:[],
        cost:0,
        total:0
    }),
    mounted() {
           this.plansProduct()
        axios.post('/api/ChoosePlansItem/'+this.selectedPlanId ).then((response)=>{
                        this.tmpCurrentPlan = response.data.plansItem
              }),
            axios.post('/api/plansBenefits/'+this.selectedPlanId).then((response)=>{
                this.cost = response.data.costSum
            })
    },
    methods: {
        increment(item) {
            if (this.product.find(p => p.id === item.id)) {
                this.total = item.count++
            }
        },

        decrement(item) {
            if (this.product.find(p => p.id === item.id)) {
                this.total = item.count > 1 ? item.count-- : '';
            }
        },

        async deleteProduct(id) {
          await axios.delete('/api/deleteCartProduct/'+id).then((response)=>{
              let i = this.product.map(item => item.id).indexOf(id);
              this.product.splice(i, 1)
            })
        },
     onCheckout(id) {
              axios.post('/api/onCheckout/'+id).then((response)=>{
                  this.$emit('back',response.data.plansItem);
                     })
        },
        plansProduct(){
            axios.post('/api/plansProduct').then((response)=>{
                this.product = response.data.array
            })
        },
        update(id){
            axios.post('/api/updatePlan/'+id).then((response)=>{
                // this.product = response.data.array
                this.$emit('back');
            })
        }
    }
};
</script>
