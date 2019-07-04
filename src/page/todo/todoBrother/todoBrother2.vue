<template>
  <div>
    <div>{{msg}}</div>
    <el-button type="primary" size="small" @click="addCount2">vue 通信</el-button>
    <div>
      {{count}}
    </div>
  </div>
</template>

<script>
  import vm from '@/plugins/vm'
  export default {
    name:'todoBrother2',
    data(){
      return  {
        msg:'兄弟组件-右',
        count2:0
      }
    },
    methods:{
      addCount2(){
        this.count2 ++;
        vm.$emit('todo-cen',this.count2)
      }
    },
    computed:{
      count:function () {
        return this.$store.state.count;
      }
    }
  }
</script>

<style scoped lang="less">

</style>
