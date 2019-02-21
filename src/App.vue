<template>
  <div id="app">
    <compHeader />
    <div>
      <comp-featured />
    </div>
    <compFooter />
  </div>
</template>

<script>
import compHeader from './components/Header-footer/Header.vue'
import compFooter from './components/Header-footer/Footer.vue'
import compFeatured from './components/Featured/index.vue'

export default {
  components: {
    compHeader,
    compFooter,
    compFeatured,
  }  
}
</script>

<style lang="scss">
  @import './assets/styles.scss';
</style>
