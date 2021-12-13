const Blog = require ('../db').Blog
const route = require('express').Router()

route.get('/' , (req,res) => {

    Blog.findAll()
    .then((users) => {
        res.status(200).send(users)
    })
    .catch((err) => {
        res.status(500).send({

            error : 'could not retirieve doubts'
        })
    })

})

route.post('/' , (req,res) => {
    
  console.log("in user.js")
  console.log(req.body.doubt);
    Blog.create( {
        doubt : req.body.doubt,
        postedby : req.body.postedby
    }).then((user) => {
        res.status(201).send(user)
    }).catch((err) => {
        res.status(502).send({
      error : "could not add new doubt"
        })
    })
})

exports = module.exports=route;