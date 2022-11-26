// pages/login/login.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    password:""
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

  },

  // 获取输入账号 
 usernameInput: function (e) {
  this.setData({
    username: e.detail.value
  })
},

// 获取输入密码 
passwordInput: function (e) {
  this.setData({
    password: e.detail.value
  })
},

login(){
  console.log("点击按钮!" + "获取到的用户名:" + this.data.username + "获取到的密码:" + this.data.password)
        var that = this
        wx.request({
        // url: 'http:/192.168.1.193:8080/login',
         url:'http://localhost:8080/login',
         method:'POST',
         header:{
           'content-type':'application/x-www-form-urlencoded'
         },
         data:{
           'username':that.data.username,
           'password':that.data.password
         },
         success:function(res){
           console.log(res);
           //console.log("回调函数"+res.data)
           if(res.data.id == '0001'){
            wx.showToast({
              title: '登陆失败',
              duration:2000
            })
           }else{
             app.globalData.userID=res.data.id
             app.globalData.userScore=res.data.score
             app.globalData.userName=res.data.username
             console.log("aa:"+app.globalData.userID);
             wx.showToast({
               title: '登陆成功',
               duration:2000
             })
             wx.switchTab({
               url: '../my/my',
             })
           }
         }

       })
      },

test(){
  wx.login({
    success:function(res){
      console.log(res.code)
      //发送请求
      wx.request({
        url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=APPSECRET&js_code=CODE&grant_type=authorization_code', //接口地址
        data: {code:res.code},
        header: {
          'content-type': 'application/json' //默认值
        },
        success: function (res) {
          console.log(res.data)
        }
      })
    }
  })
},


})