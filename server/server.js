const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config()
const port = process.env.Port || 4000

try {  
app.listen(port,()=>{
  console.log('>>>>>>>>>>>>');
  console.log(`Server started on port ${port}.`);
  console.log('>>>>>>>>>>>>');

  mongoose.connect(
    // 'mongodb://localhost:27017/react-redux', 
    `mongodb+srv://Alex:tB9hbppbaKG_vJr@cluster0.5agzc.mongodb.net/todo-reducer?retryWrites=true&w=majority`,
    // tB9hbppbaKG_vJr
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }, () => {
      console.log('>>>>>>>>>>>>');
      console.log('Connection to databse is uspeshna.');
      console.log('>>>>>>>>>>>>');
    });

})
} catch (error) {
  console.log(error);
}
