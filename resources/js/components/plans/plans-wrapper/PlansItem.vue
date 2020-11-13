<template>
  <div class="plans-item">
    <div class="plans-item-content">
      <v-chip
        v-if="custom"
        class="mt-4"
        color="#efb60f"
        text-color="white"
      >
        Custom
      </v-chip>
      <v-chip
        v-if="updatedPlan && !custom"
        class="mt-4"
        color="#efb60f"
        text-color="white"
      >
        Updated
      </v-chip>
        <div class="plan-benefits-wrapper">
            <img
                :src="img"
                :alt="name"
                class="mb-4 plans-item-content__image"
            />
            <h3 class="plans-item-content__title">
                {{ name }}
            </h3>
            <p class="plans-item-content__description">
                {{ description }}
            </p>
            <p class="font__price">
                <span class="font__price_small">$</span>{{ cost }}
            </p>
            <div>
                <p class="plans-item-content__description">
                    {{ period }}
                </p>


<!--<div  v-if="benefits && benefits.length>0">-->
        <div
            class="benefits-item"
            v-for="item in benefits"
          >
            <p class="plans-item-content__shipping color-yellow">
              {{ item }}
            </p>
          </div>
<!--</div>-->


            </div>
      </div>
      <v-btn
        rounded
        outlined
        color="#1D2025"
        width="212"
        height="65"
        depressed
        class="custom-btn"
        @click="$emit('select-plan', id)"
      >
        Сhoose
        <img
          v-if="current"
          :src="check"
          alt="check"
          class="plans-item-check"
          height="60"
          width="60"
        >
      </v-btn>
    </div>
  </div>
</template>
<script>
import  check  from "../../../assets/plans/plans-item/check.png"
export default {
  name: 'PlansItem',
    props:[ 'img', 'name', 'description', 'custom', 'updatedPlan', 'id' ],
  data: () => ({
    check:check,
    activePlanId:'',
    benefits:{},
    cost:0,
    period:''
  }),
  computed: {
    current() {
      return this.activePlanId === this.id;
    }
  },
    created() {
            axios.post('/api/plansBenefits/'+this.id).then((response)=>{
                console.log(response.data.length)
                this.benefits = response.data.name
                this.cost = response.data.costSum
                this.period = response.data.period
            })
    },
};
</script>
