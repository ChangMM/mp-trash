<template>
  <div class="container">
    <div class="progress-bar" :style="{width: (index+1)*10+'%'}"></div>
    <div class="test-wrap" v-if="test.length>0 && index < 10" >
      <p class="header"><span class="em">{{index+1}}</span>/10</p>
      <p class="title">
        <span class="em">{{current.name}}</span> 是什么垃圾？
      </p>
      <div class="answer-wrap">
        <div class="answer-item" :class="{error: resultSignal == 1}" @click='next(2)'>干垃圾</div>
        <div class="answer-item" :class="{error: resultSignal == 1}" @click='next(1)'>湿垃圾</div>
        <div class="answer-item" :class="{error: resultSignal == 1}" @click='next(3)'>可回收物</div>
        <div class="answer-item" :class="{error: resultSignal == 1}" @click='next(4)'>有害垃圾</div>
        <div class="answer-item" :class="{error: resultSignal == 1}" @click='next(0)'>不是生活垃圾</div>
      </div>
      <ad class="ad-item" unit-id="adunit-45e9f0afb4510f33"></ad>
    </div>
    <div class="result-wrap" v-if="index > 9">
      <p class="title">你的得分为 <span class="em">{{success*10}} </span> 分！</p>
      <p class="tip">注：中间是你的答案，右边是正确答案哦</p>
      <div class="result-item" v-for="(item, index) in test" :key="item">
        <span class="name">{{ item.name }}</span>
        <p class="wrap">
          <span class="result">{{ config[results[index]].name }}</span>
          <span class="answer" :class="{error:results[index]!=item.type }">{{ config[item.type].name }}</span>
        </p>
      </div>
      <div class="button-wrap">
        <button class="button" @click="retry">再测一次</button>
        <button open-type="share" class="button share">考考别人</button>
      </div>
      <ad class="ad-item" unit-id="adunit-45e9f0afb4510f33"></ad>
    </div>
  </div>
</template>

<script>
import { trash } from '@/data/trash'
import { config } from '@/data/config'
import { randomNum } from '@/utils'

export default {
  data() {
    return {
      index: 0,
      config: config,
      current: null,
      test: [],
      resultSignal: 0,
      results: [],
      success: 0,
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      for (let i = 0; i < 10; i++) {
        this.test.push(trash[randomNum(0, 5678)])
      }
      this.current = this.test[this.index]
    },
    retry(){
      this.results = []
      this.test = []
      this.resultSignal = 0
      this.success = 0
      this.index = 0
      this.init()
    },
    next (result) {
      if (result == this.current.type) {
        this.success++
      } else {
        this.resultSignal = 1
      }
      this.results.push(result)
      this.index++
      this.current = this.test[this.index]
      if (this.index > 9) {
        return
      }
      setTimeout(()=> {
        this.resultSignal = 0
      }, 300)
    }
  },
  onShareAppMessage () {
    return {
      title: `我在垃圾分类小测试中得了${this.success*10}分，你也来测测吧`,
      path: `/pages/test/main`
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  padding-top: 6px;
  .progress-bar {
    position: fixed;
    top: 0;
    left:0;
    height: 4px;
    z-index: 1;
    background: linear-gradient(to right, #F2EEA0, #00F2A9);
    transition: width ease 0.1s;
  }
}
.test-wrap {
  padding: 0 20px;
  .header {
    padding: 5px;
    font-size: 14px;
    color: #666;
    text-align: center;
    .em {
      font-size: 18px;
      color: #333;
      font-weight: bold;
    }
  }
  .title {
    text-align: center;
    font-size: 14px;
    color: #666;
    .em {
      color: #333;
      font-size: 18px;
      font-weight: bold;
    }
  }
  .answer-wrap {
    .answer-item {
      position: relative;
      width: 240px;
      font-size: 15px;
      font-weight: bold;
      color: #666;
      display: block;
      margin: 0 auto;
      border-radius: 6px;
      background-color: #f5f5f5;
      text-align: center;
      padding: 12px;
      margin-bottom: 20px;
      margin-top: 15px;
      transition: all 0.1s;
      box-shadow: 0px 6px 0px #ddd;
      &:active {
        color: #fff;
        background-color: #00F2A9;
        box-shadow: 0px 4px 0px #0090A0;
        top: 4px;
      }
      &.error:active {
        color: #fff;
        background-color: #cb3b27;
        box-shadow: 0px 4px 0px #84261a;
        top: 4px;
      }
    }
  }
}
.result-wrap {
  padding: 8px 20px;
  .title {
    font-size: 16px;
    color: #666;
    text-align: center;
    margin-bottom: 8px;
    .em {
      font-size: 22px;
      color: #333;
      font-weight: bold;
    }
  }
  .tip {
    font-size: 12px;
    color: #999;
    margin-bottom: 5px;
  }
  .result-item {
    padding: 4px 6px;
    border: 1px solid #eee;
    display: flex;
    justify-content: space-around;
    &:nth-child(2n) {
      background-color: #f5f5f5;
    }
    span {
      font-size: 13px;
      display: inline-block;
    }
    .wrap {
      display: flex;
    }
    .name {
      width: 120px;
      text-align: left;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .result {
      width: 90px;
      text-align: right;
      margin-right: 6px;
    }
    .answer {
      color: #00F2A9;
      width: 90px;
      text-align: right;
      &.error {
        color: #84261a;
      }
    }
  }
}
.button-wrap {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  .button {
      height: 30px;
      line-height: 30px;
      position: relative;
      font-size: 14px;
      padding: 0 25px;
      font-weight: bold;
      color: #666;
      border-radius: 4px;
      background-color: #f5f5f5;
      text-align: center;
      transition: all 0.1s;
      box-shadow: 0px 4px 0px #ddd;
      &:active {
        color: #fff;
        background-color: #ddd;
        border-color: #ddd;
        box-shadow: 0px 2px 0px #999;
        top: 2px;
      }
      &.share {
        color: #fff;
        background-color: #00F2A9;
        box-shadow: 0px 4px 0px #00B9A4;
      }
      &.share:active {
        top: 2px;
      }
  }
}
.ad-item {
  margin-top: 30px;
  overflow: hidden;
  border-radius: 6px;
}
</style>
