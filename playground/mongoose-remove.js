const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');

var id = '58fe1aed3c1930e048bf7ec311';

// Todo.remove REMOVES all the data
// Todo.remove({}).then((result) =>{
//   console.log(result);
// });

//Todo.findOneAndRemove({})
//Todo.findByIdAndRemove({})

Todo.findOneAndRemove({_id: '58ff62575adab1d6ebfff129'}).then((todo) => {
  
});

Todo.findByIdAndRemove('58ff62575adab1d6ebfff129').then((todo) => {
  console.log(todo);
});
