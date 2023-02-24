const CourseModel = require('../models/Course')

class CourseController {
    static createcourse = async (req, res) => {
        res.render('Course/createcourse')
    }
    static courseinsert = async (req, res) => {
        // console.log(req.body)

        try {
            const { name, email, mobile, address, college, course, stream, } = req.body
            const result = new CourseModel({
                name: name,
                email: email,
                mobile: mobile,
                address: address,
                college:college,
                course: course,
                stream: stream,
                // user: req.user.id

            })
            //saving data
            await result.save()
            res.redirect('/user/displaycourse')   //route url
        } catch (err) {
            console.log(err)
        }
    }
    static coursedisplay = async (req, res) => {
        // console.log('displaydata')
        try {
            const result = await CourseModel.find()
            // console.log(result)
            res.render('Course/displaycourse', { data: result })

        } catch (err) {
            console.log(err)
        }
    }
    static courseview = async (req, res) => {
        console.log(req.params.id)
        try {
            const result = await CourseModel.findById(req.params.id);
            console.log(result);
            res.render('Course/viewcourse', { data: result })
        } catch (err) {
            console.log(err)
        }

    }
    static courseedit = async (req, res) => {
        console.log(req.params.id)
        try {
            const result = await CourseModel.findById(req.params.id);
            console.log(result);
            res.render('Course/editcourse', { data: result })
        } catch (err) {
            console.log(err)
        }

    }
    static courseupdate = async (req, res) => {
        // console.log(req.params.id)
        // console.log(req.body)
        try {
            const result = await CourseModel.findByIdAndUpdate(req.params.id,req.body);
            console.log(result);
            res.redirect('/user/displaycourse')
        } catch (err) {
            console.log(err)
        }

    }
}

module.exports = CourseController