export default {

        checkout(state, plan) {
            let index = state.plansData.findIndex(item => item.id === plan.id);
            state.activePlanId = plan.id;
            state.plansData[index] = plan;
        },
        updateCard(state, payload) {
            let index = state.plansData.findIndex(item => item.id === payload.id)
            state.plansData[index] = {
                updated: true,
                ...payload
            }
        },
        saveCustomPlan(state, plan) {
            let customItemIndex = state.plansData.findIndex(item => item.custom)
            if (customItemIndex !== -1) {
                state.plansData.splice(customItemIndex, 1, {
                    custom: true,
                    ...plan
                })
            } else {
                state.plansData.push({
                    custom: true,
                    ...plan
                })
            }
        }

}
