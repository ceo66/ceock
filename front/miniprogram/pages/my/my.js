var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userID:'',
    name:'',
    score:0
  },

login(){
  wx.navigateTo({
    url: '../login/login',
  })
},
register(){
  wx.navigateTo({
    url: '../register/register',
  })
},
toMyTree(){
  wx.navigateTo({
    url: '../myTree/myTree',
  })
},
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
toQuestion(){
  wx.navigateTo({
    url: '../question/question',
  })
},
toGoods(){
  wx.navigateTo({
    url: '../goods/goods',
  })
},
refresh(){
  var that=this;
  wx.request({
    url: 'http://localhost:8080/refresh',
    method:'POST',
    header:{
      'content-type':'application/x-www-form-urlencoded'
         },
    data:{
      'userId':that.data.userID
      },
    success:function(res){
      console.log(res);
      that.setData({
        score:res.data
      })
    }
  })
},
logout(){
  var that=this
  wx.showModal({
    title: '提示',
    content: '确定退出登录吗',
    success (res) {
      if (res.confirm) {
        app.globalData.userID='0001'
        that.onShow();
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
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
    this.setData({
      userID:app.globalData.userID,
      name:app.globalData.userName,
      score:app.globalData.userScore
    })
    this.refresh();
   // console.log('ddd'+app.globalData.userID)
   // console.log(this.data.userID);
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