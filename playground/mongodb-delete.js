//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Error connecting to DB');
  }
  console.log('connected to MongoDB');

  // delete many records
  // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
  //   console.log(result);
  // });

  // delete one
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

 // find one and delete -- Delete but also retrieves its value
 db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
   console.log(result);
 });
    // db.close();


});
