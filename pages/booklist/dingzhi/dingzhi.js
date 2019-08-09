// pages/booklist/dingzhi/dingzhi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   suiji1: 0,
   suiji2: 0,
   suiji3: 0,
   suiji4: 0,
   suiji5: 0
  },

  /**
   * 生命周期函数--监听页面加载---设置随机数
   */
  onLoad: function (options) {
    var random1 = Math.floor(Math.random() * 100);
    var random2 = Math.floor(Math.random() * 100);
    var random3 = Math.floor(Math.random() * 100);
    var random4 = Math.floor(Math.random() * 100);
    var random5 = Math.floor(Math.random() * 100);
    this.setData({
      suiji1: random1,
      suiji2: random2,
      suiji3: random3,
      suiji4: random4,
      suiji5: random5
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