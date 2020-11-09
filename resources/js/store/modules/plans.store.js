
import mutations from './plans/mutations';
import getters from './plans/getters';
import state from  './plans/state';

export default {
    namespaced: true,
    state,
    getters,
    mutations,
}
