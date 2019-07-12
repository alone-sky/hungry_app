<template>
  <div>
    <p>{{msg}}</p>
<!--    <router-link :to="{path:'detail',query:{id:item.procInsId,type:item.procDefKey,taskId:item.taskId}}">-->
    <router-link :to="{path:'/routerIndex'}">
      <x-button type="primary" >开启你的路由之梦</x-button>
    </router-link>
  </div>
</template>

<script>
  import { XButton } from 'vux'
  export default {
    name:'routerPage',
    data(){
      return{
        msg:'开启路由学习之旅'
      }
    },
    components:{
      XButton
    },
    mounted() {

    },
    methods:{

    }
  }
</script>

<style lang="less" scoped>

</style>
