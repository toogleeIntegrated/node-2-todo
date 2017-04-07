//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Error connecting to DB');
  }
    // console.log('Succesfull connected to MongoDB');
    // db.collection('Todos').find({_id : ObjectID('58dd46ca5870c30e1ccaa8e2')}).toArray().then((docs) => {
    //   console.log('todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('unable to read todos', err);
    // });
    // db.close();

    console.log('Succesfull connected to MongoDB');
    db.collection('Users').find().count().then((count) => {
      console.log(`Users Counting: ${count}`);
    }, (err) => {
      console.log('unable to read Users', err);
    });
});
