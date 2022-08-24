
// const jwt=require('jsonwebtoken')
// const dotenv = require('dotenv');
// dotenv.config();
// JWT_SECRET_KEY=process.env.JWT_SECRET_KEY


// // NOT USED RIGHT NOW UNTIL WE TEST ON FRONTEND TO CHECK COOKIES

// // you can pass only if you are logged in 
// async function middlewareYes(req,res,next)
// {  try 
//     {   
        
//         user = await jwt.verify(req.cookies.token,JWT_SECRET_KEY)
        
//    }
// catch(err){
//     console.log(err)
//     // return res.redirect('') this will redirecto login page 
//     }

//     return next()
// }   

// // you can pass only if you are NOT logged in ( for login page )
// async function middlewareNo(req,res,next) 
// {   
//     try 
//         {   
//             user = await jwt.verify(req.cookies.token,JWT_SECRET_KEY)
//         }
//     catch
//         {
//             return next()
//         }
//         // return res.redirect('') this will redirecto home page 
// } 


// module.exports = {middlewareYes ,middlewareNo }