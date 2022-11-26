// pages/zshop/zshop.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        zshopList:[{id:1,name:'工业制品',text:1000,price:30,number:5,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区购物/工业制品.jpg'},{id:2,name:'手工艺制品',text:600,number:40,price:40,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区购物/手工艺制品.jpg'},{id:3,name:'食品加工产品',text:550,price:20,number:20,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区购物/食品加工产品.jpg'}],
        form:2,
        weight:0,
        box:0,
        bag:0,
        method:0,
        distance:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    orSend(e){
        //console.log(e);
        this.setData({
            form:e.detail.value
        })
    },
    weightInput(e){
        this.setData({
          weight:e.detail.value
        })
    },
    boxInput(e){
        this.setData({
          box:e.detail.value
        })
    },
    bagInput(e){
        this.setData({
          bag:e.detail.value
        })
    },
    distanceInput(e){
        this.setData({
            distance:e.detail.value
        })
    },
    sendMethod(e){
        this.setData({
            method:e.detail.value
        })
    },
    handleItem({detail}){
        console.log(detail);
        var that=this
        if(that.data.form==3){
            wx.showToast({
              title: '请选择自提或配送',
              icon:'none'
            })
        }else if(that.data.form==1){
            if(that.data.distance==0||that.data.distance==''){
                wx.showToast({
                  title: '请输入配送距离',
                  icon:'none'
                })
            }else if(that.data.method==0){
                wx.showToast({
                  title: '请选择配送方式',
                  icon:'none'
                })
            }else{
                console.log(11);
                wx.request({
                    //url: 'http://192.168.0.104:8080/login',
                    url:'http://localhost:8080/area/shop',
                    method:'POST',
                    header:{
                      'content-type':'application/x-www-form-urlencoded'
                    },
                    data:{
                      'goods':detail.name,
                      'weight':that.data.weight,
                      'box':that.data.box,
                      'bag':that.data.bag,
                      'distance':that.data.distance,
                      'method':that.data.method,
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
            }
        } else{
            // wx.showToast({
            //   title: '购买成功',
            //   icon:'success'
            // })
            wx.showModal({
              title:'选择成功',
              content:detail.name+'的碳排放量为:'+detail.number+"kg",
              cancelText:'取消',
              confirmText:'确定选择',
              success (res) {
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
              }
            })
        }
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