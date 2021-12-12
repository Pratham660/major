const route = require('express').Router()

// route.get('/' , (req,res) => {

// })
route.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
   });

exports = module.exports=route;