var mongoose = require('mongoose');
s;
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds133221.mlab.com:33221/udemytodoapp');

module.exports = {
	mongoose
};
