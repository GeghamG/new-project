export default {
    register,
    login,
    getUser
}

function register(data){
    return new Promise((resolve, reject) => {
        axios.post('/api/register', data).then(response => {
            if (response.status === 200) {
                resolve(response.data)
            }
        }).catch(err => {
            reject(err);
        });
    })
}

function login (data){
    return new Promise((resolve, reject) => {
        axios.post('/api/login', data).then(response => {
            if (response.status === 200) {
                resolve(response.data)
            }
        }).catch(err => {
            reject(err);
        });
    })
}

function getUser (data){
    return new Promise((resolve, reject) => {
        axios.get('/api/me').then(response => {
            if (response.status === 200) {
                resolve(response.data)
            }
        }).catch(err => {
            reject(err);
        });
    })
}
