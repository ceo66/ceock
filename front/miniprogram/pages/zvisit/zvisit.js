// pages/zvisit/zvisit.js
const app=getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
       zvisitList:[{id:1,name:'宗教',text:1000,price:10,number:0.417,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区游览/宗教.jpg'},{id:2,name:'摩托艇',text:600,price:120,number:0.8,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区游览/摩托艇.jpg'},{id:3,name:'温泉',text:550,price:100,number:0.417,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区游览/温泉.jpg'},{id:4,name:'游乐场',text:300,price:150,number:1.2,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区游览/游乐场.jpg'},{id:5,name:'游泳潜水',text:700,price:300,number:0.5,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区游览/游泳潜水.jpg'},{id:6,name:'游船',text:400,price:500,number:0.7,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区游览/游船.jpg'},{id:7,name:'爬山',text:350,price:50,number:0.288,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区游览/爬山.jpg'},{id:8,name:'索道',text:150,price:50,number:0.72336,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区游览/索道.jpg'},{id:9,name:'自然观光',text:450,price:30,number:0.417,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区游览/自然观光.jpg'}]
    },

    handleItem({detail}){
        console.log(detail);
        wx.showModal({
            title:'选择成功',
            content:detail.name+'的碳排放量为:'+detail.number+"kg",
            cancelText:'取消',
            confirmText:'确定选择',
            success (res) {
              if (res.confirm) {
                console.log('确定选择');
                wx.request({
                    //url: 'http://192.168.0.104:8080/login',
                    url:'http://localhost:8080/area/playing',
                    method:'POST',
                    header:{
                      'content-type':'application/x-www-form-urlencoded'
                    },
                    data:{
                      'ratio':detail.number,
                      'amount':1,
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