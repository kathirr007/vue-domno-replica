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
                ],
                products:[]
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
        },
        created() {
            this.$http.get('products.json')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    let list = []
                    
                    for(let key in data) {
                        list.push({
                            ...data[key],
                            id: key
                        })
                    }
                    console.log(list)
                    this.products = list
                })
        }
    }
</script>

<style scoped>

</style>