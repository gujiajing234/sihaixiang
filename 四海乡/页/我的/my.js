// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname:"天下第壹吃货",
    header:"/img/24.png",
    navarr:[
      {
        icon: "/img/32.png",
        text: "烹饪历史",
        url:"/pages/logs/logs"
      },
      {
        icon: "/img/33.png",
        text: "支付界面",
        url: "/pages/logs/logs"
      },
      {
        icon: "/img/34.png",
        text: "举报投诉",
        url: "/pages/logs/logs"
      }
      

    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'user',
      success(res) {
     
        that.setData({
          nickname: res.data.nickName,
          header:res.data.avatarUrl
        })
      }
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