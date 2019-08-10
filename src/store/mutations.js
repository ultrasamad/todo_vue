
export const ADD_TODO = (state, item) => state.todos.push(item)
export const REMOVE_TODO = (state, todo) => state.todos = state.todos.filter(item => item.id != todo.id)
export const UPDATE_TODO = (state, todo) => {
    const index = state.todos.findIndex((item) => item.id == todo.id)
    state.todos.splice(index, 1, todo)
}