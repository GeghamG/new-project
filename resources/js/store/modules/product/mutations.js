export default {

        productCount(state, obj) {
            state.obj = obj
        },
        CartAdd(state, obj){
            Vue.set(state, 'obj', obj)
        }

}
