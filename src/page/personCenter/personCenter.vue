<template>
  <div>
    <span>{{msg}}</span>
    <span>{{count}}</span>
    <span>{{count2}}</span>
  </div>

</template>

<script>
  import vm from '@/plugins/vm'
  export default {
    name:'personCenter',
    data (){
      return {
          msg:'欢迎来的我的个人中心',
          count2:undefined
      }
    },
    mounted() {
      console.log(this.$store.state.count,'personCenter');

      console.log(this.$data,'Im vueData')

      vm.$on('todo-cen', (arg) => {
        this.count2= arg; // 接收

        if(this.count2===10){
          vm.$off('todo-cen');
        }
      });
    },
    methods:{
      beginPlay(){
        console.log(`开始 吃饭${this.count}`)
      }
    },
    computed:{
      count(){
        return this.$store.state.count//返回store实例的count状态
      }
    },
    watch:{
      count:function(newValue,oldValue){
        console.log(newValue,oldValue);
        this.beginPlay();
      }
    }
  }
</script>
