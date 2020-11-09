export default {

        currentPlan(state) {
            console.log(state.plansData)
            return state.plansData.find(item => state.activePlanId === item.id)
        }

}
