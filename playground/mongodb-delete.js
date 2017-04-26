// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to db server.');
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Todos').findOneAndDelete({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  //
  // db.collection('Users').deleteMany({name: 'Sam'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("58ffb75878dba2ef82adbee1")
  }).then((result) => {
    console.log(result);
  });
  // db.close();
});
