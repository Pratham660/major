const route=require('express').Router()

route.use('/users',require('./users'))
route.use('/blogs',require('./blogs'))
route.use('/',require('./mainpage'))
exports = module.exports = {
    route
}