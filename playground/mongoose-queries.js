const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');

var id = '58fe1aed3c1930e048bf7ec311';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos are:', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo is:', todo);
// });
// by id JUST
Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('No puedo encontrar ese ID');
  }
  console.log('Todo is:', todo);
}).catch((e) => console.log(e));
