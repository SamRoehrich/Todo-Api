const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo');

var id = '5902b4af0d999716731e99d7';

Todo.find({
  _id: id
}).then((todos) => {
  console.log(`Todos: ${todos}`);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log(`Todo: ${todo}`);
});

Todo.isValid({
  _id: id
}).then((todo) => {
  console.log(`Todo exists: ${todo}`);
});

//
// Todo.findById(id).then((todo) => {
//   console.log(`Todo by id : ${todo}`);
// });
