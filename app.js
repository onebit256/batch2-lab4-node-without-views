const express = require('express')
const bodyparser = require('body-parser');
// const mongoose = require('mongoose')
const cors = require("cors")
const bodyParser = require("body-parser")
const router = require('./Routes/auth.route')
var app = express()


//Routes
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyparser.json())
app.get('/', function(req,res){
  res.send('Hello world')
})
app.use('/account/api',router)

//MongoDb connection
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
// mongoose.connection.once('open',function(){
//   console.log('Database connected Successfully');
// }).on('error',function(err){
//   console.log('Error', err);
// })

//Server 
app.listen('8000',function(req,res){
  console.log('Serve is up and running at the port 8000')
})