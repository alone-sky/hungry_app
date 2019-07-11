<template>
    <div>
      <Header :title="msg"></Header>
      <component :is="who"></component>
      <Bottom @getDwg="selectTab"></Bottom>
    </div>
</template>

<script>
  import Api from '@/server/home/homeServer'
  import Header from '@/components/header'
  import personCenter from '@/page/personCenter/personCenter'
  import todo from '@/page/todo/todo'
  import Bottom from '@/components/Bottom'
  import routerPage from '@/page/routerVue/routerPage'
  import login from '@/page/login/login'
  export default {
    data(){
        return{
          msg:'组件通信',
          boolean:true,
          who:'todo',
      }
    },
    components:{
      Header,
      personCenter,
      todo,
      Bottom,
      routerPage,
      login
    },
    mounted() {
      console.log(this.$refs.fiters,'打印节点')
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
        switch (index) {
          case 0:
            this.who = 'todo'
            break;
          case 1:
            this.who = 'personCenter'
            break;
          case 2:
            this.who = 'routerPage'
            break;
          case 3:
            this.who = 'login'
            break;
        }
      }
    }
  }
</script>
<style>

</style>
