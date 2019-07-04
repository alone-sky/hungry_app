<template>
  <div>
    <div>{{msg}}</div>
    <div>{{number}}</div>
    <div>通知父组件我接到信息了</div>
    <el-button type="primary" size="small" @click="tellFather">接受到了</el-button>
  </div>
</template>

<script>
  export default {
    name:'todoChild',
    props:{
      number:Number,
    },
    data(){
      return {
        msg : '我是子组件',
      }
    },
    methods:{
      tellFather:function () {
        this.$emit('changeTitle','接收到了')
      }
    }
  }
</script>

<style scoped lang="less">

</style>
