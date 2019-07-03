<template>
<div class="float">
  <button class="back-to-index" open-type="share">
    <span>分享</span>
  </button>
  <div class="back-to-index" @click="backToIndex">
    <span>回到</span>
    <span>首页</span>
  </div>
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
    },
    sharePage () {
      console.log(1)
    }
  }
}
</script>
<style lang="scss">
.float {
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  width: 40px;
}
.back-to-index {
  font-size: 10px;
  margin-top: 10px;
  height: 40px;
  width: 40px;
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
