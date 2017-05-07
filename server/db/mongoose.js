var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds133221.mlab.com:33221/udemytodoapp');

module.exports = {
	mongoose
};
