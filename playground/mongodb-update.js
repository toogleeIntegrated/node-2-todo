//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Error connecting to DB');
  }
  console.log('connected to MongoDB');
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58e504292f8a8729fc6dc95f')
  }, {
      $set: {
        Name: 'Charly'
      },
      $inc: {
        age: 1
      }
  }, {
      returnOriginal : false
  }).then((result) => {
      console.log(result);
  });
    // db.close();


});
