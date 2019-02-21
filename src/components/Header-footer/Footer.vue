<template>
    <footer>
        <div class="container clear">
            <div>
                <img :src="logoIcon" alt="">
                <div class="contact">
                    <div>Call Us</div>
                    <div>+918553340791</div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import Logo from '../../assets/images/logo.png'
    export default {
        data() {
            return {
                logoIcon: Logo
            }
        }
    }
</script>

<style scoped>

</style>