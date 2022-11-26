// pages/ztrastation/ztrastation.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
         ztrastationList:[{id:1,name:'步行',text:1000,price:0,number:0.001,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区交通/步行.jpg'},{id:2,name:'电瓶车',text:600,price:20,number:0.0975,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区交通/电瓶车.jpg'},{id:3,name:'索道',text:350,price:50,number:0.3383,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区交通/索道.jpg'},{id:4,name:'自行车',text:900,price:10,number:0.005,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区交通/自行车.jpg'},{id:5,name:'观光车',price:30,text:400,number:0.018,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区交通/观光车.jpg'}],
         distance:10
    },
    distanceInput(e){
        this.setData({
          distance:e.detail.value
        })
      //  console.log(this.data.distance);
      },

      handleItem({detail}){
          console.log(detail);
          var that=this;
    if(this.data.distance!=0||this.data.distance!=''){
      wx.showModal({
        title:'选择成功',
        content:detail.name+'的碳排放量为:'+detail.number*that.data.distance+"kg",
        cancelText:'取消',
        confirmText:'确定选择',
        success (res) {
          if (res.confirm) {
            console.log('确定选择');
            wx.request({
                //url: 'http://192.168.0.104:8080/login',
                url:'http://localhost:8080/area/traffic',
                method:'POST',
                header:{
                  'content-type':'application/x-www-form-urlencoded'
                },
                data:{
                  'ratio':detail.number,
                  'distance':that.data.distance,
                  'userId':app.globalData.userID
                },
                success:function(res){
                  console.log(res);
                  //console.log("回调函数"+res.data)
                  if(res.data.info='true'){
                    wx.showToast({
                      title: '选择成功',
                      icon:'success',
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
                        title: '选择失败',
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