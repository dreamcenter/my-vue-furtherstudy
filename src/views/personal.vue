<template>
    <div>
        <top></top>
        <button @click="login" v-if="!show">登录</button>
        <table border="1" v-else>
          <tr>
            <td>名字</td>
            <td>投币</td>
            <td>弹幕</td>
            <td>收藏</td>
            <td>点赞</td>
            <td>回复</td>
            <td>分享</td>
            <td>观看</td>
          </tr>
          <tr v-for="(item, index) of $store.state.bili_res" :key='bili_name[index]'>
            <td>{{bili_name[index]}}</td>
            <td>{{item.data.coin}}</td>
            <td>{{item.data.danmaku}}</td>
            <td>{{item.data.favorite}}</td>
            <td>{{item.data.like}}</td>
            <td>{{item.data.reply}}</td>
            <td>{{item.data.share}}</td>
            <td>{{item.data.view}}</td>
          </tr>
        </table>
    </div>
</template>

<script>
import Vue from 'vue'
import cookie from 'vue-cookies'
import top from '../components/top'
import { GETLIST } from '../define/store_def'
Vue.component('top', top)
Vue.use(cookie)

export default {
  data () {
    return {
      show: false,
      bili_name: ['re0', 'jk', '可爱壁纸', '仓鼠', '精美壁纸', '云', '雪', '罗宾0-10', '罗宾LS-1', '调箱师'],
      token: false
    }
  },
  mounted () {
    if (this.$cookies.get('token')) {
      this.show = true
    }
    if (this.$store.state.bili_res.length === 0 && this.show) {
      this.$store.dispatch(GETLIST)
    }
  },
  methods: {
    login: function () {
      this.$cookies.set('token', '1', 0)
      this.$store.dispatch(GETLIST)
      this.show = true
    }
  }
}
</script>

<style lang="scss" scoped>
  table{
    text-align: center;
  }
</style>
