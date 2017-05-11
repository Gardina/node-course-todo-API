var mongoose = require('mongoose');

//mongoose.Promise = global.Promise;
mongoose.connect( 'mongodb://admin:admin123@ds133221.mlab.com:33221/udemytodoapp' || 'mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://localhost:27017/TodoApp');
module.exports = {
	mongoose
};
