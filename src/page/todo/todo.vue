<template>
  <div>
    <div>{{msg}}</div>
    <el-button type="primary" size="small" @click="addCount">父到子通信</el-button>
    <div style="height:1px; background:#E0E0E0;margin: 20px 0px"></div>

    <todoChild :number="count" @changeTitle="changeTitle"></todoChild>

    <div style="height:1px; background:#E0E0E0;margin: 20px 0px"></div>

    <router-link :to="{ path: 'todoBrother'}">
      <el-button type="primary" size="small" >{{msg2}}</el-button>
    </router-link>
  </div>
</template>

<script>
  import todoChild from './todoChild/todoChild'
    export default {
    name:'todo',
    data(){
      return {
        msg:'父子通信',
        msg2:'开始兄弟组件通信旅程',
        count:0,
      }
    },
    components:{
      todoChild
    },
    mounted() {
        console.log(this.$parent.$data.fiter,'打印aaaa')
    },
    methods:{
      changeTitle:function(val){
        this.msg += '-'+ val;
      },
      addCount:function(){
        this.count+=1
      }
    }
  }
</script>

<style scoped>

</style>
