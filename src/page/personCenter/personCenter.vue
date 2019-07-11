<template>
  <div>
    <p>{{msg}}</p>
    <button-tab>
      <button-tab-item :selected="selected===item.id" @on-item-click="clickTabItem" v-for="(item,index) in tabList" :key="item.id">{{item.name}}</button-tab-item>
    </button-tab>
    <component :is="who"></component>
  </div>
</template>

<script>
  import { ButtonTab, ButtonTabItem } from 'vux'
  import drective from './children/drective'
  import filters from './children/filter'
  import mixins from './children/mixin'
  import plugin from './children/plugin'
  export default {
    name:'personCenter',
    data (){
      var tab=[
        {name:'混入',id:1,component:'mixins'},
        {name:'自定义指令',id:2,component:'drective'},
        {name:'插件',id:3,component:'plugin'},
        {name:'过滤器',id:4,component:'filters'}
      ]
      return {
        msg:'可复用性&组合',
        tabList:tab,
        selected:tab[0].id,
        who:tab[0].component
      }
    },
    components:{
      ButtonTab,
      ButtonTabItem,
      drective,
      filters,
      mixins,
      plugin
    },
    mounted() {

    },
    methods:{
      clickTabItem:function (index) {
        this.selected=this.tabList[index].id;
        this.who=this.tabList[index].component;
      }
    },
    computed:{

    },
    watch:{

    }
  }
</script>

<style scoped lang="less">
  .vux-button-group > a{
    text-decoration: none;
  }
</style>
