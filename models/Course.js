const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({    // SCHEMA OR FIELD 
    name: {
        type: String,
        Required: true,
    },

    email: {
        type: String,
        Required: true,
        Unique: true
    },

    mobile: {
        type: String,
        Required: true,
    },
    address: {
        type: String,
        Required: true,
    },
    college: {
        type: String,
        Required: true,
    },
    course: {
        type: String,
        Required: true,
    },
    stream: {
        type: String,
        Required: true,
    },
//     user: {
//         type: mongoose.Schema.ObjectId,
//         ref: "user",
//         required: true,
//    },
}, { timestamps: true })

//  CREATE MODEL
const CourseModel = mongoose.model('course', CourseSchema);    // COURSE IS NAME OF COLLECTION
module.exports = CourseModel
