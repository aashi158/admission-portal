const express = require('express')
const FrontController = require('../controllers/FrontController')
const UserController = require('../controllers/UserController')
const CourseController = require('../controllers/CourseController')
const admincontroller = require('../controllers/Admin/admincontroller')
// const image_middleware = require('../middleware/image_middleware')

const router = express.Router()    // METHOD CREATE
const auth = require('../middleware/auth')

router.get('/',FrontController.login)   // ROUTE CREATE
router.get('/Admin/home',auth,FrontController.home)  

router.get('/Admin/dashboard',auth,admincontroller.dashboard)     //      ADMIN CONTROLLER 

router.get('/user/course',auth,CourseController.createcourse)       //COURSE CONTROLLER
router.post('/courseinsert',auth,CourseController.courseinsert)
router.get('/user/displaycourse',auth,CourseController.coursedisplay)
router.get('/user/viewcourse/:id',auth,CourseController.courseview)
router.get('/user/editcourse/:id',auth,CourseController.courseedit)
router.post('/user/updatecourse/:id',auth,CourseController.courseupdate)

router.get('/register',UserController.register)
router.post('/registerinsert',UserController.registerinsert)   
router.post('/verifylogin',UserController.verifylogin)      //USER CONTROLLER 
router.get('/logout',UserController.logout)                 //LOGOUT CONTROLLER


module.exports = router;
