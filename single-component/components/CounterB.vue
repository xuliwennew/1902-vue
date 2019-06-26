<template>
    <div>
        <h1>B:{{num}}</h1>
        <button @click="update">+</button>
    </div>
</template>

<script>
    export default {
        name: "CounterB",
        data(){
            return {
                //localstorage不是响应式 v-model
                num:localStorage.getItem("n")
            }
        },
        methods:{
            update(){
                let n = parseInt(localStorage.getItem("n")) + 1
                localStorage.setItem("n",n)
            }
        },
        mounted(){
            setInterval(()=>{
                //num
               this.num = parseInt(localStorage.getItem("n"))
            },100)
        }
    }
</script>

<style scoped>

</style>
