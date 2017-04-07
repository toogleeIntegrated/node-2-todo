//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Error connecting to DB');
  }
    console.log('Succesfull connected to MongoDB');
    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err, result) => {
    //   if (err){
    //     return console.log('Unable to insert Todo', err)
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // db.close();
    // db.collection('Users').insertOne({
    //   name: 'Lucas',
    //   age: 25,
    //   location: '1230 Lampard Street Philadelphia'
    // }, (err, result) => {
    //   if (err){
    //     return console.log('Unable to insert User', err)
    //   }
    //   console.log(result.ops[0]._id.getTimestamp());
    // });
    // db.close();
});
