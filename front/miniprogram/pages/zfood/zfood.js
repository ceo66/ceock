// pages/zfood/zfood.js
const app=getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
         zfoodList:[{id:1,name:'奶酪条',text:1000,price:10,number:13.5,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区餐饮/奶酪条.jpg'},{id:2,name:'无糖冰茶',price:12,text:600,number:0.1,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区餐饮/无糖冰茶.jpg'},{id:3,name:'无糖杏仁奶',text:550,price:14,number:0.3,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区餐饮/无糖杏仁奶.jpg'},{id:4,name:'普通希腊酸奶',text:300,price:16,number:1.8,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区餐饮/普通希腊酸奶.jpg'},{id:5,name:'樱桃番茄',text:700,price:18,number:1.1,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区餐饮/樱桃番茄.jpg'},{id:6,name:'燕麦',text:400,price:20,number:0.81,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区餐饮/燕麦.jpg'},{id:7,name:'番茄汁',text:350,price:22,number:0.6,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区餐饮/番茄汁.jpg'},{id:8,name:'白肉',text:150,price:24,number:1.5,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区餐饮/白肉.jpg'},{id:9,name:'糙米',text:450,price:26,number:2.5,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区餐饮/糙米.jpg'},{id:10,name:'紫薯',text:450,price:16,number:0.474,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区餐饮/紫薯.jpg'},{id:11,name:'红薯',text:450,price:8,number:0.474,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区餐饮/红薯.jpg'},{id:12,name:'红西柚',text:250,price:30,number:0.8,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区餐饮/红西柚.jpg'},{id:13,name:'羽衣甘蓝脆片',text:150,price:12,number:0.3,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区餐饮/羽衣甘蓝脆片.jpg'},{id:14,name:'肉干',text:350,price:24,number:12.1,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区餐饮/肉干.jpg'},{id:15,name:'魔芋面条',text:1150,price:8,number:0.5,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区餐饮/魔芋面条.jpg'},{id:16,name:'鸡腿',price:12,text:100,number:144,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区餐饮/鸡腿.jpg'}],
    },

    handleItem({detail}){
        console.log(detail);
        wx.showModal({
            title:'选择成功',
            content:detail.name+'的碳排放量为:'+detail.number*0.3+"kg",
            cancelText:'取消',
            confirmText:'确定选择',
            success (res) {
              if (res.confirm) {
                console.log('确定选择');
                wx.request({
                    //url: 'http://192.168.0.104:8080/login',
                    url:'http://localhost:8080/area/food',
                    method:'POST',
                    header:{
                      'content-type':'application/x-www-form-urlencoded'
                    },
                    data:{
                      'ratio':detail.number,
                      'amount':0.3,
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
        console.log(this.data.zfoodlist)
    },
    taptap(){
        wx.showToast({
            title: '选购成功',
            icon: 'success',
            duration: 1000 //持续的时间
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