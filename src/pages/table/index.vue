<template>
  <div class="container">
    <image src="https://cdn.iizhi.cn/mp/poster_1.png" mode="widthFix" />
    <button type="button" @click="saveImageToAlbum('https://cdn.iizhi.cn/mp/poster_1.png')">保存图片到相册</button>
    <image src="https://cdn.iizhi.cn/mp/poster_2.png" mode="widthFix" />
    <button type="button" class="last" @click="saveImageToAlbum('https://cdn.iizhi.cn/mp/poster_2.png')">保存图片到相册</button>
    <back/>
  </div>
</template>

<script>
import back from '@/components/back'
export default {
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
    width: 95%;
    border-radius: 6px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  button {
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: #F5A623;
    color: #fff;
    border-radius: 30px;
    width: 200px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    &.last {
      margin-bottom: 0;
    }
  }
}
</style>
