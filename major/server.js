// // // const express = require('express'); //Line 1
// // // const app = express(); //Line 2
// // // const port = process.env.PORT || 5000; //Line 3
// // // var path = require('path');
// // // var bodyParser = require('body-parser');
// // // // This displays message that the server running and listening to specified port
// // // app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
// // // app.use(express.static(path.resolve(__dirname, 'public')));
// // // // create a GET route
// // // app.get('/express_backend', (req, res) => { //Line 9
// // //   res.send({ express: 'THE EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
// // // });   


// // var express=require("express");
// // var bodyParser=require("body-parser");
// // var router = express.Router();
// // var path = require('path');
// // var jsonParser = bodyParser.json();
// // const mongoose = require('mongoose');
// // mongoose.connect('mongodb://localhost:27017/newddb');
// // var db=mongoose.connection;
// // db.on('error', console.log.bind(console, "connection error"));
// // db.once('open', function(callback){
// //     console.log("connection succeeded");
// // })
  
// // var app=express()
  
  
// // app.use(bodyParser.json());
// // app.use(express.static(path.join(__dirname, 'public')));
// // app.use(bodyParser.urlencoded({
// //     extended: true
// // }));
  
// // app.post('/',jsonParser, function(req,res){
// //     console.log(JSON.stringify(req.params));
// //     var name = req.body.name;
// //     // var email =req.body.email;
// //     // var pass = req.body.password;
// //     // var phone =req.body.phone;
// //     //console.log(req.body);
// //     var data = {
// //         "name": name,
// //         // "email":email,
// //         // "password":pass,
// //         // "phone":phone
// //     }
// //     console.log(data);
// // db.collection('details').insertOne(data,function(err, collection){
// //         if (err) throw err;
// //         console.log("Record inserted Successfully");
              
// //     });
// // })
  
  
// // app.get('/',function(req,res){
// // res.set({
// //     'Access-control-Allow-Origin': '*'
// //     });
// // }).listen(1234)
  
  
// // console.log("server listening at port 1234");




// const express = require('express');
// const cors = require('cors')
// var app = express();

// // var path = require('path');
// // const mongoose = require('mongoose');
// // mongoose.connect('mongodb://localhost:27017/newddb');
// // var db=mongoose.connection;
// // db.on('error', console.log.bind(console, "connection error"));
// // db.once('open', function(callback){
// //     console.log("connection succeeded");
// // })

// app.use(cors());

// var bodyParser=require("body-parser");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// // app.use('/', (req, res) => {
// //     res.send({
// //       token: 'test123'
// //     });
// //   });  
// app.use((req,res,next)=>{
//     res.sendFile(path.join(__dirname, '/public/help.html'));
// });
// app.use('/api',require ('./links/users.js').route);

// app.listen(8081, () => console.log('API is running on http://localhost:8081/login'));

const express = require('express');
const path = require('path')
const app=express();
var bodyParser = require('body-parser');
app.use(express.static("public"));
const SERVER_PORT = /*process.env.PORT ||*/ 5000;
app.use(bodyParser.json());
var cors = require('cors');
var corsOptions = {
    origin: "http://localhost:3000"
  };
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"));
//    });
app.use('/' , express.static(path.join(__dirname,'public','index.html')));
//app.use('/a' , express.static(path.join(__dirname,'public_2')))
app.use('/api',require ('./links/routing.js').route);

app.listen(SERVER_PORT,()=>
{
    console.log("server started on http://localhost:5000");
})