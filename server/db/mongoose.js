var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect( 'mongodb://localhost:27017/TodoApp' || 'mongodb://admin:admin123@ds133221.mlab.com:33221/udemytodoapp');
module.exports = {
	mongoose
};
