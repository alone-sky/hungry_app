import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    token:'123456'
  },
  mutations: {
    increment (state,number) {//state是默认的，其余的参数是自定义的
      state.count += number;
    },
  }
})
export default store
