<template>
  <div class="container">
    <div class="content-wtap">
      <div class="content-item" @click="goArticle">
        <image src="/static/images/gonglue.png" class="image" />
        <div class="intro">
          <p class="title">垃圾分类最强攻略</p>
          <p class="detail">一篇详细的图文解决日常的垃圾分类问题</p>
        </div>
      </div>
      <div class="content-item" @click="goGuide">
        <image src="/static/images/yaoqiu.png" class="image" />
        <div class="intro">
          <p class="title">垃圾分类投放要求</p>
          <p class="detail">四种垃圾的不同投放要求</p>
        </div>
      </div>
      <div class="content-item" @click="goTable">
        <image src="/static/images/table.png" class="image" />
        <div class="intro">
          <p class="title">一些常用垃圾分类表</p>
          <p class="detail">可以打印贴在办公室或者家里的分类表</p>
        </div>
      </div>
      <div class="other">
        <button open-type="contact">联系开发者</button>
      </div>
      <ad class="ad-item" unit-id="adunit-45e9f0afb4510f33"></ad>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goGuide() {
      mpvue.navigateTo({
        url: `/pages/guide/main`
      })
    },
    goArticle() {
      mpvue.navigateTo({
        url: `/pages/article/main`
      })
    },
    goTable() {
      mpvue.navigateTo({
        url: `/pages/table/main`
      })
    },
  },
  onShareAppMessage () {
    return {
      title: `最全垃圾分类`,
      path: `/pages/skill/main`
    }
  }
}
</script>

<style scoped lang="scss">
.content-wtap {
  padding: 10px 20px;
  .content-item {
    border: 1px solid #eee;
    border-radius: 6px;
    display: flex;
    padding: 20px;
    align-items: center;
    margin-bottom: 20px;
    &:last-child{
      margin-bottom: 0;
    }
    .image {
      width: 40px;
      height: 40px;
      flex-shrink: 0;
      border-radius: 4px;
      margin-right: 15px;
    }
    .title {
      font-weight: bold;
      font-size: 15px;
      margin-bottom: 5px;
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
  margin-bottom: 20px;
  button {
    margin: 0;
    display: inline;
    padding: 0;
    color: #999;
    font-size: 14px;
    background-color: transparent;
  }
}
.ad-item {
  overflow: hidden;
  border-radius: 6px;
}
</style>
