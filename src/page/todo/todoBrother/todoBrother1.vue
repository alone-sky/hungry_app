<template>
  <div>
    <div>{{msg}}</div>
    <el-button type="primary" size="small" @click="addCount">vuex 通信</el-button>
    <div>{{count}}</div>
  </div>
</template>

<script>
  import vm from '@/plugins/vm'
  export default {
    name:'todoBrother1',
    data(){
      return  {
        msg:'兄弟组件-左',
        count:0
      }
    },
    methods:{
      addCount:function(){
        this.$store.commit('increment',1)
      },
    },
    mounted() {
      vm.$on('todo-cen',(arg)=>{
        this.count=arg;
      })
    }
  }
</script>

<style scoped lang="less">

</style>
