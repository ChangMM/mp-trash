<template>
  <div class="container">
    <customNavBar :title="title" :backVisible="isBack" />
    <div class="content-item kehuishou-item">
      <image class="title-image" mode="aspectFit" src="/static/images/kehuishou.png" />
      <p class="title">垃圾资源化的主力军</p>
      <div class="icon-wrap">
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/keshuishou-1.png" />
          </div>
          <div class="intro">
            <p class="intro-title">纸类</p>
            <p class="intro-detail">报纸、传单、杂志、旧书、纸板箱及其他未受污染的纸制品等</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/keshuishou-2.png" />
          </div>
          <div class="intro">
            <p class="intro-title">金属</p>
            <p class="intro-detail">铁、铜、铝等制品</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/keshuishou-3.png" />
          </div>
          <div class="intro">
            <p class="intro-title">玻璃</p>
            <p class="intro-detail">玻璃瓶罐、平板玻璃及其他玻璃制品</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/keshuishou-4.png" />
          </div>
          <div class="intro">
            <p class="intro-title">除塑料袋外的塑料</p>
            <p class="intro-detail">泡沫塑料、塑料品、硬塑料等</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/keshuishou-5.png" />
          </div>
          <div class="intro">
            <p class="intro-title">橡胶及橡胶制品</p>
            <p class="intro-detail">橡胶手套等等</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/keshuishou-6.png" />
          </div>
          <div class="intro">
            <p class="intro-title">布料</p>
            <p class="intro-detail">废弃衣服、桌布、书包、鞋子等</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/keshuishou-7.png" />
          </div>
          <div class="intro">
            <p class="intro-title">饮料瓶</p>
            <p class="intro-detail">可乐罐、塑料饮料瓶、啤酒瓶等</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/keshuishou-8.png" />
          </div>
          <div class="intro">
            <p class="intro-title">其他</p>
            <p class="intro-detail">电路板、电线、插座、木材类等</p>
          </div>
        </div> 
      </div>
    </div>
    <div class="content-item shi-item">
      <image class="title-image" mode="aspectFit" src="/static/images/shi.png" />
      <p class="title">易腐垃圾(厨余垃圾)</p>
      <div class="icon-wrap">
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/shi-1.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">剩菜剩饭与西餐糕点等食物残余</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/shi-2.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">水果残余、菜梗菜叶</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/shi-3.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">动物骨骼内脏</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/shi-4.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">茶叶渣、咖啡渣</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/shi-5.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">宠物饲料</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/shi-6.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">果壳瓜皮</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/shi-7.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">盆景等植物的残枝落叶</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/shi-8.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">废弃食用油</p>
          </div>
        </div> 
      </div>
    </div>
    <ad class="ad-item" unit-id="adunit-45e9f0afb4510f33"></ad>
    <div class="content-item youhai-item">
      <image class="title-image" mode="aspectFit" src="/static/images/youhai.png" />
      <p class="title">需要特殊处理</p>
      <div class="icon-wrap">
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/youhai-1.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">蓄电池、纽扣电池等</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/youhai-2.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">废旧灯管、灯泡</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/youhai-3.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">过期药品</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/youhai-4.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">过期日用化妆用品</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/youhai-5.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">染发剂、指甲油、洗甲水等</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/youhai-6.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">除草、杀虫剂容器</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/youhai-7.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">废弃水银温度计</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/youhai-8.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">废矿物油、油漆及其包装物</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/youhai-9.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">x光片等感光胶片、相片底片</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/youhai-10.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">废打印机墨盒、硒鼓等</p>
          </div>
        </div> 
      </div>
    </div>
    <div class="content-item gan-item">
      <image class="title-image" mode="aspectFit" src="/static/images/gan.png" />
      <p class="title">泛指不能归为上述三类的垃圾</p>
      <div class="icon-wrap">
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/gan-1.png" />
          </div>
          <div class="intro">
            <p class="intro-title">受污染与无法再生的纸张</p>
            <p class="intro-detail">纸杯、照片、复写纸、压敏纸、收据用纸、明信片、卫生纸、尿片等</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/gan-2.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">受污染或者其他不可回收的玻璃</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/gan-3.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">塑料袋与其他受污染的塑料制品</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/gan-4.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">内衣裤、旧毛巾</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/gan-5.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">破旧陶瓷品</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/gan-6.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">妇女卫生用品</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/gan-7.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">一次性餐具</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/gan-8.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">贝壳</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/gan-9.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">烟头</p>
          </div>
        </div> 
        <div class="icon-item">
          <div class="icon">
            <image class="icon-inner" mode="aspectFit" src="/static/icon/gan-10.png" />
          </div>
          <div class="intro">
            <p class="intro-detail">灰土</p>
          </div>
        </div> 
      </div>
    </div>
    <back />
  </div>
</template>

<script>
import customNavBar from "@/components/nav"
import { config } from '@/data/config.js'

export default {
  data () {
    return {
      isBack: false,
      title: '最强垃圾分类攻略'
    }
  },
  onLoad (options) {
    this.isBack = !options.share
  },
  components: { customNavBar },
  onShareAppMessage () {
    return {
      title: '最强垃圾分类攻略，看这一篇就够了',
      path: `/pages/article/main?share=1`
    }
  }
}
</script>

<style lang="scss">
.container {
  padding: 20px;
  .content-item {
      padding: 15px 15px 10px 15px;
      border-radius: 4px;
      position: relative;
      border-radius: 4px;
      background-color: #f5f5f5;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.4;
      word-spacing: 0.2px;
      letter-spacing: 0.2px;
      &.kehuishou-item {
        border: 1px solid #003c71;
        .title {
          color: #003c71;
        }
        &:after {
          background-color: #003c71;
        }
      }
      &.shi-item {
        border: 1px solid #956c58;
        .title {
          color: #956c58;
        }
        &:after {
          background-color: #956c58;
        }
      }
      &.gan-item {
        margin-bottom: 0;
        border: 1px solid #2d2926;
        .title {
          color: #2d2926;
        }
        &:after {
          background-color: #2d2926;
        }
      }
      &.youhai-item {
        border: 1px solid #f9423a;
        .title {
          color: #f9423a;
        }
        &:after {
          background-color: #f9423a;
        }
      }
      &:after {
        position: absolute;
        content: "";
        top: 6px;
        left: 6px;
        width: 100%;
        height: 100%;
        z-index: -1;
        border-radius: 4px;
      }
      .title-image {
        height: 80px;
        width: 80px;
        margin-bottom: 15px;
        border-radius: 4px;
      }
      .title {
        font-size: 17px;
        text-align: center;
        font-weight: bold;
        margin-bottom: 15px;
      }
      .icon-wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .icon-item {
          width: 49%;
          background-color: #fff;
          padding: 15px;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 10px;
        }
        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          height:50px;
          .icon-inner {
            max-width: 40px;
            max-height: 40px;
            flex-shrink: 0;
          }
        }
        .intro-title {
          text-align: center;
          font-size: 14px;
          margin-bottom: 8px;
          margin-top: 8px;
          font-weight: bold;
        }
        .intro-detail {
          margin-top: 8px;
          font-size: 13px;
          color: #666;
          text-align: justify;
        } 
      }
  }
  .ad-item {
    margin-bottom: 20px;
  }
}
</style>
