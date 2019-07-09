<template>
  <div class="comp-navbar">
    <cover-view class="placeholder-bar" :style="{height: navBarHeight + 'px'}"> </cover-view>
    <cover-view class="navbar" :style="{height: navBarHeight + 'px',backgroundColor:navBackgroundColor}">
      <cover-view class="nav-statusbar" :style="{height: statusBarHeight + 'px'}"></cover-view>
      <cover-view class="nav-titlebar" :style="{height: titleBarHeight + 'px' }">
        <cover-view class="bar-options" :class="{black: !isBarBlack}">
          <cover-view v-if="backVisible" class="opt opt-back" @click="backClick()">
            <cover-image 
              class="back-image" 
              :src="isBarBlack ? '/static/images/back.png' : '/static/images/back-white.png'" 
              mode="aspectFit" />
          </cover-view>
          <cover-view class="line" v-if="backVisible && homePath"></cover-view>
          <cover-view v-if="homePath" class="opt opt-home" @click="homeClick()">
            <cover-image 
              class="home-image" 
              :src="isBarBlack ? '/static/images/home.png' : '/static/images/home-white.png'" 
              mode="aspectFit" />
          </cover-view>
        </cover-view>
        <cover-view class="bar-title" :style="[{color:titleColor}]">{{title}}</cover-view>
      </cover-view>
    </cover-view>
  </div>
</template>

<script>
export default {
  props: {
    navBackgroundColor: {
      default: "#ffffff"
    },
    titleColor: {
      default: "#000000"
    },
    title: {
      required: false,
      default: "最全垃圾分类"
    },
    isBarBlack: {
      required: false,
      default: true,
    },
    backVisible: {
      required: false,
      default: true
    },
    homePath: {
      required: true,
      default: "/pages/index/main"
    }
  },
  data() {
    return {
      statusBarHeight: "", 
      titleBarHeight: "",
      navBarHeight: ""
    };
  },
  beforeMount() {
    const self = this
    wx.getSystemInfo({
      success(system) {
        self.statusBarHeight = system.statusBarHeight

        let platformReg = /ios/i
        if (platformReg.test(system.platform)) {
          self.titleBarHeight = 44
        } else {
          self.titleBarHeight = 48
        }

        self.navBarHeight = self.statusBarHeight + self.titleBarHeight
      }
    })
  },
  methods: {
    backClick() {
      if (getCurrentPages().length == 1) {
        wx.reLaunch({
          url: this.homePath
        })
      } else {
        wx.navigateBack({
          delta: 1
        })
      }
    },
    homeClick() {
      if (getCurrentPages().length == 1) {
        wx.reLaunch({
          url: this.homePath
        })
      } else {
        wx.navigateBack({
          delta: 1
        })
      }
    }
  }
}
</script>

<style lang="scss">
.comp-navbar {
  width: 100%;
  .navbar {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 100;
    .nav-titlebar {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .bar-options {
        border: 0.5px solid #f5f5f5;
        background-color: rgba(#fff,0.5);
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: absolute;
        left: 7px;
        top: 6px;
        border-radius: 26px;
        overflow: hidden;
        &.black {
          background-color: rgba(#000,0.1);
          border: 0.5px solid rgba(#fff,0.2);
          .opt {
            &:active {
              background-color: rgba(#000,0.2);
            }
          }
          .line {
            background-color: rgba(#fff,0.2);
          }
        }
        .opt {
          display: flex;
          justify-content: center;
          align-items: center;
          &:active {
            background-color: #ddd;
          }
        }
        .opt-back {
          padding: 6px 12px;
          .back-image {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
          }
        }
        .line {
          display: block;
          height: 18px;
          width: 0.5px;
          background-color: #ddd;
        }
        .opt-home {
          padding: 6px 12px;
          .home-image {
            width: 18px;
            height: 18px;
            flex-shrink: 0;
          }
        }
      }
      .bar-title {
        width: 45%;
        font-size: 18px;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
      }
    }
  }
  .placeholder-bar{
    background-color: transparent;
    width: 100%;
  }
}
</style>
