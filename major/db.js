// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("newdb");
//   dbo.createCollection("users", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
  
// });
// console.log("in db");
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/newddb');
// var db=mongoose.connection;
// db.on('error', console.log.bind(console, "connection error"));
// db.once('open', function(callback){
//     console.log("connection succeeded");
// })
// module.exports = {
//     db
//   }

const Sequelize = require('sequelize')

let db;
if(process.env.DATABASE_URL){
  db=new Sequelize(process.env.DATABASE_URL)
}
else{
  db=new Sequelize('shopdb' , 'shopper' , 'shoppass' ,{
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    min: 0,
    max: 5,
  }
  //storage: __dirname + '/users.db'
})
}

const User = db.define('users', {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.DataTypes.STRING(30),
    unique: true,
    allowNull: false
  },
  password:{
    type: Sequelize.DataTypes.STRING(30),
    allowNull:false
  }
})

db.sync()
.then(()=> console.log("database synced"))
.catch((err)=> console.log('error syncing database'))
module.exports = {
  db, User
}