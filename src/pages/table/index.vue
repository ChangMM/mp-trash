<template>
  <div class="container">
    <image :src="image1" mode="widthFix" />
    <button type="button" @click="saveImageToAlbum(image1)">保存图片到相册</button>
    <image :src="image2" mode="widthFix" />
    <button type="button" class="last" @click="saveImageToAlbum(image2)">保存图片到相册</button>
    <back/>
  </div>
</template>

<script>
import back from '@/components/back'
export default {
  data () {
    return {
      image1: `https://cdn.iizhi.cn/mp/poster_1.png?timestamp=${new Date().getTime()}`,
      image2: `https://cdn.iizhi.cn/mp/poster_1.png?timestamp=${new Date().getTime()}`
    }
  },
  components: { back },
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
    onShareAppMessage () {
      return {
        title: `垃圾分类常用图表`,
        path: `/pages/table/main?share=1`
      }
    }
  },
  onShareAppMessage () {
    return {
      title: `常用垃圾分类表`,
      path: `/pages/table/main?share=1`
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  background-color: #f5f5f5;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  image {
    width: 90%;
    border-radius: 6px;
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.08);
  }
  button {
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: #F5A623;
    color: #fff;
    border-radius: 30px;
    width: 180px;
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.08);
    &.last {
      margin-bottom: 0;
    }
  }
}
</style>
