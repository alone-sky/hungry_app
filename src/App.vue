<template>
  <div id="app">
    <img src="./assets/logo.png">
    <i class="el-icon-edit"></i>
    <group>
      <cell title="title" value="value"></cell>
    </group>
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
  margin-top: 60px;
}
</style>
