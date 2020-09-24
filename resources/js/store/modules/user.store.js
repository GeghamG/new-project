import actions from './user/actions';
import mutations from './user/mutations';
import getters from './user/getters';

const state = {
    user:{}
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
