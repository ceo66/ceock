// components/zitem/zitem.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
         zitem:Object
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        taptap(){
            // wx.showToast({
            //     title: '选择成功',
            //     icon: 'success',
            //     duration: 1000 //持续的时间
            //   })
            //console.log(this.data.zitem) 
            this.triggerEvent("zItem",this.data.zitem)
        }
    }
})
