
module.exports = {
  Query: {
    todoes: (_, __, {dataSources}) => {
      return dataSources.todoAPI.data
    },
    todo: (_, {id}, {dataSources}) => {
      return dataSources.todoAPI.data.find(todo => todo.id === id)
    }
  },

  Mutation: {
    add: (_, {content}, {dataSources}) => {
      dataSources.todoAPI.counter ++;
      const todo = {
        id: dataSources.todoAPI.counter,
        content: content,
        completed: false
      }
      dataSources.todoAPI.data.push(todo)
      return todo;
    },

    remove: (_, {id}, {dataSources}) => {
      return dataSources.todoAPI.data = dataSources.todoAPI.data.filter(todo => todo.id != id);
    }
  }
}