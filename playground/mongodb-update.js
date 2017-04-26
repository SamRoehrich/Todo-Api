// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to db server.');
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("58fffcd687451628c2b2f5ed")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  //update name in users db

  db.collection('Users').findOneAndUpdate({
    name: 'Lori'
  }, {
    $set: {
      name: 'Sam'
    }
  }, {
    returnOriginal: 'Lori'
  }).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndUpdate({
    age: 20
  }, {
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: 20
  }).then((result) => {
    console.log(result);
  });
  // db.close();
});
