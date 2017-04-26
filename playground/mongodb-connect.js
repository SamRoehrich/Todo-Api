// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to db server.');
  }
  console.log('Connected to MongoDB server.');


  // db.collection('Users').insertOne({
  //   name: 'Sam',
  //   age: 20,
  //   location: 'Tucson'
  // }, (err, result) => {
  //   if (err) {
  //     console.log('There was an error.');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Todo.', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  db.close();
});
