// pages/zlist/zlist.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
           zfoodList:[{id:1,name:'奶酪条',text:1000,price:10,number:13.5,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区餐饮/奶酪条.jpg'},{id:2,name:'无糖冰茶',price:12,text:600,number:0.1,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区餐饮/无糖冰茶.jpg'},{id:3,name:'无糖杏仁奶',text:550,price:14,number:0.3,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区餐饮/无糖杏仁奶.jpg'},{id:4,name:'普通希腊酸奶',text:300,price:16,number:1.8,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区餐饮/普通希腊酸奶.jpg'}],

           ztrastationList:[{id:1,name:'步行',text:1000,price:0,number:0.001,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区交通/步行.jpg'},{id:2,name:'电瓶车',text:600,price:20,number:0.0975,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区交通/电瓶车.jpg'},{id:3,name:'索道',text:350,price:50,number:0.3383,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区交通/索道.jpg'},{id:4,name:'自行车',text:900,price:10,number:0.005,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区交通/自行车.jpg'}],

           zliveList:[{id:1,name:'房车',text:400,price:1000,number:2.68,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区住宿/房车.jpg'},{id:2,name:'民宿',text:600,price:200,number:2.51,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区住宿/民宿.jpg'},{id:3,name:'经济型酒店',text:750,price:200,number:3.35,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区住宿/经济型酒店.jpg'},{id:4,name:'舒适型酒店',text:400,price:300,number:5.86,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区住宿/舒适型酒店.jpg'}],

           zvisitList:[{id:1,name:'宗教',text:1000,price:10,number:0.417,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区游览/宗教.jpg'},{id:2,name:'摩托艇',text:600,price:120,number:0.8,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区游览/摩托艇.jpg'},{id:3,name:'温泉',text:550,price:100,number:0.417,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区游览/温泉.jpg'},{id:4,name:'游乐场',text:300,price:150,number:1.2,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区游览/游乐场.jpg'}],
           zshopList:[{id:1,name:'工业制品',text:1000,price:30,number:-1,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区购物/工业制品.jpg'},{id:2,name:'手工艺制品',text:600,number:-1,price:40,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区购物/手工艺制品.jpg'},{id:3,name:'食品加工产品',text:550,price:20,number:-1,path:'cloud://cloud1-1ggq1xwm698c7bd4.636c-cloud1-1ggq1xwm698c7bd4-1307039632/images/景区购物/食品加工产品.jpg'}]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    tozfood(){
        wx.navigateTo({
          url: '../zfood/zfood',
        })
    },
    toztrastation(){
        wx.navigateTo({
          url: '../ztrastation/ztrastation',
        })
    },
    tozlive(){
        wx.navigateTo({
          url: '../zlive/zlive',
        })
    },
    tozvisit(){
        wx.navigateTo({
          url: '../zvisit/zvisit',
        })
    },
    tozshop(){
        wx.navigateTo({
          url: '../zshop/zshop',
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