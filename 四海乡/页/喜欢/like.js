// pages/like/like.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:"",
    num:0,
    list:[
      {
        img:"/img/25.png",
        fire:"18888",
        name:"盛夏海鲜家宴",
        price:"4999"
      },
      {
        img: "/img/12.png",
        fire: "26888",
        name: "小龙虾家宴",
        price: "3999"
      },
      {
        img: "/img/31.png",
        fire: "9888",
        name: "满汉全席",
        price: "19999"
      },

    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'openid',
      success: function(res) {

        that.setData({
          openid:res.data
        })

        wx.request({
          url: 'http://localhost:8080/shx/shx/wish/findByOpenId',
          data: {
            openId: res.data
          }, 
          success(result) {
            console.log("心愿单")
            console.log(result.data)

            that.setData({
              num: result.data.length,
              list:result.data
            })
          }
        })

      },
    })
    
  },
  //清空事件
  del:function(){
    console.log("===清空===")
    var that = this;
    wx.request({
      url: 'http://localhost:8080/shx/shx/wish/deleteByOpenId',
      data: {
        openId: that.data.openid
      },
      success(result) {
        console.log("心愿单")
        console.log(result.data)

        that.setData({
          num: result.data.length,
          list: result.data
        })
      }
    })

    var that = this;
    that.setData({
      num:0,
      list:[]
    })
  },
  //取消事件
  cancel:function(e){
    console.log("===清空===")
    console.log(e)
    console.log(e.currentTarget.dataset.banquetId)
    var that = this
    wx.request({
      url: 'http://localhost:8080/shx/shx/wish/deleteById',
      data:{
        id: e.currentTarget.dataset.banquetId
      },
      success(){
        that.onLoad()
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