<template>
  <div>
    <Header :title="title"></Header>
    <p>{{msg}}</p>
    <x-button mini  type="primary"  @click.native="tips()">点击查看小技巧</x-button>
    <p v-show="tipsFlag" class="tips">其实真的很简单，信我的没错</p>
    <router-link :to="{path:'/routerIndex/child'}">
      <x-button mini  type="primary" >一睹子路由界面</x-button>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '@/components/header'
  import { XButton } from 'vux'
  export default {
    name:'routerIndex',
    data(){
      return {
        title:'vue-router 欢迎您',
        msg:'听别人说你想学vue-router',
        tipsFlag:false
      }
    },
    components:{
      Header,
      XButton
    },
    mounted() {

    },
    methods:{
      tips(){
        this.tipsFlag=true;
      }
    }
  }
</script>

<style lang="less" scoped>
  .tips{
    color: #67c23a;
  }
</style>
