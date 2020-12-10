<template>
  <div id="app">
    <compHeader />
    <div>
      <comp-featured/>
      <comp-menu />
      <comp-call-us />
      <comp-newsletter />
    </div>
    <compFooter />
  </div>
</template>

<script>
import compHeader from './components/Header-footer/Header.vue'
import compFooter from './components/Header-footer/Footer.vue'
import compFeatured from './components/Featured/index.vue'
import compMenu from './components/Menu/index.vue'
import compCallUs from './components/CallUs/index.vue'
import compNewsletter from './components/Newsletter/index.vue'

export default {
  components: {
    compHeader,
    compFooter,
    compFeatured,
    compMenu,
    compCallUs,
    compNewsletter,
  }  
}
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Material+Icons");
  @import './assets/styles.scss';
</style>
