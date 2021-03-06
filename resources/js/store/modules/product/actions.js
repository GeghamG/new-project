export default {

        async countCart({commit, state}) {
            const  countCart = await axios.post('/api/countCart')
            const data = await countCart.data
            commit('productCount',data)
        },

        async addCart({commit, state},id) {
            const addCart = await axios.post('/api/addCart/'+id)
            const data = await addCart.data
            commit('CartAdd',data)
        },

}
