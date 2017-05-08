const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '59108f9dc735cac620445baf'}).then((todo) => {});

Todo.findByIdAndRemove('59108f9dc735cac620445baf').then((todo) => {
	console.log(todo);
});
