<template>
    <div class="container newsl_container">
        <h2>Join to our Newsletter</h2>
        <div class="form">
            <input type="text" v-model="email"/>
            <button @click="submitHandler">Subscribe</button>
        </div>
        <transition name="slide-fade">
            <div class="error_label">
                <div>{{ error }}</div>
            </div>
        </transition>
        <transition name="slide-fade">
            <div class="success_label">
                <div>{{ success }}</div>
            </div>
        </transition>
        <div class="small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, incidunt reprehenderit? Ex beatae tempora cupiditate modi minus! Quas expedita hic dolorum accusantium necessitatibus voluptatibus fuga, molestias aliquid, quibusdam, ipsam magni.
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                error: '',
                success: ''
            }
        },
        methods: {
            validate(email) {
                let valid = [true, '']
                if(!/[\w-]+@([\w-]+\.)+[\w-]+/.test(email)) {
                    valid = [false, `Enter a valid email`]
                }
                if(email === '' ) {
                    valid = [false, `It's empty`]
                }
                return valid
            },
            submitHandler() {
                let valid = this.validate(this.email)
                if(valid[0]) {
                    this.error = ''
                    this.addEmail(this.email)
                } else {
                    this.error = valid[1]
                }
            },
            addEmail(email) {
                this.$http.get(`users.json?orderBy="email"&&equalTo="${email}"`)
                .then(res => {
                    // console.log(res)
                    if(Object.getOwnPropertyNames(res.data).length === 0) {
                        this.$http.post(`users.json`, {email: this.email})
                        .then(this.success = 'Thank you.. :)')
                    } else {
                        this.success = 'User is Already on the list'
                    }
                });
                this.clearSuccess()
            },
            clearSuccess() {
                setTimeout(() => {
                    this.email = ''
                    this.success = ''
                }, 3000);
            }
        }
    }
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>