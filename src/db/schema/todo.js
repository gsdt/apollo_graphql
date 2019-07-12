module.exports = (Sequelize, sequelize) => {
  const Todo = sequelize.define('todoes', {
    content: {
      type: Sequelize.STRING,
      allowNull: false
    },
    completed: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  })
  return {
    Todo
  }
}