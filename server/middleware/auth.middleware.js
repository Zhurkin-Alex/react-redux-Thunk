const jwt = require('jsonwebtoken')
const config = require('config')
require('dotenv').config()

module.exports = (req,res,next) =>{
  if(req.method === 'OPTIONS'){
   return next()
  }

  try {
    const token = req.headers.authorization.split(' ')[1]
   

    if(!token){
      return res.status(402).json({message:"Auth error"})
    }
   
    const decoded = jwt.verify(token, process.env.SECRETCONFIG)
    // console.log("decoded-----------",decoded);
    req.User= decoded
    // console.log(req.user);
    // console.log('zhopa');
    next()
  } catch (e) {
    return res.status(405).json({message:"Auth error!"})
  }
}
