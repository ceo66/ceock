// components/questionItem/questionItem.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        questionItem:Object
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
        radioChange(e) {
           // console.log(e);
           // console.log('答案ID:'+e.detail.value);
            var questionItem=e.currentTarget.dataset.questionitem
           // this.triggerEvent("questionId",e.currentTarget.dataset.questionid)
            //this.triggerEvent("answerId",e.detail.value)
           // console.log(questionItem);
            if(e.detail.value==questionItem.rightAnswer){
                    this.triggerEvent("right",questionItem.id+'t')
            }else{
                this.triggerEvent("right",questionItem.id+'e')
            }
        }
    }
})
