// pages/tree/tree.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        treeList:[{id:'t001',name:'白皮松',price:500,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/tree/白皮松.jpg'},{id:'t002',name:'栓皮栎',price:1100,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/tree/栓皮栎.jpg'},{id:'t003',name:'油松',price:700,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/tree/油松.jpg'},{id:'t004',name:'雄株毛白杨',price:1500,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/tree/雄株毛白杨.jpg'}]
    },

    handleItem(e){
        console.log(e.currentTarget.dataset.treeitem);
        var treeItem=e.currentTarget.dataset.treeitem
          wx.showModal({
            title:'认养小树',
            content:'确定认养一株'+treeItem.name+"吗（价格为"+treeItem.price+"元）",
            cancelText:'取消',
            confirmText:'确定认养',
            success (res) {
              if (res.confirm) {
                  console.log('确定前往');
                  wx.request({
                    //url: 'http://192.168.0.104:8080/login',
                    url:'http://localhost:8080/addTree',
                    method:'POST',
                    header:{
                      'content-type':'application/x-www-form-urlencoded'
                    },
                    data:{
                      'treeType':treeItem.id,
                      'userId':app.globalData.userID
                    },
                    success:function(res){
                      console.log(res);
                      //console.log("回调函数"+res.data)
                      if(res.data.info='true'){
                        wx.showModal({
                          title:'认养成功',
                          content:'是否查看我的小树',
                          cancelText:'取消',
                          confirmText:'前往',
                          success (res) {
                            if (res.confirm) {
                                console.log('确定前往');
                                wx.navigateTo({
                                  url: '../myTree/myTree',
                                })
                              } else {
                                console.log('用户点击取消')
                              }
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
                } else {
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