import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// import { MdButton, MdDrawer } from 'vue-material/dist/components'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

/* Vue.use(MdButton);
Vue.use(MdDrawer); */
Vue.use(VueMaterial);

new Vue({
  render: h => h(App),
}).$mount('#app')
