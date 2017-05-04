//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('unable to connect to mongodb server');
	}
	console.log('Connected to mongoDB server');


	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('590acf784904af36b7d7b5ad')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('590ac17ba117773263d97303')
	}, {
		$set: {
			name: 'Andrey'
		},
		$inc: {
			age : 1
		 }
	}, {
		returnOriginal: false
	}).then((res) => {
		console.log(res);
	});
	//db.close();
});
