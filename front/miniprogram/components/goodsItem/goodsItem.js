// components/goodsItem/goodsItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsItem:Object
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
    handleDetail(options){
      //console.log(options.currentTarget.dataset.id)
      this.triggerEvent("goodsId",options.currentTarget.dataset.id)
    }
  }
})
