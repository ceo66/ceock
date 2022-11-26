// pages/question/question.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        question:[
            {id:'q1',index:1,title:'所谓“低碳经济”是以低能耗、()、低污染为基础的经济发展模式。',answer:[{id:'a11',title:'A、低排放'},{id:'a12',title:'B、低标准'},{id:'a13',title:'C、低效率'}],rightAnswer:'a11'},
            {id:'q2',index:2,title:'造成气候变暖的主要原因是人类生产活动中排放大量（）等温室气体。',answer:[{id:'a21',title:'A、二氧化硫'},{id:'a22',title:'B、一氧化碳'},{id:'a23',title:'C、二氧化碳'}],rightAnswer:'a23'},
            {id:'q3',index:3,title:'从“低碳生活”角度，以下哪些是正确使用冰箱的做法？()',answer:[{id:'a31',title:'A、将温度高于室温的食品放入冰箱'},{id:'a32',title:'B、尽量减少开门次数'},{id:'a33',title:'C、经常把插头拔掉'}],rightAnswer:'a32'},
            {id:'q4',index:4,title:'煤烟型大气污染不包括由（）引起的污染。',answer:[{id:'a41',title:'A、烟尘'},{id:'a42',title:'B、粉尘'},{id:'a43',title:'C、二氧化硫'}],rightAnswer:'a42'},
            {id:'q5',index:5,title:'世界环境日为每年几月几日?()',answer:[{id:'a51',title:'A、3月12日'},{id:'a52',title:'B、3月21日'},{id:'a53',title:'C、6月5日'}],rightAnswer:'a53'},
            {id:'q6',index:6,title:'被称为感觉性公害的是()。',answer:[{id:'a61',title:'A、大气污染'},{id:'a62',title:'B、水污染'},{id:'a63',title:'C、噪声污染'}],rightAnswer:'a63'},
            {id:'q7',index:7,title:'草地在环境保护中具有（）的重要作用。',answer:[{id:'a71',title:'A、吸收二氧化碳产生氧气'},{id:'a72',title:'B、吸收二氧化硫产生氧气'},{id:'a73',title:'C、吸收一氧化碳产生氧气'}],rightAnswer:'a71'},
            {id:'q8',index:8,title:'居室中什么地方污染最重（）。',answer:[{id:'a81',title:'A、卧室'},{id:'a82',title:'B、洗手间'},{id:'a83',title:'C、厨房'}],rightAnswer:'a83'},
            {id:'q9',index:9,title:'下面属于可再生能源的是（）。',answer:[{id:'a91',title:'A、太阳能'},{id:'a92',title:'B、电力'},{id:'a93',title:'C、煤炭'}],rightAnswer:'a91'},
            {id:'q10',index:10,title:'全国统一的环保举报热线电话为（)。',answer:[{id:'a101',title:'A、12369'},{id:'a102',title:'B、12365'},{id:'a103',title:'C、12345'}],rightAnswer:'a101'},
            {id:'q11',index:11,title:'以下食品中铅含量最高的是()。',answer:[{id:'a111',title:'A、黄瓜'},{id:'a112',title:'B、松花蛋'},{id:'a113',title:'C、面包'}],rightAnswer:'a112'},
            {id:'q12',index:12,title:'人工合成色素的原料大部分是()。',answer:[{id:'a121',title:'A、植物'},{id:'a122',title:'B、煤焦油'},{id:'a123',title:'C、动物脂肪'}],rightAnswer:'a122'},
            {id:'q13',index:13,title:'能提高身体排污能力的食品是()。',answer:[{id:'a131',title:'A、高蛋白、高热量、高脂肪的食品'},{id:'a132',title:'B、粗粮、豆类、海藻'},{id:'a133',title:'C、各种饮料'}],rightAnswer:'a132'},
            {id:'q14',index:14,title:'以下哪种食品中所含致癌物质最多?()',answer:[{id:'a141',title:'A、水煮鱼'},{id:'a142',title:'B、烤羊肉串'},{id:'a143',title:'C、炒面'}],rightAnswer:'a142'},
            {id:'q15',index:15,title:'低碳能源主要包括（）。',answer:[{id:'a151',title:'A、水能'},{id:'a152',title:'B、核能'},{id:'a153',title:'C、电能'}],rightAnswer:'a151'},
        ],
        result:[
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ],
        questionR:[
          {id:'q1',index:1,title:'所谓“低碳经济”是以低能耗、()、低污染为基础的经济发展模式。',answer:[{id:'a11',title:'A、低排放'},{id:'a12',title:'B、低标准'},{id:'a13',title:'C、低效率'}],rightAnswer:'a11'},
            {id:'q2',index:2,title:'造成气候变暖的主要原因是人类生产活动中排放大量（）等温室气体。',answer:[{id:'a21',title:'A、二氧化硫'},{id:'a22',title:'B、一氧化碳'},{id:'a23',title:'C、二氧化碳'}],rightAnswer:'a23'},
            {id:'q3',index:3,title:'从“低碳生活”角度，以下哪些是正确使用冰箱的做法？()',answer:[{id:'a31',title:'A、将温度高于室温的食品放入冰箱'},{id:'a32',title:'B、尽量减少开门次数'},{id:'a33',title:'C、经常把插头拔掉'}],rightAnswer:'a32'},
            {id:'q4',index:4,title:'煤烟型大气污染不包括由（）引起的污染。',answer:[{id:'a41',title:'A、烟尘'},{id:'a42',title:'B、粉尘'},{id:'a43',title:'C、二氧化硫'}],rightAnswer:'a42'},
            {id:'q5',index:5,title:'世界环境日为每年几月几日?()',answer:[{id:'a51',title:'A、3月12日'},{id:'a52',title:'B、3月21日'},{id:'a53',title:'C、6月5日'}],rightAnswer:'a53'},
        ]
    },

    handleRight({detail}){
        var str;
        var re;
        var that=this;
        var sum=0;
        if(detail.length==3){
            str=detail.slice(1,2)
            re=detail.slice(2,3)
        }else{
            str=detail.slice(1,3)
            re=detail.slice(3,4)
        }
        //console.log(str);
        //console.log(re);
        if(re=='t'){
            that.data.result[str-1]=1
        }else{
            that.data.result[str-1]=0
        }
        
    },
    submit(){
        var that=this;
        var sum=0;
        for (let index = 0; index < that.data.result.length; index++) {
            sum=sum+that.data.result[index]
        }
        console.log(sum);
        wx.showModal({
            title:'知识科普',
            content:'正确题目数为:'+sum,
            cancelText:'取消',
            confirmText:'确定提交',
            success (res) {
                if (res.confirm) {
                    console.log('确定提交');
                    wx.request({
                      url: 'http://localhost:8080/question',
                      method:'POST',
                      header:{
                        'content-type':'application/x-www-form-urlencoded'
                      },
                      data:{
                        'score':sum*0.5,
                        'userId':app.globalData.userID
                      },
                      success(res){
                        console.log(res);
                        wx.showToast({
                            title: '获取到'+sum*0.5+"碳积分",
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
    },
    getQuestion(){
      var questionA=this.data.question;
      var question1=[];
      var item=Object;
      var that=this;
      console.log(that.data.question);
      for (let index = 0; index < 5; index++) {
        item=questionA[Math.floor((Math.random()*questionA.length))];
        questionA.splice(index,1);
        item.index=index+1
        question1.push(item)
      }
      console.log(that.data.question);
      that.setData({
        questionR:question1
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      //this.getQuestion();
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