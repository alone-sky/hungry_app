<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
  name: 'App',
  components: {
    Group,
    Cell
  },
  mounted() {
    console.log(this.$store.state.count,'store')
  },
  mothods:{

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
