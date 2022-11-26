// pages/zlive/zlive.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        zliveList:[{id:1,name:'房车',text:400,price:1000,number:2.68,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区住宿/房车.jpg'},{id:2,name:'民宿',text:600,price:200,number:7.51,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区住宿/民宿.jpg'},{id:3,name:'经济型酒店',text:750,price:200,number:3.35,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区住宿/经济型酒店.jpg'},{id:4,name:'舒适型酒店',text:400,price:300,number:5.86,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区住宿/舒适型酒店.jpg'},{id:5,name:'豪华型酒店',text:100,price:600,number:9.21,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区住宿/豪华型酒店.jpg'},{id:6,name:'露营',text:600,price:150,number:2.09,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区住宿/露营.jpg'}],
        day:0
    },
    dayInput(e){
        this.setData({
          day:e.detail.value
        })
      //  console.log(this.data.day);
      },

    handleItem({detail}){
     // console.log(detail);
     var that=this;
    if(this.data.day!=0||this.data.day!=''){
      wx.showModal({
        title:'选择成功',
        content:detail.name+'的碳排放量为:'+detail.number*that.data.day+"kg",
        cancelText:'取消',
        confirmText:'确定选择',
        success (res) {
          if (res.confirm) {
            console.log('确定选择');
            wx.request({
                //url: 'http://192.168.0.104:8080/login',
                url:'http://localhost:8080/area/sleeping',
                method:'POST',
                header:{
                  'content-type':'application/x-www-form-urlencoded'
                },
                data:{
                  'ratio':detail.number,
                  'day':that.data.day,
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
        title: '请先输入居住天数',
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