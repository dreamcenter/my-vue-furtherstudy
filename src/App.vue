<template>
  <div id="app">
    <router-view></router-view>
    <bottom v-if="isshow"></bottom>
  </div>
</template>

<script>
import bottom from './components/bottom'
import Vue from 'vue'
import { mapState } from 'vuex'
Vue.component('bottom', bottom)
export default {
  computed: {
    ...mapState(['isshow'])
  }
}
</script>

<style lang="scss" scoped>
  #app{
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
</style>
