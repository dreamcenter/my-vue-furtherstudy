<template>
    <div id="fth">
        <top></top>
        <div id="fth-divs">
          <div class="divs" v-for="item in 14" :key='id[item - 1]' @click="jump (item)">{{item}}</div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import top from '../components/top'

Vue.component('top', top)
export default {
  data () {
    return {
      id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    }
  },
  methods: {
    jump: function (tar) {
      this.$router.push(`/vdshow/${tar}`).catch(res => {
        console.log('login please')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  #fth-divs{
    width: 320px;
    margin: 0 auto;
  }
  .divs
  {
      width: 150px;
      margin: 5px 5px 5px 5px;
      height: 100px;
      box-shadow: 0 0 10px rgba(0,0,0,.2);
      display: inline-block;
  }
</style>
