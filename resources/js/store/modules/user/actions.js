import AuthService from '../../../services/auth';
import router from "../../../router/router";

export default {
    register(ctx, data) {
        AuthService.register(data).then(response => {
            localStorage.setItem('token', response.access_token);
            router.push('/youtube');
        });
    },

    login(ctx, data) {
        AuthService.login(data).then(response => {
            localStorage.setItem('token', response.access_token);
            router.push('/youtube');
        });
    },

    getUser(ctx){
        AuthService.getUser().then(response => {
            ctx.commit('getUser', response);
        });
    },

    logout(ctx){
        ctx.commit('logout')
    }
}
