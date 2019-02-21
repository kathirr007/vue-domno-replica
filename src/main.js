import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

// import { MdButton, MdDrawer } from 'vue-material/dist/components'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

/* Vue.use(MdButton);
Vue.use(MdDrawer); */
Vue.use(VueMaterial);
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-domno.firebaseio.com/'

new Vue({
  render: h => h(App),
}).$mount('#app')
