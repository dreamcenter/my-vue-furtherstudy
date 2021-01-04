<template>
    <div id="btm">
      <div id="btom">
        <ul>
            <!-- <li v-for='(item,index) in list' :key='index'>{{item}}</li> -->
            <router-link v-for='(item,index) in list' :key='list_tar[index]' :to='"/"+list_tar[index]' tag="li" activeClass="myactive">{{item}}</router-link>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      list: ['首页', '频道', '动态', '会员购', '个人'],
      list_tar: ['home', 'channal', 'trend', 'vipshop', 'personal']
    }
  }
}
</script>

<style lang="scss" scoped>
  #btm{
    height: 50px;
  }
  #btom{
    width: 100%;
    height: 50px;
    border: 1px solid blue;
    position: absolute;
    bottom: 0;
  }
  ul{
    overflow: hidden;
    height: 100%;
    background-color: cornsilk;
    li{
      float: left;
      width: 20%;height: 100%;
      font-size: 20px;
      border: 1px green solid;
      text-align: center;
      padding-top: 10px;
    }
  }
  .myactive{
    color: coral;
    font-weight: bold;
  }
</style>
