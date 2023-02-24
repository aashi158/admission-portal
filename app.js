const express = require('express');
const multer =require('multer')
const connectdb = require('./database/connectdb');
const cookieParser = require('cookie-parser')
const app = express()   // FUNCTION CREATE
app.use(cookieParser())    
const port = process.env.PORT || 4500 

var session = require('express-session');
var flash = require('connect-flash');
app.use(session({
  secret: 'keyboard cat',
  saveUninitialized: false,
  resave: false,
  cookie: { secure: false },
 }));
 
app.use(flash())
// npm body parser
var bodyParser = require('body-parser')

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))

const web = require('./routes/web.js')   // ROUTER LINK
app.use('/',web);      // LOAD ROUTER

app.set('view engine','ejs');  // SET EJS TEMPLATE ENGINE

// app.get('/', (req,res) => {     // ROUTE CREATE
//     res.send('HOME PAGE')
// })
// STATIC FILES FOR CSS IMAGE & IMAGE
app.use(express.static('public'))

connectdb();


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })