<template>
  <div class="container">
    <customNavBar :backVisible="isBack" />
    <image :src="image1" mode="widthFix" />
    <button type="button" @click="saveImageToAlbum(image1)">保存图片到相册</button>
    <ad class="ad-item" unit-id="adunit-45e9f0afb4510f33"></ad>
    <image :src="image2" mode="widthFix" />
    <button type="button" class="last" @click="saveImageToAlbum(image2)">保存图片到相册</button>
  </div>
</template>

<script>
import customNavBar from "@/components/nav"
export default {
  data () {
    return {
      isBack: false,
      image1: `https://cdn.iizhi.cn/mp/poster_1.png?timestamp=${new Date().getTime()}`,
      image2: `https://cdn.iizhi.cn/mp/poster_1.png?timestamp=${new Date().getTime()}`
    }
  },
  components: { customNavBar },
  onLoad (options) {
    this.isBack = !options.share
  },
  methods: {
    saveImageToAlbum (path) {
      const self = this
      wx.getSetting({
        success(res) {
          if (!res.authSetting['scope.writePhotosAlbum']) {
            wx.authorize({
              scope: 'scope.writePhotosAlbum',
              success () {
                self.downloadFile(path)
              },
              fail () {
                console.log('授权失败')
              }
            })
          } else {
            self.downloadFile(path)
          }
        }
      })
    },
    downloadFile (path) {
      wx.downloadFile({
        url: path,
        success: function (res) {
          if (res.statusCode === 200) {
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success(res) {
                wx.showToast({
                  title: '保存图片成功',
                  duration: 1500
                })
              },
              fail(res) {
                wx.showToast({
                  title: '保存图片失败',
                  duration: 1500
                })
              }
            })
          }
        }
      })
    },
  },
  onShareAppMessage () {
    return {
      title: `最全垃圾分类`,
      path: `/pages/table/main?share=1`
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  background-color: #f5f5f5;
  padding: 15px;
  text-align: center;
  .ad-item {
    border-radius: 6px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.08);
  }
  image {
    width: 100%;
    border-radius: 6px;
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.08);
  }
  button {
    margin-top: 20px;
    margin-bottom: 26px;
    position: relative;
    width: 200px;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    border-radius: 6px;
    background-color: #00F2A9;
    transition: all 0.1s;
    box-shadow: 0px 6px 0px #00B9A4;
    &:active {
      top: 4px;
    }
  }
}
</style>
