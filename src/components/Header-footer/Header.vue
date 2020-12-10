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
                class="side-drawer md-right"
                md-right
                :md-active.sync="showSidepanel">
                <md-toolbar class="md-transparent" md-elevation="0">
                    <span class="md-title">Menu</span>
                </md-toolbar>

                <md-list>
                    <md-list-item v-for="(button, i) in buttons"
                    :key="i"
                    class="md-button md-theme-default"
                    @click="changeMenu(button.name)"
                    :class="button.active ? 'md-raised': ''">
                        <span class="md-list-item-text">{{button.name}}</span>
                    </md-list-item>
                </md-list>
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
                buttons: [
                    {name:'pizza', active:true},
                    {name:'burgers', active:false},
                    {name:'salat', active:false},
                    {name:'dessert', active:false}
                ],               
               logoIcon: Logo,
               menuIcon: Menu,
               showSidepanel: false,
               activeProduct:''
           }
       },
       methods: {
            changeMenu(value) {
                this.buttons.forEach(item => {
                    if (item.name === value) {
                        item.active = true;
                        this.activeProduct = item.name
                    } else {
                        item.active = false;
                    }
                })
            }
       },
    }
</script>

<style scoped>
.md-list-item {
    margin: 6px 8px;
}
.md-list-item-text {
    text-transform: uppercase;
}
</style>