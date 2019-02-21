<template>
    <header>
        <div class="container clear">
            <div class="logo">
                <img :src="logoIcon" alt="">
            </div>
            <div class="nav">
                <img :src="menuIcon" alt="" @click="showSidepanel = !showSidepanel">
            </div>
            <md-drawer 
                class="side-drawer"
                md-right
                :md-active.sync="showSidepanel">

            </md-drawer>
        </div>
    </header>
</template>

<script>
    import Logo from '../../assets/images/logo.png'
    import Menu from '../../assets/images/menu.png'
    export default {
       data() {
           return {
               logoIcon: Logo,
               menuIcon: Menu,
               showSidepanel: false
           }
       }
    }
</script>

<style scoped>

</style>