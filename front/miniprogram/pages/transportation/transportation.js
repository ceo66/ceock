// pages/transportation/transportation.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    distance:0,
    method:0
  },

  distanceInput(e){
    this.setData({
      distance:e.detail.value
    })
  },
  select(options){
    var that=this;
    if(this.data.distance!=0){
      console.log(options.currentTarget.dataset.method);
      this.setData({
        method:options.currentTarget.dataset.method
      })
      wx.request({
        //url: 'http://192.168.0.104:8080/login',
        url:'http://localhost:8080/transportation',
        method:'POST',
        header:{
          'content-type':'application/x-www-form-urlencoded'
        },
        data:{
          'distance':that.data.distance,
          'method':that.data.method
        },
        success:function(res){
          console.log(res);
          //console.log("回调函数"+res.data)
          if(res.data.status=='true'){
            var score=res.data.data
            wx.showModal({
              title:'选择成功',
              content:'本次行为碳排放量为:'+res.data.data+"kg",
              cancelText:'取消',
              confirmText:'确定计算',
              success (res) {
                if (res.confirm) {
                  console.log('确定计算');
                  wx.request({
                    url: 'http://localhost:8080/addTransportationScore',
                    method:'POST',
                    header:{
                      'content-type':'application/x-www-form-urlencoded'
                    },
                    data:{
                      'score':score,
                      'userId':app.globalData.userID
                    },
                    success(res){
                      console.log(res);
                      wx.showToast({
                        title: '扣除'+score*0.5+"碳积分",
                        icon:'none',
                        duration:1000,
                        mask:true,
                        success:function(){
                            setTimeout(function(){
                                wx.navigateBack({
                                  delta: 1,
                                })
                            },1000)
                        }
                      })
                      // wx.navigateBack({
                      //   delta:1
                      // })
                    }
                  })
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            })
          }else{
            wx.showToast({
              title: '请输入正确的距离',
            })
          }
        }

      })
    }else{
      wx.showToast({
        title: '请先输入距离',
      })
    }
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

  }
})