<template>
  <div id="app">
    <compHeader />
    <div>
      <comp-featured/>
      <comp-menu />
    </div>
    <compFooter />
  </div>
</template>

<script>
import compHeader from './components/Header-footer/Header.vue'
import compFooter from './components/Header-footer/Footer.vue'
import compFeatured from './components/Featured/index.vue'
import compMenu from './components/Menu/index.vue'

export default {
  components: {
    compHeader,
    compFooter,
    compFeatured,
    compMenu,
  }  
}
</script>

<style lang="scss">
  @import './assets/styles.scss';
</style>
