<template>
  <div class="container">
    <view class="search-wrap" @click="goSearch">
      <view class="input-wrap">
        <image class="search-icon" src="/static/images/search.png"></image>
        <view class="search">搜索垃圾查看对应分类</view>
      </view>
    </view>
    <div class="content-wtap">
      <div class="content-item" @click="goGuide(1)">
        <image src="/static/images/shi.png" class="image" />
        <div class="intro">
          <p class="title">湿垃圾</p>
          <p class="detail">日常生活垃圾产生的容易腐烂的生物质废弃物</p>
        </div>
      </div>
      <div class="content-item" @click="goGuide(2)">
        <image src="/static/images/gan.png" class="image" />
        <div class="intro">
          <p class="title">干垃圾</p>
          <p class="detail">除可回收物、有害垃圾、湿垃圾以外的其它生活废弃物</p>
        </div>
      </div>
      <div class="content-item" @click="goGuide(3)">
        <image src="/static/images/kehuishou.png" class="image" />
        <div class="intro">
          <p class="title">可回收物</p>
          <p class="detail">适宜回收利用和资源化利用的生活废弃物，如纸张、塑料、玻璃、金属、织物等</p>
        </div>
      </div>
      <div class="content-item" @click="goGuide(4)">
        <image src="/static/images/youhai.png" class="image" />
        <div class="intro">
          <p class="title">有害垃圾</p>
          <p class="detail">对人体健康或者自然环境造成直接或潜在危害的废弃物</p>
        </div>
      </div>
    </div>
    <div class="other">
      <span @click="goTable">图表</span>
      <span class="line">|</span>
      <button open-type="share">分享</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    goSearch () {
      mpvue.navigateTo({
        url: '/pages/search/main'
      })
    },
    goGuide(index) {
      mpvue.navigateTo({
        url: `/pages/guide/main?index=${index}`
      })
    },
    goTable(index) {
      mpvue.navigateTo({
        url: `/pages/table/main`
      })
    }
  },
  onShareAppMessage () {
    return {
      title: `可能最全垃圾分类查询`,
      path: `/pages/index/main`
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  padding-top: 60px;
}
.search-wrap {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding-left: 10px;
  padding-right: 10px;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.08);
  z-index: 999;
  display: flex;
  align-items: center;
  .input-wrap {
    position: relative;
    flex: 1;
    .search {
      padding-left: 38px;
      padding-right: 36px;
      height: 40px;
      border-radius: 20px;
      background-color: #f5f5f5;
      box-sizing: border-box;
      line-height: 40px;
      color: #666;
    }
    .search-icon {
      position: absolute;
      top: 12px;
      left: 11px;
      width: 16px;
      height: 16px;
      margin-right: -20px;
    }
  }
}
.content-wtap {
  padding: 20px;
  .content-item {
    background-color: #eee;
    border-radius: 6px;
    display: flex;
    padding: 15px;
    align-items: center;
    margin-bottom: 15px;
    &:last-child{
      margin-bottom: 0;
    }
    .image {
      width: 50px;
      height: 50px;
      flex-shrink: 0;
      border-radius: 4px;
      margin-right: 10px;
    }
    .title {
      font-weight: bold;
    }
    .detail {
      font-size: 12px;
    }
    .intro {
      text-align: justify;
      color: #666;
    }
  }
}
.other {
  text-align: center;
  color: #666;
  .line {
    margin-left: 10px;
    margin-right: 10px;
  }
  button {
    margin: 0;
    display: inline;
    padding: 0;
    color: #666;
    font-size: 14px;
    background-color: transparent;
  }
}
</style>
