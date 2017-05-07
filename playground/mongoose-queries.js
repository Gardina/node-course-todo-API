const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var idUser = '590b34f618cbd6b71a6f84cd';
var id = '590def217176fe2c3d2d0869';

if (!ObjectID.isValid(id)) {
	console.log('ID not valid');
}
Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos', todos);
});

Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
	if(!todo) {
		return console.log('ID not found');
	}
	console.log('Todo by id', todo);
}).catch((e) => console.log(e));

User.findById(idUser).then((user) => {
	if(!user) {
		return console.log('ID not found');
	}
	console.log('User', user);
}).catch((e) => console.log(e));
