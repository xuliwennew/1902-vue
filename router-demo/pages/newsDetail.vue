<template>
    <div>
        <h1>{{detail.title}}</h1>
        <p>{{detail.content}}</p>
        <button @click="goUrl">go list</button>
    </div>
</template>

<script>
    //?id = 1
    export default {
        //
        name: "newsDetail",
        data(){
            return {
                lists:[
                    {title:"革命公墓建成烈士纪念园 680份烈士骨灰月底前全部.",content:"革命公墓建成烈士纪念园"},
                    {title:" 福建及台湾海峡地壳深部构造陆海联测：激发水下气枪震..",content:"福建及台湾海峡地壳深部构造陆海联测"},
                    {title:"普陀：刷卡投放赚积分 垃圾袋使用可追溯",content:"垃圾袋使用可追溯"}
                ],
                detail:{

                }
            }
        },
        created(){
           //?id =  $route是一个路由对象，用来保存当前的路由的信息
           console.log(this.$route.query )
            //:id
            let {id} = this.$route.params;
           this.detail = this.lists[id]
        },
        beforeMount(){
            console.log(this.$route.query )
        },
        methods:{
            goUrl(){
                //router 对象是用来进行编程 locaition
                  //this.$router.push("/list")
                this.$router.replace("/list")
            }
        }
    }
</script>

<style scoped>

</style>
