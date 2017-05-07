var mongoose = require('mongoose');

var uri = 'mongodb://<dbuser>:<dbpassword>@ds133221.mlab.com:33221/udemytodoapp';

mongoose.Promise = global.Promise;

mongoose.connect( uri || 'mongodb://localhost:27017/TodoApp');

module.exports = {
	mongoose
};
