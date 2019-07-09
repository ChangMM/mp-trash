<template>
  <div class="container">
    <view class="add-hint" v-if="hint" @click="hideHint">
      <text>添加到我的小程序</text>
      <view class="close-hint"></view>
    </view>
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
          <p class="title">湿垃圾(即厨余垃圾)</p>
          <p class="detail">日常生活垃圾产生的容易腐烂的生物质废弃物</p>
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
      <div class="content-item" @click="goGuide(2)">
        <image src="/static/images/gan.png" class="image" />
        <div class="intro">
          <p class="title">干垃圾(即其他垃圾)</p>
          <p class="detail">除可回收物、有害垃圾、湿垃圾以外的其它生活废弃物</p>
        </div>
      </div>
      <ad class="ad-item" unit-id="adunit-45e9f0afb4510f33"></ad>
    </div>
    <!-- <p class="name" @click="goArticle">点击查看<span class="em">『最强垃圾分类攻略』</span></p>
    <div class="other">
      <span @click="goTable">图表</span>
      <span class="line">|</span>
      <button open-type="share">分享</button>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      hint: true
    }
  },
  mounted () {
    try {
      const value = wx.getStorageSync('hinted')
      if (value) {
        this.hint = !value
      }
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    hideHint () {
      this.hint = false
      try {
        wx.setStorageSync('hinted', 'true')
      } catch (e) {
        console.log(e)
      }
    },
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
    },
    goArticle(index) {
      mpvue.navigateTo({
        url: `/pages/article/main`
      })
    },
  },
  onShareAppMessage () {
    return {
      title: `最全垃圾分类`,
      path: `/pages/index/main`
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  padding-top: 60px;
  padding-bottom: 10px;
}
.add-hint {
  position: fixed;
  top: 10px;
  right: 25px;
  padding: 5px 30px 5px 5px;
  border-radius: 2px;
  background-color: #ffffff;
  color: #333333;
  font-size: 13px;
  text-align: left;
  z-index: 2001;
  box-shadow: 0 0 1px rgba(0,0,0,.35),0 2px 4px rgba(0,0,0,.15);
  animation: bounce .6s cubic-bezier(.58,.1,.58,.25) infinite alternate;
  &::before {
    content: "";
    position: absolute;
    right: 50px;
    top: -7px;
    width: 0;
    height: 0;
    border-left: 15rpx solid transparent;
    border-right: 15rpx solid transparent;
    border-bottom: 15rpx solid #ffffff;
    transform: translateX(50%);
    z-index: 2001;
  }
  &::after {
    content: "";
    position: absolute;
    right: 50px;
    top: -9px;
    width: 0rpx;
    height: 0rpx;
    border-left: 16rpx solid transparent;
    border-right: 16rpx solid transparent;
    border-bottom: 16rpx solid #eeeeee;
    transform: translateX(50%);
  }
  .close-hint {
    position: absolute;
    right: 5px;
    top: 50%;
    width: 1.2em;
    height: 1.2em;
    border-radius: 50%;
    background-color: #eeeeee;
    transform: translateY(-50%);
  }
  .close-hint::before,.close-hint::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0.7em;
    height: 4rpx;
    border-radius: 2rpx;
    background-color: #aaaaaa;
  }

  .close-hint::before {
    transform: translate(-50%,-50%) rotate(45deg);
  }

  .close-hint::after {
    transform: translate(-50%,-50%) rotate(-45deg);
  }
}

@keyframes bounce {
  0%,5% {
    transform: translate3d(0px,2px,0px);
  }

  100% {
    transform: translate3d(0px,-2px,0px);
  }
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
  padding: 12px 20px 10px 20px;
  .content-item {
    background-color: #eee;
    border-radius: 6px;
    display: flex;
    padding: 10px;
    align-items: center;
    margin-bottom: 12px;
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
  color: #999;
  .line {
    margin-left: 10px;
    margin-right: 10px;
  }
  button {
    margin: 0;
    display: inline;
    padding: 0;
    color: #999;
    font-size: 14px;
    background-color: transparent;
  }
}
.name {
  color: #999;
  font-size: 14px;
  text-align: center;
  padding-top: 5px;
  .em {
    font-weight: bold;
    color: #F5A623;
  }
}
</style>
