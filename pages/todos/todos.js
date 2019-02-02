Page({
      data:{
      new:'',
      todos:[
        {name:'Learning JavaScript',completed:false },
        {name:'Learning WEAPP',completed:true },
        {name:'Learning HTML',completed:false }
      ],
      leftCount:2
  },
    inputChangeHandler:function(e){
        this.setData({new:e.detail.value})
    },
    addTodohandler:function () {
          if(!this.data.new) return
          var todos=this.data.todos
        todos.push({
            name:this.data.new,
            completed: false
        })
        this.setData({
            todos:todos,
            input: '',
            leftCount:this.data.leftCount +1})

    },
    toggleTodoHandle(e){
          // console.log(e.currentTarget)
        var item =this.data.todos[e.currentTarget.dataset.index]
        item.completed=!item.completed
        var leftCount=this.data.leftCount +(item.completed ? -1: 1)
        this.setData({todos:this.data.todos,  leftCount:leftCount})
    }
    
})