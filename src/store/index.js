import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { SHOW, GETBILIRES, GETLIST } from '../define/store_def'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isshow: true,
    bili_res: []
  },
  mutations: {
    [SHOW] (state, data) {
      state.isshow = data
    },
    [GETBILIRES] (state, data) {
      state.bili_res = data
    }
  },
  actions: {
    [GETLIST] (store) {
      axios.get('/biliinfdata/tasks/dyhbiliinf.json').then(res => {
        store.commit(GETBILIRES, res.data.datas)
        console.log(store.state.bili_res.length)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  },
  getters: {
  }
})
