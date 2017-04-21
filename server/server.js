// External Libraries
var express = require('express');
var bodyParser = require('body-parser');
// Local Libraries
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

// set app
var app = express();
// Setting the Middleware
app.use(bodyParser.json());

//Creating routes Api
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

//starting the APP
app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};



// var newTodo = new Todo({
//   text: 'Edit this video'
// });
//
// newTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('unable to Save Todo');
// });
//
// /// Model Users
// var newUser = new User({
//   email: 'lucas@algo.com'
// });
//
// newUser.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('unable to Save User');
// });
