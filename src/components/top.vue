<template>
    <div id="top">
      <div>
        <slot></slot>
      </div>
    </div>
</template>

<style lang="scss" scoped>
#top{
  height: 120px;
}
#top div{
  width: 100%;
  height: 120px;
  background: url('../serverdata/imgs/bk.jpg') fixed no-repeat;
  background-size: cover;
  position: fixed;
}
</style>
