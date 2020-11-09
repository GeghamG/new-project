import actions from './product/actions';
import mutations from './product/mutations';
import getters from './product/getters';
import state from  './product/state'

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations,
}
