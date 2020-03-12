// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topBanner:[],
    btmBanner:[],
    bannerarr:[
      "/img/banner.png",
      "/img/25.png",
      "/img/12.png",
    ],
    bottomarr:[
      "/img/25.png",
      "/img/8.png",
      "/img/12.png",
    ],
    navarr:[
      {
        url:"/pages/logs/logs",
        text:"餐宴",
        img:"/img/5.png"
      },
      {
        url: "/pages/logs/logs",
        text: "名厨",
        img: "/img/7.png"
      },
      {
        url: "/pages/logs/logs",
        text: "坝坝宴",
        img: "/img/4.png"
      },
      {
        url: "/pages/logs/logs",
        text: "餐饮周边",
        img: "/img/6.png"
      },
    ],
    cookarr:[
      {
        header:"/img/cook.jpg",
        name:"黎晨晨",
        star:3
      },
      {
        header: "/img/cook1.jpg",
        name: "閤艳艳",
        star: 5
      },
      {
        header: "/img/cook2.jpg",
        name: "付蓓蓓",
        star: 4
      },
    ],
    banquetarr:[
      {
        url:"/img/25.png",
        name:"盛夏海鲜套餐",
        price:4999
      },
      {
        url: "/img/12.png",
        name: "龙虾套餐",
        price: 3999
      },
      {
        url: "/img/31.png",
        name: "满汉全席",
        price: 19999
      },


    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that= this;
    //首页顶部轮播图，id=1
    wx.request({
      url: 'http://localhost:8080/shx/shx/banner',
      data: {
        id:1
      },
      success(result) {
        console.log("result")
        console.log(result)
          that.setData({
            topBanner:result.data.imgs
          })
          //imgUrl
      }
    })
    //首页底部轮播图，id=2
    wx.request({
      url: 'http://localhost:8080/shx/shx/banner',
      data: {
        id: 2
      },
      success(result) {
        console.log("result")
        console.log(result)
        that.setData({
          btmBanner: result.data.imgs
        })
        //imgUrl
      }
    })
    //厨师top3
    wx.request({
      url: 'http://localhost:8080/shx/shx/cook/top3',
      success(result) {
        console.log("===top3===")
        console.log(result)
        that.setData({
          cookarr: result.data
        })
        //imgUrl
      }
    })

    //餐宴top3
    wx.request({
      url: 'http://localhost:8080/shx/shx/banquest/top3',
      success(result){
        console.log("===banquesttop3===")
        console.log(result)
        //banquetarr
        that.setData({
          banquetarr: result.data
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