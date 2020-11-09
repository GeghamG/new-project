<template>
  <section>
    <v-container>
      <PlansHeader
        :title="'Choose box type'"
        :description="'We noticed which products you viewed and based on this we suggest choosing a box'"
        :step="step"
        @back="$emit('back')"
      />
      <v-row
        class="plan-items"
        justify="space-around"
      >
        <v-col
          v-for="(item, index) in plansItemArray"
          :key="item.id"
          xs="12"
          sm="12"
          md="12"
          lg="4"
          class="my-5"
        >
            <!--            :benefits="item.benefits" :index="index"  :custom="item.custom" :updated-plan="item.updated"-->
          <PlansItem
            :id="item.id"
            :img="item.img"
            :name="item.name"
            :description="item.description"
            :cost="item.cost"
            :index="index"
            :updated-plan="item.updated"
            :custom="item.custom"
            @select-plan="selectPlan"
          />
        </v-col>
      </v-row>

      <p class="font__small-description">
        * Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the
      </p>
    </v-container>
  </section>
</template>

<script>

import PlansHeader  from "../PlansHeader"
import PlansItem from './PlansItem';
export default {
  name: 'PlansWrapper',
    data: () => ({
        plansItemArray:[]
    }),
  components: {
    PlansHeader,
    PlansItem
  },
  props: {
    step: {
      type: Number,
      default: null
    }
  },
    created() {
        this.plansItem()
    },
  methods: {
    selectPlan(id) {
      this.$emit('select-plan', id);
    },
      plansItem(){
        axios.post('/api/plansItem').then((response)=>{
            this.plansItemArray = response.data.plansItem
        })
    }
  }

};
</script>
