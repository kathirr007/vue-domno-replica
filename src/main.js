import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueScrollReveal from 'vue-scroll-reveal'

Vue.config.productionTip = false

// import { MdButton, MdDrawer } from 'vue-material/dist/components'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

/* Vue.use(MdButton);
Vue.use(MdDrawer); */
Vue.use(VueMaterial);
Vue.use(VueResource);

Vue.use(VueScrollReveal, {
    delay: 0,
    distance: '50px',
    duration: 800,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: 'bottom',
    rotate: {
        x: 0,
        y: 0,
        z: 0,
    },
    scale: 1,
    cleanup: false,
    container: document.documentElement,
    desktop: true,
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.0,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }
});

Vue.http.options.root = 'https://vue-domno.firebaseio.com/'

new Vue({
  render: h => h(App),
}).$mount('#app')
