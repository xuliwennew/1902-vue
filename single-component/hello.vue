<template>
   <div>
      <h1 class="title">single page component</h1>
      <counter-a></counter-a>
      <hr>
      <counter-b></counter-b>
   </div>
</template>


<script>
   import CounterA from "./components/CounterA"
   import CounterB from "./components/CounterB"
   export default  {
      components:{
          CounterA,
          CounterB
      }
   }
</script>


<style lang="scss">
   .title {
       color: red;
   }
</style>
