// const db = require ('../db').db
// const route = require('express').Router()
// console.log("in users")

// route.post('/:name', function(req,res){
//     console.log("post request created ");
//     //var name = req.body.name;
//     var nam = req.params.name;
//     var data = {
//         "name": nam,
//     }
//     console.log(data);
//     db.collection('details').insertOne(data,function(err, collection){
//         if (err) throw err;
//         console.log("Record inserted Successfully");
              
//     });
// })
  
  
// route.get('/',function(req,res){
//     console.log("post request created ");
// res.set({
//     'Access-control-Allow-Origin': '*'
//     });
// })
// exports = module.exports=route;

const User = require ('../db').User
const route = require('express').Router()

route.get('/' , (req,res) => {

    User.findAll()
    .then((users) => {
        res.status(200).send(users)
    })
    .catch((err) => {
        res.status(500).send({

            error : 'could not retirieve users'
        })
    })

})

route.post('/' , (req,res) => {
    
  console.log("in user.js")
  console.log(req.body.name);
    User.create( {
        name : req.body.name,
        password: req.body.password
    }).then((user) => {
        res.status(201).send(user)
    }).catch((err) => {
        res.status(502).send({
      error : "could not add new user"
        })
    })
})

exports = module.exports=route;