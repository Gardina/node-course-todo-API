const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {User} = require('./../../models/user');
const {Todo} = require('./../../models/todo');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [
	{
		_id: userOneId,
		email: 'andf@gmail.com',
		password: 'userOnePass',
		tokens: [{
			access: 'auth',
			token: jwt.sign({_id: userOneId, acces: 'auth'}, 'abc123').toString()
		}]
	}, {
		_id: userTwoId,
		email: 'anddddddd@gmail.com',
		password: 'userTwoPass',
		tokens: [{
			access: 'auth',
			token: jwt.sign({_id: userTwoId, acces: 'auth'}, 'abc123').toString()
		}]
	}
];
const todos = [{
	_id: new ObjectID(),
	text: 'first test'
}, {
	_id: new ObjectID(),
	text: 'second test'
}];

const populateTodos = (done) => {
	Todo.remove({}).then(() => {
		return Todo.insertMany(todos);
	}).then(() => done());
};

const populateUsers = (done) => {
	User.remove({}).then(() => {
		var userOne = new User(users[0]).save();
		var userTwo = new User(users[1]).save();

		return Promise.all([userOne, userTwo]);
	}).then(() => done());
};
module.exports = {todos, populateTodos, users, populateUsers};
