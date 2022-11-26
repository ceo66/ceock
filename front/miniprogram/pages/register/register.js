const app=getApp();
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

register(){
  console.log("点击按钮!" + "获取到的用户名:" + this.data.username + "获取到的密码:" + this.data.password)
        var that = this
        wx.request({
        //  url: 'http://192.168.0.104:8080/register',
         url:'http://localhost:8080/register',
         method:'POST',
         header:{
           'content-type':'application/x-www-form-urlencoded'
         },
         data:{
           'username':that.data.username,
           'password':that.data.password
         },
         success:function(res){
           console.log("回调函数"+res.data)
           console.log("ss"+res.data=='false')
           if(res.data == false){
            wx.showToast({
              title: '注册失败',
              duration:2000
            })
           }else{
             app.globalData.userId=res.data
             //console.log(app.globalData.userId);
            //  wx.showToast({
            //    title: '注册成功',
            //    duration:2000
            //  })
             wx.showModal({
              title: '注册成功',
              content: '是否前往用户主页',
              success (res) {
                if (res.confirm) {
                  wx.switchTab({
                    url: '../my/my',
                  })
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
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