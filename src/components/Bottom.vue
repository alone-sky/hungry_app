<template>
  <div class="tabContainer">
      <div class="tabItem"
           :key="index"
           :class="{selectd:index===current}"
           v-for="(item,index) in tabList"
           @click="clickTab(index)">{{item}}</div>
  </div>
</template>

<script>
  export default {
    name:'Bottom',
    props:{
      tabList: {
      type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
          return ['组件通信','复用性&组合','订单','登录']
        }
      }
  },
    data(){
      return {
        current:0
      }
    },
    mounted() {

    },
    methods:{
        clickTab(index){
          this.current=index;
          this.$emit('getDwg',index);
        }
    }
  }
</script>

<style scoped lang="less">
  .tabContainer{
    width: 100%;
    position: fixed;
    bottom: 0px;
    display: flex;
    left: 0px;
    background: #f7f7f7;
  }
  .tabContainer .tabItem{
    flex: 1;
    height: 40px;
    line-height: 40px;
    color: #555;
  }
  .tabContainer .selectd{
    color: green;
  }
</style>
