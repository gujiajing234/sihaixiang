// pages/star/star.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log("==============")
              console.log(res.userInfo)
              
              //跳转界面
              wx.switchTab({
                url: '/pages/main/main'
              })

            }
          })
        }
      }
    })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
    var nickName = e.detail.userInfo.nickName;
    var avatarUrl = e.detail.userInfo.avatarUrl;
    var shxuserinfo = {
      nickName:nickName,
      avatarUrl: avatarUrl
    }
    wx.setStorage({
      key: "user",
      data: shxuserinfo
    })
    //微信登录
    wx.login({
      success(res) {
        if (res.code) {
          //发起网络请求
          console.log("res.code")
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data: {
              appid:'wx30f6b0b11d264ea7',
              secret:'14e8a45e296c01d1a32b28e5a00e2f66',
              js_code: res.code,
              grant_type:"authorization_code"
            },
             success(result) {
              console.log(result)
               console.log(result.data.openid)
               wx.request({
                url: 'http://localhost:8080/shx/shx/login',
                data: {
                openId: result.data.openid,
                nickname:nickName,
                headerImg: avatarUrl
                },
                success(result){
                  console.log("result")
                  console.log(result)

                  wx.setStorage({
                    key: "openid",
                    data: result.data.openId
                  })
                }
              })
            }
          })
          // wx.request({
          //   url: 'http://localhost:8080/shx/shx/login',
          //   data: {
          //   openId: res.code,
          //   nickname:nickName,
          //   headerImg: avatarUrl
          //   },
          //   success(result){
          //     console.log("result")
          //     console.log(result)
          //   }
          // })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

    //跳转界面
    wx.switchTab({
      url: '/pages/main/main'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})