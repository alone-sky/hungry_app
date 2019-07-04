<template>
  <div>
    <Header :title="msg"></Header>
    <div style="display: flex">
      <div style="flex: 1;border-right: 1px solid #E0E0E0">
        <todoBrother1></todoBrother1>
      </div>
      <div style="flex: 1">
        <todoBrother2></todoBrother2>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/header'
  import todoBrother1 from './todoBrother/todoBrother1'
  import todoBrother2 from './todoBrother/todoBrother2'
  export default {
    name:'todoBrother',
    data(){
      return {
        msg:'兄弟组件通信'
      }
    },
     components:{
       Header,
       todoBrother1,
       todoBrother2
     },
    methods:{
    }

  }
</script>

<style scoped lang="less">

</style>
