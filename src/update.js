const updateManager = wx.getUpdateManager()

updateManager.onCheckForUpdate(function (res) {
  console.log(res)
})

updateManager.onUpdateReady(function () {
  wx.showModal({
    title: '更新提示',
    content: '新版本已经准备好，是否重启应用？',
    success: function (res) {
      if (res.confirm) {
        updateManager.applyUpdate()
      }
    }
  })
})

updateManager.onUpdateFailed(function () {
  console.log('新版本下载失败')
})
