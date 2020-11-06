<template>

  <section>
    <v-container>
      <component
        :is="selectedComponent"
        :step="step"
        :selected-plan-id="selectedPlanId"
        @select-plan="selectPlan"
        @back="back"
        @customize="customize"
        @checkout="checkout"
        @save-changes="saveChanges"
        @go-to-plans="goToPlans"
      />
    </v-container>
  </section>

</template>
<!--//  esi   eti,,, chjogi axper    ira  meji  tvyalnern   vuex-ica  stanum-->
<script>
import PlansWrapper from "./plans-wrapper/PlansWrapper";
import EditPlan from "../editPlan/EditPlan";
import Checkout from "./Checkout";
import PlanCartProduct from "./plan-cart/PlanCartProduct";

export default {
  name: 'Plans',
  components: {
    PlansWrapper,
    PlanCartProduct,
    EditPlan,
    Checkout
  },
  data: () => ({
    selectedComponent: 'PlansWrapper',
    selectedPlanId: null,
    planChecked: false,
    timer: ''
  }),
  computed: {
    step() {
      return this.selectedComponent === 'PlansWrapper' ? 1 : 2;
    }
  },
  methods: {
    selectPlan(id) {
      this.selectedPlanId = id;
      this.selectedComponent = 'PlanCartProduct';
    },
    back() {
      this.selectedComponent = 'PlansWrapper';
    },
    customize() {
      this.selectedComponent = 'EditPlan';
    },
    checkout() {
      this.selectedComponent = 'Checkout';
    },
    saveChanges() {
      this.selectedComponent = 'PlansWrapper';
    },
    goToPlans() {
      this.selectedComponent = 'PlansWrapper';
    }
  }
};
</script>
