// pages/goods/goods.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList:[]
  },
  handleId({detail}){
    console.log(detail);
    wx.request({
      //url: 'http://192.168.0.104:8080/buyGoods',
      url:'http://localhost:8080/queryGoods',
      method:'POST',
      header:{
        'content-type':'application/x-www-form-urlencoded'
      },
      data:{
        'goodsId':detail,
      },
      success(res){
        console.log(res);
        var goodsScore=res.data
        wx.showModal({
          title:'确定购买吗',
          content:'此商品售价'+res.data+'碳积分',
          success (res) {
            if (res.confirm) {
              console.log('确定购买');
              wx.request({
                url: 'http://localhost:8080/buyGoods',
                method:'POST',
                header:{
                  'content-type':'application/x-www-form-urlencoded'
                },
                data:{
                  'score':goodsScore,
                  'userId':app.globalData.userID
                },
                success(res){
                  console.log(res);
                  if(res.data.info=='true'){
                    wx.showToast({
                      title: '成功购买，花费'+goodsScore+"碳积分",
                      icon:'none',
                      duration:1000,
                      mask:true,
                    })
                  }else if(res.data.info=='1111'){
                    wx.showModal({
                      title:'失败',
                      content:'请先进行碳排放行为',
                      cancelText:'取消',
                      confirmText:'前往',
                      success (res) {
                        if (res.confirm) {
                            console.log('确定前往');
                            wx.switchTab({
                              url: '../home/home',
                            })
                          } else {
                            console.log('用户点击取消')
                          }
                    }
                    })
                  }else if(res.data.info=='0001'){
                    wx.showModal({
                      title:'失败',
                      content:'请先进行交通碳排放行为',
                      cancelText:'取消',
                      confirmText:'前往',
                      success (res) {
                        if (res.confirm) {
                            console.log('确定前往');
                            wx.navigateTo({
                              url: '../transportation/transportation',
                            })
                          } else {
                            console.log('用户点击取消')
                          }
                    }
                    })
                  }else if(res.data.info=='0002'){
                    wx.showModal({
                      title:'失败',
                      content:'请先进行景区碳排放行为',
                      cancelText:'取消',
                      confirmText:'前往',
                      success (res) {
                        if (res.confirm) {
                            console.log('确定前往');
                            wx.navigateTo({
                              url: '../zlist/zlist',
                            })
                          } else {
                            console.log('用户点击取消')
                          }
                    }
                    })
                  }else if(res.data.info=='0003'){
                    wx.showModal({
                      title:'碳积分不足',
                      content:'可以进行碳补偿获取碳积分',
                      cancelText:'取消',
                      confirmText:'前往',
                      success (res) {
                        if (res.confirm) {
                            console.log('确定前往');
                            wx.navigateTo({
                              url: '../compensation/compensation',
                            })
                          } else {
                            console.log('用户点击取消')
                          }
                    }
                    })
                  }else{
                    console.log("hhh");
                  }
                }
              })
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.request({
      url: 'http://localhost:8080/queryAllGoods',
      method:'GET',
      success(res){
        console.log(res);
        that.setData({
          goodsList:res.data.data
        })
        console.log(that.data.goodsList);
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