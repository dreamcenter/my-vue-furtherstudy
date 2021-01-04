<template>
    <div>
      <a @click.prevent="turnback">返回首页</a>
      <br>
      {{id}}
    </div>
</template>

<script>
import { SHOW } from '../define/store_def'
export default {
  data () {
    return {
      id: null
    }
  },
  mounted () {
    this.id = this.$route.params
    this.$store.commit(SHOW, false)
  },
  beforeDestroy () {
    this.$store.commit(SHOW, true)
  },
  methods: {
    turnback: function () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss">
  a{
    font-size: 20px;
    color: blueviolet;
    text-decoration: underline;
  }
</style>
