import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state,obj,obj2,string) {//state是默认的，其余的参数是自定义的
      state.count += obj.index;
    }
  }
})

export default store
