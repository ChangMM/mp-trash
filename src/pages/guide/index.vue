<template>
  <div class="container">
    <div class="nav-wrap">
      <span class="nav-item" :class="{'active': index== 1}" @click="setActive(1)">湿垃圾</span>
      <span class="nav-item" :class="{'active': index== 2}" @click="setActive(2)">干垃圾</span>
      <span class="nav-item" :class="{'active': index== 3}" @click="setActive(3)">可回收物</span>
      <span class="nav-item" :class="{'active': index== 4}" @click="setActive(4)">有害垃圾</span>
    </div>
    <div class="content-wrap">
      <div class="content-item" :class="{'active': index== 1}">
        <image class="icon" src="/static/images/shi.png" />
        <div class="intro">
          <p class="detail">湿垃圾是指，日常生活垃圾产生的容易腐烂的生物质废弃物</p>
          <p class="label">主要包括：</p>
          <p class="detail">食材废料、剩饭剩菜、过期食品、蔬菜水果、瓜皮果核、花卉绿植、中药残渣等</p>
          <p class="label">投放要求：</p>
          <ul class="detail">
            <li class="li">纯流质的食物垃圾，如牛奶等，应直接倒进下水口</li>
            <li class="li">有包装物的湿垃圾应将包装物去除后分类投放，包装物请投放到对应的可回收物或干垃圾容器</li>
          </ul>
        </div>
      </div>
      <div class="content-item" :class="{'active': index== 2}">
        <image class="icon" src="/static/images/gan.png" />
        <div class="intro">
          <p class="detail">干垃圾是指，除可回收物、有害垃圾、湿垃圾以外的其它生活废弃物</p>
          <p class="label">主要包括：</p>
          <p class="detail">餐盒、餐巾纸、湿纸巾、卫生间用纸、塑料袋、食品包装袋、污染严重的纸、烟蒂、纸尿裤、一次性杯子、大骨头、贝壳、花盆等</p>
          <p class="label">投放要求：</p>
          <ul class="detail">
            <li class="li">尽量沥干水分</li>
            <li class="li">难以辨识类别的生活垃圾投入干垃圾容器内</li>
          </ul>
        </div>
      </div>
      <div class="content-item" :class="{'active': index== 3}">
        <image class="icon" src="/static/images/kehuishou.png" />
        <div class="intro">
          <p class="detail">可回收物是指，适宜回收利用和资源化利用的生活废弃物，如废纸张、废塑料、废玻璃制品、废金属、废织物等</p>
          <p class="label">主要包括：</p>
          <p class="detail">报纸、纸箱、书本、广告单、塑料瓶、塑料玩具、油桶、酒瓶、玻璃杯、易拉罐、旧铁锅、旧衣服、包、旧玩偶、旧数码产品、旧家电</p>
          <p class="label">投放要求：</p>
          <ul class="detail">
            <li class="li">轻投轻放</li>
            <li class="li">有尖锐边角的，应包裹后投放</li>
            <li class="li">清洁干燥、避免污染，废纸尽量平整</li>
            <li class="li">立体包装请清空内容物，清洁后压扁投放</li>
          </ul>
        </div>
      </div>
      <div class="content-item" :class="{'active': index== 4}">
        <image class="icon" src="/static/images/youhai.png" />
        <div class="intro">
          <p class="detail">有害垃圾是指，对人体健康或者自然环境造成直接或潜在危害的废弃物</p>
          <p class="label">主要包括：</p>
          <p class="detail">废电池（充电电池、铅酸电池、镍镉电池、纽扣电池等）、废油漆、消毒剂、荧光灯管、含汞温度计、废药品及其包装物等</p>
          <p class="label">投放要求：</p>
          <ul class="detail">
            <li class="li">投放时请注意轻放</li>
            <li class="li">如易挥发，请密封后投放</li>
            <li class="li">易破损的请连带包装或包裹后轻放</li>
          </ul>
        </div>
      </div>
    </div>
    <back />
  </div>
</template>

<script>
import back from '@/components/back'
import { config } from '@/data/config.js'

export default {
  data () {
    return {
      index: 1,
      desc: [
        '湿垃圾是指，日常生活垃圾产生的容易腐烂的生物质废弃物',
        '干垃圾是指，除可回收物、有害垃圾、湿垃圾以外的其它生活废弃物',
        '可回收物是指，适宜回收利用和资源化利用的生活废弃物，如废纸张、废塑料、废玻璃制品、废金属、废织物等',
        '有害垃圾是指，对人体健康或者自然环境造成直接或潜在危害的废弃物'
      ],
    }
  },
  components: { back },
  onLoad(options) {
    if (options.index) {
      this.setActive(options.index)
    }
  },
  methods: {
    setActive (index) {
      this.index = index
    }
  },
  onShareAppMessage () {
    return {
      title: this.desc[this.index-1],
      path: `/pages/guide/main?index=${this.index}&share=1`
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  .nav-wrap {
    color: #fff;
    background-color: #F5A623;
    padding-top: 10px;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-around;
    .nav-item {
      display: inline-block;
      padding-bottom: 4px;
      transition: border ease 0.2s;
      border-bottom: 2px solid transparent;
      &.active {
        border-bottom: 2px solid #fff;
      }
    }
  }
  .content-wrap {
    margin: 20px;
    padding: 20px;
    border-radius: 4px;
    background-color: rgba(#956c58, 0.1);
    .content-item {
      flex-direction: column;
      align-items: center;
      display: none;
      &.active {
        display: flex;
      }
    }
    .icon {
      height: 80px;
      width: 80px;
      border-radius: 4px;
      margin-bottom: 20px;
    }
    .intro {
      text-align: justify;
      .label {
        font-size: 16px;
        font-weight: bold;
        margin-top: 10px;
        margin-bottom: 5px;
      }
      .detail {
        color: #666;
        .li {
          padding-left: 20px;
          position: relative;
          &:before {
            position: absolute;
            content: "";
            height: 5px;
            width: 5px;
            background-color: #666;
            border-radius: 4px;
            top: 8px;
            left: 7px;
          }
        }
      }
    }
  }
}
</style>
