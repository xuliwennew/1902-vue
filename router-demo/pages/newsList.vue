<template>
   <div>
       <h1>新闻信息</h1>
       <ul>
           <li v-for="(n,index) in lists">
               <router-link :to="`/detail/${index}`">{{n.title}}</router-link>
           </li>
       </ul>
   </div>
</template>

<script>
    export default {
        name: "newsList",
        data(){
            return {
                lists:[
                    {title:"革命公墓建成烈士纪念园 680份烈士骨灰月底前全部."},
                    {title:" 福建及台湾海峡地壳深部构造陆海联测：激发水下气枪震.."},
                    {title:"普陀：刷卡投放赚积分 垃圾袋使用可追溯"}
                ]
            }
        }
    }
</script>

<style scoped>

</style>
