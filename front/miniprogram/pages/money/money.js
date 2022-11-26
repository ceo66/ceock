// pages/money/money.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name:'',
        phone:'',
        money:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
     nameInput(e){
         //console.log(e.detail.value);
         this.setData({
             name:e.detail.value
         })
     },
     phoneInput(e){
        //console.log(e.detail.value);
        this.setData({
            phone:e.detail.value
        })
    },
    moneySubmit(e){
        var that=this
        if(that.data.name==''||that.data.phone==''||that.data.money==0){
            wx.showToast({
              title: '姓名、电话以及赞助金额不能为空',
              icon:'none'
            })
        }else{

            wx.showModal({
                title:'填写成功',
                content:"赞助金额为:"+that.data.money,
                cancelText:'取消',
                confirmText:'确定赞助',
                success (res) {
                  if (res.confirm) {
                    console.log('确定选择');
                    wx.request({
                        //url: 'http://192.168.0.104:8080/login',
                        url:'http://localhost:8080/addScore',
                        method:'POST',
                        header:{
                          'content-type':'application/x-www-form-urlencoded'
                        },
                        data:{
                          'money':that.data.money,
                          'name':that.data.name,
                          'phone':that.data.phone,
                          'userId':app.globalData.userID
                        },
                        success:function(res){
                          console.log(res);
                          //console.log("回调函数"+res.data)
                          if(res.data.info=='true'){
                            wx.showToast({
                              title: '赞助成功，获取到'+that.data.money*0.3+"碳积分",
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
                          }else{
                              wx.showToast({
                                title: '失败',
                                icon:'error'
                              })
                          }
                        }
                      })
                  } else if (res.cancel) {
                    console.log('用户点击取消')
                  }
                }
              })
        }
    },
    moneyInput(e){
        //console.log(e.detail.value);
        this.setData({
            money:e.detail.value
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