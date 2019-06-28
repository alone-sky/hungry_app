<template>
  <div>
    <div>{{msg}}</div>
    <el-button type="primary" size="small" @click="addCount">vuex 通信</el-button>
    <el-button type="primary" size="small" @click="addCount2">vue 通信</el-button>
  </div>
</template>

<script>
  import vm from '@/plugins/vm'
  export default {
    name:'todo',
    data(){
      return {
        msg:'欢迎来的我的待办处理',
        count:0,
      }
    },
    mounted() {
        console.log(this.$parent.$data.fiter,'打印aaaa')
    },
    methods:{
      addCount:function(){
        this.$store.commit('increment',1)
      },
      addCount2(){
        this.count+=1
        vm.$emit('todo-cen',this.count)
      }
    }
  }
</script>

<style scoped>

</style>
