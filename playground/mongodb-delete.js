//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('unable to connect to mongodb server');
	}
	console.log('Connected to MongoDB server');
	// db.collection('Todos').deleteMany({text: 'something to do'}).then((result) =>
  // console.log(result));
	// db.collection('Todos').deleteOne({text: 'walk the dog'}).then((result) => {
	// 	console.log(result);
	// });
	// db.collection('Todos').findOneAndDelete({text: 'walk the dog'}).then((result) => {
	// 	console.log(result);
	// });
	// db.collection('Users').deleteMany({name: 'Andrey'}).then((res) => {
	// 	console.log(res);
	// });
	db.collection('Users').findOneAndDelete({
		_id:  new ObjectID('590acf784904af36b7d7b5ae')
	}).then((r) => {
		console.log(r);
	});
	//db.close();
});
