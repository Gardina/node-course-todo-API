//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('unable to connect to mongodb server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'something to do',
	// 	completed: 'false'
	// }, (err, result) => {
	// 	if(err){
	// 		return console.log('unable to insert todo');
	// 	}
	//
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	db.collection('Users').insertOne({
		name: 'Andrey',
		age: 32,
		location: 'Maldives'
	}, (err, result) => {
		if(err){
			return console.log('unable to add user');
		}
		console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
	});
	db.close();
});
