const { connect, connection } = require('mongoose');
const mongoose = require('mongoose')

console.log(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialDB');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialDB');
  
// connect(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

module.exports = connection;

