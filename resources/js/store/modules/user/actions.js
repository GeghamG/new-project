import AuthService from '../../../services/auth';
import router from "../../../router/router";

export default {
    register(ctx, data) {
        AuthService.register(data).then(response => {
            localStorage.setItem('token', response.access_token);
            router.push('/home');
        });
    },

    login(ctx, data) {
        AuthService.login(data).then(response => {
            localStorage.setItem('token', response.access_token);
            router.push('/home');
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
