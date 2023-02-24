const CourseModel = require("../models/Course")
const UserModel = require('../models/User')

class FrontController {

    static login = (req, res) => {
        res.render('login', { message: req.flash('error') })
    }

    static home = async (req, res) => {
        // const{name,email} = req.user
        // const course = await CourseModel.findOne({user:_id,course: 'course'})
        res.render('Admin/home')
    }
}

module.exports = FrontController
