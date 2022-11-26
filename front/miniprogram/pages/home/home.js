var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  toTransportation(){
    wx.navigateTo({
      url: '../transportation/transportation',
    })
  },
  toArea(){
    wx.navigateTo({
      url: '../zlist/zlist',
    })
  },
  toShop(){
    wx.navigateTo({
      url: '../goods/goods',
    })
  },
  toCompensating(){
    wx.navigateTo({
      url: '../compensation/compensation',
    })
  },
  toQuestion(){
    wx.navigateTo({
      url: '../question/question',
    })
  },
  toTotallist(){
    wx.navigateTo({
      url: '../totallist/totallist',
    })
  },
  onLoad: function (options) {

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
    console.log(app.globalData.userID);
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