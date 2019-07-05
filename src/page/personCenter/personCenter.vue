<template>
  <div>
    <p>{{msg}}</p>
    <button-tab>
        <router-link :to="{ path: 'todoBrother'}" :selected="item.id==1" v-for="(item,index) in arr" :key="item.id">{{item.name}}</router-link>
    </button-tab>
    <router-view></router-view>
  </div>

</template>

<script>
  import { ButtonTab, ButtonTabItem } from 'vux'
  export default {
    name:'personCenter',
    data (){
      return {
          msg:'可复用性&组合',
          arr:[
            {name:'混入',id:1},
            {name:'自定义指令',id:2},
            {name:'插件',id:3},
            {name:'过滤器',id:4}
          ]
      }
    },
    components:{
      ButtonTab, ButtonTabItem
    },
    mounted() {

    },
    methods:{

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
