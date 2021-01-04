<template>
    <div>
        <top id="top">
            <div id="part">
              <router-link to="/channal/part1" tag="h3" active-class="myactive">频道</router-link>
              <router-link to="/channal/part2" tag="h3" active-class="myactive">分区</router-link>
            </div>
        </top>
        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue'
import top from '../components/top'

Vue.component('top', top)
export default {

}
</script>

<style scoped>
  #part{
    display: inline;
    text-align: center;
  }
  #part>h3{
    width: 50px;
    color: white;
    background-color: rgba(0, 0, 0, 0);
    display: inline;
    margin: 4px;
    top: 80px;
    position: relative;
  }
  .myactive{
    border-bottom: 3px solid white;
  }
</style>
