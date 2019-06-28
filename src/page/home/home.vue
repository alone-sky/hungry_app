<template>
    <div>
      <Header :title="msg"></Header>
      <div style="display: flex">
        <div style="flex: 1"><component :is="who"></component></div>
        <div style="flex: 1"><personCenter></personCenter></div>
      </div>
      <div ref="fiters">{{fiter | capitalize}}</div>
      <Bottom @getDwg="selectTab" :tabList="tabList"></Bottom>
    </div>
</template>

<script>
  import Api from '@/server/home/homeServer'
  import Header from '@/components/header'
  import personCenter from '@/page/personCenter/personCenter'
  import todo from '@/page/todo/todo'
  import Bottom from '@/components/Bottom'
  export default {
    data(){
        return{
          msg:'welecome my HomePage',
          boolean:true,
          fiter:'aaaaaa',
          who:'todo',
          tabList:['待办','个人中心','订单','登录']
      }
    },
    components:{
      Header,
      personCenter,
      todo,
      Bottom
    },
    mounted() {
      console.log(this.$refs.fiters,'打印节点')
      this.initData();
      this.initData();
    },
    beforeCreate:function(){
      console.log(this.fiter,'beforecreated')
    },
    created:function(){
      console.log(this.$refs.fiters,'打印节点')
      console.log(this.fiter,'created')
    },
    methods:{
      initData() {
        Api.getCities('guess').then(res => {
          //请求成功
          console.log(res,'城市信息')
        }).catch(err => {
          //请求失败
        });
      },
      selectTab(index){
        index===0 ? this.who='todo' : this.who='personCenter'
      }
    }
  }
</script>
<style>

</style>
