<template>
    <div class="container menu_container">
        <div class="top">
            <h2>Menu</h2>
        </div>
        <div class="buttons">
            <md-button
                v-for="(button, i) in buttons" 
                :key="i"
                @click="changeMenu(button.name)"
                :class="button.active ? 'md-raised': ''"
            >
                {{ button.name }}
            </md-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                buttons: [
                    {name:'pizza', active:true},
                    {name:'burgers', active:false},
                    {name:'salat', active:false},
                    {name:'dessert', active:false}
                ]
            }
        },
        methods: {
            changeMenu(value) {
                this.buttons.forEach(item => {
                    if(item.name === value) {
                        item.active = true;
                    } else {
                        item.active = false;
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>