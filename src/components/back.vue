<template>
  <div class="back-to-index" @click="backToIndex">
    <span>回到</span>
    <span>首页</span>
  </div>
</template>

<script>
export default {
  methods: {
    backToIndex () {
      if (getCurrentPages().length > 1) {
        wx.navigateBack({
          delta: 1
        })
      } else {
        wx.reLaunch({
          url: '/pages/index/main'
        })
      }
    }
  }
}
</script>
<style lang="scss">
.back-to-index {
  font-size: 10px;
  height: 50px;
  width: 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  color: #fff;
  background-color: #F5A623;
  z-index: 10;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    line-height: 1.2;
  }
}
</style>
