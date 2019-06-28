<template>
  <div class="container">
    <view class="search-wrap">
      <view class="input-wrap">
        <image class="search-icon" src="/static/images/search.png"></image>
        <input class="search" placeholder="搜索垃圾查看对应分类" type="text" focus v-model="keyword"></input>
        <view class="clear-search" v-if="keyword != ''" @click="clearKeyword" ></view>
      </view>
    </view>
    <div class="search-result" v-if="results != null">
      <scroll-view class="list" scroll-y v-if="results != -1 && results.length > 0">
        <div class="result-item" v-for="item in results" :key="item.name">
          <span class="name">{{item.name}}</span>
          <span class="type" :style="{ backgroundColor: config[item.type].color }">{{config[item.type].name}}</span>
        </div>
      </scroll-view>
      <div class="no-result" v-if="results != -1 && results.length == 0">
        <p class="emoji">😫</p>
        <p class="tip">“{{keyword}}”尚未被收录</p>
        <button class="contact" open-type="contact">联系客服</button>
      </div>
      <div class="special-result" v-if="results == -1">
        <p class="emoji">😡</p>
        <p class="tip">注意：这不属于生活垃圾，但可能有害，请谨慎处理！</p>
      </div>
    </div>
  </div>
</template>

<script>
import back from "@/components/back"
import { trash } from '@/data/trash'
import { config } from '@/data/config.js'
export default {
  data () {
    return {
      keyword: '',
      config: config,
    }
  },
  components: { back },
  computed: {
    results () {
      if (this.keyword.trim() == '') {
        return null
      }
      if (this.keyword.trim() == '前男友' || this.keyword.trim() == '前女友' || this.keyword.trim() == '渣男' || this.keyword.trim() == '渣女') {
        return -1
      }
      return trash.filter((item) => {
        return item.name.lastIndexOf(this.keyword.trim()) > -1
      })
    }
  },
  onLoad(options) {
    if (options.keyword) {
      this.keyword = options.keyword
    }
  },
  methods: {
    clearKeyword () {
      this.keyword = ''
    }
  },
  onShareAppMessage () {
    return {
      title: `可能最全垃圾分类查询，${this.keyword}属于什么垃圾`,
      path: `/pages/index/main`
    }
  }
}
</script>

<style lang="scss">
page {
  height: 100%;
}
.container {
  height:100%;
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
    }
    .search-icon {
      position: absolute;
      top: 12px;
      left: 11px;
      width: 16px;
      height: 16px;
      margin-right: -20px;
    }
    .clear-search {
      position: absolute;
      top: 12px;
      right: 10px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: #cccccc;
    }
    .clear-search::before,.clear-search::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 64%;
      height: 4rpx;
      border-radius: 3rpx;
      background-color: #f5f5f5;
    }
    .clear-search::before {
      transform: translate(-50%,-50%) rotate(45deg);
    }
    .clear-search::after {
      transform: translate(-50%,-50%) rotate(-45deg);
    }
  }
  .cancel-search {
    margin-left: 10px;
    color: #333333;
    font-size: 16px;
  }
}
.search-result {
  height: 100%;
  .list {
    height: 100%;
  }
  .result-item {
    display: flex;
    padding: 10px;
    justify-content: space-between;
    &:nth-child(2n) {
      background-color: #f5f5f5;
    }
    .name {

    }
    .type {
      color: #fff;
      border-radius: 2px;
      padding: 0 6px;
    }
  }
  .no-result {
    padding-top: 40px;
    text-align: center;
    .emoji {
      font-size: 50px;
    }
    .tip {
      font-size: 16px;
      color: #F76B1C;
    }
    .contact {
      font-size: 14px;
      color: #666;
      background-color: #fff;
      margin: 0;
    }
  }
  .special-result {
    text-align: center;
    padding: 40px;
    color: red;
    .emoji {
      font-size: 50px;
    }
  }
}
</style>
