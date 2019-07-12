<template>
  <div>
    <p>{{msg}}</p>
  </div>
</template>

<script>
  export default {
    name:'router-child',
    data(){
      return{
        msg:'嵌套路由-第二级'
      }
    },
  }
</script>

<style lang="less" scoped>

</style>
