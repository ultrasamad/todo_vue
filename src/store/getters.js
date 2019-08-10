
export const completedTodos = state => state.todos.filter(item => item.completed)
export const todosCount = state => state.todos.length