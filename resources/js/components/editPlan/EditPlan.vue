<template>
  <section class="edit-plan">
    <PlansHeader
      :title="'Customise your plan'"
      :step="step"
      @back="$emit('back')"
    />
    <v-row>
      <v-col sm="3">
        <img
          :src="tmpCurrentPlan.img"
          alt="edit plan image"
        />
      </v-col>
      <v-col sm="9">
        <v-row>
          <v-col
            sm="6"
            class="info-text"
          >
            Your plan:
          </v-col>
          <v-col sm="6"></v-col>
        </v-row>
        <v-row>
          <v-col
            xs="12"
            sm="5"
          >
            <span class="plan-title">{{ tmpCurrentPlan.name }}</span><span
              class="font__price"
            ><sub>$</sub>{{ cost }}</span>
          </v-col>
          <v-col
            xs="12"
            sm="6"
          >
            <v-row>
              <v-col
                sm="5"
              >
                <a
                  href="#"
                  class="yellow-link"
                  @click="$emit('back')"
                >Change plan</a>
              </v-col>
            </v-row>
          </v-col>
          <v-col sm="1"></v-col>
        </v-row>
        <v-row>
          <v-col
            sm="6"
            class="info-text"
          >
            Benefits:
          </v-col>
          <v-col sm="6"></v-col>
        </v-row>

        <v-row>
          <v-col
            sm="10"
            class="benefits-container"
          >
            <v-row
              v-for="item in benefits"
              :key="item.id"
              class="benefits-item"
            >
              <v-col sm="2">
                <img
                  :src="item.image"
                  :alt="item.name"
                />
              </v-col>
              <v-col sm="7">
                {{ item.name }}
              </v-col>
              <v-col
                sm="1"
              >
                <v-checkbox
                  v-model="selected"
                  color="#EFB60F"
                  :value="item.id"

                  @change="onCheckBoxChange(tmpCurrentPlan.id)"
                ></v-checkbox>
              </v-col>
              <v-col sm="2">
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col sm="12">
            <v-row class="benefits-item">
              <v-col sm="1">
                <img
                  :src="
                    require(`../../assets/plans/benefits/${resubscribePeriod.img}`)
                  "
                  alt="resubscribePeriod.name"
                />
              </v-col>
              <v-col
                sm="4"
                class="edit-plan__bottom-text"
              >
                {{
                  resubscribePeriod.name
                }}
              </v-col>
              <v-col sm="3">
                <v-select
                  v-model="handler.resubscribePeriodValue"
                  outlined
                  width="162"
                  height="40"
                  :items="resubscribePeriod.periods"
                ></v-select>
              </v-col>

              <v-col sm="4"></v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <div class="d-flex justify-end align-center my-7">
      <span class="mr-2">Updated price:</span>
      <span class="font__price"><sub>$</sub>{{ handler.tmpCost }}</span>
    </div>
    <v-row>
      <v-btn
        v-if="step !== 1"
        rounded
        outlined
        color="#efb60f"
        width="170"
        height="52"
        depressed
        class="custom-btn custom-btn--checkout ml-auto"
        @click="updateCardHandler(tmpCurrentPlan.id)"
      >
        Save Changes
      </v-btn>
      <v-btn
        v-if="step !== 1"
        rounded
        outlined
        color="#1D2025"
        width="170"
        height="52"
        depressed
        class="custom-btn custom-btn--back ml-4"
        @click="$emit('back')"
      >
        Cancel and Back
      </v-btn>
    </v-row>
  </section>
</template>

<script>
import PlansHeader from "../plans/PlansHeader";;
export default {
  name: 'EditPlan',
  components: {
    PlansHeader
  },
  props: {
    step: {
      type: Number,
      default: null
    },
    selectedPlanId: {
      type: Number,
      default: ''
    }
  },
  data: () => ({
      handler: {
          tmpCost: '',
          resubscribePeriodValue: '',
      },
    cost:0,
    tmpCurrentPlan: {},
    selected:[],
    benefits:[],
    resubscribePeriod: {
      img: 'clock_icon.svg',
      name: 'want to receive a given box with',
      periods: ['every 1 months', 'every 2 months', 'every 3 months']
    }
  }),
  created() {
      axios.post('/api/ChoosePlansItem/'+this.selectedPlanId ).then((response)=>{
          this.tmpCurrentPlan = response.data.plansItem
      }),
      axios.post('/api/bensfits').then((response)=>{
        this.benefits = response.data
      })
      axios.post('/api/plansBenefits/'+this.selectedPlanId).then((response)=>{
          this.cost = response.data.costSum
      })
  },
  methods: {
    onCheckBoxChange(id) {
        axios.post('/api/onCheckBoxChange/'+id, this.selected).then((response)=>{
          this.handler.tmpCost = response.data.costSum
        })
    },
    updateCardHandler(id) {
        axios.post('/api/updateCardHandler/'+id, this.handler).then((response)=>{
            this.$emit('back');
        })
     },
  }
};
</script>

