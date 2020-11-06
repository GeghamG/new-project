import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {}

// export default new Vuetify(opts)
export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#0E1932",
                secondary: "#1b243c"
            }
        }
    }
});
