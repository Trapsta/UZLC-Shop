const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports.User = require('./user');
module.exports.Category = require('./category');
module.exports.Product = require('./product');
module.exports.Review = require('./review');
module.exports.Order = require('./order');



// Set up mongoose connection
// const mongoose = require('mongoose');
// let dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
// let mongoDB = process.env.DATABASE_URL || dev_db_url;
// mongoose.connect(mongoDB);
