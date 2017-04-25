// External Libraries
var {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');
// Local Libraries
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

// set app
var app = express();
// Set port environment to Heroku or localhost
const port = process.env.PORT || 3000;
// Setting the Middleware
app.use(bodyParser.json());

//Creating routes Api // POST
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
// GET
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});

// GET by Id
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }
      // Happy Started
      res.send({todo});
    }).catch((e) => {
      res.status(400).send();
    });
});


//starting the APP
app.listen(port, () => {
  console.log(`Started at port: ${port}`);
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
