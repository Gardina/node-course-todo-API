var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect( 'mongodb://admin:admin123@ds133221.mlab.com:33221/udemytodoapp'); // for heroku depl

module.exports = {
	mongoose
};
