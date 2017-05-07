var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds133221.mlab.com:33221/udemytodoapp' || 'mongodb://localhost:27017/TodoApp');

module.exports = {
	mongoose
};
