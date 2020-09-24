export default {
    createProduct,
    getProducts,
    deleteProduct,
    editProduct,
}

function createProduct(data){
    return new Promise((resolve, reject) => {
        axios.post(`/api/product/create/${data.user_id}`, data).then(response => {
            if (response.status === 201) {
                resolve(response.data)
            }
        }).catch(err => {
            reject(err);
        });
    })
}

function getProducts(data){
    return new Promise((resolve, reject) => {
        axios.get(`/api/product`, data).then(response => {
            if (response.status === 200) {
                resolve(response.data)
            }
        }).catch(err => {
            reject(err);
        });
    })
}

function deleteProduct(id){
    return new Promise((resolve, reject) => {
        axios.delete(`/api/product/${id}`).then(response => {
            if (response.status === 200) {
                resolve(response.data)
            }
        }).catch(err => {
            reject(err);
        });
    })
}

function editProduct(data){
    return new Promise((resolve, reject) => {
        axios.post(`/api/product/update/${data.product_id}`, data).then(response => {
            if (response.status === 200) {
                resolve(response.data)
            }
        }).catch(err => {
            reject(err);
        });
    })
}
