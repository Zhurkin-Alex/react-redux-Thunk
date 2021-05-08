const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')

const User = require('../models/user')




router.post('/addTodo', async(req,res)=>{
  const {todoName,todoTextarea,userEmail} = req.body
  // console.log(userEmail);
  try {
    if(todoName,todoTextarea){
      const UserIn = await User.findOne({email:userEmail})

      const newTodo = await Todo.create({
        todoName,todoTextarea,
        user:UserIn._id
      })
      // console.log("UserIn",UserIn);
      UserIn.todo.push(newTodo)
      await UserIn.save()


      res.status(200).json({sucses:true, newTodo, UserIn})

    }
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });

  }

})
router.post('/findAll', async(req,res)=>{
  // console.log(">>>>>++++++findall");
  const{userEmail} = req.body
  console.log("userEmail",userEmail);
  try {
    const UserIn =await User.findOne({email:userEmail}).populate('todo')
    console.log("allTodo",UserIn);
    const allTodo = UserIn.todo
    res.status(200).json( {allTodo})

  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });

  }
})

router.put('/checkbox', async(req,res)=>{
  const{id}= req.body
  try {
    const checkTodo = await Todo.findById(id)
    checkTodo.todoadd = !checkTodo.todoadd
    await checkTodo.save()
    res.status(200).json({sucsess:true, id, })
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });

  }
})


router.put('/updateTodo', async(req,res)=>{
  const{id, name, todoTextarea}= req.body
  try {
    const updateTodo = await Todo.findById(id)
    updateTodo.todoName = name
    updateTodo.todoTextarea = todoTextarea
    await updateTodo.save()
    res.status(200).json({sucsess:true, updateTodo })
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });

  }
})

router.delete('/delete', async (req,res)=>{
  const{id,userEmail}= req.body
  try {
    const UserTodo =await User.findOne({email:userEmail})
    console.log("todo",id,UserTodo);
    
    UserTodo.todo = UserTodo.todo.filter(el=> {return el != id})
    await UserTodo.save()
    
  await Todo.findByIdAndDelete(id)
    res.status(200).json({sucsess:true, id})
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });

  }
})

module.exports=router
