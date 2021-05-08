const mongoose = require ('mongoose')

const {Schema} = require ('mongoose')




module.exports= mongoose.model('Todo', {
  todoName: String,
  todoTextarea: String,
  todoadd:{type:Boolean, default:false},
  user:{type:Schema.Types.ObjectId , ref: "User"}
})
