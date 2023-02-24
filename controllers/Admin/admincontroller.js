// const CourseModel = require('../../models/Course')

class admincontroller{
    
     static dashboard =(req,res) =>{
         const{name,email} = req.user
         res.render('Admin/dashboard',{n: name, e: email})
     }
 }
 
 module.exports = admincontroller