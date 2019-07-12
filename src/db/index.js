const Sequelize = require('sequelize');
const sequelize = new Sequelize('todo', 'root', 'gsdt', {
  dialect: 'mysql'
})

const {Todo} = require('./schema/todo')(Sequelize, sequelize)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

Todo.sync()

module.exports = {
  Todo
}