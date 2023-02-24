const mongoose = require('mongoose');

con = "mongodb+srv://aashi:aashi123@cluster0.6bdsvdb.mongodb.net/?retryWrites=true&w=majority"
const connectdb =()=>{
    // return mongoose.connect('mongodb://localhost:27017/admission_portal') 
    return mongoose.connect(con)    // data
    .then(()=>{
        console.log("Connection Sucessfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = connectdb