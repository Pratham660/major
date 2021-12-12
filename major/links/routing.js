const route=require('express').Router()

route.use('/users',require('./users'))
route.use('/',require('./mainpage'))
exports = module.exports = {
    route
}