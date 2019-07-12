
module.exports = {
  Query: {
    todoes: (_, __, {dataSources}) => {
      const todoes = dataSources.todoDB.findAll();
      return todoes;
    },
    todo: async (_, {id}, {dataSources}) => {
      const todo = await dataSources.todoDB.findOne({
        where: {
          id: id
        }
      })
      if(todo) return todo;
      throw new Error("not_found")
    }
  },

  Mutation: {
    add: async (_, {content}, {dataSources}) => {
      todo = dataSources.todoDB
      const new_todo = await todo.create({
        content: content,
        completed: false
      });
      return new_todo;
    },

    remove: async (_, {id}, {dataSources}) => {
      const todo  = dataSources.todoDB;
      await todo.destroy({
        where: {
          id: id
        }
      });
      const todoes = await todo.findAll();
      return todoes;
    }
  }
}