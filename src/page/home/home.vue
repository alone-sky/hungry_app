<template>
    <div>
        {{msg}}
    </div>
</template>

<script>
  import Api from '../../server/home/homeServer'
  export default {
    data(){
        return{
        msg:'welecome my HomePage'
      }
    },
    mounted() {
      this.initData();
      this.initData();
    },
    methods:{
      initData() {
        Api.getCities('guess').then(res => {
          //请求成功
          console.log(res,'城市信息')
        }).catch(err => {
          //请求失败
        });
      }
    }
  }
</script>
<style>

</style>
