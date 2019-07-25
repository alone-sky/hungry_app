<template>
  <div class="hello">
    <XHeader :title="title"></XHeader>
    <slot :user="user" name="header"></slot>
    <slot :user2="user" name="footer"></slot>
  </div>
</template>

<script>
  import { XHeader } from 'vux'
  export default {
    name: 'Header',
    props:['title'],
    data () {
      return {
        msg: '',
        user : {
          header: "我是作用域插槽-头部",
          footer: "我是作用域插槽-底部"
        }
      }
    },
    components: {
      XHeader
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
