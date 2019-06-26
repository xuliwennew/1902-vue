<template>
    <div>
        <h1>A:{{num}}</h1>
        <button @click="minus">-</button>
    </div>
</template>

<script>
    export default {
        name: "CounterA",
        data(){
            return {
                //localstorage不是响应式 v-model
                num:localStorage.getItem("n")
            }
        },
        methods:{
            minus(){
                let n = parseInt(localStorage.getItem("n")) -1
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
