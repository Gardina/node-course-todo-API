var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//mongoose.connect( 'mongodb://admin:admin123@ds133221.mlab.com:33221/udemytodoapp'); // 

mongoose.connect(process.env.MONGODB_URI);
module.exports = {
	mongoose
};
